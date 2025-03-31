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
| First page loading time | 5.96s    | 2.32s |
| Image                   |

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

| Image                       | Size & Ratio | Exception handling |
|-----------------------------|--------------|--------------------|
| Partnership                 | 1:1          | object-cover       |
| Customized printing texture | 1:1          | object-contain     |

# Challenge

## File download for zoom-in images

In product page, for the same texture image, it will be downloaded three times:

- First loading - Small size for "select a texture".
- After selecting the texture - Large size for picture on the left.
- After hovering onto the image - Actual size for zoom-in box.

Apart from the first loading, a blank image flicker will be observed.