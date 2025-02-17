import React from "react";
import { Nav } from "react-bootstrap";
import {Link, NavLink} from "react-router-dom"


const Navbar = (()=>{

        return(
            <div>

                <nav className="f4 fw6 db black no-underline underline-hover" href="#0">
                    <Link className="pa3 pa4-ns" to='/'>Főoldal</Link>
                    <NavLink className="pa3 pa4-ns" to='/ermesek'>Az olimpia érmesei</NavLink>
                    <NavLink className="pa3 pa4-ns" to='/mermesek'>Az olimpia magyar érmesei</NavLink>
                </nav>
               
            </div>
        )
}
)

export default Navbar