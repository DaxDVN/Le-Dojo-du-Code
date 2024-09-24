import React from 'react';
import AuthNavigate from "./AuthNavigate.tsx";
import messageBOT from '../../assets/images/messageBOT.svg'
import AuthContacts from "./AuthContacts.tsx";
import AuthStory from "./AuthStory.tsx";


function HomePage() {

    return (
        <>
            {/*<AuthNavigate/>*/}
            <div className="fixed bottom-20 right-20">
                <img src={messageBOT} alt="messageBOT" className="w-16 h-16"/>
            </div>
            <AuthStory/>
            <AuthContacts/>
        </>
    );
}

export default HomePage;