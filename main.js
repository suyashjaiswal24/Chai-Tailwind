
const styles = {
    "border-10" : "border: 10px solid red",
    "color-green" : "color: green"
}


let ele = document.querySelector('[class]')
console.log("Element: ", ele)

const classArray = Array.from(ele.classList)
console.log("ClassArray: ", classArray) // ClassArray:  (2) ['chai-border-10', 'chai-color-green']

let style = ""

classArray.forEach((cl) => {
    
    let strippedClassName = cl.slice(5); 
    console.log("StrippedClassName: ", strippedClassName) // StrippedClassName:  border-10            StrippedClassName:  color-green

    if(styles[strippedClassName]){
        style += styles[strippedClassName] + "; " //style="border: 10px solid red;"              style="border: 10px solid red; color: green;"
    }
})

ele.style = style // <h1 class="chai-border-10 chai-color-green" style="border: 10px solid red; color: green;">Hello ji</h1>


