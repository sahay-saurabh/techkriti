import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import './navbar.css'
const Navbar = () => {
    const style = {
        position: "sticky"
    }
    const links = ['Home','About Us', 'Why CA?','Responsibilities','Incentives','Registration','Contact Us']
   
    const link = links.map((l)=>{
        return(<a className="nav-link" aria-current="page" href="#">{l}</a>)
    })
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid ">
                    
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav ">
                            <a className="navbar-brand" href="www.xyz.com">CAMPUS AMBASSADOR</a>
                            {link}
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar