import { useMemo, useState } from 'react';
import { Plus, Trash2 } from 'lucide-react';

export default function BudgetCalculatorMini() {
  const [income, setIncome] = useState('5200');
  const [expenses, setExpenses] = useState([
    { id: 1, name: 'Rent', amount: '1600' },
    { id: 2, name: 'Groceries', amount: '420' },
    { id: 3, name: 'Transport', amount: '120' },
  ]);

  const totals = useMemo(() => {
    const incomeNum = toNum(income);
    const expenseNum = expenses.reduce((sum, e) => sum + toNum(e.amount), 0);
    const left = Math.max(incomeNum - expenseNum, 0);
    const rate = incomeNum > 0 ? Math.round((left / incomeNum) * 100) : 0;
    return { income: incomeNum, expense: expenseNum, left, rate };
  }, [income, expenses]);

  function addExpense() {
    setExpenses((prev) => [
      ...prev,
      { id: Date.now(), name: '', amount: '' },
    ]);
  }

  function updateExpense(id, field, value) {
    setExpenses((prev) => prev.map((e) => (e.id === id ? { ...e, [field]: value } : e)));
  }

  function removeExpense(id) {
    setExpenses((prev) => prev.filter((e) => e.id !== id));
  }

  const guidance = getGuidance(totals);

  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-5">
      <div className="md:col-span-3">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold">Quick budget demo</h2>
          <p className="mt-1 text-sm text-slate-600">Enter your monthly income and expenses to preview your savings rate.</p>

          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="sm:col-span-1">
              <label className="text-sm font-medium text-slate-700">Monthly income</label>
              <div className="mt-2 relative">
                <input
                  value={income}
                  onChange={(e) => setIncome(e.target.value)}
                  inputMode="decimal"
                  className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm shadow-sm outline-none focus:border-slate-900"
                  placeholder="0"
                />
                <span className="pointer-events-none absolute inset-y-0 right-3 grid place-items-center text-slate-500">$</span>
              </div>
            </div>

            <div className="sm:col-span-2">
              <label className="text-sm font-medium text-slate-700">Expenses</label>
              <div className="mt-2 flex flex-col gap-3">
                {expenses.map((e) => (
                  <div key={e.id} className="flex gap-2">
                    <input
                      value={e.name}
                      onChange={(ev) => updateExpense(e.id, 'name', ev.target.value)}
                      className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm shadow-sm outline-none focus:border-slate-900"
                      placeholder="Category (e.g., Rent)"
                    />
                    <div className="relative w-36">
                      <input
                        value={e.amount}
                        onChange={(ev) => updateExpense(e.id, 'amount', ev.target.value)}
                        inputMode="decimal"
                        className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm shadow-sm outline-none focus:border-slate-900"
                        placeholder="0"
                      />
                      <span className="pointer-events-none absolute inset-y-0 right-3 grid place-items-center text-slate-500">$</span>
                    </div>
                    <button
                      aria-label="Remove expense"
                      onClick={() => removeExpense(e.id)}
                      className="inline-flex items-center justify-center rounded-md border border-slate-300 px-2 text-slate-600 hover:bg-slate-50"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                ))}
                <button onClick={addExpense} className="inline-flex w-max items-center gap-2 rounded-md border border-slate-300 px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50">
                  <Plus size={16} /> Add expense
                </button>
              </div>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
            <Stat label="Income" value={fmt(totals.income)} color="text-emerald-600" />
            <Stat label="Expenses" value={fmt(totals.expense)} color="text-rose-600" />
            <Stat label="Leftover" value={fmt(totals.left)} color="text-sky-600" />
          </div>

          <div className="mt-6">
            <div className="mb-2 flex items-center justify-between text-xs text-slate-600">
              <span>Savings rate</span>
              <span>{totals.rate}%</span>
            </div>
            <div className="h-2 w-full overflow-hidden rounded-full bg-slate-200">
              <div className="h-full rounded-full bg-emerald-500" style={{ width: `${Math.min(totals.rate, 100)}%` }} />
            </div>
          </div>
        </div>
      </div>

      <div className="md:col-span-2">
        <div className="sticky top-24 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h3 className="text-lg font-semibold">Personalized guidance</h3>
          <p className="mt-1 text-sm text-slate-600">Based on your inputs, here are suggestions to optimize your budget.</p>
          <ul className="mt-4 space-y-3">
            {guidance.map((g, i) => (
              <li key={i} className="rounded-lg border border-slate-200 bg-slate-50 p-3 text-sm">
                <span className="font-medium text-slate-900">{g.title}:</span> <span className="text-slate-700">{g.text}</span>
              </li>
            ))}
          </ul>
          <a href="#pricing" className="mt-6 inline-flex w-full items-center justify-center rounded-md bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800">
            Get BuddyBudget
          </a>
        </div>
      </div>
    </div>
  );
}

function Stat({ label, value, color }) {
  return (
    <div className="rounded-lg border border-slate-200 bg-white p-4">
      <p className="text-xs uppercase tracking-wide text-slate-500">{label}</p>
      <p className={`mt-1 text-lg font-bold ${color}`}>${value}</p>
    </div>
  );
}

function fmt(n) {
  return new Intl.NumberFormat('en-US', { maximumFractionDigits: 2 }).format(n);
}

function toNum(v) {
  if (typeof v !== 'string') return Number(v) || 0;
  const cleaned = v.replace(/[^0-9.\-]/g, '');
  const num = parseFloat(cleaned);
  return Number.isFinite(num) ? num : 0;
}

function getGuidance({ income, expense, left, rate }) {
  const tips = [];
  if (income === 0) {
    tips.push({ title: 'Add income', text: 'Enter your monthly income to see recommendations.' });
    return tips;
  }

  const housingCap = income * 0.3;
  if (expense > income * 0.6) {
    tips.push({ title: 'High spending', text: 'Your expenses exceed 60% of income. Consider trimming non-essentials by 5-10%.' });
  } else {
    tips.push({ title: 'Healthy ratio', text: 'Your expenses are within a healthy range. Keep it up!' });
  }

  tips.push({ title: 'Emergency fund', text: 'Aim for 3-6 months of expenses saved. Start by automating a small transfer each payday.' });

  tips.push({ title: '50/30/20 check', text: `Try allocating ~50% needs, 30% wants, 20% saving. With your income, that’s about $${fmt(income * 0.5)} needs, $${fmt(income * 0.3)} wants, $${fmt(income * 0.2)} saving.` });

  tips.push({ title: 'Housing benchmark', text: `Keep housing near 30% of income (≈ $${fmt(housingCap)}). If it’s higher, consider renegotiating or planning a move.` });

  if (rate < 15) {
    tips.push({ title: 'Boost savings', text: 'Set a tiny automatic weekly transfer. Small, consistent steps add up.' });
  } else {
    tips.push({ title: 'Great savings rate', text: 'You’re saving at a strong pace. Consider investing beyond your emergency fund.' });
  }

  if (left < income * 0.05) {
    tips.push({ title: 'Tight cushion', text: 'Your leftover is small. Add a mini-buffer for surprises to avoid debt.' });
  }

  return tips.slice(0, 6);
}
