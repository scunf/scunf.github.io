/**
 * Build Robot Viewer and copy to blog's public directory
 * Usage: node scripts/build-viewer.mjs
 */
import { execSync } from 'child_process';
import { existsSync, cpSync, rmSync, mkdirSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const blogRoot = resolve(__dirname, '..');
const viewerDir = resolve(blogRoot, 'robot_viewer');
const viewerDist = resolve(viewerDir, 'dist');
const publicDir = resolve(blogRoot, 'public', 'robot_viewer');

async function build() {
  console.log('📦 Building Robot Viewer...');
  
  // Step 1: Install dependencies
  console.log('   Installing dependencies...');
  try {
    execSync('pnpm install', { cwd: viewerDir, stdio: 'inherit' });
  } catch (e) {
    console.error('   pnpm install failed, trying --frozen-lockfile...');
    try {
      execSync('pnpm install --no-frozen-lockfile', { cwd: viewerDir, stdio: 'inherit' });
    } catch (e2) {
      console.error('   ⚠️  pnpm install failed, build may be incomplete:', e2.message);
    }
  }
  
  // Step 2: Build
  console.log('   Building...');
  try {
    execSync('pnpm run build', { cwd: viewerDir, stdio: 'inherit' });
  } catch (e) {
    console.error('   ❌ Build failed:', e.message);
    process.exit(1);
  }
  
  // Step 3: Copy dist to public/
  console.log('   Copying to public/robot_viewer/...');
  if (existsSync(publicDir)) {
    rmSync(publicDir, { recursive: true });
  }
  mkdirSync(publicDir, { recursive: true });
  cpSync(viewerDist, publicDir, { recursive: true });
  
  console.log('✅ Robot Viewer built and copied to public/robot_viewer/');
}

build().catch(err => {
  console.error('Build failed:', err);
  process.exit(1);
});
