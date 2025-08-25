/**
 * @jest-environment jsdom
 */

import { render, screen } from '@testing-library/react';
import SymbolSummary from './SymbolSummary.component';

describe('MainChart', () => {
  it('renders the main chart', () => {
    render(<SymbolSummary symbol="A"/>)
 
    const chart = screen.getByTestId('symbol-summary');
 
    expect(chart).toBeInTheDocument();
  })
})