# Practo AI Components

A collection of reusable React components for Practo applications.

## Installation

```bash
npm install practo-ai
# or
yarn add practo-ai
```

## Usage

```jsx
import { Button } from "practo-ai";

function App() {
  return (
    <Button primary onClick={() => console.log("clicked")}>
      Click me
    </Button>
  );
}
```

## Components

### Button

A versatile button component with multiple variants.

```jsx
import { Button } from 'practo-ai';

// Primary button
<Button primary>Primary Button</Button>

// Secondary button
<Button>Secondary Button</Button>

// Disabled button
<Button disabled>Disabled Button</Button>
```

Props:

- `primary` (boolean): Use primary styling
- `size` (string): Button size ('small' | 'medium' | 'large')
- `disabled` (boolean): Disable the button
- `onClick` (function): Click handler
- `children` (node): Button content

## Development

This is a component library project. To develop components:

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

This will start the development server at `http://localhost:5173` with:

- Hot Module Replacement (HMR)
- Auto-reloading on file changes
- Source maps for debugging

3. Build the package:

```bash
npm run build
```

This will create the following files in the `dist` directory:

- `index.es.js` - ES Module bundle
- `index.umd.js` - UMD bundle
- `index.d.ts` - TypeScript declarations
- `style.css` - Component styles

## Testing

Run tests:

```bash
npm test
```

## Storybook

View and develop components in isolation:

```bash
npm run storybook
```

## License

MIT
