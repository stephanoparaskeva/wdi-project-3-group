
const mongoose = require('mongoose')

const commentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: {type: String },
  createdBy: { type: mongoose.Schema.ObjectId, ref: 'User' }
}, {
  timestamps: true
})

const taskSchema = new mongoose.Schema({
  name: { type: String },
  group: { type: mongoose.Schema.ObjectId, ref: 'Group'},
  description: { type: String },
  priority: { type: String },
  usersAssigned: [{ type: mongoose.Schema.ObjectId, ref: 'User'}],
  createdBy: { type: mongoose.Schema.ObjectId, ref: 'User' },
  categoryAssigned: { type: mongoose.Schema.ObjectId, ref: 'Category' },
  isCurrent: { type: Boolean },
  comments: [ commentSchema ]
}, {
  timestamps: true
})

module.exports = mongoose.model('Task', taskSchema)
