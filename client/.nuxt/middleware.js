const middleware = {}

middleware['authed'] = require('../middleware/authed.js')
middleware['authed'] = middleware['authed'].default || middleware['authed']

export default middleware
