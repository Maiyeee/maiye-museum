# Maiye Museum

Responsive museum website built with React and Vite. The first exhibit features the InDesign folder from the supplied archive: the Marielle magazine cover, Marielle Studio fashion layout, and magazine PDF. Other exhibit spaces remain placeholders.

Run `npm install` then `npm run dev` locally. Build with `npm run build`; serve the output using `npm run preview`.

Routes: #home, #collections, #about, and #exhibit-01 through #exhibit-03. Browser history and direct links are supported. Mobile navigation, skip navigation, visible keyboard focus, and reduced motion are included.

InDesign assets are in public/collections/indesign. Original PNGs and the PDF are preserved; 640px and 1280px JPEG renditions provide responsive images. Both layouts are displayed without cropping, with links to full-resolution originals. PDF viewing and downloading are available on #exhibit-01. The other archive folders are not incorporated.

Additional collection content and the full museum story await direction. Page components are in src/App.jsx; layouts are in src/App.css; shared styles are in src/index.css. Fonts use Google Fonts with local fallbacks.
