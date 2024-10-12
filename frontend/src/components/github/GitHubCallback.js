// src/components/GitHubCallback.js
import React, {useEffect, useState} from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import axios from 'axios';
import {toast, ToastContainer} from "react-toastify";

import MESSAGES from "../../constants/config";
import useAuthStore from "../../store/authStore";
import DcsInformationDisplay from "../info-display/DcsInfoDisplay";

const DCS_API_BASE_URL = process.env.REACT_APP_DCS_API_BASE_URL;
const GitHubCallback =   () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState('');
    const {setUser} = useAuthStore();
    useEffect(  () => {
        const searchParams = new URLSearchParams(location.search);
        const code = searchParams.get('code');
        const error = searchParams.get('error');
        if (error) {
            // Handle OAuth errors (like if the user denies access)
            setErrorMessage(MESSAGES.API_NOTIFICATION_MESSAGES.githubError.message);
            toast.error(MESSAGES.API_NOTIFICATION_MESSAGES.githubError.message)
            console.log(error);
            setTimeout(() => {
                navigate('/signup')
            }, 2000)
            return;
        }
        if (code) {

            // Send the authorization code to your Django backend
            axios
                .post(`${DCS_API_BASE_URL}auth/github/`, {code})
                .then(async (response )=> {
                    toast.info("Logging you in...")
                   await setUser(response);
                    // Handle the response, e.g., save the user data or redirect
                    //  to a user dashboard or home after successful login
                    navigate('/user/welcome');
                })
                .catch(error => {
                    console.error('GitHub login failed:', error);
                    toast.error(error)
                });
        } else {
            console.error('No authorization code returned from GitHub');
        }
    }, [location, navigate,setUser]);

    return (
        <div>
            <ToastContainer/>
            {errorMessage ? (
                <div>

                    {errorMessage}
                </div>
            ) : (
                <>
                <DcsInformationDisplay
                    title={"Info"}
                    message={"Logging you in..."}
                    horizontal={"center"}

                />
                <div>Logging you in...</div>
                </>
            )}
        </div>
    );
};

export default GitHubCallback;
