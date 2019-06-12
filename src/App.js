import React, {Component, Fragment} from 'react';
import Header from "./components/Header";

class App extends Component{
  state = {
    noticias: []
  };

  componentDidMount() {
    this.consultarNoticias();
  }

  consultarNoticias = async () => {
    const url = `
      https://newsapi.org/v2/top-headlines?country=mx&apiKey=d022c8d478654804a92ffc0481bf0fa7`;
    const respuesta = await fetch(url);
    const noticias = await respuesta.json();

    this.setState({
      noticias : noticias.articles
    });
  };

  render() {
    return (
      <Fragment>
        <Header
          titulo="Noticias React API"
        />

        <div className="container white contenedor-noticias">

        </div>
      </Fragment>
    );
  }
}

export default App;
