import React from "react";
import Image from "next/image";

import userAvatar from "../../public/userAvatar.png";

const UserProfile = ({ user, className, position }) => {
  return (
    <div
      className={`not-prose flex flex-col items-center gap-10 mb-14 justify-${
        position ? position : "start"
      }`}
    >
      <div className={`${className} rounded-full overflow-hidden object-cover`}>
        <Image
          src={user.avatar ? user.avatar : userAvatar}
          className={`pointer-events-none`}
          alt={"user avatar"}
        />
      </div>
      <div
        className={`flex flex-col items-center justify-center gap-2 text-background`}
      >
        <p className={`sm:text-4xl text-xl font-extrabold capitalize`}>
          {user.firstName ? user.firstName : "Budi"}{" "}
          {user.lastName ? user.lastName : "Budi"}
        </p>
        <p className={`sm:text-lg text-md`}>
          {user.bidang ? user.bidang : "Budi"} -{" "}
          {user.jabatan ? user.jabatan : "Budi"}{" "}
          {user.divisi ? user.divisi : null}
        </p>
      </div>
    </div>
  );
};

export default UserProfile;
