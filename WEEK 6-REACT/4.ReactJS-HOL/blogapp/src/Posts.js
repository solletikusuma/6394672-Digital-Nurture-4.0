import React, { Component } from 'react';
import Post from './Post';

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      error: null
    };
  }

  loadPosts = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch posts');
        }
        return response.json();
      })
      .then((data) => {
        // Use the Post class to create objects
        const postObjects = data.map(item => new Post(item.id, item.title, item.body));
        this.setState({ posts: postObjects });
      })
      .catch((error) => {
        this.setState({ error });
      });
  };

  componentDidMount() {
    this.loadPosts();
  }

  componentDidCatch(error, info) {
    alert('Rendering error: ' + error.message);
  }

  render() {
    const { posts, error } = this.state;

    if (error) {
      return <h2 style={{ color: 'red' }}>Error: {error.message}</h2>;
    }

    return (
  <div>
    <h2>Blog Posts</h2>
    {posts.length === 0 ? (
      <p>Loading...</p>
    ) : (
      posts.map((post) => (
        <div key={post.id} style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
          <h4>ID: {post.id}</h4>
          <h3>Title: {post.title}</h3>
          <p>Body: {post.body}</p>
        </div>
      ))
    )}
  </div>
);

  }
}

export default Posts;
