import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.scss';
import * as serviceWorker from './serviceWorker';

class ErrorBoundary extends React.Component {
  public static getDerivedStateFromError(error: Error) {
    return { error };
  }
  public state = {
    error: null,
  };

  public render() {
    if (this.state.error) {
      console.error(this.state.error);
      return 'Error occured, see console';
    }
    return this.props.children;
  }
}

ReactDOM.render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();