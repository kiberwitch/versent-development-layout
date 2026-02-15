import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'

export default function InteractivePage() {
  const [query, setQuery] = useState('')

  const items = useMemo(
    () => [
      { id: 1, title: 'Пункт 1', description: 'Описание для демонстрации фильтра' },
      { id: 2, title: 'Пункт 2', description: 'Еще один элемент списка' },
      { id: 3, title: 'Пункт 3', description: 'JS будет только на этой странице' },
    ],
    [],
  )

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return items
    return items.filter((x) => {
      const hay = `${x.title} ${x.description}`.toLowerCase()
      return hay.includes(q)
    })
  }, [items, query])

  return (
    <div className="min-h-dvh bg-white text-slate-900">
      <header className="border-b border-slate-200">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4">
          <Link to="/" className="text-sm font-semibold tracking-tight">
            На главную
          </Link>
          <span className="text-sm text-slate-600">Интерактив</span>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-4 py-6">
        <section aria-labelledby="interactive-title" className="rounded-2xl border border-slate-200 p-5">
          <h1 id="interactive-title" className="text-xl font-semibold">
            Страница с JS
          </h1>
          <p className="mt-2 text-sm text-slate-600">
            Сюда добавим вашу фактическую JS-логику (когда скажешь, что именно нужно).
          </p>

          <div className="mt-4">
            <label className="text-sm font-medium" htmlFor="filter">
              Фильтр списка
            </label>
            <input
              id="filter"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Начни вводить..."
              className="mt-2 w-full rounded-xl border border-slate-300 px-3 py-2 text-sm outline-none focus:border-slate-400"
            />
          </div>

          <ul className="mt-4 grid gap-3" aria-label="Результаты">
            {filtered.map((x) => (
              <li key={x.id} className="rounded-2xl bg-slate-50 p-4">
                <h2 className="text-sm font-semibold">{x.title}</h2>
                <p className="mt-1 text-sm text-slate-600">{x.description}</p>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  )
}
