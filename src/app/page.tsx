'use client';

import Image from "next/image";
import MainChart from "./components/MainChart/MainChart.component";
import { Toast } from 'primereact/toast';
import { Menu } from 'primereact/menu';
import { Button } from 'primereact/button';
import { MultiSelect,  MultiSelectChangeEvent} from 'primereact/multiselect';
        
import SymbolSummary from "./components/SymbolSummary/SymbolSummary.component";
import holdingsData from "../data/holdings.json";
import React, { useEffect, useRef, useState } from "react"; 

interface Symbol {
    name: string;
    code: string;
}

const findSymbolData = (symbol: string) => {
  return holdingsData.find((item) => item.symbol === symbol);
}

export default function Home() {
  const [selectedSymbols, setSelectedSymbols] = useState<Symbol[] | null>([]);
  const menu = useRef<Menu>(null);
  const toast = useRef<Toast>(null);

  const symbols = holdingsData.map((item) => ({
    name: item.symbol,
    code: item.symbol
  }));

  useEffect(() => {
    setSelectedSymbols(symbols[0] ? [symbols[0]] : []);
  }, []);

  return (
    <div className="font-sans">
      <header className="flex justify-between">
        <Image 
          className="p-2"
          src="/logo.svg"             
          alt="Vest icon"
          width={100}
          height={32}>
        </Image>
        <Toast ref={toast} />
        <Menu model={[
          { label: 'Performance', icon: 'pi pi-fw pi-chart-line', url: '/' },
          { label: 'Symbols', icon: 'pi pi-fw pi-chart-pie', url: '/summary' },]} 
          ref={menu}
          id="popup_menu"
          popup
          className="bg-white m-2"
          />
        <Button 
          icon="pi pi-bars" 
          onClick={(e) => menu.current && menu.current.toggle(e)} 
          aria-controls="popup_menu" 
          aria-haspopup
          className="m-2 text-white text-lg"
          />
      </header>
      <main className="flex flex-col gap-[32px] row-start-2 items-center justify-items-center p-4">
        <div className="card bg-[#00808F] rounded-2xl p-3 w-[100%] text-white">
          <p >Total Portfolio Value</p>
          <div className="text-2xl font-bold">$1,000,000</div>
        </div>
        <div className="card bg-white rounded-2xl p-3 w-[100%]">
          <MainChart/>
        </div>
        <div className="summary-cards flex gap-[16px]">
          <div className="card rounded-2xl p-3 bg-white text-gray-900">
            <p className="text-sm text-greeen-600">Today&#39;s Δ</p>
            <div className="text-xl font-bold">+$1,234.56</div>
          </div>
          <div className="card rounded-2xl p-3 bg-white text-gray-900">
            <p className="text-sm">Top Performer</p>
            <div className="text-xl font-bold">DASH</div>
          </div>
          <div className="card rounded-2xl p-3 bg-white text-gray-900">
            <p className="text-sm">% Target</p>
            <div className="text-xl font-bold">89%</div>
          </div>
        </div>              
        <div className="card bg-white rounded-2xl p-3 w-[100%]">
          <p className="mb-1">Choose up to 5 symbols to view using the dropdown below</p>
          <MultiSelect
            display="chip"
            value={selectedSymbols}
            maxSelectedLabels={5}
            selectionLimit={5}
            showSelectAll={false}
            showClear={true}
            onChange={(e: MultiSelectChangeEvent) => setSelectedSymbols(e.value)} 
            options={symbols} 
            optionLabel="name" 
            placeholder="Select symbol(s)" 
            className="border-gray-500 rounded-md" />
          <div className="flex flex-row flex-wrap">
            {selectedSymbols && 
              selectedSymbols.map((symbol) => {
                const data = findSymbolData(symbol.code);
                return data ? <SymbolSummary key={symbol.code} symbol={data} /> : null;
              })
            }
          </div>
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
