export const postLike = like => (
    $.ajax({
        url: 'api/likes',
        method: 'POST',
        data: { like }
    })
);
export const removeLike = likeId => (
    $.ajax({
        url: `api/likes/${likeId}`,
        method: 'DELETE'
    })
);

export const getLikes = () => (
    $.ajax({
        url: 'api/likes'
    })
);