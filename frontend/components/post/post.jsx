import { withRouter } from 'react-router-dom';
import React from 'react';
import {categories} from '../../utils/category_state';
class Post extends React.Component{
    constructor(props){
        super(props);
        this.openShowPage = this.openShowPage.bind(this);
        this.handleAuthorClick = this.handleAuthorClick.bind(this);
        this.categories = categories;
    }
   
    handleAuthorClick(userId) {
        this.props.history.push(`/users/${userId}`)
    }
    openShowPage() {
        this.props.history.push(`/feed/${this.props.post.id}`);
    }
    render(){
        const {post, author} = this.props;
        return (
            <div className="story-index-item-continer"  >
                <div className="flex-fix">
                    <div className="story-index-item-info">
                        <div onClick={this.openShowPage} >
                            <h3 className="story-index-item-title" >{post.title}</h3>
                            <h4 className="story-index-item-body">{post.body}</h4>
                        </div>
                        <div onClick={() => this.handleAuthorClick(post.author_id)} className="story-index-item-author">{author.first_name} {author.last_name}</div>
                        <div onClick={this.openShowPage} className="story-index-item-date">
                            <div>{post.updated_at}</div>
                            <div>&nbsp;&#183;&nbsp;{this.categories[post.category_id].name}&nbsp;★</div>
                            {/* <div>{like}</div> */}
                        </div>
                    </div>
                </div>
                <div onClick={this.openShowPage} style={{ backgroundImage: `url(${post.photoUrl})`}}className="story-index-item-image-container">
                    {/* <img src={post.photoUrl} alt=""/> */}
                </div>
            </div>
        );
    }
}
export default withRouter(Post);