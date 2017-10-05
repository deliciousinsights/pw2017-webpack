document.body.innerHTML = '<h1>Bonjour Webpack !</h1>'
require('./footer')

if (module.hot) {
  module.hot.accept()
}
