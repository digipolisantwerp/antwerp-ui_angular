import 'jest-preset-angular';
// import './app/rxjs';

// Polyfills
// import 'raf/polyfill';

Object.defineProperty(window, 'getComputedStyle', {
  value: () => ['-webkit-appearance'],
});

// Error.stackTraceLimit = 1;