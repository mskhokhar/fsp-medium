import React from 'react';
import { withRouter, Link } from 'react-router-dom';
class Comment extends React.Component {

    render() {
        const { body, createdAt, author } = this.props;
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
            </div>
        );
    }
}

export default withRouter(Comment)

