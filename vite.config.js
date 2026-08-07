import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Repo is deployed at the root of madhumitha.github.io (a user/org page),
// so base stays '/'. If you ever rename the repo to something other than
// <username>.github.io, change base to '/<repo-name>/'.
export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    outDir: 'dist',
  },
});
