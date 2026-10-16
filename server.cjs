const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');

const root = path.join(__dirname, 'evidence');
const port = Number(process.env.PORT || 4173);
const aliases = {
  '/': 'index.html',
  '/assets/index-DVt2VyOD.js': 'app.js',
  '/assets/index-CWbRhW9D.css': 'app.css',
  '/assets/vendor-react-tJdPVMey.js': 'vendor-react.js',
  '/assets/maplibre-gl-BhfqkIys.js': 'maplibre-gl-BhfqkIys.js',
};
const mime = {'.html':'text/html; charset=utf-8','.js':'text/javascript; charset=utf-8','.css':'text/css; charset=utf-8','.json':'application/json; charset=utf-8','.woff2':'font/woff2','.png':'image/png','.md':'text/plain; charset=utf-8'};

http.createServer((req, res) => {
  let url;
  try { url = decodeURIComponent(new URL(req.url, 'http://localhost').pathname); }
  catch { res.writeHead(400).end(); return; }
  let relative = aliases[url];
  if (!relative && /^\/data\/[\w.-]+$/.test(url)) relative = url.slice(6);
  if (!relative && /^\/fonts\/ibm-plex-5\.3\.0\/[\w.-]+\.woff2$/.test(url)) relative = path.join('fonts', path.basename(url));
  if (!relative && url === '/about/ade-naufal-ammar.png') relative = 'ade-naufal-ammar.png';
  if (!relative) { res.writeHead(404).end('Not found'); return; }
  const filename = path.join(root, relative);
  fs.readFile(filename, (error, buffer) => {
    if (error) { res.writeHead(404).end('Asset not available'); return; }
    res.setHeader('Content-Type', mime[path.extname(filename)] || 'application/octet-stream');
    res.setHeader('Cache-Control', 'no-cache');
    // Local replay should not send analytics to the original site's account.
    if (relative === 'index.html') buffer = Buffer.from(buffer.toString('utf8').replace(/<!-- Cloudflare Pages Analytics -->[\s\S]*?<!-- Cloudflare Pages Analytics -->/g, ''));
    res.writeHead(200).end(buffer);
  });
}).listen(port, '127.0.0.1', () => console.log(`Simpul local: http://127.0.0.1:${port}`));
