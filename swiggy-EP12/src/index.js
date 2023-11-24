/*
Header
 -logo
 -nav items
   - about us
   -contact us
   -extra

Body
  -SearchBar
  -ResturantCard
    - name
    -img
    -cuisines

Footer
  -copyright
  -links
*/

import React, { useContext, Suspense, lazy, useState, useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import Footer from './components/Footer'
import Body from '/src/components/Body'
import Error from './components/Error'
import AboutUs from './components/About'
import ContactUs from './components/Contact'
import ResturantMenu from './components/ResturantMenu'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import LoginPage from './components/Login'
import Profile from './components/Profile'
import Header  from './components/Header'
import Shimmer from './components/ShimmerUI'
import Instamart from './components/Instamart'
import userContext from './utils/userContext'
import Cart from './components/Cart'
import store from './utils/store'
import { Provider } from 'react-redux'



const LazyCompDummy= lazy(()=>{return import('./components/LazyComp')})



const App =()=>{

//context :
const [userName, setUserName]=useState()

useEffect(()=>{

const data={
name:""
}

setUserName(data.name)

}

,[])


return (

<Provider store={store}>
<userContext.Provider value={{name:userName,setUserName}}>

<Header/>

<Outlet /> {/* this tag will be replaced by children component i.e, <Body/> or <AboutUs/> or <ContactUs/> acc. to the route/path */}
<Footer/>
</userContext.Provider>
</Provider>
)
}



//Nested routing(defining children inside any route):
//children route: about,contact, body has become children of <App/> route/path
//pushing children in <App/> acc. to the route/path.
const appRouter= createBrowserRouter([
{
path:"/",
element:<App/>,

children:[
{
path:"/",
element:<Body/>
},
{
path:"/about",
element:<AboutUs/>,
children:[{
path:"profile",
element:<Profile/>,

}]

},
{
path:"/contact",
element:<ContactUs/>

},

{
// by using ':' we can define dynamic parameter in a url. here ':id' is a dynamic parameter , nd we can extract its value using 'useParams' hook
path:"/resturant/:id",
element:<ResturantMenu/>

},
{
path:"/login",
element:<LoginPage/>

},{
  path:"/lazyloading",
  
  element:<Suspense fallback={<Shimmer/>}><LazyCompDummy/></Suspense>
},

{
path:"/instamart",
element:<Instamart/>

},

{
path:"/cart",
element:<Cart/>

}
],errorElement:<Error/>,

}])

const root= ReactDOM.createRoot(document.getElementById("root"))
root.render(<RouterProvider  router={appRouter}/>)
