module.exports = {
  path: 'user',
  getChildRoutes(partialNextState, cb) {
    require.ensure([], (require) => {
      cb(null, [
        require('./routes/login'),
        require('./routes/register')
      ])
    })
  },
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, require('pages/user'))
    }, 'UserPage')
  }
}