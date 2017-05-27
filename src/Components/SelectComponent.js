import React from 'react';
import PropTypes from 'prop-types';

const SelectComponent = ({label, defaultValue, source, onChange}) => (
    <label>{label}:
        <select onChange={onChange}>
            <option value=""> {defaultValue}</option>
            {Object.keys(source).map(item =>  <option key={item} value={item}>{source[item]}</option>)}
        </select>
    </label>
);

SelectComponent.propTypes = {
    defaultValue: PropTypes.string,
    label: PropTypes.string,
    source: PropTypes.object.isRequired
};

export default SelectComponent;
