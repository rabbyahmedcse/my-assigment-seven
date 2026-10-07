import Image from "next/image";
import HeroPage from "./component/Hero";
import CostUpDownPage from "./component/CostUpDown";


export default function Home() {
  return (
    <div className=" flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans">
   
      <HeroPage></HeroPage>
      <CostUpDownPage/>
    </div>
  );
}
