import './App.css';
import Watch from './Watch';
import ProductData from './ProductData';
import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      feature : ProductData.featureList[0],
      color : ProductData.colorOptions[0].color
    }
  }

  onFeatureButtonClick = (e,Feature) =>{
    e.preventDefault();
    this.setState({feature:Feature})
    //alert('Feature Button clicked ' + Feature)
  }

  onColorButtonClick = (e,Color) =>{
    e.preventDefault();
    this.setState({color:Color})
    //alert('Color button clicked ' + Color)
  }

  render(){
    return (
      <div className="body">
        <header>
          <img src="https://jobsincanadaforforeigners.com/wp-content/uploads/2022/01/Amazon-Work-from-Home-Jobs-for-Fresher-Customer-Service.jpg"
          alt="amazon-icon"></img>  
        </header>
  
        <div className="display">
            <div>
              <Watch c={this.state.color} f={this.state.feature}/>
            </div>
            <div>
              <h1 className="product-name">JLOCK 19 - The Smartest Watch</h1>
              <p className="product-description">
                <br></br>
                This is the smartest fit-bit watch in India.This is the smartest fit-bit watch in India.This is the smartest fit-bit watch in India.This is the smartest fit-bit watch in India.This is the smartest fit-bit watch in India.
              </p>
              <h5>Select Color</h5>
              <div className="color-wrapper">
                  <button id="black" className="color" onClick={(e) => this.onColorButtonClick(e,'Black')}></button>
                  <button id="red" className="color" onClick={(e) => this.onColorButtonClick(e,'Red')}></button>
                  <button id="blue" className="color" onClick={(e) => this.onColorButtonClick(e,'Blue')}></button>
                  <button id="purple" className="color" onClick={(e) => this.onColorButtonClick(e,'Purple')}></button>
              </div>
              <h5 className="heads">Features</h5>
              <div className="feature-wrapper">
                  <button id="time" className="feature" onClick={(e) => this.onFeatureButtonClick(e,'Time')}>Time</button>
                  <button id="heart" className="feature" onClick={(e) => this.onFeatureButtonClick(e,'Heart Rate')}>Heart Rate</button>
              </div>
              <button className="buyBtn">BUY NOW</button>
            </div>
            
            
        </div>
      </div>
    );
  }
}

export default App;
