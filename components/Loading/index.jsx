import React from "react";

const Loading = ({ loading }) => {
  return (
    <div
      className={`absolute top-16 z-[99] pt-4 pb-4 pr-8 pl-8 rounded-lg bg-primary-light ${
        loading ? "visible" : "invisible"
      }`}
    >
      <p className="text-background font-bold">Loading...</p>
    </div>
  );
};

export default Loading;
