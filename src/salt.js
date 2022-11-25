const gpc = require('generate-pincode')
const pin = gpc(77)

const salt = '24446860302761739304752683030156737591518664810215442929817429364958281432566'
console.log(salt.length)
console.log(pin)