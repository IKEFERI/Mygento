import React from 'react';
import { container } from './App.module.sass';
import Header from './Components/Header/header';
import Footer from './Components/Footer/footer';
import Main from './Components/Main/main';
import Done from './Components/Popups/Done/done';
import Policy from './Components/Popups/Policy/policy';
import { PopupProvider } from './Components/Popups/popup-context';

function App() {
  return (
    <div className={container}>
      <PopupProvider>
        <Header />
        <Main />
        <Footer />

        <Done />
        <Policy />
      </PopupProvider>
    </div>
  );
}

export default App;
