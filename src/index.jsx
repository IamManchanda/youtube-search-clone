/**
 * Import Modules
 */

import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

/**
 * Import Components within the App
 */

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

/**
 * Youtube API
 */

const API_KEY = ''; // Add your API_KEY Here!

/**
 * 1. Create an App Root component. 
 * 2. This Parent component is the sole responsible for downwards data flow 
 */

class App extends Component {
  /**
   * Contructor Function!
   * Initialize the Main App Component
   */
  constructor(props) {
    super(props); // Explicitly Calling contructor function for the parent class

    this.state = { // Initial State of the app
      videos: [], // Video with a empty array coz we will have list of videos
      selectedVideo: null // Set initial value of selected video to null so it doesn't break the code.
    };

    this.videoSearch('bold guy'); // Initial state of videoSearch on the browser before search
  }

  /**
   * Create a Search Mechanism
   *   1. Defining a Method `videoSearch` for creating callbacks for search
   *   2. One Argument passed and that's `term`
   */
  videoSearch(term) {
    /**
     * 1. Key is the API_KEY that we are fetching from above variable, `API_KEY`
     * 2. Term is the search term and value getting passed from `videoSearch(term)`
     * 3. Pass a function with an argument `video` that passes response data
     * 4. this.setState get's passed as soon as there is a response from network
     *    Untill that time, it will show the initial value.
     *    a. Set the state to videos that are getting called from the search term
     *       As the key value pair is same `video`... thus syntactic sugar
     *    b. Set Selected video to no 1 in the list => videos[0]
     */
    YTSearch({key: API_KEY, term: term}, (videos) => {
      this.setState({ videos, selectedVideo: videos[0] });
    });
  }

  /**
   * Render Function!
   * Renders the Main App Component
   */

  render() {
    // Throttle to 300ms, thanks to loadash debounce!
    // Will update the `term` whenever you search, thanks to `this.videoSearch(term)`
    //   - This is done through Youtube Data API for search 
    const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300);

    // React.createElement
    return (
      <div className="grid-x grid-margin-x"> 
        <div className="cell small-12 medium-12 large-12">
           {/**
              * 1. Run an instance of SearchBar Component
              * 2. Adding a prop `onSearchTermChange` for callback to videoSearch variable
              */}
          <SearchBar onSearchTermChange={videoSearch} />
        </div>
        <div className="cell small-12 medium-6 large-8">
          {/**
            * 1. Run an instance of VideoDetail Component
            * 2. Adding a prop `video` for callbacks
            *    Recording `selectedVideo` prop from current `selectedVideo` state
            */}
          <VideoDetail video={this.state.selectedVideo} />
        </div>
        <div className="cell small-12 medium-6 large-4">
          {/**
            * 1. Run an instance of VideoList Component
            * 2. Adding two prop's`videos` and `onVideoSelect` for callbacks
            *    a. Recording `videos` prop with list of videos (this.state.videos)
            *    b. Updates `selectedVideo` state within `onVideoSelect` prop
            */}
          <VideoList videos={this.state.videos} 
                     onVideoSelect={selectedVideo => this.setState({selectedVideo})} />
        </div>
      </div>
    );
  }
}

/**
 * Take this component's generated html and put it on the webpage (DOM)
 * Please note that this is happening due to ReactDOM and not React
 */

ReactDOM.render(
  /**
   * 1. Run an instance of Main App Component
   * 2. Fire it up to the DOM with Id `app-root`
   */
  <App />
  , document.querySelector('#app-root')
);
