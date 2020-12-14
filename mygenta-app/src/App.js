import React from 'react';
import {container} from './App.module.sass'
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Main from "./Components/Main/Main";
import Done from "./Components/Popups/Done/Done";
import Policy from "./Components/Popups/Policy/Policy";
import {PopupProvider} from "./Components/Popups/PopupContext";

function App() {
    return (

        <div className={container}>
            <PopupProvider>
                <Header/>
                <Main/>
                <Footer/>

                <Done/>
                <Policy/>
            </PopupProvider>
        </div>


    );
}

export default App;
