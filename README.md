# Avatar Generator

A modern, customizable avatar generator built with **Next.js**, **React**, and **TypeScript**. Create unique profile avatars by combining facial features, hairstyles, outfits, accessories, and backgrounds with instant live preview. Export your creations as high-quality **PNG** or **SVG**.

<p align="center">
  <img src="./public/preview.png" alt="Avatar Generator Preview" width="900"/>
</p>

---

## Features

- Interactive avatar customization
- Unique face styles
- Circle and Square avatar layouts
- One-click random avatar generation
- Remove individual avatar parts
- Dark & Light theme support
- Export as PNG or SVG
- Responsive interface for desktop and mobile

---

## Tech Stack

### Framework

- Next.js 16
- React 19
- TypeScript

### Styling

- Tailwind CSS v4
- shadcn/ui
- Lucide React

### Utilities

- html-to-image
- Biome
- pnpm

---

## Getting Started

### Prerequisites

- Node.js 20+
- pnpm

### Installation

```bash
git clone https://github.com/yourusername/avatar-generator.git

cd avatar-generator

pnpm install

pnpm dev
```

Open your browser at

```
http://localhost:3000
```

---

## Available Scripts

| Command | Description |
|----------|-------------|
| `pnpm dev` | Start development server |
| `pnpm build` | Create production build |
| `pnpm start` | Start production server |
| `pnpm lint` | Run Biome linter |
| `pnpm format` | Format project |

---

## Project Structure

```
avatar-generator
│
├── app
│   ├── components
│   ├── context
│   ├── hooks
│   ├── lib
│   ├── types
│   ├── utils
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
│
├── components
│   └── ui
│
├── public
│   └── avatar-parts
│       ├── accessories
│       ├── background
│       ├── eyes
│       ├── face
│       ├── hair
│       ├── mouth
│       └── outfit
│
└── generate-index.js
```

---

## How It Works

1. Select an avatar category.
2. Choose a style for the selected part.
3. Customize the avatar shape and background.
4. Generate random combinations if desired.
5. Export the finished avatar as **PNG** or **SVG**.

---

## Screenshots

| Light Mode | Dark Mode |
|------------|-----------|
| Add screenshot | Add screenshot |

---

## Roadmap

- [ ] Custom color picker
- [ ] Avatar presets
- [ ] Save avatars locally
- [ ] Import / Export avatar configuration
- [ ] Shareable avatar links
- [ ] More hairstyles and outfits
- [ ] Additional illustration packs

---

## Built With

- Next.js
- React
- TypeScript
- Tailwind CSS
- shadcn/ui
- Lucide React
- html-to-image
- Biome

---

## Credits

Avatar illustrations are based on assets provided by **DrawKit**.

---

## Contributing

Contributions are always welcome.

1. Fork the repository
2. Create a feature branch

```bash
git checkout -b feature/my-feature
```

3. Commit your changes

```bash
git commit -m "Add new feature"
```

4. Push your branch

```bash
git push origin feature/my-feature
```

5. Open a Pull Request

---

## License

Distributed under the MIT License.

---

## Author

**Samarth Dagar**

GitHub: https://github.com/samarthhh-19


---

<p align="center">
Made with ❤️ using Next.js and TypeScript
</p>
