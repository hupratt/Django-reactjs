import React, { Component } from "react";
import "whatwg-fetch";
// import cookie from "react-cookies";
import PostInline from "./Postinline";
import { Link } from "react-router-dom";

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
      <React.Fragment>
        <Link
          className="mr-2"
          maintainScrollPosition={false}
          to={{
            pathname: `/about-us/`,
            state: { fromDashboard: false }
          }}
        >
          About us: go to
        </Link>
        <Link
          className="mr-2"
          maintainScrollPosition={false}
          to={{
            pathname: `/contact/`,
            state: { fromDashboard: false }
          }}
        >
          contact: go to
        </Link>
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
      </React.Fragment>
    );
  }
}

export default Posts;
