import React,{useState} from 'react';

//third-party
import {Navbar,Nav,NavbarBrand,Collapse,NavItem,NavLink,NavbarToggler} from 'reactstrap';
import classNames from 'classnames';
import {useSelector} from 'react-redux';


const Header = () => {

    const [isOpen,setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const {token} = useSelector(state => state.users);
    
 
    return (
        <Navbar expand="md" >


            <NavbarBrand href="/">
                WELCOME TO ONLINE AUTO
            </NavbarBrand>
           
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>

                <Nav className="mx-auto" navbar>

                    <NavItem>
                        <NavLink className={
                            classNames('navbar-link',{
                                'navbar-link-active':window.location.pathname === "/"
                            })
                        } href="/">
                            HOME
                        </NavLink>
                    </NavItem>

                    <NavItem>
                        <NavLink className={
                            classNames('navbar-link',{
                                'navbar-link-active':window.location.pathname.includes('/showroom')
                            })
                        } href="/showroom">
                            SHOWROOM
                        </NavLink>
                    </NavItem>

                    <NavItem>
                        <NavLink className={
                            classNames('navbar-link',{
                                'navbar-link-active':window.location.pathname.includes('/about')
                            })
                        } href="/about">
                          ABOUT US
                        </NavLink>
                    </NavItem>
                </Nav>

                <Nav className="ml-auto" navbar>
                    
                    {
                        token ? (
                            <>
                            <NavItem>
                                <NavLink className={
                                    classNames('navbar-link',{
                                        'navbar-link-active':window.location.pathname.includes('/auth/dashboard')
                                    })
                                } href="/auth/dashboard">
                                   DASHBOARD
                                </NavLink>
                            </NavItem>
                            </>
                        ) : null
                    }                    
                </Nav>
            </Collapse>
        </Navbar>
    )
};

export default Header;