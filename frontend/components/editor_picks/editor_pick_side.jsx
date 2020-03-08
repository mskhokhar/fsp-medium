import React from 'react';
import { withRouter } from 'react-router-dom';
import { categories } from '../../utils/category_state';
class EditorPicksSide extends React.Component{
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
    render(){
        const { post, author } = this.props;
        return(
            <div  className="editor-side-container">
                <div onClick={this.openShowPage} className="editor-picks-side-img" style={{ backgroundImage: `url(${post.photoUrl})`}}></div>
                <div onClick={this.openShowPage} className="editor-left-content">
                    <h2 className="editor-left-title">{post.title}</h2>
                    <h2 className="editor-left-body">{post.body}</h2>
                </div>
                <div className="editor-left-details-container">
                    <div onClick={() => this.handleAuthorClick(post.author_id)} className="editor-left-author">{author.first_name} {author.last_name}</div>
                    <div onClick={this.openShowPage} className="editor-left-details">
                        <div>{post.updated_at}</div>
                        <div>&nbsp;&#183;&nbsp;{this.categories[post.category_id].name}&nbsp;★</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(EditorPicksSide)

