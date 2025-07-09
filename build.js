const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('Building Regenerative Assets website...');

// Build Tailwind CSS
console.log('Building Tailwind CSS...');
try {
    execSync('npx tailwindcss -i ./src/css/styles.css -o ./src/css/tailwind.css --minify', { stdio: 'inherit' });
    console.log('Tailwind CSS built successfully');
} catch (error) {
    console.error('Error building Tailwind CSS:', error);
    process.exit(1);
}

// Build 11ty site
console.log('Building 11ty site...');
try {
    execSync('npx @11ty/eleventy', { stdio: 'inherit' });
    console.log('11ty site built successfully');
} catch (error) {
    console.error('Error building 11ty site:', error);
    process.exit(1);
}

console.log('Build completed successfully!'); 