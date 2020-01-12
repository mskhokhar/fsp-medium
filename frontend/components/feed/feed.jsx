import React from 'react';

class Feed extends React.Component {
    componentDidMount(){
        this.props.fetchPosts();
    }
    render(){
        const { posts } = this.props;
        return (
            <ul>
                posts.map( post => (
                    <li>
                        FeedItem
                    </li>
                ))
            </ul>
        );
    }
}
export default Feed;