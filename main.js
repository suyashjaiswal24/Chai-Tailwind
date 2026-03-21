
// const styles = {
//     "border-10" : "border: 10px solid red",
//     "border-20" : "border: 20px solid red",
//     "border-30" : "border: 30px solid red",
//     "color-green" : "color: green"
// }


const styles = {
    border: function(p){
        return `border: ${p}px solid red`
    }, 
    color : (v) => `color: ${v}`
}


let ele = document.querySelector('[class]')
console.log("Element: ", ele)

const classArray = Array.from(ele.classList)
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

ele.style = style // <h1 class="chai-border-10 chai-color-green" style="border: 10px solid red; color: green;">Hello ji</h1>


