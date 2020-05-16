// Write a .env file with Netlify's env variables for Gatsby to read
const fs = require('fs')
fs.writeFileSync('./.env.production', `FRESHSALES_API=${process.env.FRESHSALES_API}\n`)
