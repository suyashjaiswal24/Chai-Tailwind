
const styles = {
    border: function(p){
        return `border: ${p}px solid red`
    }, 
    color : (v) => `color: ${v}`
}


let ele = document.querySelectorAll('[class *= "chai-"]')
console.log("Elements: ", ele) // Elements:  NodeList(3) [h1.chai-border-10.chai-color-green, h1.chai-color-blue, h1.nochai-color-blue]

ele.forEach(e => {
    const classArray = Array.from(e.classList)
    console.log("ClassArray: ", classArray) // ClassArray:  (2) ['chai-border-10', 'chai-color-green']    ClassArray:  ['chai-color-blue']    ClassArray:  ['nochai-color-blue']
    
    const chaiList = classArray.filter((c) => c.startsWith("chai-"))
    console.log("ChaiList: ", chaiList) // ChaiList:  (2) ['chai-border-10', 'chai-color-green']    ChaiList:  ['chai-color-blue']    ChaiList:  []
    
    let style = ""
    
    chaiList.forEach((ch) => {
        console.log("Chai Element's class: ",ch)
        const parts = ch.split("-") // parts = ["chai", "border", "10"]    parts = ["chai", "color", "green"]   parts = ["chai", "color", "blue"]
    
        const type = parts[1] // border  color      color
        const value = parts[2] // 10     green      blue
    
        if(styles[type]){
            console.log(`Style for ${type}-> `, styles[type](value) + "; ") //Style for border->  border: 10px solid red;    Style for color->  color: green;    Style for color->  color: blue; 
            style += styles[type](value) + "; "
            console.log( `Element Style becomes-> ` , style) // Element Style becomes->  border: 10px solid red;   Element Style becomes->  border: 10px solid red; color: green;      Element Style becomes->  color: blue; 
        }
    })
    
    e.style.cssText += style // <h1 class="chai-border-10 chai-color-green" style="border: 10px solid red; color: green;">Hello ji</h1>       <h1 class="chai-color-blue" style="color: blue;">Hello ji</h1>
});


