const fs = require('node:fs');
const read = name => JSON.parse(fs.readFileSync(`evidence/${name}`, 'utf8'));
const manifest = read('manifest.json');
const routes = manifest.files.routes.flatMap(f => read(f).routes);
const stopRows = manifest.files.stops.flatMap(f => read(f).stops);
const stops = new Map(stopRows.map(s => [s.id, s]));
const shapes = Object.assign({}, ...manifest.files.shapes.map(f => read(f).shapes));
const agencies = read(manifest.files.agencies).agencies;
const transfers = read(manifest.files.transfers).transfers;
const landmarks = read(manifest.files.landmarks).landmarks;
const routeIds = new Set(routes.map(r => r.id));
const agencyIds = new Set(agencies.map(a => a.id));
const errors = [];
for (const r of routes) {
  if (!agencyIds.has(r.agencyId)) errors.push(`agency ${r.id}: ${r.agencyId}`);
  for (const p of r.patterns) {
    if (!shapes[p.shapeId]) errors.push(`shape ${p.id}: ${p.shapeId}`);
    for (const id of p.stopIds) if (!stops.has(id)) errors.push(`stop ${p.id}: ${id}`);
    if (p.stopShapeProgress && p.stopShapeProgress.length !== p.stopIds.length) errors.push(`anchors ${p.id}`);
  }
}
for (const s of stops.values()) for (const id of s.routeIds)
  if (!routeIds.has(id)) errors.push(`route ${s.id}: ${id}`);
for (const t of transfers) for (const id of [t.from, t.to])
  if (!stops.has(id)) errors.push(`transfer ${t.id}: ${id}`);
console.log(JSON.stringify({
  files: Object.fromEntries(fs.readdirSync('evidence').map(f => [f, fs.statSync(`evidence/${f}`).size])),
  manifestCounts: manifest.counts,
  actual: {agencies: agencies.length, routes: routes.length, stopRows: stopRows.length, uniqueStops: stops.size, patterns: routes.reduce((n,r) => n+r.patterns.length,0), shapes: Object.keys(shapes).length, transfers: transfers.length, landmarks: landmarks.length},
  routeModes: Object.fromEntries([...new Set(routes.map(r=>r.mode))].map(mode => [mode, routes.filter(r=>r.mode===mode).length])),
  firstRoute: routes[0], firstStop: stopRows[0], firstLandmark: landmarks[0],
  errors
}, null, 2));
if (errors.length) process.exitCode = 1;
