export const retrieveAllPosts = () => (
    $.ajax({
        url: 'api/posts'
    })
);

export const retrievePost = postId => (
    $.ajax({
        url: `api/posts/${postId}`
    })
);

export const createPost = formData => (
    $.ajax({
        url: 'api/posts',
        method: 'POST',
        data: formData,
        contentType: false,
        processData: false
    }).then(response => console.log('successfull', response))
);