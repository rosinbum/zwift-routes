import React from 'react';
import ReactDOM from 'react-dom';

const Application: React.SFC<{}> = () => (
  <h1>In Application</h1>
);

ReactDOM.render(<Application />, document.getElementById('root'));
