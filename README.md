# ChaiTailwind ☕

A lightweight utility-first CSS framework built with vanilla JavaScript. ChaiTailwind dynamically converts utility class names into inline styles at runtime, providing a Tailwind-like development experience without any build process.

## Features

- **Zero dependencies** - Pure vanilla JavaScript
- **No build step** - Works directly in the browser
- **Utility-first** - Use descriptive class names instead of writing CSS
- **Performance optimized** - Built-in caching system
- **Flexible** - Supports custom values and predefined scales

## How It Works

ChaiTailwind scans your DOM for elements with classes starting with `chai-`, parses these class names, and applies the corresponding inline styles dynamically.

For example:
- `chai-p-8` → `padding: 8px`
- `chai-bg-blue` → `background-color: #3b82f6`
- `chai-text-center` → `text-align: center`

## Usage

1. Include the script in your HTML:
```html
<script src="main.js"></script>
```

2. Use `chai-` prefixed classes in your HTML:
```html
<div class="chai-p-16 chai-bg-blue chai-color-white chai-rounded-lg">
    Hello ChaiTailwind!
</div>
```

## Available Utilities

### Spacing

#### Padding
- `chai-p-{value}` - Padding all sides
- `chai-pt-{value}` - Padding top
- `chai-pr-{value}` - Padding right
- `chai-pb-{value}` - Padding bottom
- `chai-pl-{value}` - Padding left
- `chai-px-{value}` - Padding horizontal (left + right)
- `chai-py-{value}` - Padding vertical (top + bottom)

#### Margin
- `chai-m-{value}` - Margin all sides
- `chai-mt-{value}` - Margin top
- `chai-mr-{value}` - Margin right
- `chai-mb-{value}` - Margin bottom
- `chai-ml-{value}` - Margin left
- `chai-mx-{value}` - Margin horizontal (left + right)
- `chai-my-{value}` - Margin vertical (top + bottom)

**Example:**
```html
<div class="chai-p-8 chai-m-4">Padded and margined box</div>
```

### Colors

#### Text Color
- `chai-color-{color}` - Text color
- Available colors: `red`, `blue`, `green`, `yellow`, `purple`, `pink`, `indigo`, `gray`, `black`, `white`, `orange`, `teal`, `cyan`

#### Background Color
- `chai-bg-{color}` - Background color
- Same color palette as text colors

**Example:**
```html
<div class="chai-bg-blue chai-color-white">Blue background with white text</div>
```

### Typography

#### Font Size
- `chai-text-xs` - 12px
- `chai-text-sm` - 14px
- `chai-text-base` - 16px
- `chai-text-lg` - 18px
- `chai-text-xl` - 20px
- `chai-text-2xl` - 24px
- `chai-text-3xl` - 30px
- `chai-text-4xl` - 36px
- `chai-text-5xl` - 48px

#### Text Alignment
- `chai-text-left` - Left aligned
- `chai-text-center` - Center aligned
- `chai-text-right` - Right aligned
- `chai-text-justify` - Justified

#### Font Weight
- `chai-font-thin` - 100
- `chai-font-light` - 300
- `chai-font-normal` - 400
- `chai-font-medium` - 500
- `chai-font-semibold` - 600
- `chai-font-bold` - 700
- `chai-font-extrabold` - 800
- `chai-font-black` - 900

**Example:**
```html
<h1 class="chai-text-4xl chai-font-bold chai-text-center">Large Bold Centered Heading</h1>
```

### Borders

#### Border Width
- `chai-border-{value}` - Border width in pixels

#### Border Color
- `chai-border-{color}` - Border color (uses same color palette)

#### Border Style
- `chai-border-solid` - Solid border
- `chai-border-dashed` - Dashed border
- `chai-border-dotted` - Dotted border
- `chai-border-double` - Double border

#### Border Radius
- `chai-rounded-sm` - 2px
- `chai-rounded-md` - 6px
- `chai-rounded-lg` - 8px
- `chai-rounded-xl` - 12px
- `chai-rounded-2xl` - 16px
- `chai-rounded-full` - 9999px (perfect circle)
- `chai-rounded-{value}` - Custom value in pixels

**Example:**
```html
<div class="chai-border-2 chai-border-blue chai-border-solid chai-rounded-lg">
    Box with blue solid border and rounded corners
</div>
```

### Layout

#### Display
- `chai-flex` - Flexbox container
- `chai-block` - Block element
- `chai-inline` - Inline element
- `chai-inline-block` - Inline-block element
- `chai-hidden` - Hidden element

#### Flexbox
- `chai-justify-center` - Justify content center
- `chai-justify-start` - Justify content start
- `chai-justify-end` - Justify content end
- `chai-justify-between` - Justify content space-between
- `chai-items-center` - Align items center
- `chai-items-start` - Align items start
- `chai-items-end` - Align items end
- `chai-gap-{value}` - Gap between flex items

#### Width & Height
- `chai-w-{value}` - Width in pixels
- `chai-w-full` - 100% width
- `chai-w-screen` - 100vw width
- `chai-w-auto` - Auto width
- `chai-h-{value}` - Height in pixels
- `chai-h-full` - 100% height
- `chai-h-screen` - 100vh height
- `chai-h-auto` - Auto height

**Example:**
```html
<div class="chai-flex chai-justify-center chai-items-center chai-gap-8">
    <div class="chai-w-100 chai-h-100 chai-bg-red"></div>
    <div class="chai-w-100 chai-h-100 chai-bg-blue"></div>
</div>
```

## Color Palette

The following colors are available throughout the framework:

| Color    | Hex Code  |
|----------|-----------|
| red      | #ef4444   |
| blue     | #3b82f6   |
| green    | #10b981   |
| yellow   | #f59e0b   |
| purple   | #a855f7   |
| pink     | #ec4899   |
| indigo   | #6366f1   |
| gray     | #6b7280   |
| black    | #000000   |
| white    | #ffffff   |
| orange   | #f97316   |
| teal     | #14b8a6   |
| cyan     | #06b6d4   |

## Performance

ChaiTailwind includes several performance optimizations:

- **Caching** - Computed styles are cached using a Map to avoid reprocessing
- **One-time processing** - Elements are marked with `data-chai-done` to prevent duplicate processing
- **Efficient selectors** - Uses attribute selectors to quickly find elements with chai- classes

## Examples

### Card Component
```html
<div class="chai-border-2 chai-border-blue chai-rounded-lg chai-p-16 chai-bg-blue">
    <h3 class="chai-text-xl chai-font-bold chai-color-white chai-mb-4">Card Title</h3>
    <p class="chai-color-white chai-mb-8">Card description text goes here.</p>
    <div class="chai-inline-block chai-bg-white chai-color-blue chai-px-16 chai-py-8 chai-rounded-md chai-font-bold">
        Button
    </div>
</div>
```

### Centered Hero Section
```html
<div class="chai-flex chai-justify-center chai-items-center chai-h-screen chai-bg-blue">
    <div class="chai-text-center">
        <h1 class="chai-text-5xl chai-font-bold chai-color-white chai-mb-8">Welcome</h1>
        <p class="chai-text-xl chai-color-white">Build amazing things with ChaiTailwind</p>
    </div>
</div>
```

## Browser Support

ChaiTailwind works in all modern browsers that support:
- ES6+ JavaScript
- CSS inline styles
- DOM manipulation APIs

## License

MIT License - Feel free to use in your projects!

## Contributing

Contributions are welcome! Feel free to submit issues or pull requests.

---

Built with ☕ and JavaScript
