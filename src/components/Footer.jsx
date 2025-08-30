export default function Footer() {
  return (
    <footer id="pricing" className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-14">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-sky-500 to-emerald-500 text-white shadow-md">
                <span className="font-bold">BB</span>
              </div>
              <span className="text-lg font-semibold tracking-tight">BuddyBudget</span>
            </div>
            <p className="mt-3 text-sm text-slate-600">Your friendly money sidekick. Built to make budgeting simple, personal, and joyful.</p>
          </div>

          <div>
            <h4 className="text-sm font-semibold">Pricing</h4>
            <ul className="mt-3 space-y-2 text-sm text-slate-700">
              <li>Free – Basic tracking</li>
              <li>Pro – $5/mo advanced insights</li>
              <li>Family – $9/mo shared budgets</li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold">Resources</h4>
            <ul className="mt-3 space-y-2 text-sm text-slate-700">
              <li><a className="hover:text-slate-900" href="#features">Features</a></li>
              <li><a className="hover:text-slate-900" href="#calculator">Demo</a></li>
              <li><a className="hover:text-slate-900" href="#">Privacy</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-slate-200 pt-6 text-sm text-slate-600 md:flex-row">
          <p>© {new Date().getFullYear()} BuddyBudget. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a className="hover:text-slate-900" href="#">Terms</a>
            <a className="hover:text-slate-900" href="#">Security</a>
            <a className="hover:text-slate-900" href="#">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
