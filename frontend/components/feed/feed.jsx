import React from 'react';
import Post from '../post/post'
import PopularPost from '../popular_post/popular_post';
import EditorPicksCenter from '../editor_picks/editor_pick_center';
import EditorPicksSide from '../editor_picks/editor_pick_side';

class Feed extends React.Component {
    constructor(props){
        super(props);
        this.state= ({
            currentUserId : this.props.currentUserId
        })
    }
    componentDidMount(){
        this.props.fetchPosts();
        this.props.fetchAllFollowers();
        this.props.fetchAllComments();
    }
    
    render(){
        const { posts, fetchPost, currentUserId, popularPosts, users, editorPicks, loading } = this.props;
        let postLeft = Object.values(editorPicks)[0];
        let postRight = Object.values(editorPicks)[4];
        let postsCenter = Object.values(editorPicks).slice(1,4);
        if(loading){
            return <div className="loader-container"><div className="loader">Loading...</div></div>
        }
        if(!posts || !postLeft || !postRight){
            return null;
        }
            return (
                <div className="story-index-container">
                <div className="editor-picks-container">
                    <div className="editor-picks-left">
                            <EditorPicksSide
                                key={postLeft.id}
                                fetchPost={fetchPost}
                                author={users[postLeft.author_id]}
                                post={postLeft}
                                currentUserId={currentUserId}
                            />
                    </div>
                    <div className="editor-picks-center">
                        {
                            postsCenter.map( post => (
                                < EditorPicksCenter
                                    key={post.id}
                                    fetchPost={fetchPost}
                                    author={users[post.author_id]}
                                    post={post}
                                    currentUserId={currentUserId}
                                />
                            ) )
                        }
                    </div>
                    <div className="editor-picks-right">
                        <EditorPicksSide
                            key={postRight.id}
                            fetchPost={fetchPost}
                            author={users[postRight.author_id]}
                            post={postRight}
                            currentUserId={currentUserId}
                        />
                    </div>
                </div>

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