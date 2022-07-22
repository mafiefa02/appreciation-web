export default function Form(props) {
  return (
    <div className={props.divClass}>
      <label
        className="flex w-full max-w-lg justify-start text-white text-sm font-bold mb-2"
        for={props.id}
      >
        <>{props.label}</>
      </label>
      <input
        className="shadow appearance-none border rounded w-full max-w-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id={props.id}
        type={props.type}
        placeholder={props.placeholder}
        onChange={props.onChange}
      />
    </div>
  );
}
