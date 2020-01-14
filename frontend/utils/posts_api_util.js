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

export const createPost = post => (
    $.ajax({
        url: 'api/posts',
        method: 'POST',
        data: {post}
    })
);