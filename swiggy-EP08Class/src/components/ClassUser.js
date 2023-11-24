// import React from "react";
import { Component } from "react"
 
 class User extends Component
 {
        //all the passing argument combined as a single object nd passed into the constructor'props' :
        constructor(props){
        super(props)
        //state variable, it's a single big object which contains  all the state variables
        this.state={
                userInfo:{
                name:"xyz",
                followers:"101"
                }
        }

        // console.log(props)
        console.log("child constructor  "+this.props.name)
    
    }

    async componentDidMount(){
    
    const data= await fetch("https://api.github.com/users/preetikumari560")
    const json = await data?.json()
    this.setState({
    userInfo:json
    })
    console.log(json)
    console.log("child compDidMount  "+this.props.name)
    }


componentDidUpdate(){
console.log("child compDidUpdate  "+this.props.name)
}
        render()
        {
        // debugger;
          console.log("child render  "+this.props.name)
            //destructure of props:
            const {name,avatar_url,followers}=this.state.userInfo
            return <div className="user-card">
            <h1>Class Based Component</h1>
            <h2>name: {name}</h2>
        
            <h2>followers:{followers}</h2>
            <img src={avatar_url}></img>
                        </div>
        }
 }

export default User

