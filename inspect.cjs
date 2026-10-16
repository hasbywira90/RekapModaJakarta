const fs = require('node:fs');
const s = fs.readFileSync('evidence/app.js', 'utf8');
const strings = [...s.matchAll(/"((?:[^"\\]|\\.)*)"|'((?:[^'\\]|\\.)*)'/g)].map(m => m[1] ?? m[2]);
if (process.argv[2]) {
  const term = process.argv[2];
  let at = -1, count = 0;
  while ((at = s.indexOf(term, at + 1)) >= 0 && count++ < 25)
    console.log(s.slice(Math.max(0, at - 220), at + 650), '\n');
} else {
  console.log('PATHS', [...new Set(strings.filter(t => t.length < 250 && /https?:|\.(json|geojson|js|wasm|pbf)|^\//.test(t)))].join('\n'));
  console.log('DATA FILES', [...new Set(s.match(/[A-Za-z0-9_./-]+\.(?:json|geojson|webp|png|glb|gltf|woff2)/g))].join('\n'));
}
