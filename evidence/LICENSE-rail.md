# Lisensi berkas data rel Simpul / Licence of the Simpul rail data files

Bagian pertama berbahasa Indonesia. English follows in the second part.

## Bahasa Indonesia

### Ringkasan

Lima berkas di folder ini adalah database turunan dari data OpenStreetMap. Simpul menawarkannya di bawah Open Database License (ODbL) 1.0.

Anda boleh menyalin, membagikan, dan mengubah berkas itu. Dua syarat utamanya: sebut OpenStreetMap, dan tawarkan hasil Anda di bawah ODbL juga (bagi-serupa, share-alike).

Teks lisensi:
https://opendatacommons.org/licenses/odbl/1-0/

Ringkasan lisensi (bahasa Inggris):
https://opendatacommons.org/licenses/odbl/summary/

### Berkas yang tercakup

Rel murni:
- routes.rail.json: rute dan arah rel
- stops.json: stasiun rel
- shapes.json: geometri jalur rel

Campuran (memuat rujukan rel dan jalan dalam satu berkas):
- transfers.json: sambungan jalan kaki antarhalte
- sources.json: asal data tiap arah rute

Simpul memperlakukan seluruh isi berkas campuran sebagai bagian dari database turunan, dan menawarkannya di bawah ODbL 1.0. Isi yang berasal dari GTFS TransJakarta tetap membawa atribusi CC BY 4.0, © 2026 PT Transportasi Jakarta. Atribusi itu tampil di dialog Tentang Simpul.

### Di luar notis ini

- routes.brt.json, routes.bus.json, stops.bus.json, shapes.bus.json: data jalan dari GTFS statis TransJakarta (CC BY 4.0), bukan dari OpenStreetMap.
- agencies.json, landmarks.json, manifest.json: disusun untuk Simpul.
- Kode aplikasi Simpul: Simpul memandangnya di luar cakupan notis ini, karena bagi-serupa ODbL menjangkau database, bukan kode yang memuatnya.

### Sumber

OpenStreetMap, © kontributor OpenStreetMap (© OpenStreetMap contributors). Simpul mengambil relasi route=* (PTv2) untuk jalur MRT Jakarta, LRT Jakarta, LRT Jabodebek, KRL Commuter Line (termasuk jalur Bandara), dan Whoosh lewat Overpass API.

Waktu basis data OSM dan ID relasi tercatat di sources.json (osmBaseTimestamp dan relationIds).

Atribusi dan hak pakai OpenStreetMap:
https://www.openstreetmap.org/copyright

### Yang Simpul ubah

- Memilih satu relasi per arah. Loop Cikarang memakai dua relasi yang dipotong di Kampung Bandan.
- Memotong geometri di antara stasiun pertama dan terakhir, menyederhanakannya (toleransi 2,5 m), dan membulatkan koordinat ke enam desimal.
- Menetapkan satu posisi per stasiun dan memberi ID Simpul (ST-...).
- Menulis nama stasiun dalam bahasa Indonesia dan Inggris, dan mengoreksi nama atau posisi secara manual bila perlu.
- Menjangkarkan tiap stasiun pada geometri, dan memperbaiki geometri dengan Penyunting Jalur.
- Menambahkan kode, warna, kecepatan, dan jendela layanan rute.
- Menghitung sambungan jalan kaki antarhalte.

### Syarat ringkas

Ini ringkasan, bukan pengganti teks lisensi. Angka dalam kurung adalah pasal ODbL 1.0.

- Atribusi. Sebut "© OpenStreetMap contributors" dan tautkan https://www.openstreetmap.org/copyright.
- Bagi-serupa. Bila Anda memakai database turunan secara publik, tawarkan hanya di bawah ODbL, versi lanjutannya yang serupa, atau lisensi yang kompatibel (4.4).
- Karya keluaran, misalnya peta. Karya itu tidak terkena bagi-serupa (4.5). Karya itu perlu notis bahwa isinya berasal dari database ini dan tersedia di bawah ODbL (4.3).
- Lisensi menyertai berkas. Sertakan salinan ODbL atau tautannya, dan jaga pemberitahuan ini tetap utuh (4.2).
- Salinan yang dapat dibaca mesin. Bila Anda memakai database turunan secara publik, tawarkan salinannya dalam bentuk yang dapat dibaca mesin (4.6).

