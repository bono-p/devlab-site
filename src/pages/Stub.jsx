export default function Stub({ kicker, title, note }) {
  return (
    <section className="mx-auto max-w-[1160px] px-6 py-20 sm:py-24">
      <p className="mb-2.5 font-mono text-[0.78rem] text-muted-2">{kicker}</p>
      <h2 className="font-display text-[clamp(1.6rem,2.6vw,2.1rem)] font-semibold">{title}</h2>
      <p className="mt-3 max-w-[62ch] text-muted">
        {note} — cette page arrive dans la prochaine passe, une fois que la structure générale te convient.
      </p>
    </section>
  );
}
