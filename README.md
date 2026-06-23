# Portfolio Website

Hi, I am Ranjan Sharma. This repository contains the source code for my personal portfolio website.

Live site: [ranjansharma.info.np](https://ranjansharma.info.np)

## What this site includes

- Intro header with social links and call to action
- About section with rotating tech cube
- Experience and services sections
- Portfolio projects with modal details
- Review carousel with Swiper
- Contact form powered by EmailJS and toast notifications
- Footer with quick links

## Built with

- React 18
- SCSS and CSS modules by component
- AOS for scroll animations
- Swiper for reviews
- React Icons and Font Awesome
- EmailJS for contact messages

## App flowchart

```mermaid
flowchart TD
    A[Open website] --> B[Loader for 2 seconds]
    B --> C[Render main portfolio page]
    C --> D[Scroll listener updates active nav state]
    C --> E[User explores sections]
    E --> F[Open portfolio project modal]
    E --> G[Submit contact form]
    G --> H[EmailJS sendForm]
    H --> I[Success or error toast]
```

## Component diagram

```mermaid
graph TD
    App --> Loader
    App --> Header
    Header --> CTA
    Header --> HeaderSocials
    App --> Nav
    App --> About
    App --> Experience
    App --> Services
    App --> Portfolio
    Portfolio --> Modal
    App --> Review
    App --> Contact
    App --> Footer
```

## Visuals from the live website

### Portfolio cards

| YouTube Clone | SHM Visualization |
| --- | --- |
| ![YouTube Clone](./src/assets/youtube.webp) | ![SHM Visualization](./src/assets/shm.webp) |

| Rust AI Car Driving | Visualize Code |
| --- | --- |
| ![Rust AI Car Driving](./src/assets/rust.webp) | ![Visualize Code](./src/assets/visualize.webp) |

| HashPass | Netflix Clone |
| --- | --- |
| ![HashPass](./src/assets/hash.webp) | ![Netflix Clone](./src/assets/netflix.webp) |

## Local setup

```bash
npm ci
npm start
```

## Production build

```bash
npm run build
```

Thanks for checking out my portfolio.
