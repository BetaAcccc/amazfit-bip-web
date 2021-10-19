import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import './App.css';
import './bootstrap.min.css';
import ResBuilder from './components/ResBuilder';
import FileList from './components/FileList';

class App extends React.Component {
  ResBuilder = () => {
    return <ResBuilder />;
  };

  Firmware = () => {
    return <FileList type="fw" title="Firmware" />;
  };

  Font = () => {
    //return <FileList type="font" title="Font" />;
    return null;
  };

  render() {
    return <>
      <div className="navbar navbar-expand-lg fixed-top navbar-dark bg-primary">
        <div className="container">
          <a className="navbar-brand" href="#/">Amazfit Bip</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav">


              <li className="nav-item">
                <a className="nav-link" href="#/">Res builder</a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#/firmware">Firmware (fw)</a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#/font">Font (ft)</a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="https://forms.gle/AvfypGF54VowaNXNA" target="_blank" rel="noreferrer">Upload</a>
              </li>


            </ul>
          </div>
        </div>
      </div>

      <div className="container">
        <br/><br/><br/><br/>
        <div className="row">
          <HashRouter>
            <Route exact path="/" component={this.ResBuilder} />
            <Route path="/firmware" component={this.Firmware} />
            <Route path="/font" component={this.Font} />
          </HashRouter>
        </div>
      </div>
    </>;
  }
}

export default App;
