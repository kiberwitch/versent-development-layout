const MODAL_URL = '/tariffs-modal.html'

const ensureTariffsModal = async () => {
  if (document.querySelector('[data-tariffs-modal]')) return

  const res = await fetch(MODAL_URL, { cache: 'no-cache' })
  if (!res.ok) throw new Error(`Failed to load tariffs modal: ${res.status}`)

  const html = await res.text()
  const wrapper = document.createElement('div')
  wrapper.innerHTML = html

  const modal = wrapper.firstElementChild
  if (!modal) throw new Error('Tariffs modal HTML is empty')

  document.body.appendChild(modal)
}

window.__tariffsReady = window.__tariffsReady || ensureTariffsModal()
