import React from 'react';
import Post from '../post/post'
import PopularPost from '../popular_post/popular_post';

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
        const { posts, fetchPost, currentUserId, popularPosts, users } = this.props;
        return (
            <div className="story-index-container">
                <div className="story-top-index-container"></div>
                <section className="parent">
                    <div className="bottom-left">
                        {Object.values(posts).map(post => (
                                < Post
                                    key={post.id}
                                    fetchPost={fetchPost}
                                    author={users[post.author_id]}
                                    post={post}
                                    currentUserId={currentUserId}
                                />
                        ))}
                    </div>
                    
                    <div className="bottom-right">
                        <div className="story-side-index-container">
                            <h3 className="side-index-heading">Popular on Blogium</h3>
                            {Object.values(popularPosts).map((post,idx) => (
                                < PopularPost
                                    key={post.id}
                                    author={users[post.author_id]}
                                    post={post}
                                    postIndexNum={idx}
                                    currentUserId={currentUserId}
                                />
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}
export default Feed;