"use client";

import Image from "next/image";
import SymbolSummary from "../components/SymbolSummary/SymbolSummary.component";
import Link from "next/link";
import holdingsData from "../../data/holdings.json";
import { Dropdown } from 'primereact/dropdown';
import React from "react";

const findSymbolData = (symbol: string) => {
  return holdingsData.find((item) => item.symbol === symbol);
}

export default function Home() {
  const [selectedSymbol, setSelectedSymbol] = React.useState(null);

  const symbols = holdingsData.map((item) => ({
    name: item.symbol,
    code: item.symbol
  }));

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
      <div
        className="card bg-white rounded-md p-3 w-[100%]"
      >
        
      <Dropdown value={selectedSymbol} onChange={(e) => setSelectedSymbol(e.value)} options={symbols} optionLabel="name" 
        placeholder="Select a symbol" className="w-full md:w-14rem" />
        {selectedSymbol && <SymbolSummary symbol={findSymbolData(selectedSymbol.name)} />}
      </div>
      <Link href="/" passHref>
          <button className="primary bg-[#FF7619] rounded-sm p-3 font-bold text-lg text-white">View Performance</button>
        </Link>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center m-3">
        <p className="text-xs text-[#7db2c8d6]">
          By using this website, you accept the Terms of Use and Privacy Policy.
        </p>
      </footer>
    </div>
  );
}
