import React from 'react';

const TextField = ({ name, type, placeholder }) => (
  <div className="relative mx-10 self-stretch">
    <input
      name={name}
      type={type}
      placeholder={placeholder}
      className="peer my-5 w-full border-b-2 py-2 placeholder-transparent focus:border-jade-600 focus:outline-none"
    />
    <label
      htmlFor={name}
      className="pointer-events-none absolute top-6 left-0 text-base text-carbon-500 transition-all peer-focus:top-0 peer-focus:text-sm peer-focus:text-carbon-400"
    >
      {placeholder}
    </label>
  </div>
);

export default TextField;
