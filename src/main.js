import { registerSW } from 'virtual:pwa-register'

const updateSW = registerSW({
  onNeedRefresh() {
    document.querySelector( '#new-update' ).showModal();
  },
  onOfflineReady() {
    console.log('')
  },
})
window.addEventListener('DOMContentLoaded', (event) => {
    document.querySelector('#new-update-button').addEventListener( 'click', () => {
        console.log('blick');
    })
});