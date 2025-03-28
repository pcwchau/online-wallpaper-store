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

## Routing

- Home page + layout
- Route group `(main)` + layout
  - all other pages

## Tailwind CSS

- Color: customized class
- Font size: use Tailwind CSS class

## Image Size Requirement

| Image                       | Size & Ratio |
|-----------------------------|--------------|
| Partnership                 | 1:1          |
| Customized printing texture | 1:1          |