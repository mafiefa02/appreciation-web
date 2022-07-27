export default function Footer() {
  let newDate = new Date();
  let year = newDate.getFullYear();

  return (
    <>
      <div className="fixed bottom-0 w-full flex flex-row justify-center items-center pb-5 pt-5 sm:text-sm text-[10px] bg-background text-white z-[99]">
        <p>
          &copy; {year} Media Komunikasi dan Informasi BPA FMIPA&apos;21 ITB
        </p>
      </div>
    </>
  );
}
