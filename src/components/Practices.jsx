import React, { Component } from 'react';

class Practices extends Component {


  render() {

    var address = (this.props.street + ',' + '+' + this.props.city + ',' + '+' + this.props.state + '+' + this.props.zip)
    var addressLink = address.replace(/ /g, '+')

    return (
      <div className="panel panel-default">
        <div className="panel-body">
          <div className="row">
            <div className="col-lg-2">
              Dr. {this.props.firstname} {this.props.lastname}, {this.props.title}
              <br />
              {this.props.specialty}
              <br />
              <img src={this.props.image} alt="N/A" />
            </div>
            <div className="col-lg-7">
              {this.props.description}
              <br />
              <br />
            </div>
            <div className="col-lg-3">
              {this.props.practiceName}
                <br />
                <br />
              {this.props.street}
                <br />
              {this.props.city}, {this.props.state} {this.props.zip}
                <br />
              {this.props.phone}
                <br />
                <br />
              <a href={`https://www.google.com/maps/place/${addressLink}/`}
                className="btn btn-success"
                role="button">
                Open on Google Maps
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}


export default Practices;