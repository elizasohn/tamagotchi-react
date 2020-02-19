import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Tamagotchi from './Tamagotchi';
import Footer from './Footer';
import PropTypes from 'prop-types';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      tamagotchiStats: {};
    }
  }
  render() {
    return (
      <div className="App">
      <Header/>
      <Tamagotchi/>
      <Footer/>
      </div>
    );
  }
}
Tamagotchi.propTypes = PropTypes.shape({
    name: PropTypes.string,
    foodLevel: PropTypes.number,
    playLevel: PropTypes.number,
    cleanLevel: PropTypes.number,
  });
export default App;
