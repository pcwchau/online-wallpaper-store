# Online Wallpaper Store

| Reference | Version |
|-----------|---------|
| React     | 19.0.0  |
| NextJs    | 15.2.3  |

To replace the original WordPress website.

|                         | Original | New   |
|-------------------------|----------|-------|
| First page loading time | 5.51s    | 2.2s  |

# Development

```sh
# Initialize the project for the first time
npm install

# Start the local web server (.env.development)
npm run dev

# Test production build before deployment (.env.production)
npm run build
```

Make sure the backend web server is running, otherwise some pages will fail to load.

# Deployment

It will be automatically built and deployed to Amplify for any commit in `main` branch.

Information such as build script and custom domains can be checked on Amplify.

# Guidelines

## Routing

- Home page + layout
- Route group `(main)` + layout
  - all other pages

## Tailwind CSS

- Color: customized class
- Font size: use Tailwind CSS class

## Image Size Requirement

| Image                       | Ratio | Min Size  | Exception handling |
|-----------------------------|-------|-----------|--------------------|
| Yarn dyed - collection      | 1:1   |           | object-cover       |
| Customized printing texture | 1:1   | 1200x1200 | object-contain     |
| Inspiration (thumbnail)     | 1:1   |           | object-cover       |
| Partnership                 | 1:1   |           | object-cover       |

# Challenge

- Image optimization (before loading, add blur)

## File download for zoom-in images

In product page, one texture image will be downloaded three times as different sizes. For example, the source file is 1200 x 1200 (641 kB),

1. First loading - Small size for "select a texture", 128 x 128 (3.5 kB)
2. After selecting the texture - Large size for the large image. (optimized URL by Next.js) 1200 x 1200 (480 kB)
3. After hovering onto the image - Actual size for zoom-in preview box. (direct public URL) 1200 x 1200 (641 kB)

For the first time visiting the website (no cache), after selecting a texture, the large image of that texture will not be immediately displayed. The same thing happens when the zoom-in box appears. Because it needs some time to finish downloading the image files.

Enhancement approach:

1. Try to use optimized URL (Next.js Image) to do both the large image and zoom-in image. File size is optimized, but the loading time is longer.
2. Try to use direct public URL (source file) to do both the large image and zoom-in image.
