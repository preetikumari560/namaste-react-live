
import React from "react"
class ExtraComp extends React.Component
{

constructor(props){
super(props)
console.log("extra constructor")
this.state={
var1:123,
count:0
}
}

componentDidMount(){
//need to clear this intervel otherwise it will keep calling
 this.timer= setInterval(()=>{console.log("extra compDidMount")},1000)

}
componentDidUpdate(){

console.log("extra compDidUpdate")
}

componentWillUnmount(){
//clearing interval when switching one comp to another.
clearInterval(this.timer)
console.log("extra compWillUnmount")
}
render()
{
console.log("extra render")
return(<>
<h1>class based component</h1>
<p>{this.props.name}</p>
<p>{this.state.count}</p>
<p>{this.state.var1}</p>
{/* {this.state.count=1}  ***never do that, never mutate state directly*/} 
<button onClick={()=>{
    this.setState({
    count:this.state.count+1,
    var1:"ram"
    })
}

}>update state</button>
</>
)
}


}

export default ExtraComp


