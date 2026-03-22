// ===============================
// 🎨 Style Configurations & Utilities
// ===============================

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
    // ==================== SPACING ====================
    // Padding utilities
    p: (v) => v === 'auto' ? '' : `padding: ${v}px`,
    pt: (v) => `padding-top: ${v}px`,
    pr: (v) => `padding-right: ${v}px`,
    pb: (v) => `padding-bottom: ${v}px`,
    pl: (v) => `padding-left: ${v}px`,
    px: (v) => `padding-left: ${v}px; padding-right: ${v}px`,
    py: (v) => `padding-top: ${v}px; padding-bottom: ${v}px`,

    // Margin utilities
    m: (v) => v === 'auto' ? `margin: auto` : `margin: ${v}px`,
    mt: (v) => v === 'auto' ? `margin-top: auto` : `margin-top: ${v}px`,
    mr: (v) => v === 'auto' ? `margin-right: auto` : `margin-right: ${v}px`,
    mb: (v) => v === 'auto' ? `margin-bottom: auto` : `margin-bottom: ${v}px`,
    ml: (v) => v === 'auto' ? `margin-left: auto` : `margin-left: ${v}px`,
    mx: (v) => v === 'auto' ? `margin-left: auto; margin-right: auto` : `margin-left: ${v}px; margin-right: ${v}px`,
    my: (v) => v === 'auto' ? `margin-top: auto; margin-bottom: auto` : `margin-top: ${v}px; margin-bottom: ${v}px`,

    // ==================== COLORS ====================
    // Text color
    color: (v) => `color: ${colors[v] || v}`,

    // Background color
    bg: (v) => `background-color: ${colors[v] || v}`,

    // ==================== TYPOGRAPHY ====================
    // Font size and text utilities
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
        // Text transform
        if (['uppercase', 'lowercase', 'capitalize'].includes(v)) {
            return `text-transform: ${v}`;
        }
        // Text decoration
        if (['underline', 'overline', 'line-through', 'none'].includes(v)) {
            return `text-decoration: ${v}`;
        }
        return '';
    },

    // Font weight
    font: (v) => {
        if (fontWeights[v]) return `font-weight: ${fontWeights[v]}`;
        return `font-weight: ${v}`;
    },

    // Line height
    leading: (v) => {
        const values = {
            none: '1',
            tight: '1.25',
            snug: '1.375',
            normal: '1.5',
            relaxed: '1.625',
            loose: '2',
        };
        return `line-height: ${values[v] || v}`;
    },

    // Letter spacing
    tracking: (v) => {
        const values = {
            tighter: '-0.05em',
            tight: '-0.025em',
            normal: '0',
            wide: '0.025em',
            wider: '0.05em',
            widest: '0.1em',
        };
        return `letter-spacing: ${values[v] || v + 'px'}`;
    },

    // ==================== BORDERS ====================
    // Border utilities
    border: (v) => {
        if (!v) return `border: 1px solid`;
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

    // Individual border sides
    'border-t': (v) => !isNaN(v) ? `border-top: ${v}px solid` : `border-top: 1px solid ${colors[v] || v}`,
    'border-r': (v) => !isNaN(v) ? `border-right: ${v}px solid` : `border-right: 1px solid ${colors[v] || v}`,
    'border-b': (v) => !isNaN(v) ? `border-bottom: ${v}px solid` : `border-bottom: 1px solid ${colors[v] || v}`,
    'border-l': (v) => !isNaN(v) ? `border-left: ${v}px solid` : `border-left: 1px solid ${colors[v] || v}`,

    // Border radius
    rounded: (v) => {
        const values = {
            none: '0',
            sm: '2px',
            md: '6px',
            lg: '8px',
            xl: '12px',
            '2xl': '16px',
            '3xl': '24px',
            full: '9999px',
        };
        return `border-radius: ${values[v] || v + 'px'}`;
    },

    // ==================== DISPLAY ====================
    flex: () => `display: flex`,
    grid: () => `display: grid`,
    block: () => `display: block`,
    inline: () => `display: inline`,
    'inline-block': () => `display: inline-block`,
    'inline-flex': () => `display: inline-flex`,
    hidden: () => `display: none`,

    // ==================== DIMENSIONS ====================
    // Width
    w: (v) => {
        if (v === 'full') return `width: 100%`;
        if (v === 'screen') return `width: 100vw`;
        if (v === 'auto') return `width: auto`;
        if (v === 'min') return `width: min-content`;
        if (v === 'max') return `width: max-content`;
        if (v === 'fit') return `width: fit-content`;
        return `width: ${v}px`;
    },

    // Height
    h: (v) => {
        if (v === 'full') return `height: 100%`;
        if (v === 'screen') return `height: 100vh`;
        if (v === 'auto') return `height: auto`;
        if (v === 'min') return `height: min-content`;
        if (v === 'max') return `height: max-content`;
        if (v === 'fit') return `height: fit-content`;
        return `height: ${v}px`;
    },

    // Min/Max Width
    'min-w': (v) => {
        if (v === 'full') return `min-width: 100%`;
        if (v === 'min') return `min-width: min-content`;
        if (v === 'max') return `min-width: max-content`;
        if (v === 'fit') return `min-width: fit-content`;
        return `min-width: ${v}px`;
    },
    'max-w': (v) => {
        const values = {
            xs: '320px',
            sm: '384px',
            md: '448px',
            lg: '512px',
            xl: '576px',
            '2xl': '672px',
            '3xl': '768px',
            '4xl': '896px',
            '5xl': '1024px',
            '6xl': '1152px',
            '7xl': '1280px',
            full: '100%',
            min: 'min-content',
            max: 'max-content',
            fit: 'fit-content',
        };
        return `max-width: ${values[v] || v + 'px'}`;
    },

    // Min/Max Height
    'min-h': (v) => {
        if (v === 'full') return `min-height: 100%`;
        if (v === 'screen') return `min-height: 100vh`;
        return `min-height: ${v}px`;
    },
    'max-h': (v) => {
        if (v === 'full') return `max-height: 100%`;
        if (v === 'screen') return `max-height: 100vh`;
        return `max-height: ${v}px`;
    },

    // ==================== FLEXBOX ====================
    'flex-row': () => `flex-direction: row`,
    'flex-col': () => `flex-direction: column`,
    'flex-row-reverse': () => `flex-direction: row-reverse`,
    'flex-col-reverse': () => `flex-direction: column-reverse`,

    'flex-wrap': () => `flex-wrap: wrap`,
    'flex-nowrap': () => `flex-wrap: nowrap`,
    'flex-wrap-reverse': () => `flex-wrap: wrap-reverse`,

    'justify-center': () => `justify-content: center`,
    'justify-start': () => `justify-content: flex-start`,
    'justify-end': () => `justify-content: flex-end`,
    'justify-between': () => `justify-content: space-between`,
    'justify-around': () => `justify-content: space-around`,
    'justify-evenly': () => `justify-content: space-evenly`,

    'items-center': () => `align-items: center`,
    'items-start': () => `align-items: flex-start`,
    'items-end': () => `align-items: flex-end`,
    'items-stretch': () => `align-items: stretch`,
    'items-baseline': () => `align-items: baseline`,

    'content-center': () => `align-content: center`,
    'content-start': () => `align-content: flex-start`,
    'content-end': () => `align-content: flex-end`,
    'content-between': () => `align-content: space-between`,
    'content-around': () => `align-content: space-around`,

    'self-auto': () => `align-self: auto`,
    'self-start': () => `align-self: flex-start`,
    'self-end': () => `align-self: flex-end`,
    'self-center': () => `align-self: center`,
    'self-stretch': () => `align-self: stretch`,

    'flex-1': () => `flex: 1 1 0%`,
    'flex-auto': () => `flex: 1 1 auto`,
    'flex-initial': () => `flex: 0 1 auto`,
    'flex-none': () => `flex: none`,

    grow: (v) => `flex-grow: ${v}`,
    shrink: (v) => `flex-shrink: ${v}`,

    gap: (v) => `gap: ${v}px`,
    'gap-x': (v) => `column-gap: ${v}px`,
    'gap-y': (v) => `row-gap: ${v}px`,

    // ==================== GRID ====================
    'grid-cols': (v) => `grid-template-columns: repeat(${v}, minmax(0, 1fr))`,
    'grid-rows': (v) => `grid-template-rows: repeat(${v}, minmax(0, 1fr))`,
    'col-span': (v) => v === 'full' ? `grid-column: 1 / -1` : `grid-column: span ${v} / span ${v}`,
    'row-span': (v) => v === 'full' ? `grid-row: 1 / -1` : `grid-row: span ${v} / span ${v}`,

    // ==================== POSITION ====================
    relative: () => `position: relative`,
    absolute: () => `position: absolute`,
    fixed: () => `position: fixed`,
    sticky: () => `position: sticky`,
    static: () => `position: static`,

    top: (v) => v === 'auto' ? `top: auto` : `top: ${v}px`,
    right: (v) => v === 'auto' ? `right: auto` : `right: ${v}px`,
    bottom: (v) => v === 'auto' ? `bottom: auto` : `bottom: ${v}px`,
    left: (v) => v === 'auto' ? `left: auto` : `left: ${v}px`,
    inset: (v) => v === 'auto' ? `inset: auto` : `inset: ${v}px`,

    z: (v) => `z-index: ${v}`,

    // ==================== EFFECTS ====================
    // Opacity
    opacity: (v) => `opacity: ${parseInt(v) / 100}`,

    // Shadow
    shadow: (v) => {
        const values = {
            sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
            md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
            lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
            xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
            '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
            none: 'none',
        };
        return `box-shadow: ${values[v] || '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)'}`;
    },

    // ==================== OVERFLOW ====================
    'overflow-auto': () => `overflow: auto`,
    'overflow-hidden': () => `overflow: hidden`,
    'overflow-visible': () => `overflow: visible`,
    'overflow-scroll': () => `overflow: scroll`,
    'overflow-x-auto': () => `overflow-x: auto`,
    'overflow-x-hidden': () => `overflow-x: hidden`,
    'overflow-y-auto': () => `overflow-y: auto`,
    'overflow-y-hidden': () => `overflow-y: hidden`,

    // ==================== INTERACTIONS ====================
    // Cursor
    cursor: (v) => `cursor: ${v}`,
    'cursor-pointer': () => `cursor: pointer`,
    'cursor-default': () => `cursor: default`,
    'cursor-not-allowed': () => `cursor: not-allowed`,
    'cursor-wait': () => `cursor: wait`,
    'cursor-text': () => `cursor: text`,
    'cursor-move': () => `cursor: move`,

    // Pointer events
    'pointer-events-none': () => `pointer-events: none`,
    'pointer-events-auto': () => `pointer-events: auto`,

    // User select
    'select-none': () => `user-select: none`,
    'select-text': () => `user-select: text`,
    'select-all': () => `user-select: all`,
    'select-auto': () => `user-select: auto`,

    // ==================== TRANSITIONS & TRANSFORMS ====================
    transition: (v) => {
        const values = {
            none: 'none',
            all: 'all 150ms cubic-bezier(0.4, 0, 0.2, 1)',
            colors: 'color, background-color, border-color 150ms cubic-bezier(0.4, 0, 0.2, 1)',
            opacity: 'opacity 150ms cubic-bezier(0.4, 0, 0.2, 1)',
            shadow: 'box-shadow 150ms cubic-bezier(0.4, 0, 0.2, 1)',
            transform: 'transform 150ms cubic-bezier(0.4, 0, 0.2, 1)',
        };
        return `transition: ${values[v] || values.all}`;
    },

    duration: (v) => `transition-duration: ${v}ms`,

    rotate: (v) => `transform: rotate(${v}deg)`,
    scale: (v) => `transform: scale(${parseInt(v) / 100})`,
    'scale-x': (v) => `transform: scaleX(${parseInt(v) / 100})`,
    'scale-y': (v) => `transform: scaleY(${parseInt(v) / 100})`,
    translate: (v) => `transform: translate(${v}px, ${v}px)`,
    'translate-x': (v) => `transform: translateX(${v}px)`,
    'translate-y': (v) => `transform: translateY(${v}px)`,

    // ==================== BACKGROUNDS ====================
    'bg-cover': () => `background-size: cover`,
    'bg-contain': () => `background-size: contain`,
    'bg-center': () => `background-position: center`,
    'bg-top': () => `background-position: top`,
    'bg-bottom': () => `background-position: bottom`,
    'bg-left': () => `background-position: left`,
    'bg-right': () => `background-position: right`,
    'bg-no-repeat': () => `background-repeat: no-repeat`,
    'bg-repeat': () => `background-repeat: repeat`,

    // ==================== MISC ====================
    // Object fit (for images/video)
    'object-cover': () => `object-fit: cover`,
    'object-contain': () => `object-fit: contain`,
    'object-fill': () => `object-fit: fill`,
    'object-none': () => `object-fit: none`,

    // Vertical align
    'align-baseline': () => `vertical-align: baseline`,
    'align-top': () => `vertical-align: top`,
    'align-middle': () => `vertical-align: middle`,
    'align-bottom': () => `vertical-align: bottom`,
    'align-text-top': () => `vertical-align: text-top`,
    'align-text-bottom': () => `vertical-align: text-bottom`,

    // Whitespace
    'whitespace-normal': () => `white-space: normal`,
    'whitespace-nowrap': () => `white-space: nowrap`,
    'whitespace-pre': () => `white-space: pre`,
    'whitespace-pre-wrap': () => `white-space: pre-wrap`,

    // Word break
    'break-normal': () => `word-break: normal; overflow-wrap: normal`,
    'break-words': () => `overflow-wrap: break-word`,
    'break-all': () => `word-break: break-all`,

    // List style
    'list-none': () => `list-style-type: none`,
    'list-disc': () => `list-style-type: disc`,
    'list-decimal': () => `list-style-type: decimal`,
}
