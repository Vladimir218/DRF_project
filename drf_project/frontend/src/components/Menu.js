import React from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';


        const Menu = () => {
            return (
                <header>
                    {/* <!-- Navbar --> */}
                    <nav class="navbar navbar-expand-lg navbar-light bg-dark bg-opacity-25">
                        <div class="text-center container-fluid">
                     
                            <div class="collapse navbar-collapse" id="navbarExample01">
                                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                <li class="nav-item active">
                                    <a class="nav-link" aria-current="page" href="#">Home</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Login</a>
                                </li>
                              
                                <li class="nav-item">
                                    <a class="nav-link" href="#">About</a>
                                </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                    {/* <!-- Navbar --> */}
                </header>
            )
        }
    


 export default Menu