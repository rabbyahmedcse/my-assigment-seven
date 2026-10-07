
import Image from "next/image";
import NavbarLink from "./NavbarLink";


const NavbarPage = () => {
  
    // const date = new Date().toLocaleDateString(
    //     "bn-BD", {
    //         dateStyle:'full'
    //     }
    // )
 


   
 

  return (
    <header className="border-t-2  border-b border-gray-100 bg-white">
      <div className="mx-auto flex h-[80px] max-w-[1100px] items-center justify-between px-6">

        {/* Left Side */}
        <div className="flex items-center gap-3">

          {/* Logo */}
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-600">
            <Image
              src="/logo-icon.png"
              alt="বাজার দর"
              width={40}
              height={40}
              className="object-contain"
            />
          </div>

          {/* Website Name */}
          <div className="leading-tight">
            <h1 className="text-[20px] font-bold text-gray-800">
              বাজার দর
            </h1>

            <p className="text-[10px] text-gray-500">
              {/* {date} */}
            </p>
          </div>

        </div>

        {/* Right Side */}
        <div className="flex items-center gap-6">

          <button className="rounded-md border border-green-600 bg-white px-5 py-2 text-sm font-semibold text-green-600 transition hover:bg-green-600 hover:text-white">
            সাইন ইন
          </button>

          <button className="rounded-md border border-green-600 bg-white px-5 py-2 text-sm font-semibold text-green-600 transition hover:bg-green-600 hover:text-white">
            সাইন আপ
          </button>

        </div>

      </div>
      <NavbarLink></NavbarLink>
    </header>
  );
};

export default NavbarPage;