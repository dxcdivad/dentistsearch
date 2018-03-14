  import React, { Component } from 'react';

  class Title extends Component {

    render() {
      return (
        <div className="header" id="header">
        <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6">
          <h1>Toothache?</h1>
          <h4>Scroll down for a list of dental practices near you.</h4>
        </div>
        <div className="col-lg-6 col-md-6">
        <img src="tooth.png" alt="N/A" />
        </div>
        </div>
        </div>
        </div>

      );
    }
  }

  export default Title;