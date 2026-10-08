import Image from "next/image";
import NavbarLink from "./NavbarLink";
import Link from "next/link";
import UserInfo from "./UserInfo";
import DatePage from "./DatePage";
import Mosquee from "./mosquee";

const NavbarPage = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 shadow-sm backdrop-blur-md">
      <div className="mx-auto flex min-h-[80px] w-full max-w-6xl items-center justify-between gap-3 px-4 sm:px-6">
        <div className="flex min-w-0 items-center gap-2 sm:gap-3">
          <Link href="/">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-green-600 sm:h-12 sm:w-12">
              <Image
                src="/logo-icon.png"
                alt="বাজার দর"
                width={40}
                height={40}
                className="object-contain"
              />
            </div>
          </Link>

          <div className="min-w-0 leading-tight">
            <h1 className="text-[18px] font-bold text-gray-800 sm:text-[20px]">
              বাজার দর
            </h1>

            <DatePage className="text-[10px] text-gray-500"></DatePage>
          </div>
        </div>

        <div className="shrink-0">
          <UserInfo></UserInfo>
        </div>
      </div>

      <NavbarLink></NavbarLink>
      
    </header>
  );
};

export default NavbarPage;