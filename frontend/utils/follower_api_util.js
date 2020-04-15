export const postFollower = follower => (
    $.ajax({
        url: 'api/followers',
        method: 'POST',
        data: { follower }
    })
);
export const removeFollower = followId => (
    $.ajax({
        url: `api/followers/${followId}`,
        method: 'DELETE'
    })
);

export const getFollowers = () => (
    $.ajax({
        url: 'api/followers'
    })
);