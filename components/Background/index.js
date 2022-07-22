export default function Background(props) {
  return (
    <>
      <div className="min-w-full min-h-screen bg-[#121212]">
        {props.children}
      </div>
    </>
  );
}
