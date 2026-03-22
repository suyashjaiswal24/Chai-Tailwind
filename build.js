const fs = require('fs');
const path = require('path');

// Create dist directory if it doesn't exist
const distDir = path.join(__dirname, 'dist');
if (!fs.existsSync(distDir)) {
    fs.mkdirSync(distDir);
}

console.log('Building ChaiTailwind...');

// Read source files
const stylesContent = fs.readFileSync(path.join(__dirname, 'styles.js'), 'utf8');
const coreContent = fs.readFileSync(path.join(__dirname, 'core.js'), 'utf8');
const mainContent = fs.readFileSync(path.join(__dirname, 'main.js'), 'utf8');

// Combine all files
const combined = `/*!
 * ChaiTailwind v1.0.0
 * A lightweight, runtime CSS utility framework
 * https://github.com/yourusername/chaitailwind
 * MIT License
 */

(function() {
    'use strict';

${stylesContent}

${coreContent}

${mainContent}

})();
`;

// Write unminified version
fs.writeFileSync(path.join(distDir, 'chaitailwind.js'), combined);
console.log('✓ Created dist/chaitailwind.js');

// Create a basic minified version (simple whitespace removal)
// For production, you'd want to use a proper minifier like terser
const minified = combined
    .replace(/\/\*[\s\S]*?\*\//g, '') // Remove multi-line comments (except the banner)
    .replace(/\/\/.*/g, '') // Remove single-line comments
    .split('\n')
    .map(line => line.trim())
    .filter(line => line.length > 0)
    .join('\n');

// Add back the banner
const banner = `/*! ChaiTailwind v1.0.0 | MIT License | https://github.com/yourusername/chaitailwind */\n`;
const minifiedWithBanner = banner + minified;

fs.writeFileSync(path.join(distDir, 'chaitailwind.min.js'), minifiedWithBanner);
console.log('✓ Created dist/chaitailwind.min.js');

console.log('\nBuild complete! 🎉');
console.log(`Total size: ${Math.round(Buffer.byteLength(combined) / 1024)}KB (unminified)`);
console.log(`Total size: ${Math.round(Buffer.byteLength(minifiedWithBanner) / 1024)}KB (minified)`);
