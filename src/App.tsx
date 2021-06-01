import React, {ComponentProps} from 'react';
import './App.css';
import 'animate.css/animate.css'
import data from "./data.json"

import MainImage from "./components/MainImage/MainImage"
import Card from "./components/Card/Card"
import Form from "./components/Form/Form"
import Footer from "./components/Footer/Footer"

const App = () => {

  return (
    <div className="App">
      <MainImage />
      <div className="card">
        {data.map((item: ComponentProps<typeof Card>, index: number) => {
          return(
            <Card title={item.title} description={item.description} imagePath={item.imagePath} key={index} />
          )
        })}
      </div>
      <h2 className="form_h2">Form</h2>
      <Form />
      <div className="module--spacing--small"></div>
      <Footer />
    </div>
  );
}

export default App;
