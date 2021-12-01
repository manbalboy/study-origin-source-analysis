export default {
  id: 'test',
  // template
  scope: {
    msg: 'hello',
    hello: 'WHWHWHW',
    changeMessage: function () {
      // eslint-disable-next-line no-undef
      app.scope.msg = 'hola';
    },
  },
};
