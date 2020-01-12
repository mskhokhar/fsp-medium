import React from 'react';

class Feed extends React.Component {
    componentDidMount(){
        this.props.fetchPosts();
    }
    render(){
        const { posts } = this.props;
        return (
            <ul>
                { Object.values(posts).map( post => (
                    <li>
                        {post.title}
                    </li>
                ) ) }
            </ul>
        );
    }
}
export default Feed;