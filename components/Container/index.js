export default function Container(props) {
  return (
    <>
      <div className="flex flex-col justify-center items-center gap-8 w-full h-screen p-16">
        {props.children}
      </div>
    </>
  );
}
