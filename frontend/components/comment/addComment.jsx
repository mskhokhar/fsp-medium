import React from 'react';
import TextareaAutosize from "react-autosize-textarea";
import { withRouter, Link } from 'react-router-dom';
class AddComment extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            body: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    update(field) {
        return e => {
            this.setState({ [field]: e.currentTarget.value });
        }
    }
    handleSubmit(e){
        e.preventDefault();
        let comment = {
            body: this.state.body,
            author_id: this.props.currentUser.id,
            post_id: this.props.postId
        }
        this.addComment(comment).then(
            this.setState({body: ''})
        )
    }
    render() {
        let disableButton;
        (this.state.body.length === 0) ? disableButton = true : disableButton = false;
        const { currentUser } = this.props;
        return (
            <form className="response-item-form" onSubmit={this.handleSubmit}>
                <div className="response-item-content">
                        <i id="response-item-profile-pic" className="material-icons">
                            person
                        </i>
                    <div>
                        <small className="response-item-author-info">
                            <div className="response-item-author">
                                {currentUser.username}
                            </div>
                        </small>
                    </div>
                </div>
                <div className='comment-textarea'>
                    <TextareaAutosize
                        id="response-id"
                        placeholder="Write a response ..."
                        value={this.state.body}
                        onChange={this.update("body")}
                    ></TextareaAutosize>
                </div>
                <div>
                    <input
                        id="submit-response-button"
                        type="submit"
                        value="Publish"
                        disabled={disableButton}
                    />
                </div>
            </form>
        );
    }
}

export default withRouter(AddComment)

