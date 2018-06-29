import React, {Component} from 'react';
import fetchCarsAPI from '../api/fetchCarsAPI';


export default class Cars extends Component {

    state = {
        carsData: null
    }
    
    componentDidMount() {
        const token = this.props.token;
        fetchCarsAPI.fetchCars(token)
          .then(cars => {
              this.setState({
                carsData: cars
              })
          })
    }

    render() {
        const cars = this.state.carsData;
        console.log(cars)

        if(!cars) {
            return <h3> Loading cars... </h3>
        }
        return (
            cars.map( car => {
                return(
                    <div key={car.id}>
                        <li>{car.make}</li>
                        <li>{car.model}</li>
                    </div>
                )
            })
        )
            
            
        

    }
}
