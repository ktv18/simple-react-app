import React from 'react';
import PostComponent from './PostComponent';

const postList = ({posts}) => (
    <div>
        {posts.map(post => (
            <PostComponent
                key={post.id}
                {...post}
            />
        ))}
    </div>
);

export default postList;