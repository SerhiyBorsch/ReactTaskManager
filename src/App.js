import React from 'react';
import './App.css';
import './components/app-navbar/navbar-component';
import HeaderComponent from "./components/app-navbar/navbar-component";
import ItemsListComponent from "./components/items-list/items-list-component"


class App extends React.Component {
  constructor(props){
      super(props);
      this.state = {};
  }
  render() {
      return (
          <div>
              <HeaderComponent/>
              <div>
                  <ItemsListComponent />
              </div>
          </div>
      )
  }
}

export default App;
