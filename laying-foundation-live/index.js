import React from "react"
import ReactDOM from "react-dom/client"

//*note created React element using core React
// React.createElement=>Object.=>DOM(html)

const coreReactElement= React.createElement("div",{id:"heading" , key:"1"},[React.createElement("h1",{id:"child1", key:"2"},"Namaste LOGO"),
React.createElement("ul",{id:"child2",key:"3"},
[React.createElement("li",{id:"child3", key:""},"About Us"),
React.createElement("li",{id:"child4", key:"5"},"Support"),
React.createElement("li",{id:"child5", key:"6"},"Home")
])])

console.log(coreReactElement) // it will show object


const b ="developers"   // variable

const ComponentFunc=()=>true     // written in single line so need to enclose it within (), or return key with {}

//*JSX: 
// It's a JavaScript syntax which is use to create React element ,HTML like syntax, (but not HTML tag) .*rmbr not Html tag inside js.
// if u write it in multiple line you would need to enclose it inside (). 


//*note created React element using JSX :
//React element(object), It's similar to a normal js variable:
//heading is React element, however whatever written within it is a jsx.
//we can add functional component inside react element and vice-versa

const jsxReactElement=(
<div>
<h1 id="heading"> 
hello {b}</h1>
<ComponentFunc/>
</div>
) 

 // it will show object
console.log(jsxReactElement) // it might not work bcoz of .babellrc

const a =12+"12"    // variable



//Functional component:
const HeaderComponent= function(){
return <h2 className="header"> React functional component, which returns a jsx expression</h2>
}


// functional component with more than one element:
//    > It will enclose inside a div.

//*imp --> any piece of javascript code written within {}.
//using react element within react functional component within these{} paranthese
const HeaderComponent2= function(){
return (<div>
{coreReactElement}
{jsxReactElement} 
 <h2 className="header"> with multiple tags React functional component,using normal function</h2>
</div>)
}

//Composing Component:component inside component or nested component
// another way to write functional component using arrow functions,by using that we can remove 'return' key , we can also write functional component in this way,it's a syntetical sugar:
//so if we use {} must add 'return' keyword, otherwise just wrap them under() if there is multiple line, for single line no need of any brackets or return key.
const HeaderComponent3= ()=> (
<div>
<HeaderComponent2/>
{HeaderComponent()}
{a}
 <h2 className="header"> with multiple tags React functional component,using arrow function</h2>
<h3>another tag 2</h3>
<h3>another tag 3</h3>

<h4>{2+5}</h4>

{console.log(3*4)}
</div>)



const root = ReactDOM.createRoot(document.getElementById("root"))


// root.render(heading) // when we have to render react element , we write like this

// root.render(HeaderComponent3())
root.render(<HeaderComponent3/>)// when we have to render react functional component , we write like this


