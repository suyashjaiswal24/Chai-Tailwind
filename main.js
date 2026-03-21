
const styles = {
    border: function(p){
        return `border: ${p}px solid red`
    }, 
    color : (v) => `color: ${v}`
}


let ele = document.querySelectorAll('[class]')
console.log("Elements: ", ele) // Elements:  NodeList(2) [h1.chai-border-10.chai-color-green, h1.heading]
let ele2 = document.querySelectorAll('[class *= "chai-"]')
console.log("Elements: ", ele2) // Elements:  NodeList [h1.chai-border-10.chai-color-green]

const classArray = Array.from(ele2[0].classList)
console.log("ClassArray: ", classArray) // ClassArray:  (2) ['chai-border-10', 'chai-color-green']

let style = ""

classArray.forEach((cl) => {
    
    const parts = cl.split("-") // parts = ["chai", "border", "10"]       parts = ["chai", "color", "green"]

    const type = parts[1] // border      color
    const value = parts[2] // 10         green

    if(styles[type]){
        console.log(`Style for ${type}-> `, styles[type](value) + "; ") //Style for border->  border: 10px solid red;           Style for color->  color: green; 
        style += styles[type](value) + "; "
        console.log( `Element Style becomes-> ` , style) // Element Style becomes->  border: 10px solid red;      Element Style becomes->  border: 10px solid red; color: green;
    }
})

ele2[0].style = style // <h1 class="chai-border-10 chai-color-green" style="border: 10px solid red; color: green;">Hello ji</h1>


