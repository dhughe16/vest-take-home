export interface Holding {
symbol: string;
name: string;
sector: string;
subSector: string;
currentValue: number;
shares: number;
avgCostBasis: number;
currentPrice: number;
dayChange: number;

dayChangePercent: number;
totalReturn: number;
totalReturnPercent: number;
weight: number;
beta: number;
dividendYield?: number;
peRatio?: number;
marketCap: number;
lastUpdated: string;
corporateActions?: CorporateAction[];
riskMetrics: {
volatility: number;
sharpeRatio: number;
maxDrawdown: number;
};
}
interface CorporateAction {
type: "dividend" | "split" | "spinoff" | "merger";
date: string;
details: string;
impactOnShares?: number;
impactOnPrice?: number;
}