export default function Card(props) {
  return (
    <>
      <div
        className={`flex flex-col gap-5 p-12 shadow-xl shadow-stone-300 rounded-[20px] bg-${props.bg} justify-start`}
      >
        {props.children}
      </div>
    </>
  );
}
