// Full-screen quad shader: vertex positions are already in clip space
// ([-1, 1] from the plane geometry), so the camera transform is ignored.
export const vertexShader = /* glsl */ `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position.xy, 0.0, 1.0);
  }
`;

// Palette matches the site's existing gradient (#0f2027 -> #2c5364 -> #232526)
// with soft blue/violet/pink glows that drift with the pointer and scroll.
export const fragmentShader = /* glsl */ `
  precision highp float;
  varying vec2 vUv;

  uniform float uTime;
  uniform vec2 uMouse;
  uniform float uScroll;
  uniform vec2 uResolution;

  vec3 palette(float t) {
    vec3 c1 = vec3(0.059, 0.125, 0.153);
    vec3 c2 = vec3(0.173, 0.325, 0.392);
    vec3 c3 = vec3(0.137, 0.145, 0.149);
    float p1 = smoothstep(0.0, 0.55, t);
    float p2 = smoothstep(0.45, 1.0, t);
    vec3 col = mix(c1, c2, p1);
    col = mix(col, c3, p2);
    return col;
  }

  vec3 permute(vec3 x) { return mod(((x * 34.0) + 1.0) * x, 289.0); }

  float snoise(vec2 v) {
    const vec4 C = vec4(0.211324865405187, 0.366025403784439,
             -0.577350269189626, 0.024390243902439);
    vec2 i  = floor(v + dot(v, C.yy));
    vec2 x0 = v - i + dot(i, C.xx);
    vec2 i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
    vec4 x12 = x0.xyxy + C.xxzz;
    x12.xy -= i1;
    i = mod(i, 289.0);
    vec3 p = permute(permute(i.y + vec3(0.0, i1.y, 1.0))
        + i.x + vec3(0.0, i1.x, 1.0));
    vec3 m = max(0.5 - vec3(dot(x0, x0), dot(x12.xy, x12.xy), dot(x12.zw, x12.zw)), 0.0);
    m = m * m;
    m = m * m;
    vec3 x = 2.0 * fract(p * C.www) - 1.0;
    vec3 h = abs(x) - 0.5;
    vec3 ox = floor(x + 0.5);
    vec3 a0 = x - ox;
    m *= 1.79284291400159 - 0.85373472095314 * (a0 * a0 + h * h);
    vec3 g;
    g.x = a0.x * x0.x + h.x * x0.y;
    g.yz = a0.yz * x12.xz + h.yz * x12.yw;
    return 130.0 * dot(m, g);
  }

  float fbm(vec2 p) {
    float value = 0.0;
    float amplitude = 0.55;
    for (int i = 0; i < 4; i++) {
      value += amplitude * snoise(p);
      p *= 2.02;
      amplitude *= 0.5;
    }
    return value;
  }

  void main() {
    vec2 uv = vUv;
    float aspect = uResolution.x / uResolution.y;
    vec2 warpedUv = uv;
    warpedUv.x *= aspect;

    float band = uv.y + uScroll * 0.6;
    vec3 base = palette(clamp(band, 0.0, 1.0));

    vec2 flow = warpedUv * 1.6 + vec2(uTime * 0.015, uTime * 0.01 - uScroll * 0.3);
    float n = fbm(flow);
    base += n * 0.035;

    vec2 mouseUv = uMouse;
    mouseUv.x *= aspect;
    float dist = distance(warpedUv, mouseUv);
    float glow = smoothstep(0.6, 0.0, dist);
    vec3 accent = mix(
      vec3(0.376, 0.647, 0.980),
      vec3(0.655, 0.545, 0.980),
      0.5 + 0.5 * sin(uTime * 0.15)
    );
    accent = mix(accent, vec3(0.957, 0.447, 0.714), 0.25 + 0.25 * sin(uTime * 0.09 + 2.0));
    base += accent * glow * 0.16;

    float vignette = smoothstep(1.05, 0.35, distance(uv, vec2(0.5)));
    base *= mix(0.82, 1.0, vignette);

    gl_FragColor = vec4(base, 1.0);
  }
`;
