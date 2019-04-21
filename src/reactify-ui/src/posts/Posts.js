import React, { Component } from "react";
import "whatwg-fetch";
// import cookie from "react-cookies";
import PostInline from "./Postinline";

class Posts extends Component {
  state = { posts: [] };

  componentDidMount() {
    this.setState({
      posts: [
        { title: "title-1", content: "content-1", slug: "slug-1", key: "1" },
        { title: "title-2", content: "content-2", slug: "slug-2", key: "2" }
      ]
    });
    // this.loadPosts();
  }
  render() {
    const { posts } = this.state;
    const { postsListClass } = this.state;
    return (
      <div>
        {posts.length > 0 ? (
          posts.map((postItem, index) => {
            return (
              <li key={index}>
                <PostInline post={postItem} elClass={postsListClass} />
              </li>
            );
          })
        ) : (
          <p>No Posts Found</p>
        )}
      </div>
    );
  }
}

export default Posts;
