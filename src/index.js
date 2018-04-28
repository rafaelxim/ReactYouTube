import React from 'react';
import ReactDOM from 'react-dom' ;
import SearchBar from './components/search_bar' ;
import YTSearch from 'youtube-api-search' ;

const API_KEY = 'AIzaSyCQ4Nx7SzWeKVQOSoYXZvLTZZX4n7eoGUc' ;

YTSearch({key:API_KEY, term:'birds'}, function(data){
	console.log(data);
})

const App = () => {
	return (<div>
				<SearchBar />
			</div>) ;
}


ReactDOM.render(<App />, document.querySelector('.container')) ;

