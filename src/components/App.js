import React from 'react';

import FruitBasket from './FruitBasket';

class App extends React.Component{
    constructor(){
        super()

        this.state = {
            filters: [],
            currentFilter: null,
            fruit: []
        };
    }

    componentWillMount() {
        this.fetchFilters();
        this.fetchItems();
    }

    handleFilterChange = (event) => {
        console.log('new filter:', event.target.value);
        this.setState({ selectedFilter: event.target.value})
    }

    fetchFilters = () => {
        fetch('/api/fruit_types')
          .then(response => response.json())
          .then(filters => this.setState({ filters }));
      }
    
    fetchItems = () =>{
        fetch('/api/fruit')
        .then(response => response.json())
        .then(fruit => this.setState({ fruit }));
    }


    render(){
        return (
            <FruitBasket 
                updateFilterCallback={this.handleFilterChange} 
                filters={this.state.filters} 
                fruit={this.state.fruit} 
                currentFilter={this.state.selectedFilter}
            />
        )
    }
}
//const App = () => <FruitBasket />;

export default App;
