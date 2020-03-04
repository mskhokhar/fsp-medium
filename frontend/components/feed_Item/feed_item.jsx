import React from 'react';
import { withRouter } from 'react-router-dom';

import {categories} from '../../utils/category_state';

class FeedItem extends React.Component{
    constructor(props){
        super(props);

        this.handleLike = this.handleLike.bind(this);
        this.handleUnlike = this.handleUnlike.bind(this);
        this.handlePublish = this.handlePublish.bind(this);
        this.handleBackToFeed = this.handleBackToFeed.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
    }
    handlePublish() {
        this.props.history.push('/feed/new');
    }
    handleBackToFeed() {
        this.props.history.push('/feed');
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
    handleDelete(){
        this.props.deletePost(this.props.post.id)
            .then(
                this.props.history.push('/feed')
            )
    }
    handleUpdate(){
        this.props.history.push(`/feed/${this.props.post.id}/update`)
    }
    componentDidMount(){
        this.props.fetchCUserLikes();
        this.props.fetchPost(this.props.match.params.postId);
    }
    render(){
        const { likes, post, users, currentUserId } = this.props;
        let author;
        let like;
        let removePost;
        let updatePost;
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
            if (author.id === currentUserId) {
                removePost = (
                    <div className="new-feed-submit-button" onClick={this.handleDelete}>Delete</div>
                );
                updatePost = (
                    <div className="new-feed-submit-button" onClick={this.handleUpdate}>Update</div>
                )
            }
        }
        if(!post){
            return null;
        }
        return (
        
            <div className="feed-item-container">
                <div style={{marginTop: '-30px'}} className="navigation-buttons">
                    <div onClick={this.handleBackToFeed} className="new-feed-submit-button">Feed</div>
                    <div onClick={this.handlePublish} className="new-feed-submit-button">Publish</div>
                </div>

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
                <div className="action-button-container">
                    {updatePost}
                    {removePost}
                </div>
            </div>
        );
    }
}
export default withRouter(FeedItem);