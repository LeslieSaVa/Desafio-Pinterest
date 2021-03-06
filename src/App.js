import React, { Component } from 'react';
import Pictures from './components/pictures';
import Navbar from './components/navbar';
import Modal from './components/modal'
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      fotos:null,
      modal:false,
      countPage:1,
      title:null,
      description2:null,
      scroll:false,
    }
    this.openModal=this.openModal.bind(this);
    this.closeModal=this.closeModal.bind(this);

  }
  componentWillUpdate() {
    window.onscroll = () => {
      if (
      document.documentElement.scrollTop + window.innerHeight > document.documentElement.offsetHeight*0.8 
      ){
        this.setState({
          ...this.state,
          countPage:this.state.countPage+1,
          scroll:true,
        })
      }
      if(this.state.scroll){
        this.setState({
          ...this.state,
          scroll:false,
        },() => {
          fetch('https://api.unsplash.com/search/photos?page='+this.state.countPage+'&per_page=20&query=flowers&client_id=13a06edd9f1f800ed95967f2be74dc9462a6d41dcc8ac89f648c84b123782513')
          .then( data => data.json() )
          .then(data => {
            const data2 = this.state.fotos.results;
            const data3 = data2.concat(data.results)
            this.setState({
              ...this.state,
              fotos: {
                ...this.state.fotos,
                results: data3,
              }
            })
          })
        })
      }
    }
  }

  componentDidMount() {
    // if (
    //   document.documentElement.scrollTop === 0
    //   ){
    fetch('https://api.unsplash.com/search/photos?page='+this.state.countPage+'&per_page=20&query=flowers&client_id=13a06edd9f1f800ed95967f2be74dc9462a6d41dcc8ac89f648c84b123782513')
      .then( data => data.json() )
      .then(data => {
        this.setState({
          ...this.state,
          fotos: data,
        })
      })
    //}
  }

  openModal(i){
    console.log(i);
    this.setState({
    ...this.state,
    modal:i.url,
    title: i.description,
    description2:i.description2,
  })
  }

  closeModal(){
    this.setState({
    ...this.state,
    modal:false
  })
  }


  llamarfotos() {
    const mostrarFotos = this.state.fotos.results.map((item, i) => {
      return (
        <Pictures
        key={i}
        pushClick={this.openModal}
        url={item.urls.thumb}
        description={item.description}
        description2={item.alt_description}
        />
      )
    })
    return mostrarFotos;
  }

  render() {
    return (
      <div className="App">
        {this.state.modal && <Modal pushClick={this.closeModal} imgUrl={this.state.modal} titlefoto={this.state.title} descriptionreal={this.state.description2}/> }
          <Navbar />
      <div className="flex-container">
            {this.state.fotos && this.llamarfotos()}
      </div>
      </div>
    );
  }
}


export default App;
