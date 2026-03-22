// ===============================
// 🔥 ChaiTailwind Engine
// ===============================


//#region Utility-style-generators
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
//#endregion


// Cache for computed styles
const cache = new Map();

function getStyle(type, value) {
    const key = `${type}-${value}`;

    if (cache.has(key)) return cache.get(key);

    if (!styles[type]) return "";

    const result = styles[type](value);
    cache.set(key, result);

    return result;
}

// ===============================
// 🧠 Core Engine
// ===============================

function applyChaiStyles(root = document) {
    const elements = root.querySelectorAll('[class*="chai-"]');

    elements.forEach((el) => {
        // Prevent duplicate processing
        if (el.dataset.chaiDone) return;

        const chaiClasses = [...el.classList].filter((c) =>
            c.startsWith("chai-")
        );

        if (chaiClasses.length === 0) return;

        let finalStyle = "";

        chaiClasses.forEach((cls) => {
            const parts = cls.split("-");
            const type = parts[1];
            const value = parts[2] || "";

            const style = getStyle(type, value);
            if (style) {
                finalStyle += style + "; ";
            }
        });

        // Apply styles in one go (performance)
        el.style.cssText += finalStyle;

        // Mark as processed
        el.dataset.chaiDone = "true";
    });
}

// ===============================
// 👀 Mutation Observer
// ===============================

function startObserver() {
    const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {

            // Handle new elements
            mutation.addedNodes.forEach((node) => {
                if (node.nodeType !== 1) return;

                applyChaiStyles(node);
            });

            // Handle class changes
            if (
                mutation.type === "attributes" &&
                mutation.attributeName === "class"
            ) {
                const el = mutation.target;

                // Reset so it can reprocess
                delete el.dataset.chaiDone;

                applyChaiStyles(el.parentNode);
            }
        });
    });

    observer.observe(document.body, {
        childList: true,
        subtree: true,
        attributes: true,
        attributeFilter: ["class"],
    });
}

// ===============================
// 🚀 Init
// ===============================

// Initial run
applyChaiStyles();

// Start watching DOM
startObserver();