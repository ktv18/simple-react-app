import React from 'react';
//import PropTypes from 'prop-types';

const postComponent = ({title, body, name, company, address}) => (
    <article>
        <h2>{title}</h2>
        <span>{name}</span> - <span>{company.name}</span> - <span>{address.city}</span>
        <p>{body}</p>
    </article>
);

postComponent.defaultProps = {
    company: {},
    address: {}
};

export default postComponent;