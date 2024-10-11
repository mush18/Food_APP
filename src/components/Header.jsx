import { LOGO_URL } from "../../utils/constants";
import {useState} from "react";

export const Header = ()=>
{
    // let btnname="Login";
    let [btnname,setBtnname]=useState("Login");


    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL}></img>
                <h3 className="app-name">BiteBuddy</h3>
            </div>

            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                    <button className="login" onClick={()=>{
                        if (btnname==="Login")
                        {
                            setBtnname("Logout")
                        }
                        else 
                        {
                            setBtnname("Login")
                        }
                    }}
                    >
                        {btnname}
                    </button>
                </ul>
            </div>
        </div>
    )
}
