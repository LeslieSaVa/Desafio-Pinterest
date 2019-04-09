import React, { Component } from 'react';
// import logo from './logo.svg';
import Pictures from './components/pictures';
import Navbar from './components/navbar';
import Categories from './components/categories'
import Modal from './components/modal'
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      fotos:null,
      modal:false,
    }
    this.openModal=this.openModal.bind(this);
    this.closeModal=this.closeModal.bind(this);

  }
  componentDidMount() {
    fetch('https://api.unsplash.com/search/photos?page=1&per_page=30&query=nails&client_id=13a06edd9f1f800ed95967f2be74dc9462a6d41dcc8ac89f648c84b123782513')
      .then( data => data.json() )
      .then(data => {
        this.setState({
          ...this.state,
          fotos: data,
        })
      })
  }
  openModal(i){
    this.setState({
    ...this.state,
    modal:i
  })
  }

  closeModal(){
    this.setState({
    ...this.state,
    modal:false
  })
  }


  llamarfotos() {
    const mostrarFotos = this.state.fotos.results.map(item => {
      return (
        <Pictures
        pushClick={this.openModal}
        url={item.urls.thumb}
        description={item.description}
        />
      )
    })
    return mostrarFotos;
  }

  render() {
    return (
      <div className="App">
        {this.state.modal && <Modal pushClick={this.closeModal} imgUrl={this.state.modal}/>}
          <Navbar />
          {/* <Categories /> */}
      {/* <div className="Grid">
        {this.state.fotos && this.llamarfotos()}
      </div>     */}
      <div className="flex-container">
            {this.state.fotos && this.llamarfotos()}
      </div>
      </div>
    );
  }
}


export default App;
