const styles = {
  active: "text-teal border-teal/40",
  research: "text-amber border-amber/40",
  experiment: "text-[#9aa6b2] border-border-strong",
  prototype: "text-teal/80 border-border-strong",
  restricted: "text-muted-2 border-border-strong border-dashed",
  archived: "text-muted-2 border-border-strong",
};

export default function StatusBadge({ status, children }) {
  const key = status.toLowerCase();
  return (
    <span
      className={`inline-flex items-center gap-[7px] whitespace-nowrap rounded-full border px-[9px] py-1 font-mono text-[0.72rem] tracking-wide ${
        styles[key] || styles.experiment
      }`}
    >
      <span className="h-[6px] w-[6px] rounded-full bg-current" />
      {children || status.toUpperCase()}
    </span>
  );
}
