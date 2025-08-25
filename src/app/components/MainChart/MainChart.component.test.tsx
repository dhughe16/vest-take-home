/**
 * @jest-environment jsdom
 */

import { render, screen } from '@testing-library/react';
import MainChart from './MainChart.component';

describe('MainChart', () => {
  it('renders the main chart', () => {
    render(<MainChart />)
 
    const chart = screen.getByTestId('main-chart');
 
    expect(chart).toBeInTheDocument();
  })
})