# Fresh Icons

A simple icon collection for when you just need essential icons.

## Installation and How to use

In your react project, use:

```bash
npm i fresh-icons

-- or -- 

yarn add fresh-icons

```

example usage:

```jsx
import { Moon } from "fresh-icons";

function ThemeSwitch() {
  render() {
    return <button>  <Moon /> Switch Theme? </button>
  }
}
```

## Props

example usage

```jsx
import { Moon } from "fresh-icons";

function ThemeSwitch() {
  render() {
    return <button><Moon color="#C4C4C4" details="#E5E5E5" /> </button>
  }
}
```

| Key         | Default     | Type     | Notes                           |
| ----------- | ----------- | -------- | ------------------------------- |
| `color`     | `white`     | `string` | use to set main icon color      |
| `details`   | `undefined` | `string` | use to set secondary color if it exists |
| `size`      | `22`        | `number` |                           |

## License

- [MIT](./LICENSE.md)

---

<p align="center">
   Developed by <a href="https://github.com/jos3s">José Ulisses </a>
</p>
