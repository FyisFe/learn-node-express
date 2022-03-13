const { connect } = require('mongoose')

const connectDB = (url) => {
  return connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: true,
  })
}

module.exports = connectDB
