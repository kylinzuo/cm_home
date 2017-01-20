import $ from 'jquery'
import materialize from 'materialize-css'
require('../node_modules/materialize-css/dist/css/materialize.css')


require('../index.html')
require('./less/global.less')

import hello from './component/hello'

document.body.appendChild(hello())
