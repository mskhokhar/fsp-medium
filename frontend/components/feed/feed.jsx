import React from 'react';
import Post from '../post/post'

class Feed extends React.Component {
    componentDidMount(){
        this.props.fetchPosts();
    }
    render(){
        const { posts, fetchPost } = this.props;
        return (
            <ul>
                { Object.values(posts).map( post => (
                    <li>
                        < Post 
                            fetchPost={fetchPost}
                            post={post}
                            key={post.id}
                        />
                    </li>
                ) ) }
            </ul>
        );
    }
}
export default Feed;