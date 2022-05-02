import { Link } from "react-router-dom"

export const Navbar=()=>{
    const nav=[
        {title:"Home", to:"/"},
        {title:"Login", to:"/login"}
    ]

    return (
        <div>
          {  nav.map((e)=>(
                <Link to ={e.to}>
                    {e.title}
                </Link>
            ))}
        </div>
    )
}