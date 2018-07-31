var mongoose = require('mongoose')

// Define collection and schema for todo item

var todo = new mongoose.Schema({
  name: {
    type: String
  },

  done: {
    type: Boolean
  }
},

  {
    collection: 'easyshop'
  }
)

module.exports = mongoose.model('Todo', todo)
