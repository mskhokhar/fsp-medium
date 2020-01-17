import React from 'react';
import { withRouter } from 'react-router-dom';

class NewFeedItem extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            author_id: this.props.currentUserId,
            title: '',
            body: '',
            category_id: '',
            photoUrl: null,
            photoFile: null,
            errors: []
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFile = this.handleFile.bind(this);
        this.doResize = this.doResize.bind(this);
    }
    handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append('post[title]', this.state.title);
        formData.append('post[body]', this.state.body);
        formData.append('post[category_id]', this.state.category_id);
        formData.append('post[author_id]', this.state.author_id);
        formData.append('post[picture]', this.state.photoFile);
        console.log('formData',formData);
        if(this.state.photoUrl === null){
            this.setState({errors: ["Picture must be attached"]});
        }else{
            this.props.createNewFeedItem(formData)
                .then(post => this.successfull(post), error => {
                    this.setState({ errors: error.responseJSON })
                });
        }
    }
    successfull(post){
            this.props.action(post);
            this.props.history.push(`/feed/${post.id}`)
    }
    update(field) {
        
        return e => {
            // console.log('target',e.target);
            
            this.setState({ [field]: e.currentTarget.value });
        }
    }
    returnErrors(){
        if (this.state.errors) {
            return(
                <ul className="auth-errors">
                    <li>{this.state.errors[0]}</li>
                </ul>
            );
        }
    }
    doResize() {
        let textbox = document.getElementById('description-id')

        let maxrows = 5;
        let txt = textbox.value;
        let cols = textbox.cols;

        let arraytxt = txt.split('\n');
        let rows = arraytxt.length;

        for (let i = 0; i < arraytxt.length; i++)
            rows += parseInt(arraytxt[i].length / cols);

        if (rows > maxrows) textbox.rows += maxrows;
        else textbox.rows = rows;
    }
    handleFile(e){
        const file = e.currentTarget.files[0];
        console.log('file', typeof e.currentTarget.value[0]);
        console.log('currentTarget', e.currentTarget.value);
        const fileReader = new FileReader();
        fileReader.onloadend = () => {
            this.setState({photoFile: file, photoUrl: fileReader.result });
            console.log('state', this.state);
            
        }
        if(file){
            fileReader.readAsDataURL(file);
        }
    }
    render(){
        const preview = this.state.photoUrl ? <img src={this.state.photoUrl} alt=""/> : null; 
        return (
            <div>
                <form className="new-feed-form" onSubmit={this.handleSubmit}>
                    <div className="new-feed-header-container">

                        <h1 className="new-feed-header">Contribute to this beautiful collection</h1>
                    </div>
                    <div>
                        {this.returnErrors()}
                    </div>
                    <div>
                        <input id="new-feed-submit-button" type="submit" value="Publish" />
                    </div>
                    <div className="new-feed-title-container">
                        <input type="text" placeholder="Title" value={this.state.title} onChange={this.update('title')} />
                    </div>
                    <div>
                        <div className="new-feed-category-container">

                            <div style={{ padding: '25px' }}>

                                <select className="new-feed-select" defaultValue="" onChange={this.update('category_id')}>
                                    <option value="">--Select a Category--</option>
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
                                <label htmlFor="new-feed-file">
                                    <i id="attachment-icon" className="material-icons">
                                        add_circle_outline
                                    </i>
                                </label>
                            </div>

                        </div>
                        <div>
                            <div>
                                <input id="new-feed-file" type="file" onChange={this.handleFile} />
                            </div>
                        </div>
                        <div className="new-feed-picture-preview">
                            {preview}
                        </div>

                        <div className="new-feed-textarea">
                            <textarea
                                id="description-id"
                                placeholder="Content"
                                // cols="20" 
                                // rows="1" 
                                value={this.state.body}
                                onChange={this.update('body')}
                                onKeyUp={this.doResize}
                            ></textarea>
                        </div>

                    </div>

                </form>
                
            </div>
        );
    }
}

export default withRouter(NewFeedItem);