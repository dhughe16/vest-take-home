import Image from "next/image";
import MainChart from "./components/MainChart/MainChart.component";

export default function Home() {
  return (
    <div className="font-sans">
      <header>
        <Image 
          className="p-2"
          src="/logo.svg"             
          alt="Vest icon"
          width={100}
          height={32}>
        </Image>
      </header>
      <main className="flex flex-col gap-[32px] row-start-2 items-center justify-items-center p-4">
        <div className="card bg-white rounded-sm p-3 w-[100%]">
          <MainChart/>
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center m-3">
        <p className="text-xs text-[#7db2c8d6]">
          By using this website, you accept the Terms of Use and Privacy Policy.
        </p>
      </footer>
    </div>
  );
}
