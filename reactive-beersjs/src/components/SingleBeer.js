import React, { Component } from 'react';
import axios from 'axios';
import Header from './Header'


class SingleBeer extends Component {
  state = {}

  // 👨‍🏫
  componentDidMount(){
      this.getBeer();
  }

  // 👨‍🏫
  getBeer = () => {
      const { params } = this.props.match;
      const id="5daf440ccbc5d2fd7d19ebde";
      axios.get(`https://ih-beers-api2.herokuapp.com/beers`)
        .then( responseFromApi => {
           
            const theBeer = responseFromApi.data.find(theBeer => theBeer._id === params.id);
            console.log("theBeer",theBeer);
            this.setState(theBeer);
        })
        .catch(err =>console.log(err))
  }

  render(){
    return(
      <div>
          <Header/>

            <div className="beer">
                <img src={this.state.image_url} alt="biere"/>
                <div className="headerSingle">
                    <h3>{this.state.name}</h3>
                    <p>{this.state.attenuation_level}</p>
                </div>
                <div className="secondSingle">
                    <h4>{this.state.tagline}</h4>
                    <p>{this.state.first_brewed}</p>
               </div>


                <p>{this.state.description}</p>


                <p>{this.state.contributed_by}</p>

          
            </div>
        </div>
    )
  }
}

export default SingleBeer;