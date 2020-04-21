
![logo](https://github.com/mskhokhar/fsp-medium/blob/master/app/assets/images/logo.png)

[Blogium Live](https://blogium.herokuapp.com/#/)

Blogium is a project developed by software dev that hopes to let everyone who joins it to publish there knowledge and viewpoint about certain subjects. The site displays all the posts previously published by the users and the fav picks of the site developer. Users can add the articles and like them and responses to each article and user could follow other user in the future update.

![home](https://github.com/mskhokhar/fsp-medium/blob/master/app/assets/images/home.gif)


# Technical Specs

Things you may want to cover:

* Ruby 2.5.1

* Rails 5.2.4

* React 16.12.0

* React-redux 7.1.3

* Jbuilder 2.5

* Jquer-rails

* PostgreSQL

* redux-persist

# Features in development:

* User can view all posts.

* User can see top 5 most liked posts on the website.

* User can see editor's picks.

![index](https://github.com/mskhokhar/fsp-medium/blob/master/app/assets/images/index.png)

* User can view the post with details.

* User can like and unlike a post.

* User can update a post.

* User can delete a post.

![postItem](https://github.com/mskhokhar/fsp-medium/blob/master/app/assets/images/postItem.gif)

* User can add a new post.

![newPost](https://github.com/mskhokhar/fsp-medium/blob/master/app/assets/images/newPost.png)

* User can see profiles of other authors and their posts.

* Post thunk actions: 

``` javascript
export const RECEIVE_ALL_POSTS = 'RECEIVE_ALL_POSTS';
export const RECEIVE_POST = 'RECEIVE_POST';
export const DELETE_LIKE = "DELETE_LIKE";
export const DESTROY_POST = "DESTROY_POST";
export const RECEIVE_CREATE_POST_ERRORS = 'RECEIVE_CREATE_POST_ERRORS';
export const START_RECEIVING_ALL_POSTS = 'START_RECEIVING_ALL_POSTS';
export const START_RECEIVING_POST = 'START_RECEIVING_POST';

const receiveAllPosts = payload => {
    return {
        type: RECEIVE_ALL_POSTS,
        payload
    };
};

export const receivePost = post => {
    return {
        type: RECEIVE_POST,
        post
    };
};

export const startReceivinAllPost = () => {
    return{
        type: START_RECEIVING_ALL_POSTS
    };
};
export const startReceivingPost = () => {
    return{
        type: START_RECEIVING_POST
    };
};

const destroyPost = postId => ({
    type: DESTROY_POST,
    postId
})


export const receiveCreatePostErrors = errors => ({
    type: RECEIVE_CREATE_POST_ERRORS,
    errors
});

export const fetchPosts = () => dispatch => {
    dispatch(startReceivinAllPost());
    return retrieveAllPosts()
        .then(posts => dispatch(receiveAllPosts(posts)))
};

export const fetchPost = postId => dispatch => {
    dispatch(startReceivingPost());
    return retrievePost(postId)
        .then(post => dispatch(receivePost(post)))
};

export const createNewFeedItem = post  => createPost(post);

export const deletePost = postId => dispatch => removePost(postId)
    .then( () => {
        dispatch(destroyPost(postId))
    } );

export const updatePost = (formData, postId) => editPost(formData,postId);
```

![index](https://github.com/mskhokhar/fsp-medium/blob/master/app/assets/images/profile.png)



# To Contribute:

To fix a bug or enhance an existing module, follow these steps:

Fork the repo

* Create a new branch (git checkout -b improve-feature)

* Make the appropriate changes in the files

* Add changes to reflect the changes made

* Commit your changes (git commit -am 'Improve feature')

* Push to the branch (git push origin improve-feature)

* Create a Pull Request

# Local install instructions:

* Make sure to have PostgresQL running

* Open new terminal in the project directory and run the following in sequence:
  * bundle install
  * npm install
  * rails db:setup
* Run npm start and keep this terminal open (in the project directory)
* Run rails s in a new terminal and keep it open as well (in the project directory)
