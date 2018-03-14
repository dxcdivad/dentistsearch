import React, { Component } from 'react';
import './App.css';
import Title from './components/Title';
import Header from './components/Header';
import Practices from './components/Practices';

const apikey = 'cb22e90069249831404c36588b8505eb';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      practices: [],
    }
  }


  componentDidMount() {
    navigator.geolocation.getCurrentPosition(async (e) => {
      const latitude = e.coords.latitude.toFixed(3)
      const longitude = e.coords.longitude.toFixed(3)
      const api_call = await fetch(`https://api.betterdoctor.com/2016-03-01/doctors?specialty_uid=general-dentist&location=${latitude},${longitude},100&sort=distance-asc&skip=0&limit=10&user_key=${apikey}`);
      const info = await api_call.json();
      console.log(info);

      this.setState({
        practices: info.data,
      });
    });
  }


  render() {
    return (
        <div className="App">
          <div className="container">
          <Title />
          <Header />
            {this.state.practices.map(practice => {
              return <Practices
                key={practice.uid}
                firstname={practice.profile.first_name}
                lastname={practice.profile.last_name}
                title={practice.profile.title}
                image={practice.profile.image_url}
                specialty={practice.specialties[0].name}
                practiceName={practice.practices[0].name}
                description={practice.profile.bio}
                street={practice.practices[0].visit_address.street}
                city={practice.practices[0].visit_address.city}
                state={practice.practices[0].visit_address.state}
                zip={practice.practices[0].visit_address.zip}
                lat={practice.practices[0].lat}
                lon={practice.practices[0].lon}
                phone={practice.practices[0].phones[0].number}
              />
            })}
          </div>
        </div>
    );
  }
}

export default App;
