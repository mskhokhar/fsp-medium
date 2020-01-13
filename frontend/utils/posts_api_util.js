export const retrieveAllPosts = () => (
    $.ajax({
        url: 'api/posts'
    })
);

export const retrievePost = post => (
    $.ajax({
        url: `api/posts/${post.id}`
    })
);

export const createPost = post => (
    $.ajax({
        url: 'api/posts',
        method: 'POST',
        data: {post}
    })
);