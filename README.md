# Markdown Dual View React Component

A modern, responsive React component for dual-view markdown editing and preview, built with shadcn/ui and Tailwind CSS.

## Features

- 🔄 **Dual View**: Raw markdown editor and styled preview side-by-side
- 🎨 **Beautiful UI**: Built with shadcn/ui components and Tailwind CSS
- 📱 **Responsive**: Works perfectly on desktop and mobile devices
- 🔍 **Syntax Highlighting**: Code blocks with highlight.js
- 📊 **Live Stats**: Word count, character count, reading time, and more
- 📥 **Export Options**: Download as Markdown or PDF
- 🎯 **TypeScript**: Fully typed for better development experience
- ⚡ **Performance**: Optimized with React hooks and memoization

## Preview

The component provides a clean, Medium-inspired interface with:
- Left pane: Raw markdown or rendered preview (toggleable)
- Right pane: Beautifully styled final output
- Header with live statistics
- Export functionality

## Quick Start

### 1. Installation

First, install the required dependencies:

```bash
npm install react react-dom next
npm install @radix-ui/react-select @radix-ui/react-switch @radix-ui/react-label @radix-ui/react-separator @radix-ui/react-slot
npm install class-variance-authority clsx tailwind-merge
npm install lucide-react marked highlight.js
npm install -D typescript @types/react @types/react-dom @types/node
npm install -D tailwindcss postcss autoprefixer
```

### 2. Setup Tailwind CSS

Initialize Tailwind CSS:

```bash
npx tailwindcss init -p
```

Update your `tailwind.config.js`:

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
```

### 3. Add CSS Variables

Create or update your global CSS file (e.g., `globals.css`):

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 222.2 84% 4.9%;
    --card: 0 0% 100%;
    --card-foreground: 222.2 84% 4.9%;
    --popover: 0 0% 100%;
    --popover-foreground: 222.2 84% 4.9%;
    --primary: 262.1 83.3% 57.8%;
    --primary-foreground: 210 40% 98%;
    --secondary: 210 40% 96%;
    --secondary-foreground: 222.2 84% 4.9%;
    --muted: 210 40% 96%;
    --muted-foreground: 215.4 16.3% 46.9%;
    --accent: 210 40% 96%;
    --accent-foreground: 222.2 84% 4.9%;
    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 210 40% 98%;
    --border: 214.3 31.8% 91.4%;
    --input: 214.3 31.8% 91.4%;
    --ring: 262.1 83.3% 57.8%;
    --radius: 0.5rem;
  }

  .dark {
    --background: 222.2 84% 4.9%;
    --foreground: 210 40% 98%;
    --card: 222.2 84% 4.9%;
    --card-foreground: 210 40% 98%;
    --popover: 222.2 84% 4.9%;
    --popover-foreground: 210 40% 98%;
    --primary: 262.1 83.3% 57.8%;
    --primary-foreground: 210 40% 98%;
    --secondary: 217.2 32.6% 17.5%;
    --secondary-foreground: 210 40% 98%;
    --muted: 217.2 32.6% 17.5%;
    --muted-foreground: 215 20.2% 65.1%;
    --accent: 217.2 32.6% 17.5%;
    --accent-foreground: 210 40% 98%;
    --destructive: 0 62.8% 30.6%;
    --destructive-foreground: 210 40% 98%;
    --border: 217.2 32.6% 17.5%;
    --input: 217.2 32.6% 17.5%;
    --ring: 262.1 83.3% 57.8%;
  }
}

@layer base {
  * {
    @apply border-border;
  }
  body {
    @apply bg-background text-foreground;
  }
}
```

### 4. Setup TypeScript Configuration

Create or update `tsconfig.json`:

```json
{
  "compilerOptions": {
    "target": "es5",
    "lib": ["dom", "dom.iterable", "es6"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "baseUrl": ".",
    "paths": {
      "@/*": ["./*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```

### 5. Usage

Import and use the component in your Next.js app:

```tsx
import MarkdownDualView from '@/MarkdownDualView'

export default function Page() {
  return (
    <div>
      <MarkdownDualView />
    </div>
  )
}
```

Or with custom styling:

```tsx
import MarkdownDualView from '@/MarkdownDualView'

export default function Page() {
  return (
    <div>
      <MarkdownDualView className="custom-markdown-editor" />
    </div>
  )
}
```

## Component Structure

```
MD Playground/
├── components/
│   └── ui/
│       ├── button.tsx
│       ├── card.tsx
│       ├── select.tsx
│       ├── switch.tsx
│       ├── label.tsx
│       ├── separator.tsx
│       └── badge.tsx
├── lib/
│   └── utils.ts
├── MarkdownDualView.tsx
├── package.json
└── README.md
```

## Features in Detail

### Dual View Toggle
- **Raw Mode**: Shows plain markdown text with syntax highlighting
- **Rendered Mode**: Shows HTML preview in the left pane
- **Custom Styled**: Right pane always shows beautifully styled output

### Live Statistics
- **Word Count**: Real-time word counting
- **Character Count**: Including spaces and special characters
- **Reading Time**: Estimated based on 200 words per minute
- **Line Count**: Total lines in the markdown
- **Heading Count**: Number of headings for navigation

### Export Options
- **Markdown Download**: Export the current content as `.md` file
- **PDF Download**: Convert to PDF (requires additional setup)

### Responsive Design
- Desktop: Side-by-side layout
- Mobile: Stacked layout with full-width panes
- Touch-friendly controls and proper spacing

## Customization

### Styling
The component uses Tailwind CSS classes and can be customized by:
1. Modifying the `className` prop
2. Updating the CSS variables for colors
3. Extending the Tailwind config for custom breakpoints

### Content
You can modify the sample content by editing the `markdownExamples` object in `MarkdownDualView.tsx`.

### Features
To add new features:
1. Extend the component props interface
2. Add new UI components as needed
3. Update the internal state management

## Dependencies

### Core Dependencies
- `react` & `react-dom`: React framework
- `next`: Next.js framework
- `typescript`: TypeScript support

### UI Components
- `@radix-ui/*`: Headless UI primitives
- `lucide-react`: Icon library
- `class-variance-authority`: Styling utilities
- `clsx` & `tailwind-merge`: Utility libraries

### Markdown Processing
- `marked`: Markdown parser
- `highlight.js`: Syntax highlighting

### Styling
- `tailwindcss`: Utility-first CSS framework
- `@tailwindcss/typography`: Typography plugin

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Troubleshooting

### Common Issues

1. **Module not found errors**: Make sure all dependencies are installed
2. **Tailwind styles not working**: Ensure your `tailwind.config.js` is properly configured
3. **TypeScript errors**: Check that all `@types/*` packages are installed
4. **PDF export not working**: This requires additional setup with libraries like `jsPDF`

### Getting Help

If you encounter issues:
1. Check the console for error messages
2. Verify all dependencies are installed correctly
3. Make sure your Next.js and TypeScript configurations are correct
4. Open an issue with a detailed description and error logs

---

Built with ❤️ using React, Next.js, and shadcn/ui 