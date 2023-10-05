const heading = React.createElement("h1",{id:"title"},"Namaste javascript")
const heading1 = React.createElement("h1",{id:"head"},"heading 1")
const heading2 = React.createElement("h2",{},"heading 2")

// multiple element share in array format:
const div= React.createElement("div",{id:"container"},[heading1,heading2])
const root = ReactDOM.createRoot(document.getElementById("root"))


console.log(heading)

root.render(heading)
console.log(div)
// we can only use single render and root element to  render react element
root.render(div)