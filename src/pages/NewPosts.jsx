import React from "react";

class NewPosts extends React.Component {
  state = {
    posts: null
  };

  componentDidMount() {
    // fetch();
  }

  render() {
    console.log(this.state.posts);
    return (
      <div>
        <h2>New posts</h2>
      </div>
    );
  }
}

export default NewPosts;
