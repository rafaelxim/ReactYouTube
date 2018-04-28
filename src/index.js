import React, { Component } from 'react';
import ReactDOM from 'react-dom' ;
import SearchBar from './components/search_bar' ;
import YTSearch from 'youtube-api-search' ;

const API_KEY = 'AIzaSyCQ4Nx7SzWeKVQOSoYXZvLTZZX4n7eoGUc' ;



class App extends Component{

	constructor(props){
		super(props) ;

		this.state = { videos: [] }

		YTSearch({key:API_KEY, term:'birds'}, (videos) => {

			this.setState({ videos });

			// A linha acima é a mesma coisa que isso: 
			// this.setState({videos:videos});
			// Quando key e value tiverem o mesmo nome posso fazer isto
		})
	}	


	render(){
		return (<div>
					<SearchBar />
				</div>) ;	
	}
}


ReactDOM.render(<App />, document.querySelector('.container')) ;

