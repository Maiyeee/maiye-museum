# Maiye Museum

Responsive museum website built with React and Vite. Exhibit 01 features the InDesign folder from the supplied archive: the Marielle magazine cover, Marielle Studio fashion layout, and magazine PDF. Exhibit 02 features the Raster Graphics folder: a before-and-after portrait comparison and Nature’s Beauty photo collage. Exhibit 03 features all ten files from Vector Graphics: the Marielle brand identity and accompanying image studies.

Run `npm install` then `npm run dev` locally. Build with `npm run build`; serve the output using `npm run preview`.

The header theme button switches between light and dark mode. The site initially follows the device preference; an explicit choice is saved under `maiye-museum-theme` in localStorage and synchronized across tabs. If storage is unavailable, switching still works for the current page. `public/theme.js` applies the theme before first paint; `src/ThemeToggle.jsx` provides the accessible control; `src/theme.css` defines both palettes without modifying artwork colors.

Routes: #home, #collections, #about, and #exhibit-01 through #exhibit-03. Browser history and direct links are supported. Mobile navigation, skip navigation, visible keyboard focus, and reduced motion are included.

InDesign assets are in public/collections/indesign. Original PNGs and the PDF are preserved; 640px and 1280px JPEG renditions provide responsive images. Both layouts are displayed without cropping, with links to full-resolution originals. PDF viewing and downloading are available on #exhibit-01.

Raster assets are in public/collections/raster. Original PNGs are preserved with shorter filenames; 640px, 1280px, and 1920px JPEG renditions provide responsive images. Both landscape compositions are displayed without cropping on #exhibit-02, with full-resolution viewing and PNG downloads.

Vector assets are in public/collections/vector. All ten originals are preserved with shorter filenames. The four single-page PDFs (logo, color palette, fonts, moodboard) have image previews rendered with Windows.Data.Pdf. Responsive JPEG previews preserve full compositions; small originals are not enlarged. Each work links to its original and download. The gold-background JPG collage is displayed separately from the green-background PNG edition in Raster Graphics. Components are in src/VectorExhibit.jsx and image metadata is in src/vectorAssets.json.

Additional collection content and the full museum story await direction. Page components are in src/App.jsx; layouts are in src/App.css; shared styles are in src/index.css. Fonts use Google Fonts with local fallbacks.