### Salinan dari Simpul

Simpul menawarkan database turunan ini dalam bentuk yang dapat dibaca mesin, tanpa biaya:
- https://simpul.adenaufal.com/data/routes.rail.json
- https://simpul.adenaufal.com/data/stops.json
- https://simpul.adenaufal.com/data/shapes.json
- https://simpul.adenaufal.com/data/transfers.json
- https://simpul.adenaufal.com/data/sources.json

### Catatan

Notis ini bukan nasihat hukum. Bila Anda ragu, baca teks ODbL. Pertanyaan: https://adenaufal.com

## English

### Summary

The five files in this folder are a derivative database of OpenStreetMap data. Simpul offers them under the Open Database License (ODbL) 1.0.

You may copy, share and change these files. Two main conditions apply: credit OpenStreetMap, and offer your result under the ODbL too (share-alike).

Licence text:
https://opendatacommons.org/licenses/odbl/1-0/

Licence summary:
https://opendatacommons.org/licenses/odbl/summary/

### Covered files

Rail only:
- routes.rail.json: rail routes and directions
- stops.json: rail stations
- shapes.json: rail line geometry

Mixed (one file holds both rail and road references):
- transfers.json: walking links between stops
- sources.json: where the data of each route direction comes from

Simpul treats the whole content of the mixed files as part of the derivative database and offers it under ODbL 1.0. Content that comes from the TransJakarta GTFS keeps its CC BY 4.0 credit, © 2026 PT Transportasi Jakarta. The credit shows in the Simpul About dialog.

### Outside this notice

- routes.brt.json, routes.bus.json, stops.bus.json, shapes.bus.json: road data from the TransJakarta static GTFS (CC BY 4.0), not from OpenStreetMap.
- agencies.json, landmarks.json, manifest.json: written for Simpul.
- The Simpul application code: Simpul regards it as outside this notice, because the ODbL share-alike condition reaches the database, not the code that loads it.

### Source

OpenStreetMap, © OpenStreetMap contributors. Simpul reads the route=* relations (PTv2) for MRT Jakarta, LRT Jakarta, LRT Jabodebek, KRL Commuter Line (including the Airport line) and Whoosh through the Overpass API.

The OSM database timestamp and the relation IDs are recorded in sources.json (osmBaseTimestamp and relationIds).

OpenStreetMap credit and terms of use:
https://www.openstreetmap.org/copyright

### What Simpul changed

- Chose one relation per direction. The Cikarang loop uses two relations that Simpul cut at Kampung Bandan.
- Cut the geometry between the first and the last station, simplified it (tolerance 2.5 m) and rounded the coordinates to six decimals.
- Set one position per station and gave each station a Simpul ID (ST-...).
- Wrote station names in Indonesian and English, and corrected names or positions by hand where needed.
- Anchored each station to the geometry, and corrected geometry with the Route Editor.
- Added route codes, colours, speeds and service windows.
- Computed the walking links between stops.

### Conditions in brief

This is a summary, not a replacement for the licence text. Numbers in brackets are ODbL 1.0 sections.

- Credit. Write "© OpenStreetMap contributors" and link https://www.openstreetmap.org/copyright.
- Share-alike. If you publicly use a derivative database, offer it only under the ODbL, a later similar version, or a compatible licence (4.4).
- Produced works, for example a map. A produced work is not subject to share-alike (4.5). It needs a notice that its content comes from this database and is available under the ODbL (4.3).
- The licence travels with the files. Include a copy of the ODbL or its link, and keep this notice intact (4.2).
- Machine-readable copy. If you publicly use a derivative database, offer a copy of it in a machine-readable form (4.6).

### Copies from Simpul

Simpul offers this derivative database in a machine-readable form, free of charge:
- https://simpul.adenaufal.com/data/routes.rail.json
- https://simpul.adenaufal.com/data/stops.json
- https://simpul.adenaufal.com/data/shapes.json
- https://simpul.adenaufal.com/data/transfers.json
- https://simpul.adenaufal.com/data/sources.json

### Note

This notice is not legal advice. If you are unsure, read the ODbL text. Questions: https://adenaufal.com
