const express = require('express')

const app = express()

app.get('/', (req, res) => {
  res.send('Hi!, mi nombre es ricardo y hablo desde el back papu!')
})

const server = app.listen(3000, () => console.log('Server ready'))

process.on('SIGTERM', () => {
  server.close(() => {
    console.log('Process terminated')
  })
})

//instalar express
