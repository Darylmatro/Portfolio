function GlassPanel({ as: Tag = "div", className = "", children, ...props }) {
  return (
    <Tag
      className={`relative rounded-3xl border border-white/10 bg-black/40 shadow-[0_8px_40px_rgba(0,0,0,0.35)] backdrop-blur-xl ${className}`}
      {...props}
    >
      {children}
    </Tag>
  );
}

export default GlassPanel;
