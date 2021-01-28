import React from "react";
import { MyPostsContainer } from "./MyPostsContainer";
import { ProfileInfo } from "./ProfileInfo";

export const Profile = () => {
  //look props
  return (
    <div>
      <ProfileInfo />
      <MyPostsContainer />
    </div>
  );
};
