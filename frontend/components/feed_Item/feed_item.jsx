import React from 'react';
import {categories} from '../../utils/category_state';

class FeedItem extends React.Component{
    constructor(props){
        super(props);

        this.handleLike = this.handleLike.bind(this);
        this.handleUnlike = this.handleUnlike.bind(this);
    }
    handleLike(){
        let like = {
            liker_id: this.props.currentUserId,
            post_id: this.props.post.id
        }
        this.props.likePost(like);
    }
    handleUnlike(likeId){
        this.props.unlikePost(likeId);
    }
    componentDidMount(){
        this.props.fetchCUserLikes();
        this.props.fetchPost(this.props.match.params.postId);
    }
    render(){
        const { likes, post, users } = this.props;
        let author;
        let like;
        if(post){
            author = users[post.author_id];
            if (likes[post.id]) {
                like = (<i onClick={() => this.handleUnlike(likes[post.id])} className="material-icons " id="feed-item-like-btn">
                            favorite
                        </i>)
            }else{
                like = (<i onClick={this.handleLike} className="material-icons " id="feed-item-like-btn">
                            favorite_border
                        </i>)
            }
        }
        if(!post){
            return null;
        }
        return (
        
            <div className="feed-item-container">
                <div>
                    <div className="feed-item-title">{post.title}</div>
                    <div className="feed-item-category">-&nbsp;belongs to&nbsp;{categories[post.category_id].name}</div>
                </div>
                <div className="feed-info">
                    <div className="feed-item-info">
                        <div >
                            <i className="material-icons" id="feed-item-info-icon">account_circle</i>
                        </div>
                        <div className="feed-item-info-details">
                            <div className="author-name">{author.first_name}&nbsp;{author.last_name}</div>
                            <div className="creation-date">{post.updated_at}</div>
                        </div>
                    </div>
                    <div >{like}</div>
                </div>
                <div><img className="feed-item-img" src={post.photoUrl} alt={post.title} /></div>
                <div className="feed-item-body">{post.body}</div>
            </div>
        );
    }
}
export default FeedItem;