import React from 'react';

class Post extends React.Component{
    render(){
        const {post} = this.props;
        return (
            <div>
                <div>
                    <div>{post.category_id}</div>
                    <div>{post.title}</div>
                    <div>{post.body}</div>
                    <div>
                        <div>{post.updated_at}</div>
                        <div>Like</div>
                    </div>
                </div>
                <div>
                    <img src={post.photoUrl} alt=""/>
                </div>
            </div>
        );
    }
}
export default Post