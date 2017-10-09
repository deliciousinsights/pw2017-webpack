document.body.innerHTML = '<h1>Bonjour Webpack !</h1>'
require('./footer')

require('./styles/main.css')

if (module.hot) {
  module.hot.accept()
}
