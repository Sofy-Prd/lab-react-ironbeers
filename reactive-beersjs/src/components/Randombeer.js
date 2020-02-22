import React, { Component } from 'react';
import axios from 'axios';
import Header from './Header'


class RandomBeer extends Component {
    state = {
        RandomBeer:""
    }

    getRandomBeers = () =>{
        axios.get(`https://ih-beer-api.herokuapp.com/beers/random`)
          .then(responseFromApi => {
              console.log("responseFromApi.data", responseFromApi.data);
            this.setState({RandomBeer: responseFromApi.data})
          })
          .catch(err => console.log('Error', err))
      }

      componentDidMount() {
        this.getRandomBeers();
      }
  render(){
    return(
      <div>
          <Header/>

            <div className="beer">
                <img src={this.state.RandomBeer.image_url} alt="biere"/>
                <div className="headerSingle">
                    <h3>{this.state.RandomBeer.name}</h3>
                    <p>{this.state.RandomBeer.attenuation_level}</p>
                </div>
                <div className="secondSingle">
                    <h4>{this.state.RandomBeer.tagline}</h4>
                    <p>{this.state.RandomBeer.first_brewed}</p>
               </div>


                <p>{this.state.RandomBeer.description}</p>


                <p>{this.state.RandomBeer.contributed_by}</p>

          
            </div>
        </div>
    )
  }
}

export default RandomBeer;