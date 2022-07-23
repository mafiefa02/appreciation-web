import Link from "next/link";

export default function Button(props) {
  return (
    <>
      <button
        className={`grid place-content-center pb-3 pt-3 pl-7 pr-7 bg-${props.bg} rounded-full ${props.className}`}
        onClick={props.onClick}
      >
        <p className={`text-${props.textColor} font-${props.fontWeight}`}>
          {props.content}
        </p>
      </button>
    </>
  );
}
