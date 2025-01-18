import mongoose from 'mongoose';

const blogSchema = new mongoose.Schema({
  postTitle: {
    type: String,
    required: true
  },
  permaLink: {
    type: String,
    required: true,
    unique: true
  },
  shortDescription: {
    type: String,
    maxlength: 400,
  },
  content: {
    type: String,
  },
  timeToRead: {
    type: Number,
  },
  status: {
    type: String,
    default: 'draft'
  },
  thumb: {
    type: String, 
    required: true,
  },
}, {
  timestamps: true 
});

const BlogModel = mongoose.model('Blog', blogSchema);
export default BlogModel
