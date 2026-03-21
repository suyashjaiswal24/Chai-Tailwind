
const styles = {
    border: function (p) {
        return `border: ${p}px solid red`
    },
    color: (v) => `color: ${v}`,
}


const cache = new Map();

function getStyle(type, value) {
    const key = `${type}-${value}`;

    if (cache.has(key)) return cache.get(key);

    const result = styles[type](value);
    cache.set(key, result);

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
        const parts = ch.split("-") // parts = ["chai", "border", "10"]    parts = ["chai", "color", "green"]   parts = ["chai", "color", "blue"]

        const type = parts[1]         // border  color      color
        const value = parts[2] ?? "" //  10     green      blue

        style += getStyle(type, value) + "; "
    })

    e.style.cssText += style // <h1 class="chai-border-10 chai-color-green" style="border: 10px solid red; color: green;">Hello ji</h1>       <h1 class="chai-color-blue" style="color: blue;">Hello ji</h1>

    e.dataset.chaiDone = "true";
});


