import React from 'react';
import Post from '../post/post'

class Feed extends React.Component {
    constructor(props){
        super(props);
        this.state= ({
            currentUserId : this.props.currentUserId
        })
    }
    componentDidMount(){
        this.props.fetchPosts();
    }
    
    render(){
        const { posts, fetchPost, currentUserId } = this.props;
        return (
            <div className="feed">
                <div className="feed-editor-picks"></div>
                <div className="feed-user-based">
                    <ul className="all-feed-posts">
                        {Object.values(posts).map(post => (
                            <li key={post.id}>
                                < Post
                                    fetchPost={fetchPost}
                                    post={post}
                                    currentUserId={currentUserId}
                                />
                            </li>
                        ))}
                    </ul>
                    
                    <div className="popular"></div>
                </div>
            </div>
        );
    }
}
export default Feed;