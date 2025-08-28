"use client"

import React from 'react';
import { Accordion, AccordionTab } from 'primereact/accordion';     
import { Holding } from '../../interfaces/Holding';

export default function SymbolSummary({ symbol }: { symbol: Holding | undefined}) {
    if (!symbol) {
        return <div data-testid="symbol-summary" className="text-gray-900">Please select a symbol from the dropdown above.</div>;
    }
    const date = new Date(symbol.lastUpdated);

    return (
        <div data-testid="symbol-summary" className="text-gray-900">
            <h3 className="text-2xl font-bold">{symbol.name}</h3>
            <p className="text-sm text-gray-600 mb-2">Last Updated: {date.toLocaleTimeString()} {date.toLocaleDateString()}</p>
            <p>Sector: {symbol.sector}</p>
            <p className="text-sm text-gray-600 mb-2">Sub-Sector: {symbol.subSector}</p>
            <Accordion className="mb-3">
                <AccordionTab header="Expand current value and shares details">
                    <p>Current Value: ${symbol.currentValue.toLocaleString()}</p>
                    <p>Shares: {symbol.shares}</p>
                    <p>Avg. Cost Basis: ${symbol.avgCostBasis.toFixed(2)}</p>
                    <p>Current Price: ${symbol.currentPrice.toFixed(2)}</p>
                    <p>Day Change: ${symbol.dayChange.toFixed(2)} ({symbol.dayChangePercent.toFixed(2)}%)</p>
                    <p>Total Return: ${symbol.totalReturn.toLocaleString()} ({symbol.totalReturnPercent.toFixed(2)}%)</p>
                    <p>Weight: {symbol.weight.toFixed(2)}%</p>
                    <p>Beta: {symbol.beta.toFixed(2)}</p>
                    {symbol.dividendYield !== undefined && <p>Dividend Yield: {symbol.dividendYield.toFixed(2)}%</p>}
                    {symbol.peRatio !== undefined && <p>P/E Ratio: {symbol.peRatio.toFixed(2)}</p>}
                    <p className="mb-3">Market Cap: ${symbol.marketCap.toLocaleString()}</p>
                </AccordionTab>
            </Accordion>
            <div>
                <h4 className="text-lg font-bold">Risk Metrics</h4>
                <p>Volatility: {symbol.riskMetrics.volatility.toFixed(2)}%</p>
                <p>Sharpe Ratio: {symbol.riskMetrics.sharpeRatio.toFixed(2)}</p>
                <p>Max Drawdown: {symbol.riskMetrics.maxDrawdown}</p>
            </div>
        </div>
    )
}
