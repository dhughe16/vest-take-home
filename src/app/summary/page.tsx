"use client";

import Image from "next/image";
import SymbolSummary from "../components/SymbolSummary/SymbolSummary.component";
import Link from "next/link";
import holdingsData from "../../data/holdings.json";
import { Dropdown } from 'primereact/dropdown';
import { Menu } from 'primereact/menu';
import { Toast } from 'primereact/toast';
import { Button } from 'primereact/button';
import React, { useRef } from "react";

const findSymbolData = (symbol: string) => {
  return holdingsData.find((item) => item.symbol === symbol);
}

interface MenuItem {
    name: string;
    code: string;
}

export default function Home() {
  const [selectedSymbol, setSelectedSymbol] = React.useState<MenuItem>({ name: '', code: '' });
  const menu = useRef<Menu>(null);
  const toast = useRef<Toast>(null);

  const symbols = holdingsData.map((item) => ({
    name: item.symbol,
    code: item.symbol
  }));

  return (
    <div className="font-sans">
      <header className="flex justify-between">
        <Link href="/" passHref>
          <Image 
            className="p-2"
            src="/logo.svg"             
            alt="Vest icon"
            width={100}
            height={32}>
          </Image>
        </Link>
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
      <div
        className="card bg-white rounded-2xl p-3 w-[100%]"
      >
      <Dropdown value={selectedSymbol} onChange={(e) => setSelectedSymbol(e.value)} options={symbols} optionLabel="name" 
        placeholder="Select a symbol" className="w-14rem" />
        {selectedSymbol && <SymbolSummary symbol={findSymbolData(selectedSymbol.name)} />}
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
