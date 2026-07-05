// Lightweight, dependency-free background: shown instantly while the WebGL
// chunk (three.js/@react-three) loads in the background, and permanently if
// WebGL isn't supported at all.
function CssFallback() {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 -z-10 animate-gradient-x bg-gradient-to-br from-[#0f2027] via-[#2c5364] to-[#232526]"
    />
  );
}

export default CssFallback;
