import { withRouter } from 'react-router-dom';
import React from 'react';

class Post extends React.Component{
    constructor(props){
        super(props);
        // this.handleLike=this.handleLike.bind(this);
        this.openShowPage = this.openShowPage.bind(this);
    }
   
    openShowPage() {
        this.props.history.push(`/feed/${this.props.post.id}`)
    }
    render(){
        const {post} = this.props;
        return (
            <div onClick={this.openShowPage} >
                <div>
                    <div>{post.category_id}</div>
                    <div>{post.title}</div>
                    <div>{post.body}</div>
                    <div>
                        <div>{post.updated_at}</div>
                        {/* <div>{like}</div> */}
                    </div>
                </div>
                <div>
                    <img src={post.photoUrl} alt=""/>
                </div>
            </div>
        );
    }
}
export default withRouter(Post);