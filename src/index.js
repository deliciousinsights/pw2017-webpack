import './styles/main.css'
import './styles/titles.scss'

document.body.innerHTML = `
  <h1>Bonjour Webpack !</h1>
  <p class="iconic">Oh le joli icône…</p>
`

require('./footer')

const icon = require('./images/icon.png')
window.Notification.requestPermission(status => {
  if (status === 'granted') {
    new window.Notification('Saytropbien™ !', { icon })
  }
})

if (module.hot) {
  module.hot.accept()
}
