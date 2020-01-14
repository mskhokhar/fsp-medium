import { withRouter } from 'react-router-dom';
import React from 'react';

class Post extends React.Component{
    constructor(props){
        super(props);
        // this.handleLike=this.handleLike.bind(this);
        this.openShowPage = this.openShowPage.bind(this);
    }
   
    openShowPage() {
        this.props.history.push(`/feed/${this.props.post.id}`)
    }
    render(){
        const {post} = this.props;
        return (
            <div className="story-index-item-continer" onClick={this.openShowPage} >
                <div className="flex-fix">
                    <div className="story-index-item-info">
                        <div>
                            <h3 className="story-index-item-title" >{post.title}</h3>
                            <h4 className="story-index-item-body">{post.body}</h4>
                        </div>
                        <div className="story-index-item-author">Manraj Singh</div>
                        <div className="story-index-item-date">
                            <div>{post.updated_at}</div>
                            <div>{post.category_id}</div>
                            {/* <div>{like}</div> */}
                        </div>
                    </div>
                </div>
                <div className="story-index-item-image-container">
                    <img src={post.photoUrl} alt=""/>
                </div>
            </div>
        );
    }
}
export default withRouter(Post);