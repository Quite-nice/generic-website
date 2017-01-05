import express from 'express'

const PORT = process.env.PORT || 3000

const app = express()

app.get('/', (req, res) => {
  res.send('hello world')
})

app.listen(PORT, () => {
  console.log(`your site is running at 0.0.0.0:${PORT}`)
})
