import { MouseEventHandler } from "react";

export default function Button(props) {
  return (
    <>
      <button
        className={`grid place-content-center pb-3 pt-3 pl-7 pr-7 bg-primary-default hover:bg-primary-light rounded-full ${props.className}`}
        onClick={props.onClick}
      >
        <p className={`text-${props.textColor} font-bold`}>{props.content}</p>
      </button>
    </>
  );
}
