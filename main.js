// ===============================
// ☕ ChaiTailwind - Entry Point
// ===============================
//
// ChaiTailwind: Runtime CSS utility framework
//
// This file initializes the framework by:
// 1. Loading utilities from styles.js
// 2. Loading core logic from core.js
// 3. Running the initial style application
// 4. Starting the DOM observer
//
// ===============================

// Initial run - apply styles to existing elements
applyChaiStyles();

// Start watching DOM for changes
startObserver();

console.log('☕ ChaiTailwind initialized');
