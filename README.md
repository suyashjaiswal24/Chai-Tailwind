# ChaiTailwind ☕

A lightweight, runtime CSS utility framework built with vanilla JavaScript. ChaiTailwind converts utility class names into inline styles dynamically in the browser - no build step required.

## What It Does

ChaiTailwind scans your HTML for classes starting with `chai-`, parses them, and applies corresponding inline styles. It's like Tailwind CSS, but works at runtime using JavaScript instead of build-time processing.

**Example:**
```html
<div class="chai-p-20 chai-bg-indigo chai-color-white chai-rounded-lg">
    Hello World
</div>
```

Becomes:
```html
<div class="chai-p-20 chai-bg-indigo chai-color-white chai-rounded-lg" style="padding: 20px; background-color: #6366f1; color: #ffffff; border-radius: 8px;">
    Hello World
</div>
```

## Features

✅ **Zero dependencies** - Pure vanilla JavaScript
✅ **No build step** - Works directly in the browser
✅ **200+ utilities** - Comprehensive set of utility classes
✅ **Auto-caching** - Computed styles are cached for performance
✅ **Reactive** - Watches DOM for new elements and class changes
✅ **Small footprint** - ~15KB unminified

## Quick Start

1. **Include the script:**
```html
<script src="main.js"></script>
```

2. **Use the utilities:**
```html
<div class="chai-bg-blue chai-color-white chai-p-24 chai-rounded-xl">
    <h2 class="chai-text-2xl chai-font-bold chai-mb-16">Card Title</h2>
    <p class="chai-text-base">Card content goes here.</p>
</div>
```

That's it! The framework automatically applies styles to any element with `chai-` classes.

## Complete Utility Reference

### 🎨 Colors

**13 Built-in Colors:**
`red` `blue` `green` `yellow` `purple` `pink` `indigo` `gray` `black` `white` `orange` `teal` `cyan`

- **Text:** `chai-color-{color}` or `chai-text-{color}`
- **Background:** `chai-bg-{color}`
- **Border:** `chai-border-{color}`

```html
<div class="chai-bg-indigo chai-color-white">Indigo background, white text</div>
```

### 📏 Spacing

**Padding:**
- `chai-p-{value}` - All sides
- `chai-pt-{value}` `chai-pr-{value}` `chai-pb-{value}` `chai-pl-{value}` - Individual sides
- `chai-px-{value}` - Horizontal (left + right)
- `chai-py-{value}` - Vertical (top + bottom)

**Margin:**
- `chai-m-{value}` - All sides (use `auto` for centering)
- `chai-mt-{value}` `chai-mr-{value}` `chai-mb-{value}` `chai-ml-{value}` - Individual sides
- `chai-mx-{value}` - Horizontal (use `chai-mx-auto` to center)
- `chai-my-{value}` - Vertical

```html
<div class="chai-p-20 chai-mb-16">Padded box with bottom margin</div>
<div class="chai-mx-auto chai-w-600">Centered box</div>
```

### ✍️ Typography

**Font Size:**
- `chai-text-xs` (12px) through `chai-text-5xl` (48px)

**Font Weight:**
- `chai-font-thin` (100) through `chai-font-black` (900)

**Text Alignment:**
- `chai-text-left` `chai-text-center` `chai-text-right` `chai-text-justify`

**Text Transform:**
- `chai-text-uppercase` `chai-text-lowercase` `chai-text-capitalize`

**Text Decoration:**
- `chai-text-underline` `chai-text-line-through` `chai-text-none`

**Line Height:**
- `chai-leading-none` `chai-leading-tight` `chai-leading-normal` `chai-leading-relaxed` `chai-leading-loose`

**Letter Spacing:**
- `chai-tracking-tighter` through `chai-tracking-widest`

```html
<h1 class="chai-text-4xl chai-font-bold chai-text-center chai-text-uppercase">
    Bold Centered Heading
</h1>
```

### 📐 Borders

**Border Width:**
- `chai-border-{value}` - All sides (e.g., `chai-border-2`)
- `chai-border-t-{value}` `chai-border-r-{value}` `chai-border-b-{value}` `chai-border-l-{value}`

**Border Style:**
- `chai-border-solid` `chai-border-dashed` `chai-border-dotted` `chai-border-double` `chai-border-none`

**Border Radius:**
- `chai-rounded-none` `chai-rounded-sm` `chai-rounded-md` `chai-rounded-lg` `chai-rounded-xl` `chai-rounded-2xl` `chai-rounded-3xl` `chai-rounded-full`

```html
<div class="chai-border-2 chai-border-solid chai-border-gray chai-rounded-lg">
    Bordered box
</div>
```

### 📦 Layout & Display

**Display:**
- `chai-flex` `chai-grid` `chai-block` `chai-inline` `chai-inline-block` `chai-inline-flex` `chai-hidden`

