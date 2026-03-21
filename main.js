
// Color palette
const colors = {
    red: '#ef4444',
    blue: '#3b82f6',
    green: '#10b981',
    yellow: '#f59e0b',
    purple: '#a855f7',
    pink: '#ec4899',
    indigo: '#6366f1',
    gray: '#6b7280',
    black: '#000000',
    white: '#ffffff',
    orange: '#f97316',
    teal: '#14b8a6',
    cyan: '#06b6d4',
};

// Font size mapping
const fontSizes = {
    xs: '12px',
    sm: '14px',
    base: '16px',
    lg: '18px',
    xl: '20px',
    '2xl': '24px',
    '3xl': '30px',
    '4xl': '36px',
    '5xl': '48px',
};

// Font weight mapping
const fontWeights = {
    thin: '100',
    light: '300',
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
    extrabold: '800',
    black: '900',
};

const styles = {
    // Padding utilities
    p: (v) => `padding: ${v}px`,
    pt: (v) => `padding-top: ${v}px`,
    pr: (v) => `padding-right: ${v}px`,
    pb: (v) => `padding-bottom: ${v}px`,
    pl: (v) => `padding-left: ${v}px`,
    px: (v) => `padding-left: ${v}px; padding-right: ${v}px`,
    py: (v) => `padding-top: ${v}px; padding-bottom: ${v}px`,

    // Margin utilities
    m: (v) => `margin: ${v}px`,
    mt: (v) => `margin-top: ${v}px`,
    mr: (v) => `margin-right: ${v}px`,
    mb: (v) => `margin-bottom: ${v}px`,
    ml: (v) => `margin-left: ${v}px`,
    mx: (v) => `margin-left: ${v}px; margin-right: ${v}px`,
    my: (v) => `margin-top: ${v}px; margin-bottom: ${v}px`,

    // Text color
    color: (v) => `color: ${colors[v] || v}`,

    // Background color
    bg: (v) => `background-color: ${colors[v] || v}`,

    // Typography - Font size
    text: (v) => {
        // Check if it's a size
        if (fontSizes[v]) return `font-size: ${fontSizes[v]}`;
        // Check if it's alignment
        if (['left', 'center', 'right', 'justify'].includes(v)) {
            return `text-align: ${v}`;
        }
        // Check if it's a color
        if (colors[v] || v.startsWith('#')) {
            return `color: ${colors[v] || v}`;
        }
        return '';
    },

    // Font weight
    font: (v) => {
        if (fontWeights[v]) return `font-weight: ${fontWeights[v]}`;
        return `font-weight: ${v}`;
    },

    // Border utilities
    border: (v) => {
        // If it's a number, treat as width
        if (!isNaN(v)) return `border: ${v}px solid`;
        // If it's a color
        if (colors[v] || v.startsWith('#')) return `border-color: ${colors[v] || v}`;
        // If it's a style
        if (['solid', 'dashed', 'dotted', 'double', 'none'].includes(v)) {
            return `border-style: ${v}`;
        }
        return `border: 1px solid`;
    },

    // Border radius
    rounded: (v) => {
        const values = {
            sm: '2px',
            md: '6px',
            lg: '8px',
            xl: '12px',
            '2xl': '16px',
            full: '9999px',
        };
        return `border-radius: ${values[v] || v + 'px'}`;
    },

    // Display utilities
    flex: () => `display: flex`,
    block: () => `display: block`,
    inline: () => `display: inline`,
    'inline-block': () => `display: inline-block`,
    hidden: () => `display: none`,

    // Width and Height
    w: (v) => {
        if (v === 'full') return `width: 100%`;
        if (v === 'screen') return `width: 100vw`;
        if (v === 'auto') return `width: auto`;
        return `width: ${v}px`;
    },
    h: (v) => {
        if (v === 'full') return `height: 100%`;
        if (v === 'screen') return `height: 100vh`;
        if (v === 'auto') return `height: auto`;
        return `height: ${v}px`;
    },

    // Flexbox utilities
    'justify-center': () => `justify-content: center`,
    'justify-start': () => `justify-content: flex-start`,
    'justify-end': () => `justify-content: flex-end`,
    'justify-between': () => `justify-content: space-between`,
    'items-center': () => `align-items: center`,
    'items-start': () => `align-items: flex-start`,
    'items-end': () => `align-items: flex-end`,

    // Gap utility
    gap: (v) => `gap: ${v}px`,
}


const cache = new Map();

function getStyle(className) {
    // Check cache first
    if (cache.has(className)) return cache.get(className);

    // Remove 'chai-' prefix
    const withoutPrefix = className.replace('chai-', '');
    const parts = withoutPrefix.split('-');

    let result = '';

    // Try to find the utility in styles object
    // First try exact match (for utilities like 'flex', 'block', 'hidden')
    if (styles[withoutPrefix]) {
        result = styles[withoutPrefix]();
    }
    // Try two-part utilities (like 'pt-4', 'bg-red', 'text-center')
    else if (parts.length >= 2) {
        const type = parts[0];
        const value = parts.slice(1).join('-'); // Join back for values like '2xl'

        if (styles[type]) {
            result = styles[type](value);
        }
    }
    // Try three-part utilities (like 'justify-center', 'items-center')
    if (!result && parts.length >= 2) {
        const compound = parts.slice(0, 2).join('-');
        if (styles[compound]) {
            result = styles[compound]();
        }
    }

    cache.set(className, result);
    return result;
}


const elements = document.querySelectorAll('[class *= "chai-"]')
console.log("Elements: ", elements) // Elements:  NodeList(3) [h1.chai-border-10.chai-color-green, h1.chai-color-blue, h1.nochai-color-blue]

elements.forEach(e => {

    if (e.dataset.chaiDone) return;

    const chaiList = [...e.classList].filter(c => c.startsWith("chai-"));
    console.log("ChaiList: ", chaiList) // ChaiList:  (2) ['chai-border-10', 'chai-color-green']    ChaiList:  ['chai-color-blue']    ChaiList:  []

    let style = ""

    chaiList.forEach((ch) => {
        console.log("Chai Element's class: ", ch)

        const generatedStyle = getStyle(ch);
        if (generatedStyle) {
            style += generatedStyle + "; ";
        }
    })

    e.style.cssText += style // <h1 class="chai-border-10 chai-color-green" style="border: 10px solid red; color: green;">Hello ji</h1>       <h1 class="chai-color-blue" style="color: blue;">Hello ji</h1>

    e.dataset.chaiDone = "true";
});


