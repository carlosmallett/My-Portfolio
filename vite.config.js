import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        work: 'work.html',
        creativeWriting: 'creative-writing.html',
        videoJournalism: 'video-journalism.html',
        strGraphics: 'str-graphics.html'
      }
    },
    assetsDir: 'assets'
  },
  publicDir: 'public'
});
