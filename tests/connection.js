const ServerNet = require('../src/index') // use 7d2d-api in production
const sapi = new ServerNet('86.90.144.51', 26900);
sapi.getData(data => {
  console.log(data)
})
