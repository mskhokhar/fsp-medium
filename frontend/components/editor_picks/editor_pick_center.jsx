import React from 'react';
import { withRouter } from 'react-router-dom';
import { categories } from '../../utils/category_state';
class EditorPicksCenter extends React.Component {
    constructor(props) {
        super(props);
        this.openShowPage = this.openShowPage.bind(this);
        this.handleAuthorClick = this.handleAuthorClick.bind(this);
        this.categories = categories;
    }

    handleAuthorClick(userId) {
        this.props.history.push(`/users/${userId}`)
    }
    openShowPage() {
        this.props.history.push(`/feed/${this.props.post.id}`)
    }
    render() {
        const { post, author } = this.props;
        return (
            <div  className="editor-center-container">
                <div onClick={this.openShowPage} className="editor-center-img" style={{ backgroundImage: `url(${post.photoUrl})` }}></div>
                <div className="editor-center-details-container">
                    <h2 onClick={this.openShowPage} className="editor-center-title">{post.title}</h2>
                    <div>
                        <div onClick={() => this.handleAuthorClick(post.author_id)} className="editor-center-author">{author.first_name} {author.last_name}</div>
                    </div>
                    <div onClick={this.openShowPage} className="editor-center-details">
                        <div>{post.updated_at}</div>
                        <div>&nbsp;&#183;&nbsp;{this.categories[post.category_id].name}&nbsp;★</div>
                    </div>
                </div>
                
            </div>
        );
    }
}

export default withRouter(EditorPicksCenter)

