
const CartButton=({name,onClick,style})=>{


return(
  <button className={style +" text-lg text-center border-2 border-solid border-[#E3DFFD]  shadow-lg shadow-blue-400/60 hover:shadow-indigo-500/40 bg-gradient-to-r   border-y-indigo-500/40  hover:from-blue-200/40 hover:to-indigo-900/40 " } onClick={onClick}>{name}</button>

)


}

export default CartButton