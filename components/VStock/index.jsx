import React from "react";
import Image from "next/image";

const VStock = (props) => {
  return (
    <div>
      <Image
        className={`${props.className} pointer-events-none`}
        src={props.src}
        alt={"image"}
      />
    </div>
  );
};

export default VStock;
