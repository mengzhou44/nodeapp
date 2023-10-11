import express from 'express'
const app = express()

app.get('/', function (req: any, res: any) {
  res.send(`Current env is ${process.env.NODE_ENV}`)
})

const port = process.env.PORT || 3000

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
