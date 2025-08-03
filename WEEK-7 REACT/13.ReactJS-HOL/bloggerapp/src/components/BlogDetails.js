const BlogDetails = ({ blogs }) => (
  <div className="column">
    <h2>Blog Details</h2>
    {blogs.map((blog) => (
      <div key={blog.id}>
        <h1>{blog.title}</h1>
        <p><strong>{blog.author}</strong></p>
        <p>{blog.content}</p>
      </div>
    ))}
  </div>
);

export default BlogDetails;
