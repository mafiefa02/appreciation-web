import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <div className="absolute top-0 w-full flex flex-row justify-start items-center gap-5 p-5 bg-neutral-800 text-white">
        <Link href={"/"}>
          <a className="font-bold tracking-wide">BPA FMIPA&apos;21 ITB</a>
        </Link>
      </div>
    </>
  );
}
