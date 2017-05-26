import React from 'react';
import PropTypes from 'prop-types';

const SelectComponent = ({source, label, onChange}) => (
    <label>{label}:
        <select onChange={onChange}>
            <option value=""> select the value</option>
            {Object.keys(source).map(item =>  <option key={source[item]} value={source[item]}>{item}</option>)}
        </select>
    </label>
);

SelectComponent.propTypes = {
    label: PropTypes.string,
    source: PropTypes.object.isRequired
};

export default SelectComponent;
