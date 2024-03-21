import React from "react";

const ProfileData = (props) => {
  const { menu, title } = props;

  return (
    <>
      <div className="bg-white bg-opacity-10 my-2 h-auto text-white rounded-xl px-3 py-2 flex flex-col">
        <div className="text-xl font-bold flex flex-row justify-between w-full">
          <span>{menu}</span>
          <span>
            <i className="bx bx-edit-alt"></i>
          </span>
        </div>
        <div className="w-full mt-7 mb-4">
          <textarea
            type="text"
            className="w-80 text-white text-lg bg-transparent outline-none"
            readOnly
            placeholder={title}
          />
        </div>
      </div>
    </>
  );
};

export default ProfileData;
