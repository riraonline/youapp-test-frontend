import React from "react";

const InputForm = (props) => {
  const { type, name, title } = props;
  return (
    <input
      type={type}
      name={name}
      placeholder={title}
      className="py-4 px-4 rounded-xl text-white text-xl bg-white bg-opacity-5 outline-none"
    />
  );
};

export default InputForm;
