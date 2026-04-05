export const NewsletterBox = () => {
  return (
    <section className="rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-900 to-slate-700 p-6 text-white">
      <h2 className="text-2xl font-semibold tracking-tight">Weekly AI tools digest</h2>
      <p className="mt-2 max-w-2xl text-sm text-slate-200">
        Get one practical email every week: new tools worth testing, category updates, and workflow guides.
      </p>
      <form className="mt-5 flex flex-col gap-3 sm:flex-row" onSubmit={(event) => event.preventDefault()}>
        <input
          type="email"
          required
          placeholder="you@example.com"
          className="w-full rounded-lg border border-slate-600 bg-slate-800 px-4 py-2 text-sm outline-none ring-emerald-400 transition focus:ring"
        />
        <button className="rounded-lg bg-emerald-500 px-4 py-2 text-sm font-medium text-white transition hover:bg-emerald-400">
          Join waitlist
        </button>
      </form>
      <p className="mt-2 text-xs text-slate-300">Placeholder form. Connect your email provider later.</p>
    </section>
  )
}
