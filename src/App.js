import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Helmet } from 'react-helmet';

import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./components/GlobalStyles";
import { lightTheme, darkTheme } from "./components/Themes";

import Logo from "./components/Logo";
import DarkModeBtn from "./components/DarkMode";
import Socials from "./components/Socials";
import Headline from "./components/Headline";
import BannerPhoto from "./components/Banner";
import Footer from "./components/Footer";
import Posts from "./components/Posts";
// import Experiences from "./components/Experiences";

function App() {

  var [theme, setTheme] = useState('dark');
  var toggleTheme = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  }

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <Helmet>
        <title>Jeffrey Wong</title>
      </Helmet>
      <>
      <GlobalStyles />
      <div className="App">
        <header className="App-header">
          <div class="header">
            <Logo theme={theme} />
            <DarkModeBtn theme={theme} toggleTheme={toggleTheme} />
          </div>
          <Socials />
          <Headline />
          <BannerPhoto />
          <Posts />
          {/* <Experiences theme={theme} /> */}

          <Footer theme={theme} />
        </header>
      </div>
      </>
    </ThemeProvider>
  );
}

export default App;
