import React, { useContext } from "react";
import UserContext from "../context/UserContext";

const Profile = () => {
  const { user } = useContext(UserContext);

  return (
    <div>
      <h2>Profile</h2>
      {!user ? (
        <h4>Not Logged-In</h4>
      ) : (
        <div>
          <h4>Username: {user.username}</h4>
          <h4>Password: {user.password}</h4>
        </div>
      )}
    </div>
  );
};

export default Profile;
