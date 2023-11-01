import React from 'react';

function InputField({label, type, name, placeholder, minLength}) {
    return (
        <div className="flex flex-col gap-2">
            <label htmlFor={name} className="text-gray-100">
                {label}
            </label>
            <input
                type={type}
                name={name}
                placeholder={placeholder}
                minLength={minLength}
                className="bg-[#111113] border p-1.5 rounded-md w-full"/>
        </div>
    );
}

export default InputField;
