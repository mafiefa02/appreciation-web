import Link from "next/link";
import Image from "next/image";
// import { useEffect, useState } from "react";
// import prisma from "../../db.ts";

export default function Navbar({ loggedIn }) {
  if (!loggedIn) {
    return (
      <>
        <div className="fixed top-0 w-full flex flex-row justify-start items-center gap-5 p-5 bg-background text-white z-[99]">
          <Image src="/logo.png" alt="logo" width={35} height={35} />
          <Link href={"/"}>
            <a className="font-bold tracking-wide">BPA FMIPA&apos;21 ITB</a>
          </Link>
        </div>
      </>
    );
  }
  return (
    <>
      <div className="fixed top-0 w-full flex flex-row justify-between items-center p-5 bg-background text-white z-[99]">
        <div className="flex flex-row items-center gap-5">
          <Image src="/logo.png" alt="logo" width={35} height={35} />
          <p className="font-bold tracking-wide">BPA FMIPA&apos;21 ITB</p>
        </div>
        <Link href={"/"}>
          <a className="font-bold tracking-wide">LOG OUT</a>
        </Link>
      </div>
    </>
  );
  // return (
  //   <>
  //     <div className="absolute top-0 w-full flex flex-row justify-start items-center gap-5 p-5 bg-background text-white z-[99]">
  //       <Image src="/logo.png" alt="logo" width={35} height={35} />
  //       <Link href={"/"}>
  //         <a className="font-bold tracking-wide">BPA FMIPA&apos;21 ITB</a>
  //       </Link>
  //     </div>
  //   </>
  // );
}
// const [userLoggedIn, setUserLoggedIn] = useState({});
// console.log(dataUser);

// function returnLoggedInUser() {
//   let userData = sessionStorage.getItem("loggedInUser");
//   if (userData) {
//     function checkNim(user) {
//       return user.nim === userData;
//     }
//     const loggedInUser = dataUser.find(checkNim);
//     return loggedInUser;
//   } else {
//     return {};
//   }
// }

// useEffect(() => {
//   setUserLoggedIn(returnLoggedInUser);
// }, []);

// if (!userLoggedIn) {
//   return (
//     <>
//       <div className="absolute top-0 w-full flex flex-row justify-start items-center gap-5 p-5 bg-neutral-800 text-white">
//         <Link href={"/"}>
//           <a className="font-bold tracking-wide">BPA FMIPA&apos;21 ITB</a>
//         </Link>
//       </div>
//     </>
//   );
// } else {
//   <>
//     <div className="absolute top-0 w-full flex flex-row justify-evenly items-center gap-5 p-5 bg-neutral-800 text-white">
//       <Link href={"/"}>
//         <a className="font-bold tracking-wide">BPA FMIPA&apos;21 ITB</a>
//       </Link>
//       <p>
//         Logged in as{" "}
//         <b>{`${userLoggedIn.firstName} ${userLoggedIn.lastName}`}</b>
//       </p>
//     </div>
//   </>;
// }

// export async function getStaticProps() {
//   const dataUser = await prisma.user.findMany();

//   return {
//     props: {
//       dataUser,
//     },
//   };
// }
