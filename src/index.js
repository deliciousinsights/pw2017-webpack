document.body.innerHTML = `
  <h1>Bonjour Webpack !</h1>
  <p class="iconic">Oh le joli icône…</p>
`

require('./footer')

require('./styles/main.css')
require('./styles/titles.scss')

const icon = require('./images/icon.png')
window.Notification.requestPermission(status => {
  if (status === 'granted') {
    new window.Notification('Saytropbien™ !', { icon })
  }
})

if (module.hot) {
  module.hot.accept()
}
