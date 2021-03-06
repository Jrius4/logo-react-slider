import React, { Component } from "react";
import "./App.css";
import Card from "./Card";
import data from "./data/data";

// class component
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      properties: data.properties,
      property: data.properties[0]
    };
  }

  nextProperty = () => {
    const newIndex = this.state.property.index + 1;
    this.setState({
      property: data.properties[newIndex]
    });
  };

  prevProperty = () => {
    const newIndex = this.state.property.index - 1;
    this.setState({
      property: data.properties[newIndex]
    });
  };

  render() {
    const { properties, property } = this.state;
    return (
      <div className="App">
        <div style={{height:"300px"}}>
          <div className="logo-buttons d-flex justify-content-between">
            <div>
              <button
                className="btn btn-outline-danger align-self-center"
                onClick={() => this.prevProperty()}
                disabled={property.index === 0}
              >
                Prev
              </button>
            </div>

            <div>
              <button
                className="btn btn-outline-danger align-self-center"
                onClick={() => this.nextProperty()}
                disabled={property.index === data.properties.length - 1}
              >
                Next
              </button>
            </div>
          </div>
          <section className="logos-section">
            <div className="page">
              <div className={`cards-slider active-slide-${property.index}`}>
                <div
                  className="cards-slider-wrapper"
                  style={{
                    transform: `translateX(-${property.index *
                      (100 / properties.length)}%)`
                  }}
                >
                  {properties.map(property => (
                    <Card key={property._id} property={property} />
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default App;
