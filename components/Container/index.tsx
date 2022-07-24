interface ContainerProps {
  children: React.ReactNode;
}

export default function Container(props: ContainerProps) {
  return (
    <>
      <div
        className={`flex flex-col absolute top-0 bottom-0 left-0 right-0 min-h-full max-h-fit justify-center items-center gap-8 pt-40 pb-40 pl-24 pr-24`}
      >
        {props.children}
      </div>
    </>
  );
}