**Flexbox Direction:**
- `chai-flex-row` `chai-flex-col` `chai-flex-row-reverse` `chai-flex-col-reverse`

**Flexbox Wrap:**
- `chai-flex-wrap` `chai-flex-nowrap` `chai-flex-wrap-reverse`

**Justify Content:**
- `chai-justify-start` `chai-justify-center` `chai-justify-end` `chai-justify-between` `chai-justify-around` `chai-justify-evenly`

**Align Items:**
- `chai-items-start` `chai-items-center` `chai-items-end` `chai-items-stretch` `chai-items-baseline`

**Flex Sizing:**
- `chai-flex-1` `chai-flex-auto` `chai-flex-initial` `chai-flex-none`
- `chai-grow-{value}` `chai-shrink-{value}`

**Gap:**
- `chai-gap-{value}` `chai-gap-x-{value}` `chai-gap-y-{value}`

```html
<div class="chai-flex chai-justify-between chai-items-center chai-gap-16">
    <div>Item 1</div>
    <div>Item 2</div>
    <div>Item 3</div>
</div>
```

### 🎯 Grid

- `chai-grid-cols-{n}` - Grid with n columns
- `chai-grid-rows-{n}` - Grid with n rows
- `chai-col-span-{n}` - Span n columns
- `chai-row-span-{n}` - Span n rows

```html
<div class="chai-grid chai-grid-cols-3 chai-gap-16">
    <div>1</div>
    <div class="chai-col-span-2">2 (spans 2 columns)</div>
</div>
```

### 📐 Sizing

**Width:**
- `chai-w-{value}` - Width in pixels
- `chai-w-full` `chai-w-screen` `chai-w-auto` `chai-w-min` `chai-w-max` `chai-w-fit`

**Height:**
- `chai-h-{value}` - Height in pixels
- `chai-h-full` `chai-h-screen` `chai-h-auto` `chai-h-min` `chai-h-max` `chai-h-fit`

**Min/Max Width:**
- `chai-min-w-{value}` - Minimum width
- `chai-max-w-xs` through `chai-max-w-7xl` - Responsive max widths
- `chai-max-w-full` `chai-max-w-min` `chai-max-w-max` `chai-max-w-fit`

**Min/Max Height:**
- `chai-min-h-{value}` `chai-max-h-{value}`

```html
<div class="chai-w-full chai-max-w-2xl chai-mx-auto">
    Responsive centered container
</div>
```

### 📍 Position

**Position Type:**
- `chai-relative` `chai-absolute` `chai-fixed` `chai-sticky` `chai-static`

**Position Offsets:**
- `chai-top-{value}` `chai-right-{value}` `chai-bottom-{value}` `chai-left-{value}`
- `chai-inset-{value}` - All sides
- Use `auto` for auto positioning

**Z-Index:**
- `chai-z-{value}`

```html
<div class="chai-relative chai-h-200">
    <div class="chai-absolute chai-top-10 chai-right-10 chai-z-10">
        Positioned element
    </div>
</div>
```

### ✨ Effects

**Opacity:**
- `chai-opacity-{0-100}` - e.g., `chai-opacity-50` = 50% opacity

**Shadow:**
- `chai-shadow-sm` `chai-shadow-md` `chai-shadow-lg` `chai-shadow-xl` `chai-shadow-2xl` `chai-shadow-none`

```html
<div class="chai-shadow-lg chai-opacity-90">
    Box with shadow and slight transparency
</div>
```

### 📜 Overflow

- `chai-overflow-auto` `chai-overflow-hidden` `chai-overflow-visible` `chai-overflow-scroll`
- `chai-overflow-x-auto` `chai-overflow-x-hidden` `chai-overflow-y-auto` `chai-overflow-y-hidden`

### 🖱️ Interactions

**Cursor:**
- `chai-cursor-pointer` `chai-cursor-default` `chai-cursor-not-allowed` `chai-cursor-wait` `chai-cursor-text` `chai-cursor-move`

**Pointer Events:**
- `chai-pointer-events-none` `chai-pointer-events-auto`

**User Select:**
- `chai-select-none` `chai-select-text` `chai-select-all` `chai-select-auto`

### 🎬 Transitions & Transforms

**Transitions:**
- `chai-transition-none` `chai-transition-all` `chai-transition-colors` `chai-transition-opacity` `chai-transition-shadow` `chai-transition-transform`
- `chai-duration-{ms}` - Duration in milliseconds

**Transforms:**
- `chai-rotate-{deg}` - Rotate in degrees
- `chai-scale-{percent}` - Scale (e.g., `chai-scale-110` = 1.1x)
- `chai-scale-x-{percent}` `chai-scale-y-{percent}`
- `chai-translate-x-{px}` `chai-translate-y-{px}`

### 🖼️ Background

