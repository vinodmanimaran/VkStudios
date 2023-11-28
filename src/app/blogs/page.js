"use client"
import React from 'react';
import {useState} from 'react'

const BlogCard = ({ blog, onEdit, onDelete }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h3 className="text-xl font-bold mb-2">{blog.title}</h3>
      <p className="text-gray-600">{blog.content}</p>
      <div className="flex justify-between mt-4">
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
          onClick={onEdit}
        >
          Edit
        </button>
        <button
          className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded"
          onClick={onDelete}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

const CreateBlogForm = ({ onClose, onCreate }) => {
  const [title, setTitle] = React.useState('');
  const [content, setContent] = React.useState('');

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleContentChange = (event) => {
    setContent(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onCreate({ title, content });
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-75">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold mb-4">Create Blog</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
              Title
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="title"
              type="text"
              value={title}
              onChange={handleTitleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="content">
              Content
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="content"
              rows="5"
              value={content}
              onChange={handleContentChange}
              required
            ></textarea>
          </div>
          <div className="flex justify-end">
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
              type="submit"
            >
              Create
            </button>
            <button
              className="ml-2 bg-gray-400 hover:bg-gray-500 text-white font-semibold py-2 px-4 rounded"
              onClick={onClose}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

const EditBlogForm = ({ blog, onClose, onEdit }) => {
  const [title, setTitle] = React.useState(blog.title);
  const [content, setContent] = React.useState(blog.content);

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleContentChange = (event) => {
    setContent(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onEdit({ id: blog.id, title, content });
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-75">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold mb-4">Edit Blog</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
              Title
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="title"
              type="text"
              value={title}
              onChange={handleTitleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="content">
              Content
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline break-words"
              id="content"
              rows="5"
              value={content}
              onChange={handleContentChange}
              required
            ></textarea>
          </div>
          <div className="flex justify-end">
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
              type="submit"
            >
              Save
            </button>
            <button
              className="ml-2 bg-gray-400 hover:bg-gray-500 text-white font-semibold py-2 px-4 rounded"
              onClick={onClose}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};


const DeleteConfirmationModal = ({ blog, onClose, onDelete }) => {
  const handleDelete = () => {
    onDelete(blog.id);
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-75">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold mb-4">Delete Blog</h2>
        <p className="text-gray-700 mb-4">Are you sure you want to delete this blog?</p>
        <div className="flex justify-end">
          <button
            className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded"
            onClick={handleDelete}
          >
            Delete
          </button>
          <button
            className="ml-2 bg-gray-400 hover:bg-gray-500 text-white font-semibold py-2 px-4 rounded"
            onClick={onClose}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

const BlogPage = () => {
  const [blogs, setBlogs] = React.useState([]);
  const [isCreateModalOpen, setCreateModalOpen] = useState(false); // Add this line
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
  const [selectedBlog, setSelectedBlog] = useState(null);


  const handleCreateBlog = (newBlog) => {
    const blogWithId = { id: Date.now(), ...newBlog };
    setBlogs((prevBlogs) => [...prevBlogs, blogWithId]);
  };

  const handleEditBlog = (updatedBlog) => {
    setBlogs((prevBlogs) =>
      prevBlogs.map((blog) => (blog.id === updatedBlog.id ? updatedBlog : blog))
    );
  };

  const handleDeleteBlog = (blogId) => {
    setBlogs((prevBlogs) => prevBlogs.filter((blog) => blog.id !== blogId));
  };

  return (
    <div className="bg-gray-800 m-8 bg-opacity-50 backdrop-filter backdrop-blur-lg py-8 px-6 rounded-lg text-white">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Blog</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((blog) => (
            <BlogCard
              key={blog.id}
              blog={blog}
              onEdit={() => handleEditBlog(blog)}
              onDelete={() => handleDeleteBlog(blog.id)}
            />
          ))}
        </div>
        <div className="mt-8 text-center">
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
            onClick={() => setCreateModalOpen(true)}
          >
            Create Blog
          </button>
        </div>
      </div>

      {isCreateModalOpen && (
        <CreateBlogForm onClose={() => setCreateModalOpen(false)} onCreate={handleCreateBlog} />
      )}

      {isEditModalOpen && selectedBlog && (
        <EditBlogForm
          blog={selectedBlog}
          onClose={() => setEditModalOpen(false)}
          onEdit={handleEditBlog}
        />
      )}

      {isDeleteModalOpen && selectedBlog && (
        <DeleteConfirmationModal
          blog={selectedBlog}
          onClose={() => setDeleteModalOpen(false)}
          onDelete={handleDeleteBlog}
        />
      )}
    </div>
  );
};

export default BlogPage;
