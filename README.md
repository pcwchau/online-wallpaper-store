# Online Wallpaper Store

| Reference | Version |
|-----------|---------|
| React     | 19.0.0  |
| NextJs    | 15.2.3  |

# Deployment

It will be automatically built and deployed to Amplify for any commit in `main` branch.

Dev: https://main.d3dt5wuaumew7m.amplifyapp.com/

# Purpose

To replace the original WordPress website: https://beshinetextile.com/

|                         | Original | New   |
|-------------------------|----------|-------|
| First page loading time | 5.51s    | 2.2s |

# Development

First time:

```
npm install
```

```
npm run dev
```

Testing build:

```
npm run build
```

Auto formatting in VS code: Prettier

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
| Partnership                 | 1:1   |           | object-cover       |
| Customized printing texture | 1:1   | 1200x1200 | object-contain     |

# Challenge

- Image optimization (before loading, add blur)

## File download for zoom-in images

In product page, one texture image will be downloaded three times as different sizes:

1. First loading - Small size for "select a texture".
2. After selecting the texture - Large size for the large image. (optimized URL by Next.js)
3. After hovering onto the image - Actual size for zoom-in preview box. (direct public URL)

For the first time visiting the website (no cache), after selecting a texture, the large image of that texture will not be immediately displayed. The same thing happens when the zoom-in box appears. Because it needs some time to finish downloading the image files.

For example, the source file is 1200 x 1200 (641 kB),

1. 128 x 128 (3.5 kB)
2. 1200 x 1200 (480 kB)
3. 1200 x 1200 (641 kB)

To avoid waiting the large image: 

To avoid waiting image in the zoom-in box: Both use direct public URL. It is very hard to both use optimized URL by Next.js Image.