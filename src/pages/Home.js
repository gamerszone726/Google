import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import AppsIcon from '@material-ui/icons/Apps';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import GOOGLE from './images/images.png';
import Search from './Search';



function Home() {
    return (
        <div className="home">
            

            <div className="home__header">
                
                <div className="home__headerLeft">
                    <Link to="/about">About</Link>
                    <Link to="/store">Store</Link>
                  
                </div>
                <div className="home__headerRight">
                    <Link to="/gmail">Gmail</Link>
                    <Link to="/images">Images</Link>
                    <AppsIcon />
                    <AccountCircleIcon  />
                    
                </div>
            </div>

            <div className="home__body">
                    <img className="home__logo" src={GOOGLE} alt="" />
                    <div className="home__input">
                        <Search />
                    </div>
            </div>


        </div>
    )
}

export default Home
