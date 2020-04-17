export const postComment = comment => (
    $.ajax({
        url: 'api/comments',
        method: 'POST',
        data: { comment }
    })
);

export const getComments = () => (
    $.ajax({
        url: 'api/comments'
    })
);

export const removeComment = commentId => (
    $.ajax({
        url: `api/comments/${commentId}`,
        method: 'DELETE'
    })
);