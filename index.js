const express = require('express')
const app = express()
const {open} = require('sqlite')
const sqlite3 = require('sqlite3')
const path = require()

const dbPath = path.join(__dirname, 'goodreads.db')

let db = null

const initializeDbAndServer = async () => {
  try {
    db = await open({
      filename: dbPath,
      driver: sqlite3.Database,
    })

    app.listen(3000, () => {
      console.log('Server Running at http://localhost:3000')
    })
  } catch (e) {
    console.log(`DB error: ${e.message}`)
    process.exit(1)
  }
}

initializeDbAndServer()
