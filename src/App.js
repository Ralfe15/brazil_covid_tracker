import React from 'react';

import { Cards, CountryPicker } from './components'; 
import styles from './App.module.css';
import { fetchData } from './api';
import { MapBrazil } from 'react-brazil-map'

class App extends React.Component {
  state = {
    data: {},
    estado: 'SP',
  }

  async componentDidMount(){
    const fetchedData = await fetchData(this.state.estado);
    this.setState({ data:fetchedData })

  }
  
  handleEstadoChange = async(estado) => {
    const fetchedData = await fetchData(estado)
    this.setState({ data:fetchedData, estado:estado })
    console.log(this.state.estado)
    // this.setState( {estado:estado} )
  }

  render() {
    return(
      <div className={styles.container}>
        <h1>Brazil COVID-19 Tracker</h1>
        <Cards data = {this.state.data}/>
        <CountryPicker handleEstadoChange={this.handleEstadoChange}/>
        <MapBrazil onChange={this.handleEstadoChange} colorLabel='red' width={600} height={600} />
      
      </div>
    )
  }
}

export default App