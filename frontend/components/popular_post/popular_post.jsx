import { withRouter } from 'react-router-dom';
import React from 'react';

class PopularPost extends React.Component{
    constructor(props) {
        super(props);
        this.openShowPage = this.openShowPage.bind(this);
        this.handleAuthorClick = this.handleAuthorClick.bind(this);
    }

    handleAuthorClick(userId) {
        this.props.history.push(`/users/${userId}`)
    }
    openShowPage() {
        this.props.history.push(`/feed/${this.props.post.id}`)
    }
    render(){
        const {post, postIndexNum, author} = this.props;
        return(
            <div  className="side-index-1">
                <div onClick={this.openShowPage} className="side-index-number">0{postIndexNum+1}</div>
                <div className="side-index-content">
                    <div onClick={this.openShowPage}>
                        <h1 className="side-index-title">{post.title}</h1>
                    </div>
                    <div >
                        <small onClick={() => this.handleAuthorClick(post.author_id)} className="side-index-author">{author.first_name} {author.last_name}</small>
                    </div>
                    <small onClick={this.openShowPage} className="side-index-date">{post.updated_at}</small>
                </div>
            </div>
        );
    }
}
export default withRouter(PopularPost);