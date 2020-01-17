import { withRouter } from 'react-router-dom';
import React from 'react';

class PopularPost extends React.Component{
    constructor(props) {
        super(props);
        this.openShowPage = this.openShowPage.bind(this);
    }

    openShowPage() {
        this.props.history.push(`/feed/${this.props.post.id}`)
    }
    render(){
        const {post, postIndexNum, author} = this.props;
        return(
            <div onClick={this.openShowPage} className="side-index-1">
                <div className="side-index-number">0{postIndexNum+1}</div>
                <div className="side-index-content">
                    <div>
                        <h1 className="side-index-title">{post.title}</h1>
                    </div>
                    <div >
                        <small className="side-index-author">{author.first_name} {author.last_name}</small>
                    </div>
                    <small className="side-index-date">{post.updated_at}</small>
                </div>
            </div>
        );
    }
}
export default withRouter(PopularPost);