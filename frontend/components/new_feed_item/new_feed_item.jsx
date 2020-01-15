import React from 'react';

class NewFeedItem extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            author_id: this.props.currentUserId,
            title: '',
            body: '',
            category_id: '',
            photoFile: ''
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFile = this.handleFile.bind(this);
    }
    handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData();
        console.log('state', this.state);
        formData.append('post[title]', this.state.title);
        console.log('title', formData);
        
        formData.append('post[body]', this.state.body);
        formData.append('post[category_id]', this.state.category_id);
        formData.append('post[author_id]', this.state.author_id);
        formData.append('post[picture]', this.state.photoFile);
        console.log('formData',formData);
        // this.props.createNewFeedItem(formData);
        $.ajax({
            url: 'api/posts',
            method: 'POST',
            data: formData,
            contentType: false,
            processData: false
        }).then(post => {
            this.props.action(post);
            this.props.history.push(`/feed/${post.id}`)
        })
    }
    update(field) {
        
        return e => {
            // console.log('target',e.target);
            
            this.setState({ [field]: e.currentTarget.value });
        }
    }
    handleFile(e){
        this.setState({photoFile: e.currentTarget.files[0]});
    }
    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <h1>Add an article to this beautiful collection</h1>
                <div>
                    <div>Title</div>
                    <input type="text" value={this.state.title} onChange={this.update('title')}/>
                </div>
                <div>
                    <div>Category</div>
                    <select defaultValue="" onChange={this.update('category_id')}>
                        <option value="">--Select one--</option>
                        <option value={1}>Business</option>
                        <option value={2}>Education</option>
                        <option value={3}>Food</option>
                        <option value={4} >Health</option>
                        <option value={5}>LGBTQIAA</option>
                        <option value={6}>Psychology</option>
                        <option value={7}>Relationships</option>
                        <option value={8} >Technology</option>
                        <option value={9} >Work</option>
                    </select>
                </div>
                <div>
                    <div>Body</div>
                    <div>
                        <textarea cols="30" rows="10" value={this.state.body} onChange={this.update('body')}></textarea>
                    </div>
                </div>
                <div>
                    <div>Attach a picture</div>
                    <div>
                        <input type="file"  onChange={this.handleFile}/>
                    </div>
                </div>
                <input type="submit" value="Add it"/>
            </form>
        );
    }
}

export default NewFeedItem;