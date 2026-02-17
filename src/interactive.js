const items = [
  { id: 1, title: 'Пункт 1', description: 'Описание для демонстрации фильтра' },
  { id: 2, title: 'Пункт 2', description: 'Еще один элемент списка' },
  { id: 3, title: 'Пункт 3', description: 'JS будет только на этой странице' },
]

function render(list) {
  const ul = document.getElementById('results')
  if (!ul) return

  ul.innerHTML = ''
  for (const x of list) {
    const li = document.createElement('li')
    li.className = 'rounded-2xl bg-slate-50 p-4'

    const h2 = document.createElement('h2')
    h2.className = 'text-sm font-semibold'
    h2.textContent = x.title

    const p = document.createElement('p')
    p.className = 'mt-1 text-sm text-slate-600'
    p.textContent = x.description

    li.appendChild(h2)
    li.appendChild(p)
    ul.appendChild(li)
  }
}

function filterItems(query) {
  const q = query.trim().toLowerCase()
  if (!q) return items
  return items.filter((x) => {
    const hay = `${x.title} ${x.description}`.toLowerCase()
    return hay.includes(q)
  })
}

const input = document.getElementById('filter')
if (input) {
  input.addEventListener('input', (e) => {
    const value = e.target?.value ?? ''
    render(filterItems(String(value)))
  })
}

render(items)
