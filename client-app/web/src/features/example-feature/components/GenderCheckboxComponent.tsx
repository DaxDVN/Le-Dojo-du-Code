import React from 'react';

function GenderCheckboxComponent({gender,value}) {
    return (
        <label className="flex-1 flex items-center space-x-2 border border-gray-300 rounded-lg p-2 text-center">
            <span className="text-gray-700">{gender}</span>
            <input type="radio" name="gender" value={value} className="form-radio text-blue-600"/>
        </label>
    );
}

export default GenderCheckboxComponent;