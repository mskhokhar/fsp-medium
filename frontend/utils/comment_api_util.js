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