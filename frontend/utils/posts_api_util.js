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
    })
);

export const removePost = postId => (
    $.ajax({
        url: `api/posts/${postId}`,
        method: 'DELETE'
    })
);

export const editPost = (formData, postId )=> (
    $.ajax({
        url: `api/posts/${postId}`,
        method: 'PATCH',
        data: formData,
        contentType: false,
        processData: false
    })
);