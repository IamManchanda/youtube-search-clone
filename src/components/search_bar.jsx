/**
 * Import Modules
 */

import React, { Component } from 'react';

/**
 * Create a Search Bar Component 
 */

class SearchBar extends Component {
  /**
   * Contructor Function!
   * Initialize the SearchBar Component
   */
  constructor(props) {
    super(props); // Explicitly Calling contructor function for the parent class

    this.state = { term: '' } // Initialize the state for `term` property
  }
  
  /**
   * Render Function!
   * Renders the SearchBar Component
   */
  render() {
    // React.createElement
    return (
      /**
       * 1. Passing the Input form tag for user to type the search
       *    Form type is text and we are adding a placeholder.
       * 2. onChange event passed to `onInputChange(term)` event handler,
       *    event.target.value = term | Argument Passed
       * 3. Recording Value of the Input getting passed by the client.
       *    Is a controlled Component field, value set by either the initial value
       *    called by the contructor with `this.state`
       *    or, set by onChange Event Handler if there is a change!
       */
      <input type="text" placeholder="Search a Video..."  
             onChange={event => this.onInputChange(event.target.value)} 
             value={this.state.term} /> 
    ); 
  }

  /**
   * Event Handler
   */
  onInputChange(term) {
    // Update the state for `term` property
    //  - term = event.target.value | Prop passed
    // Passing a prop `onSearchTermChange` with a value `videoSearch`
    //  - term = event.target.value | Argument passed
    this.setState({term});
    this.props.onSearchTermChange(term);
  }

}

/**
 * Export SearchBar Component
 */

export default SearchBar;
