import React from 'react';
import HomePage from './pages/HomePage';
import Footer from './Components/Footer/Footer';
import './App.scss';

class App extends React.Component {
  render() {
    return (
      <>
        <HomePage />
        <Footer />
      </>
    )
  }
}

export default App;
