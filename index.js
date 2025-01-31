const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000
const httpProxy=require('http-proxy')
server=httpProxy.createServer({
  target: {
    host: 'ooxxz.oschina.link',
    port: 443
  },
  ssl: {
    key: fs.readFileSync('valid-ssl-key.pem', 'utf8'),
    cert: fs.readFileSync('valid-ssl-cert.pem', 'utf8')
  }
})
server.listen(PORT);
console.log("server is running on port:"+PORT)
