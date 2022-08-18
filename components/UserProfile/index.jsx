import React from "react";
import Image from "next/image";
import getRawDrive from "../../lib/getRawDrive.ts";

import userAvatar from "../../public/userAvatar.png";

const UserProfile = ({ user, className, position }) => {
  return (
    <div
      className={`not-prose flex flex-col items-center gap-10 mb-14 justify-${
        position ? position : "start"
      }`}
    >
      <div
        className={`${className} rounded-full overflow-hidden object-contain`}
      >
        <Image
          src={user.avatar ? getRawDrive(user.avatar) : userAvatar}
          width={200}
          height={200}
          className={`pointer-events-none`}
          alt={"user avatar"}
          loading="lazy"
        />
      </div>
      <div
        className={`flex flex-col items-center justify-center gap-2 text-background`}
      >
        <p
          className={`sm:text-4xl text-xl font-extrabold capitalize text-center`}
        >
          {user.firstName ? user.firstName : "Budi"}{" "}
          {user.lastName ? user.lastName : "Budi"}
        </p>
        <div className="flex flex-col items-center justify-center gap-[0.4em]">
          <p className={`text-[15px] sm:text-[17px] text-center`}>
            {user.bidang ? user.bidang : "Budi"}
          </p>
          <p className={`text-[14px] sm:text-[16px] text-center`}>
            {user.divisi ? `Divisi ${user.divisi}` : null}
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
