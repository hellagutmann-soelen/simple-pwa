import { registerSW } from 'virtual:pwa-register'

const updateSW = registerSW({
  onNeedRefresh() {
    document.querySelector( '#new-update' ).showModal();
  },
  onOfflineReady() {
    console.log('Ok it can be now used offlien')
  },
})
window.addEventListener('DOMContentLoaded', (event) => {
    document.querySelector('#new-update-button').addEventListener( 'click', () => {
      location.reload();
    })
});