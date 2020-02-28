import React from "react";
import TextareaAutosize from "react-autosize-textarea";

class UpdatePost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      author_id: this.props.currentUserId,
      title: this.props.post.title,
      body: this.props.post.body,
      category_id: this.props.post.category_id,
      photoUrl: null,
      photoFile: this.props.post.photoUrl,
      errors: []
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFile = this.handleFile.bind(this);
    this.handleBackToFeed = this.handleBackToFeed.bind(this);
  }
  componentDidMount() {
    this.props.fetchPost(this.props.match.params.postId);
  }
  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("post[title]", this.state.title);
    formData.append("post[body]", this.state.body);
    formData.append("post[category_id]", this.state.category_id);
    formData.append("post[author_id]", this.state.author_id);
    formData.append("post[picture]", this.state.photoFile);
    if (this.state.photoUrl === null) {
      this.setState({ errors: ["Picture must be attached"] });
    } else {
      this.props.updatePost(formData, this.props.post.id).then(
        post => this.successfull(post),
        error => {
          this.setState({ errors: error.responseJSON });
        }
      );
    }
  }
  successfull(post) {
    this.props.action(post);
    this.props.history.push(`/feed/${post.id}`);
  }
  update(field) {
    return e => {
      // console.log('target',e.target);

      this.setState({ [field]: e.currentTarget.value });
    };
  }
  returnErrors() {
    if (this.state.errors) {
      return (
        <ul className="auth-errors">
          <li>{this.state.errors[0]}</li>
        </ul>
      );
    }
  }
  handleBackToFeed() {
    this.props.history.push("/feed");
  }
  handleFile(e) {
    const file = e.currentTarget.files[0];
    // console.log("file", typeof e.currentTarget.value[0]);
    // console.log("currentTarget", e.currentTarget.value);
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState({ photoFile: file, photoUrl: fileReader.result });
      //   console.log("state", this.state);
    };
    if (file) {
      fileReader.readAsDataURL(file);
    }
  }
  render() {
    console.log('1', this.state.photoUrl);
    console.log('2', this.props.post);
    const preview = this.state.photoUrl ? (
      <img src={this.state.photoUrl} alt="" />
    ) : <img src={this.state.photoFile} alt="" />;
    return (
      <div>
        <div
          onClick={this.handleBackToFeed}
          className="profile-publish-container"
        >
          <div className="new-feed-submit-button">Feed</div>
        </div>
        <form className="new-feed-form" onSubmit={this.handleSubmit}>
          <div className="new-feed-header-container">
            <h1 className="new-feed-header">
              Update your story
            </h1>
          </div>
          <div>{this.returnErrors()}</div>
          <div>
            <input id="new-feed-submit-button" type="submit" value="Publish" />
          </div>
          <div className="new-feed-title-container">
            <input
              type="text"
              placeholder="Title"
              value={this.state.title}
              onChange={this.update("title")}
            />
          </div>
          <div>
            <div className="new-feed-category-container">
              <div>
                <label htmlFor="new-feed-file">
                  <i id="attachment-icon" className="material-icons">
                    add_circle_outline
                  </i>
                </label>
              </div>
            </div>
            <div>
              <div>
                <input
                  id="new-feed-file"
                  type="file"
                  onChange={this.handleFile}
                />
              </div>
            </div>
            <div className="new-feed-picture-preview">{preview}</div>

            <div className="new-feed-textarea">
              <TextareaAutosize
                id="description-id"
                placeholder="Content"
                value={this.state.body}
                onChange={this.update("body")}
              ></TextareaAutosize>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default UpdatePost;
