import React from 'react'
import styled from "styled-components";
import { Link } from "react-router-dom";
import {
    selectUserName,
    selectUserPhoto,
    setUserLogin,
    setSignOut
} from "../features/user/userSlice";
import { useSelector, useDispatch } from "react-redux";
import 'firebase/compat/auth';
import { auth, provider } from '../firebase';
import { useHistory } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { useEffect } from "react";
/*import 'firebase/compat/provider';*/
/*import "firebase/compat/";*/


const Header = () => {
    const dispatch = useDispatch()
    const userName = useSelector(selectUserName);
    const userPhoto = useSelector(selectUserPhoto);
    /*const history = useHistory();*/
    const navigate = useNavigate();

    useEffect(() => {
        auth.onAuthStateChanged(async (user) => {
            if(user) {
                dispatch(setUserLogin({
                    name: user.displayName,
                    email: user.email,
                    photo: user.photoURL
                }));
                navigate('/');
            }
        })
    }, [])

    const signIn = () => {
        auth.signInWithPopup(provider)
        .then((result) => {
            console.log(result);

            let user = result.user
            dispatch(setUserLogin({
                name: user.displayName,
                email: user.email,
                photo: user.photoURL
            }));
            /*history.push("/");*/
            navigate('/');
        })
    }

    const signOut = () => {
        auth.signOut()
        .then(() => {
            dispatch(setSignOut());
            /*history.push("/login");*/
            navigate('/login');
        })
    }

  return (
    <Nav>
        <Logo src="/images/logo.svg" />
        { !userName ? (
            <LoginContainer>
            <Login onClick={signIn}>Login</Login> 
            </LoginContainer>
            ) : (
            <>
            <NavMenu>
            <a>
                <Link to={`/`}>
                <img src='/images/home-icon.svg'/>
                <span>HOME</span>
                </Link>
            </a>
            <a>
                <img src='/images/search-icon.svg'/>
                <span>SEARCH</span>
            </a>
            <a>
                <img src='/images/watchlist-icon.svg'/>
                <span>WATCHLIST</span>
            </a>
            <a>
                <img src='/images/original-icon.svg'/>
                <span>ORIGINALS</span>
            </a>
            <a>
                <img src='/images/movie-icon.svg'/>
                <span>MOVIES</span>
            </a>
            <a>
                <img src='/images/series-icon.svg'/>
                <span>SERIES</span>
            </a>

        </NavMenu>
        <UserImg onClick={signOut} src='/images/cj.jfif'/>
            </>
            )
        }
        

        </Nav>
  )
}

export default Header;

const Nav = styled.nav`
    height: 70px;
    background: #090b13;
    display: flex;
    align-items: center;
    padding: 0 36px;
    overflow-x: hidden;
`;

const Logo = styled.img`
    width: 80px;
`;

const NavMenu = styled.div`
    display: flex;
    flex: 1;
    margin-left: 25px;
    align-items: center;

    a {
        display: flex;
        align-items: center;
        padding: 0 12px;
        cursor: pointer;
        text-decoration: none;
        color: white;

        img {
            height: 20px;

        }

        span {
            font-size: 13px;
            letter-spacing: 1.42px;
            position: relative;

            &:after {
                content: "";
                height: 2px;
                background: white;
                position: absolute;
                left: 0;
                right: 0;
                bottom: -6px;
                opacity: 0;
                transform: scaleX(0);
                transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
            }
        }

        &:hover {
            span:after {
                transform: scaleX(1);
                opacity: 1;
            }
        }
    }
`;

const UserImg = styled.img`
    width: 48px;
    height: 48px;
    border-radius: 50%;
    cursor: pointer;
`;

const Login = styled.div`
    border: 1px solid #f9f9f9;
    padding: 8px 16px;
    border-radius: 4px;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    background-color: rgba(0, 0, 0, 0.6);
    transition: all 0.2s;
    cursor: pointer;

    &:hover {
        background-color: #f9f9f9;
        color: #000;
        border-color: transparent;
        
    }
`;

const LoginContainer = styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-end;
`;