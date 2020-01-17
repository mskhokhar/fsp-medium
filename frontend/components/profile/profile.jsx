import React from 'react';
import Post from '../post/post'

class Profile extends React.Component{
    constructor(props){
        super(props);

        this.handlePublish = this.handlePublish.bind(this);
        this.handleBackToFeed = this.handleBackToFeed.bind(this);

    }
    componentDidMount(){
        this.props.fetchPosts();
    }
    handlePublish(){
        this.props.history.push('/feed/new')
    }
    handleBackToFeed(){
        this.props.history.push('./feed');
    }
    render(){
        const {profileOwner, posts, currentUserId, fetchPost, users} = this.props;
        let ownPosts;
        let name;
        if (!users || !profileOwner){
            return null;
        }
        if(currentUserId === profileOwner.id){
            name="Your own";
        }else{
            name=profileOwner.username;
        }

        if (posts.length ) {
            ownPosts = (
                posts.map(post => (
                    < Post
                        key={post.id}
                        fetchPost={fetchPost}
                        author={users[post.author_id]}
                        post={post}
                        currentUserId={currentUserId}
                    />
                ))
            )
        } else {
            ownPosts = (
                <div className="no-picture-container">
                    <span>What will your story be?</span>
                    <div>
                        <img src={window.no_post} alt="hello"/>
                    </div>
                </div>
            )
        }
        return (
            <div className="profile-main-container">
                <div className="profile-container">
                    {/* <div className="navigation-buttons">
                        <div onClick={this.handleBackToFeed} className="new-feed-submit-button">Feed</div>
                        <div onClick={this.handlePublish} className="new-feed-submit-button">Publish</div>
                    </div> */}
                    <div onClick={this.handlePublish} className="profile-publish-container">
                        <div  className="new-feed-submit-button">Publish</div>
                    </div>
                    <header className="profile-info-container">
                        <div className="profile-info">
                            <div className="user-fullname-container">
                                <span className="user-fullname">
                                    {profileOwner.first_name} {profileOwner.last_name}
                                </span>
                            </div>
                            <div >
                                <div className="labels">
                                    <span className="username-label">Username:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                                    <span className="username">{profileOwner.username}</span>
                                </div>
                                <div className="labels">
                                    <span>email:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                                    <span>{profileOwner.email}</span>
                                </div>
                                <div className="labels">
                                    <span>Joined us on:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                                    <span>{profileOwner.created_at}</span>
                                </div>
                            </div>
                        </div>
                        <div >
                            <i id="profile-icon" className="material-icons">
                                person
                        </i>
                        </div>
                    </header>
                    <h4 className="profile-posts">{name} articles:</h4>
                    <div>
                        <div className="">
                            {ownPosts}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Profile;