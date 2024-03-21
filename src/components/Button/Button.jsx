import React from "react";

const Button = (props) => {
  const { title } = props;
  return (
    <input
      type="submit"
      value={title}
      className="text-white text-xl font-bold rounded-xl py-3 bg-gradient-to-r from-cyan-500 to-blue-500"
    />
  );
};

export default Button;
