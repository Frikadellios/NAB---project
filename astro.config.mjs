import { defineConfig } from 'astro/config';
import node from "@astrojs/node";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  routes: [{
    src: '/api/(.*)',
    dest: 'http://localhost:8000/$1'
  }, {
    src: '/cloudcmd/(.*)',
    dest: 'http://localhost:8000/cloudcmd/$1'
  }],
  output: "server",
  adapter: node({
    mode: "standalone"
  }),
  integrations: [react()]
});