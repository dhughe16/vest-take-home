/**
 * @jest-environment jsdom
 */

import { render, screen } from '@testing-library/react';
import SymbolSummary from './SymbolSummary.component';

const symbolData = {
    "symbol": "AAPL",
    "name": "Apple Inc.",
    "sector": "Technology",
    "subSector": "Consumer Electronics",
    "currentValue": 245760,
    "shares": 1230,
    "avgCostBasis": 165.40,
    "currentPrice": 199.80,
    "dayChange": 4.20,
    "dayChangePercent": 2.14,
    "totalReturn": 42294,
    "totalReturnPercent": 20.78,
    "weight": 24.58,
    "beta": 1.26,
    "dividendYield": 0.52,
    "peRatio": 28.7,
    "marketCap": 3120000000000,
    "lastUpdated": "2024-06-22T16:00:00Z",
    "corporateActions": [],
    "riskMetrics": {
      "volatility": 0.28,
      "sharpeRatio": 1.34,
      "maxDrawdown": -0.15
    }
  }

describe('MainChart', () => {
  it('renders the main chart if there is a symbol', () => {
    render(<SymbolSummary symbol={symbolData}/>)
 
    const chart = screen.getByTestId('symbol-summary');
 
    expect(chart).toBeInTheDocument();
  })

    it('renders the main chart if there is no symbol', () => {
    render(<SymbolSummary symbol=""/>)
 
    const chart = screen.getByTestId('symbol-summary');
 
    expect(chart).toBeInTheDocument();
  })
})