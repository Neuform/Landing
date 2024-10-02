import React, { useState } from 'react';
import { Button, TextField } from "@mui/material";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Import Quill styles
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createBlog } from '../../state/Blog/Action';

const CreateBlog = () => {
  const dispatch = useDispatch();
  const { blog } = useSelector((store) => store);
  const navigate = useNavigate();

  // State for form inputs
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [thumbnail, setThumbnail] = useState('');

  // Custom toolbar options
  const toolbarOptions = [
    ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
    ['blockquote', 'code-block'],
    ['link', 'image', 'video', 'formula'],
    [{ 'header': 1 }, { 'header': 2 }],               // custom button values
    [{ 'list': 'ordered'}, { 'list': 'bullet' }, { 'list': 'check' }],
    [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
    [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
    [{ 'direction': 'rtl' }],                         // text direction
    [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
    [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
    [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
    [{ 'font': [] }],
    [{ 'align': [] }],
    ['clean']                                         // remove formatting button
  ];

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      title,
      content,
      thumbnail,
    };
    console.log(data)

    // Dispatch the action to create the blog
    dispatch(createBlog(data));

    // Optionally navigate to another route after submission
    navigate('/blog'); // Replace with appropriate route
  };

  return (
    <div className="pt-16 pb-16 bg-primary_bright">
      <div className="text-center p-5 bg-white">
        <p className="text-4xl md:text-8xl font-semibold">
          <span className="text-accent_red">Create</span> Blog
        </p>
      </div>

      <div className="m-8 p-6 bg-white rounded-lg shadow-lg">
        <form onSubmit={handleSubmit}>
          {/* Title Field */}
          <div className="mb-6">
            <TextField
              label="Title"
              fullWidth
              variant="outlined"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>

          {/* Thumbnail Field */}
          <div className="mb-6">
            <TextField
              label="Thumbnail URL"
              fullWidth
              variant="outlined"
              value={thumbnail}
              onChange={(e) => setThumbnail(e.target.value)}
              required
            />
          </div>

          {/* Content Field with ReactQuill Editor */}
          <div className="mb-6">
            <ReactQuill
              theme="snow"
              value={content}
              onChange={setContent}
              modules={{
                toolbar: toolbarOptions, // Apply custom toolbar options
              }}
              placeholder="Start typing..."
            />
          </div>

          {/* Submit Button */}
          <div className="text-center mt-6">
            <Button
              type="submit"
              variant="contained"
              color="primary"
              sx={{ backgroundColor: '#ff362e' }}
            >
              Create Blog
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateBlog;
