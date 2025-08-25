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
        <div className="card bg-[#00808F] rounded-md p-3 w-[100%]">
          <p >Total Portfolio Value</p>
          <div className="text-2xl font-bold">$1,000,000</div>
        </div>
        <div className="card bg-white rounded-sm p-3 w-[100%]">
          <MainChart/>
        </div>
        <div className="summary-cards flex gap-[16px]">
          <div className="card rounded-md p-3 bg-white text-gray-900">
            <p className="text-sm text-greeen-600">Today&#39;s Δ</p>
            <div className="text-xl font-bold">+$1,234.56</div>
          </div>
          <div className="card rounded-md p-3 bg-white text-gray-900">
            <p className="text-sm">Top Performer</p>
            <div className="text-xl font-bold">DASH</div>
          </div>
          <div className="card rounded-md p-3 bg-white text-gray-900">
            <p className="text-sm">% Target</p>
            <div className="text-xl font-bold">89%</div>
          </div>
        </div>
        <button className="primary bg-[#FF7619] rounded-sm p-3 font-bold text-lg text-white">View Summary</button>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center m-3">
        <p className="text-xs text-[#7db2c8d6]">
          By using this website, you accept the Terms of Use and Privacy Policy.
        </p>
      </footer>
    </div>
  );
}
