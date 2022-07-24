import { ChangeEventHandler } from "react";

interface FormProps {
  divClass?: string,
  children?: React.ReactNode,
  id: string,
  label: string,
  type: string,
  placeholder: string,
  onChange: ChangeEventHandler<HTMLInputElement>
}

export default function Form(props: FormProps) {
  return (
    <div className={props.divClass}>
      <label
        className="flex w-full max-w-md justify-start text-primary text-sm font-bold mb-2"
        htmlFor={props.id}
      >
        <p className="text-background">{props.label}</p>
      </label>
      <input
        className="shadow appearance-none border rounded w-full max-w-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id={props.id}
        type={props.type}
        placeholder={props.placeholder}
        onChange={props.onChange}
      />
    </div>
  );
}
