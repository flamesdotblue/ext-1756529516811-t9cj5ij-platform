import { CheckCircle2, Wallet, PieChart } from 'lucide-react';

export default function Hero() {
  const perks = [
    { icon: Wallet, text: 'Track income and expenses' },
    { icon: PieChart, text: 'Smart category insights' },
    { icon: CheckCircle2, text: 'Stay on budget effortlessly' },
  ];

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-sky-400/30 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[500px] w-[500px] translate-x-1/3 translate-y-1/3 rounded-full bg-emerald-300/30 blur-3xl" />
      </div>

      <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-4 py-16 md:grid-cols-2 md:py-24">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-700 shadow-sm">
            <span className="inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            Your friendly money sidekick
          </div>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            Master your money with BuddyBudget
          </h1>
          <p className="mt-4 max-w-xl text-slate-600">
            Plan, track, and optimize your spending with an intuitive budget that adapts to you. Visualize where your money goes and reach your goals faster.
          </p>
          <div className="mt-6 flex flex-col items-start gap-3 sm:flex-row">
            <a href="#calculator" className="w-full sm:w-auto rounded-md bg-slate-900 px-6 py-3 text-center text-sm font-semibold text-white shadow-sm hover:bg-slate-800">
              Try the demo
            </a>
            <a href="#pricing" className="w-full sm:w-auto rounded-md border border-slate-300 bg-white px-6 py-3 text-center text-sm font-semibold text-slate-900 hover:bg-slate-50">
              See pricing
            </a>
          </div>

          <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {perks.map((p, i) => (
              <li key={i} className="flex items-center gap-2 text-sm text-slate-700">
                <p.icon className="h-5 w-5 text-emerald-600" /> {p.text}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative">
          <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-xl">
            <div className="rounded-xl bg-gradient-to-br from-slate-50 to-slate-100 p-6">
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-wide text-slate-500">This month</p>
                  <p className="text-2xl font-bold">$4,280 balance</p>
                </div>
                <div className="flex items-center gap-2 text-emerald-600">
                  <span className="text-xs font-medium">On track</span>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <CardStat label="Income" value="$5,200" color="text-emerald-600" />
                <CardStat label="Expenses" value="$920" color="text-rose-600" />
                <CardStat label="Saved" value="$1,000" color="text-sky-600" />
              </div>
              <div className="mt-6">
                <div className="mb-2 flex items-center justify-between text-xs text-slate-600">
                  <span>Budget used</span>
                  <span>22%</span>
                </div>
                <div className="h-2 w-full overflow-hidden rounded-full bg-slate-200">
                  <div className="h-full w-[22%] rounded-full bg-emerald-500" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section id="features" className="mx-auto max-w-6xl px-4 pb-8">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          <Feature icon={Wallet} title="Simple tracking" text="Log transactions in seconds and keep tabs on every dollar." />
          <Feature icon={PieChart} title="Smart categories" text="Auto-group spending so you instantly see where it goes." />
          <Feature icon={CheckCircle2} title="Goal-focused" text="Create goals, set limits, and celebrate progress." />
        </div>
      </section>
    </section>
  );
}

function Feature({ icon: Icon, title, text }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-900 text-white">
          <Icon className="h-5 w-5" />
        </div>
        <div>
          <h3 className="text-sm font-semibold">{title}</h3>
          <p className="text-sm text-slate-600">{text}</p>
        </div>
      </div>
    </div>
  );
}

function CardStat({ label, value, color }) {
  return (
    <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
      <p className="text-xs uppercase tracking-wide text-slate-500">{label}</p>
      <p className={`mt-1 text-lg font-bold ${color}`}>{value}</p>
    </div>
  );
}
