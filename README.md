# Tempest

Tempest generates typesafe React components that accept Tailwind utilities as props. It respects your project's `tailwind.config.js` file to generate appropriate types for any customization that you have added.

## Example

```typescript
import { Div } from "./tempest"

export function Home() {
  return (
    <Div
      borderRadius="lg"
      pad="6"
      backgroundColor={{ default: "blue-800", hover: "blue-500" }}
    >
      Hello
    </Div>
  )
}
```

## Usage

### Install

Add `@ironbay/tempest` to your project

```
yarn add --dev @ironbay/tempest
```

or

```
npm i --save-dev @ironbay/tempest
```

### Configure

Add a script to your `package.json` to generate components

```json
"scripts": {
    "tempest": "tempest ./tailwind.config.js ./src/components/tempest.ts",
}
```

The first argument is the location of your tailwind config and the second is where you want the generated components to go

### Generate

Run the script to generate your components whenever you change your `tailwind.config.js` to regenerate your components.

```
yarn tempest
```

or

```
npm run tempest
```

Feel free to poke around the generated file to change anything to your liking

## Upcoming

Right now Tempest provides a very opinionated way on how the props are named and grouped. This should eventually be configurable in case you find our approach too verbose.