- `chai-bg-cover` `chai-bg-contain`
- `chai-bg-center` `chai-bg-top` `chai-bg-bottom` `chai-bg-left` `chai-bg-right`
- `chai-bg-no-repeat` `chai-bg-repeat`

### 📝 Text Utilities

**Whitespace:**
- `chai-whitespace-normal` `chai-whitespace-nowrap` `chai-whitespace-pre` `chai-whitespace-pre-wrap`

**Word Break:**
- `chai-break-normal` `chai-break-words` `chai-break-all`

**Vertical Align:**
- `chai-align-baseline` `chai-align-top` `chai-align-middle` `chai-align-bottom`

**List Style:**
- `chai-list-none` `chai-list-disc` `chai-list-decimal`

### 🖼️ Object Fit

- `chai-object-cover` `chai-object-contain` `chai-object-fill` `chai-object-none`

## Real-World Examples

### Button
```html
<button class="chai-bg-blue chai-color-white chai-px-24 chai-py-12 chai-rounded-md chai-font-semibold chai-cursor-pointer chai-transition-all" style="border: none;">
    Click Me
</button>
```

### Card Component
```html
<div class="chai-bg-white chai-p-24 chai-rounded-xl chai-shadow-lg">
    <h3 class="chai-text-xl chai-font-bold chai-mb-12">Card Title</h3>
    <p class="chai-text-base chai-color-gray chai-mb-16">Card description text.</p>
    <button class="chai-bg-indigo chai-color-white chai-px-16 chai-py-8 chai-rounded-md">
        Action
    </button>
</div>
```

### Responsive Container
```html
<div class="chai-max-w-4xl chai-mx-auto chai-px-32 chai-py-64">
    <h1 class="chai-text-4xl chai-font-bold chai-mb-24">Page Title</h1>
    <p class="chai-text-lg chai-color-gray">Content goes here...</p>
</div>
```

### Flex Layout
```html
<div class="chai-flex chai-flex-col chai-gap-16">
    <div class="chai-flex chai-justify-between chai-items-center">
        <span>Label</span>
        <span class="chai-font-bold">Value</span>
    </div>
</div>
```

## Color Palette Reference

| Color    | Hex     | Color    | Hex     |
|----------|---------|----------|---------|
| red      | #ef4444 | orange   | #f97316 |
| blue     | #3b82f6 | teal     | #14b8a6 |
| green    | #10b981 | cyan     | #06b6d4 |
| yellow   | #f59e0b | gray     | #6b7280 |
| purple   | #a855f7 | black    | #000000 |
| pink     | #ec4899 | white    | #ffffff |
| indigo   | #6366f1 |          |         |

## How It Works Internally

1. **Initialization:** On page load, scans DOM for elements with `chai-` classes
2. **Parsing:** Extracts class names and maps them to CSS properties
3. **Caching:** Stores computed styles in a Map for reuse
4. **Application:** Applies styles as inline CSS
5. **Observation:** Watches DOM for new elements or class changes using MutationObserver

## Limitations

⚠️ **This is a runtime framework**, which means:
- Styles are applied as inline CSS (lower specificity than stylesheets)
- All styles are computed at runtime (slight performance cost)
- No PurgeCSS-like optimization (but caching helps)
- Not suitable for very large-scale applications
- No pseudo-classes or media queries support (use regular CSS for these)

## Performance

- **Caching:** Computed styles are cached in a Map
- **One-time processing:** Elements are marked to prevent reprocessing
- **Mutation Observer:** Efficiently watches for DOM changes
- **Fast selectors:** Uses attribute selectors for quick element finding

For small to medium projects, performance is excellent. For large applications, consider a build-time solution like Tailwind CSS.

## Use Cases

✅ **Good for:**
- Prototypes and MVPs
- Small to medium projects
- Projects without build tooling
- Learning utility-first CSS
- Quick demos and experiments

❌ **Not ideal for:**
- Very large production applications
- Projects requiring pseudo-classes/media queries in utility form
- Performance-critical applications with thousands of elements

## Browser Support

Works in all modern browsers supporting:
- ES6+ JavaScript (Map, arrow functions, destructuring)
- MutationObserver API
- CSS inline styles

## Project Structure

```
Chai-Tailwind/
├── main.js          # Core framework (~15KB)
├── index.html       # Professional demo landing page
└── README.md        # This file
```

## Contributing

This is a learning project and experiment in utility-first CSS. Feel free to:
- Open issues for bugs
- Suggest new utilities
- Submit pull requests
- Fork and modify for your needs

## License

MIT - Use freely in your projects!

## Acknowledgments

Inspired by Tailwind CSS, but built as a runtime-only alternative for projects without build tooling.

---

**Built with ☕ and vanilla JavaScript**

*ChaiTailwind: Utility-first CSS that works in the browser, no build required.*
