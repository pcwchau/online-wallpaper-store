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

| Home Page Image            | Ratio | Opt? | Exception handling | Others                       |
|----------------------------|-------|------|--------------------|------------------------------|
| Main image                 | n/a   |      | object-cover       | Focus on the middle (mobile) |
| 4 product images (>=640px) | 16:9  | n    | object-cover       | Cropped from center          |
| 4 product images (<640px)  | 1:2   | n    | object-cover       | Cropped from center          |

| Product Page Image         | Ratio | Opt? | Exception handling | Others |
|----------------------------|-------|------|--------------------|--------|
| Custom printing collection | 1:1   |      | object-cover       |
| Yarn dyed collection       | 1:1   |      | object-cover       |
| Product page - Options     | 1:1   |      | object-contain     |
| Embroidered                | N/A   | y    | full width         | assets |
| Vinyl                      | N/A   | y    | full width         | assets |

| Project Page Image | Ratio | Opt? | Exception handling | Others |
|--------------------|-------|------|--------------------|--------|
| Project cover      | 1:1   | y    | object-cover       |
| Project inside     | N/A   | y    | full width         |

| Other Page Image        | Ratio | Opt? | Exception handling | Others |
|-------------------------|-------|------|--------------------|--------|
| Partnership             | 1:1   |      | object-contain     |
| Inspiration (thumbnail) | 1:1   |      | object-cover       |

# Reference & Challenge

## Animation

- Top bar (CSS)
- FAQ page
  - animate arrow icons (CSS)
  - open / close answer (lib: framer-motion: handle height more smoothly)
- Custom printing collection
- Project page (CSS)