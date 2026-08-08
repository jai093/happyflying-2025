#!/usr/bin/env node

/**
 * Copy Public Folder to Standalone Build
 * 
 * When using Next.js with `output: 'standalone'`, the public folder is not
 * automatically included. This script ensures all static assets are available
 * in the standalone build for production deployments.
 * 
 * Run after build: npm run build
 */

const fs = require('fs');
const path = require('path');

function copyRecursive(src, dest) {
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }

  const files = fs.readdirSync(src);

  files.forEach((file) => {
    const srcPath = path.join(src, file);
    const destPath = path.join(dest, file);

    if (fs.lstatSync(srcPath).isDirectory()) {
      copyRecursive(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
      console.log(`✓ Copied: ${file}`);
    }
  });
}

try {
  const publicSrc = path.join(__dirname, '..', 'public');
  const standaloneDir = path.join(__dirname, '..', '.next', 'standalone');
  const publicDest = path.join(standaloneDir, 'public');

  // Check if standalone build exists
  if (!fs.existsSync(standaloneDir)) {
    console.warn('⚠️  .next/standalone directory not found. Build may not have been successful.');
    console.log('   Run: npm run build');
    process.exit(1);
  }

  // Check if public folder exists
  if (!fs.existsSync(publicSrc)) {
    console.warn('⚠️  No public folder found. Creating empty public directory structure...');
    fs.mkdirSync(publicDest, { recursive: true });
    process.exit(0);
  }

  console.log('📦 Copying public assets to standalone build...');
  console.log(`   From: ${publicSrc}`);
  console.log(`   To:   ${publicDest}`);
  console.log('');

  copyRecursive(publicSrc, publicDest);

  console.log('');
  console.log('✅ Public folder successfully copied to standalone build!');
  console.log('');
  console.log('You can now run the app with:');
  console.log('  node .next/standalone/server.js');
  console.log('');

} catch (error) {
  console.error('❌ Error copying public folder:', error.message);
  process.exit(1);
}
