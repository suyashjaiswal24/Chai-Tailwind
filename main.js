
const styles = {
    "border-10" : "border: 10px solid red",
    "c-green" : "color: green"
}


let ele = document.querySelector('[class]')
console.log("Element: ", ele)

let strippedClassName = ele.className.slice(5)

console.log("StrippedClassName: ", strippedClassName)

if(styles[strippedClassName]){
    ele.style = styles[strippedClassName]
}
