import { MouseEventHandler } from "react";

interface ButtonProps {
  children?: React.ReactNode;
  className?: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
  textColor?: string;
  content: string;
}

export default function Button(props: ButtonProps) {
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
