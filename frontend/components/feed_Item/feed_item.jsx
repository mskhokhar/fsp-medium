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
        this.successfullyDeleted = this.successfullyDeleted.bind(this);
        this.handleAuthorClick = this.handleAuthorClick.bind(this);
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
                this.successfullyDeleted()
            )
    }
    successfullyDeleted(){
        this.props.history.push('/feed');
        setTimeout(() => alert('Post deleted successfully'), 2500)
    }
    handleUpdate(){
        this.props.history.push(`/feed/${this.props.post.id}/update`)
    }
    handleAuthorClick(userId) {
        this.props.history.push(`/users/${userId}`)
    }
    componentDidMount(){
        this.props.fetchPosts();
        this.props.fetchCUserLikes();
    }
    render(){
        const { likes, post, users, currentUserId, loading, postCommentIds, comments } = this.props;
        let postComments;
        if (postComments.length !==0) {
            postComments = (
                <section className='response-index-feed'>

                    <h3 className="response-header">Responses</h3>
                    <div className="response-index-item">

                    </div>
                </section>
            )
        }
        if (loading) {
            return <div className="loader-container"><div className="loader">Loading...</div></div>
        }
        if (!post || !users) {
            return null;
        }
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
            if (post.author_id === currentUserId) {
                removePost = (
                    <div className="new-feed-submit-button" onClick={this.handleDelete}>Delete</div>
                );
                updatePost = (
                    <div className="new-feed-submit-button" onClick={this.handleUpdate}>Update</div>
                )
            }

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
                            <div onClick={() => this.handleAuthorClick(post.author_id)} className="author-name">{author.first_name}&nbsp;{author.last_name}</div>
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
                <div className='response-index-container'>
                    {postComments}
                </div>
            </div>
        );
    }
}
export default withRouter(FeedItem);