// src/types/global.d.ts
export {};

declare global {
  interface Window {
    // Using 'any[]' is common here since the gtag arguments are complex and variable
    gtag: (...args: unknown[]) => void; 
  }
}