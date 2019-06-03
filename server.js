'use strict';

// next
const { createServer } = require('http');
const { parse } = require('url');
const next = require('next');

const NEXT_PORT = 3001;
const nextApp = next({ dev: true });
const handler = nextApp.getRequestHandler();

nextApp.setAssetPrefix('/zone');
nextApp.prepare();

createServer(handler).listen(3001, () => {
  console.log(`Next server started on port 3001`);
});

// proxy
const express = require('express');
const proxy = require('http-proxy-middleware');
const proxyApp = express();

proxyApp.use(
  '/zone',
  proxy('http://localhost:3001', {
    pathRewrite(path) {
      return path.replace(/^\/zone/, '');
    },
    changeOrigin: true,
    logLevel: 'warn',
  }),
);

proxyApp.listen(3000, () => {
  console.log('Proxy server started on port http://localhost:3000/zone');
});
