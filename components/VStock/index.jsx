import React from "react";
import Image from "next/image";

const VStock = ({ className, src }) => {
  return (
    <div>
      <Image
        className={`${className} pointer-events-none`}
        src={src}
        alt={"image"}
        loading="lazy"
      />
    </div>
  );
};

export default VStock;
