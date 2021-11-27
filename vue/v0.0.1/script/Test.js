export default {
  id: 'test',
  // template
  scope: {
    msg: 'hello',
    hello: 'WHWHWHW',
    changeMessage: function () {
      app.scope.msg = 'hola'
    }
  }
}