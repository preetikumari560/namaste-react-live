import { Outlet } from "react-router-dom"
import User from './ClassUser'
import React from "react"
import ExtraComp from "./ExtraClassComp"


class AboutUS extends React.Component
{

constructor(props){
super(props)

console.log("parent constructor")

}

componentDidMount()
{

console.log("parent compDidMount")
}

render()
{
console.log("parent render")

return <div>

<h1>This is about us page !</h1>
<User  name="preeti" location="india"/>
{/* <User  name="sikha" location="US"></User> */}
<ExtraComp/>

</div>
}

}



export default AboutUS

// to implement nested routing:
// const AboutUS =()=>{
// return(<>
// <h1>This is about us page !</h1>
// <Outlet/>
// <User  name="preeti" location="india"/>

// </>
// )}