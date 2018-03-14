import React, { Component } from 'react';

class Header extends Component {

    render() {
        return(
        <div className="row">
            <div className="col-lg-2">
                <h4>Doctor</h4>
            </div>
            <div className="col-lg-7">
                <h4>Description</h4>
            </div>
            <div className="col-lg-3">
                <h4>Location</h4>
            </div>
        </div>
        )
    }
}

export default Header;