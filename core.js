// ===============================
// 🧠 Core Engine
// ===============================

const cache = new Map();

function getStyle(className) {
    // Check cache first
    if (cache.has(className)) return cache.get(className);

    // Remove 'chai-' prefix if present
    const withoutPrefix = className.startsWith('chai-')
        ? className.replace('chai-', '')
        : className;
    const parts = withoutPrefix.split('-');

    let result = '';

    // Try direct match first (for utilities without values like 'flex', 'block', 'hidden')
    if (styles[withoutPrefix]) {
        result = typeof styles[withoutPrefix] === 'function'
            ? styles[withoutPrefix]()
            : styles[withoutPrefix];
    }
    // Try type-value pattern (like 'bg-red', 'p-20')
    else if (parts.length >= 2) {
        const type = parts[0];
        const value = parts.slice(1).join('-');

        if (styles[type]) {
            result = styles[type](value);
        }
    }
    // Try compound utilities (like 'justify-center')
    if (!result && parts.length >= 2) {
        // Try two-part compound
        const compound2 = parts.slice(0, 2).join('-');
        if (styles[compound2]) {
            result = typeof styles[compound2] === 'function'
                ? styles[compound2]()
                : styles[compound2];
        }

        // Try three-part compound (like 'overflow-x-auto')
        if (!result && parts.length >= 3) {
            const compound3 = parts.slice(0, 3).join('-');
            if (styles[compound3]) {
                result = typeof styles[compound3] === 'function'
                    ? styles[compound3]()
                    : styles[compound3];
            }
        }
    }

    cache.set(className, result);
    return result;
}

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
            const style = getStyle(cls);
            if (style) {
                finalStyle += style + "; ";
            }
        });

        // Apply styles in one go (performance)
        if (finalStyle) {
            el.style.cssText += finalStyle;
        }

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
