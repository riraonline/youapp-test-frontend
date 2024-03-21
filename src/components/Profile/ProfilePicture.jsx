import React from "react";

const ProfilePicture = () => {
  return (
    <>
      <div className="bg-white bg-opacity-15 rounded-xl text-xl font-bold text-white h-52 flex flex-col justify-between py-2 px-3">
        <span className="float-right flex justify-end">
          <i className="bx bx-edit-alt bx-sm"></i>
        </span>
        <span>@username,</span>
      </div>
    </>
  );
};

export default ProfilePicture;
