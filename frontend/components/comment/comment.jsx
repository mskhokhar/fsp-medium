import React from 'react';
import { withRouter, Link } from 'react-router-dom';
class Comment extends React.Component {
    constructor(props){
        super(props);
        this.handleDelete = this.handleDelete.bind(this);
    }
    handleDelete(commentId){
        this.props.deleteComment(commentId).then(
            setTimeout(() => alert('Comment deleted successfully'), 1500)
        )
    }
    render() {
        const { body, createdAt, author, currentUserId, commentId } = this.props;
        let deleteButton;
        if (currentUserId === author.id) {
            deleteButton = (
                <div className='response-item-buttons'>
                    <div onClick={() => this.handleDelete(commentId)} className="response-item-delete">Delete</div>
                </div>
            )
        }
        return (
            <div className="response-item-container">
                <div className="response-item-content">
                    <Link to={`/users/${author.id}`}>
                        <i id="response-item-profile-pic" className="material-icons">
                            person
                        </i>
                    </Link>
                    <div>
                        <small className="response-item-author-info">
                            <div className="response-item-author">
                                <Link to={`/users/${author.id}`} className="response-author">{author.username}</Link>
                            </div>
                        </small>
                        <small className="response-item-date">
                            {createdAt}
                        </small>
                    </div>
                </div>
                <div className='response-item-body'>{body}</div>
                {deleteButton}
            </div>
        );
    }
}

export default withRouter(Comment)

