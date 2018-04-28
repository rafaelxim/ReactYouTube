import React from 'react';
import ReactDOM from 'react-dom' ;
import SearchBar from './components/search_bar' ;

const API_KEY = 'AIzaSyCQ4Nx7SzWeKVQOSoYXZvLTZZX4n7eoGUc' ;

const App = () => {
	return (<div>
				<SearchBar />
			</div>) ;
}


ReactDOM.render(<App />, document.querySelector('.container')) ;

