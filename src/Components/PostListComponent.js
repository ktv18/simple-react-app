import React from 'react';
import PropTypes from 'prop-types';
import PostComponent from './PostComponent';

const postListComponent = ({posts}) => (
    <div>
        {posts.map(post => (
            <PostComponent
                key={post.id}
                {...post}
            />
        ))}
    </div>
);

postListComponent.defaultProps = {
    posts: []
};

postListComponent.propTypes = {
    posts: PropTypes.array.isRequired
};

export default postListComponent;