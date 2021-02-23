import React from 'react';
import './Sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faShoppingBag, faCommentDots } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import logo from '../../../../images/logos/logo.png'
const Slidebar = () => {
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

                </ul>

            </div>
        </div>
    );
};

export default Slidebar;