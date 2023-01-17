// Here's an example of a simple React component that displays "Hello, World!" on the screen:


import React from 'react';

class HelloWorld extends React.Component {
  render() {
    return (
      <div>
        Hello, World!
      </div>
    );
  }
}

export default HelloWorld;

// This component can be imported and rendered in another file like this:

import React from 'react';
import ReactDOM from 'react-dom';
import HelloWorld from './HelloWorld';

ReactDOM.render(<HelloWorld />, document.getElementById('root'));
// This code would render the "Hello, World!" message in a div element with an id of "root" in the HTML file.