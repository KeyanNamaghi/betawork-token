const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const fetch = require('node-fetch')

const app = express()

app.set('port', 5000)
app.use(cors())
app.use(bodyParser.json())

app.get('/', (req, res) => {
  return res.send('🏃‍♂️ server running...')
})

const url = ''
const scope = ''
const client_id = ''
const client_secret = ''

app.get('/test', (req, resp) => {
  fetch(url, {
    body: `scope=${scope}&client_id=${client_id}&client_secret=${client_secret}&grant_type=client_credentials`,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    method: 'POST',
  })
    .then((res) => res.json())
    .then((json) => {
      console.log(json)
      return resp.send(json)
    })
    .catch((err) => console.error('error:' + err))
})

app.listen(app.get('port'), () => {
  console.log(`Server started on port: 5000 🚀`)
})
