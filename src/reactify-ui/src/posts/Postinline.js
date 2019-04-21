import React, { Component } from "react";

class PostInline extends Component {
  render() {
    const { post } = this.props;
    return <div>{post === undefined ? "" : <p>{post.content}</p>}</div>;
  }
}

export default PostInline;
