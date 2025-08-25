// eslint-disable-next-line @typescript-eslint/no-require-imports
require('@testing-library/jest-dom');
import 'jest-canvas-mock';

// jest.setup.js
global.ResizeObserver = class ResizeObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
};
