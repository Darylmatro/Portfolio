import { useEffect, useMemo, useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { PerformanceMonitor } from "@react-three/drei";
import * as THREE from "three";
import { vertexShader, fragmentShader } from "./backgroundShader";
import CssFallback from "./CssFallback";
import { useReducedMotion } from "../lib/useReducedMotion";
import { useScrollProgressRef } from "../lib/ScrollProvider";

function BackgroundPlane({ reducedMotion }) {
  const materialRef = useRef(null);
  const pointer = useRef({ x: 0.5, y: 0.5 });
  const smoothedPointer = useRef({ x: 0.5, y: 0.5 });
  const scrollProgressRef = useScrollProgressRef();
  const { size } = useThree();

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uMouse: { value: new THREE.Vector2(0.5, 0.5) },
      uScroll: { value: 0 },
      uResolution: { value: new THREE.Vector2(size.width, size.height) },
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  useEffect(() => {
    uniforms.uResolution.value.set(size.width, size.height);
  }, [size, uniforms]);

  useEffect(() => {
    const handlePointerMove = (event) => {
      pointer.current.x = event.clientX / window.innerWidth;
      pointer.current.y = 1 - event.clientY / window.innerHeight;
    };
    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, []);

  useFrame((_, delta) => {
    if (document.hidden || reducedMotion) return;
    const material = materialRef.current;
    if (!material) return;

    material.uniforms.uTime.value += delta;

    smoothedPointer.current.x += (pointer.current.x - smoothedPointer.current.x) * 0.04;
    smoothedPointer.current.y += (pointer.current.y - smoothedPointer.current.y) * 0.04;
    material.uniforms.uMouse.value.set(smoothedPointer.current.x, smoothedPointer.current.y);

    const target = scrollProgressRef.current;
    material.uniforms.uScroll.value += (target - material.uniforms.uScroll.value) * 0.05;
  });

  return (
    <mesh>
      <planeGeometry args={[2, 2]} />
      <shaderMaterial
        ref={materialRef}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
        depthTest={false}
        depthWrite={false}
      />
    </mesh>
  );
}

function detectWebgl() {
  if (typeof window === "undefined") return false;
  try {
    const canvas = document.createElement("canvas");
    return Boolean(
      window.WebGLRenderingContext &&
        (canvas.getContext("webgl") || canvas.getContext("experimental-webgl"))
    );
  } catch {
    return false;
  }
}

export function ShaderBackground() {
  const reducedMotion = useReducedMotion();
  const [webglSupported, setWebglSupported] = useState(true);
  const [dpr, setDpr] = useState(1.5);

  useEffect(() => {
    setWebglSupported(detectWebgl());
  }, []);

  if (!webglSupported) {
    return <CssFallback />;
  }

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10">
      <Canvas
        dpr={dpr}
        gl={{ antialias: false, powerPreference: "low-power" }}
        frameloop={reducedMotion ? "demand" : "always"}
        onCreated={({ gl }) => gl.setClearColor("#0f2027", 1)}
        style={{ pointerEvents: "none" }}
        onError={() => setWebglSupported(false)}
      >
        <PerformanceMonitor onDecline={() => setDpr(1)} />
        <BackgroundPlane reducedMotion={reducedMotion} />
      </Canvas>
    </div>
  );
}

export default ShaderBackground;
