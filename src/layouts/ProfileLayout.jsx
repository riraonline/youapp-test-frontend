import React from "react";
import ProfilePicture from "../components/Profile/ProfilePicture";
import ProfileData from "../components/Profile/ProfileData";

const ProfileLayout = () => {
  return (
    <>
      <div className="flex flex-row justify-around h-20 items-center">
        <div className="text-white flex flex-row items-center justify-evenly">
          <div className="text-4xl font-bold">&lt;</div>
          <span className="text-xl ps-2 pt-[7px] h-10 flex self-center">
            Back
          </span>
        </div>
        <span className="text-white text-md font-bold">@username</span>
        <span className="text-white">
          <i className="bx bx-dots-horizontal bx-md"></i>
        </span>
      </div>
      <div className="mx-3">
        <ProfilePicture />
      </div>
      <div className="mx-3 my-4 h-auto flex flex-col justify-start">
        <ProfileData
          menu="About"
          title="Add in your to help others know you better"
        />
        <ProfileData
          menu="Interest"
          title="Add in your interest to find a better match"
        />
      </div>
    </>
  );
};

export default ProfileLayout;
