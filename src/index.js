import _ from 'lodash' ;
import React, { Component } from 'react';
import ReactDOM from 'react-dom' ;
import SearchBar from './components/search_bar' ;
import VideoList from './components/video_list' ;
import VideoDetail from './components/video_detail' ;
import YTSearch from 'youtube-api-search' ;
const API_KEY = 'AIzaSyCQ4Nx7SzWeKVQOSoYXZvLTZZX4n7eoGUc' ;



class App extends Component{

	constructor(props){
		super(props) ;

		this.state = { 
			videos: [],
			selectedVideo: null
		}

		this.videoSearch('Thor') ;
		
	}	

	videoSearch(term){

		YTSearch({key:API_KEY, term:term}, (videos) => {

			this.setState({ videos });
			this.setState({ selectedVideo: videos[0] }) ;
			// A linha acima é a mesma coisa que isso: 
			// this.setState({videos:videos});
			// Quando key e value tiverem o mesmo nome posso fazer isto
		})
	}

	
	render(){

		const videoSearchL = _.debounce((term) => {this.videoSearch(term)}, 300) ;
		return (<div> 
					<SearchBar onSearchTermChange = {videoSearchL} />
					<VideoDetail video = {this.state.selectedVideo} />
					<VideoList videos = {this.state.videos} onVideoSelect={(selectedVideo) => this.setState({selectedVideo})} />
				</div>) ;	
	}
}


ReactDOM.render(<App />, document.querySelector('.container')) ;