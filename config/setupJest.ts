import 'jest-preset-angular';

// Polyfills
// import 'raf/polyfill';

// Rxjs pipable operators
// import './app/rxjs';

Object.defineProperty(window, 'getComputedStyle', {
  value: () => ['-webkit-appearance'],
});

// Error.stackTraceLimit = 1;