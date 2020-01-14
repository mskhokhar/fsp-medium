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
            <div className="story-index-container">
                <div className="story-top-index-container"></div>
                <section className="parent">
                    <div className="bottom-left">
                        {Object.values(posts).map(post => (
                                < Post
                                    key={post.id}
                                    fetchPost={fetchPost}
                                    post={post}
                                    currentUserId={currentUserId}
                                />
                        ))}
                    </div>
                    
                    <div className="bottom-right">
                        <div className="story-side-index-container">
                            <h3 class="side-index-heading">Popular on Blogium</h3>
                            <div>popularPost</div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}
export default Feed;