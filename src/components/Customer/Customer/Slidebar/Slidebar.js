import React, { useContext, useEffect, useState } from 'react';
import './Sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faShoppingBag, faCommentDots, faPlus, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import logo from '../../../../images/logos/logo.png'
import { UserContext } from '../../../../App';
import { app } from '../../../Login/Login/Login';
const Slidebar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        fetch(`https://shrouded-fortress-62693.herokuapp.com/isAdminData?email=${loggedInUser[1]?.email}`)
            .then((res) => res.json())
            .then((data) => {
                if (data.admin === true) {
                    setIsAdmin(true);
                }
                if (data.admin === false) {
                    setIsAdmin(false);
                }
            });
    }, [loggedInUser[1]?.email])

    // useEffect(()=>{
    //     const unsubscribe = app.auth().onAuthStateChanged(user => {
    //       setLoggedInUser({email:user.email, photoURL:user.photoURL}); //loggedInUser ar ja ja send korte chay sob akhne dia set kore dibo
    //     });
    //     return unsubscribe;
    // },[])
    return (
        <div className="container">
            <div className="sidebar d-flex justify-content-between col-md-2 px-4">

                <ul className="list-unstyled">

                    <li className="">
                        <img src={logo} alt="" width="135px" />
                    </li>
                    <li>
                        <Link to="/order" className="">
                            <FontAwesomeIcon icon={faShoppingCart} /> <span>Order</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/serviceList" className="">
                            <FontAwesomeIcon icon={faShoppingBag} /> <span>Services List</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/review" className="">
                            <FontAwesomeIcon icon={faCommentDots} /> <span>Review</span>
                        </Link>
                    </li>

                    {isAdmin === true ? <div>

                        <li>
                            <Link to="/adminServiceList" className="">
                                <FontAwesomeIcon icon={faShoppingBag} /> <span>A_Services List</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/addService" className="">
                                <FontAwesomeIcon icon={faPlus} /> <span>Add Services</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/admin" className="">
                                <FontAwesomeIcon icon={faUserPlus} /> <span>Make Admin</span>
                            </Link>
                        </li>
                    </div>
                        : ""
                    }




                </ul>

            </div>
        </div>
    );
};

export default Slidebar;