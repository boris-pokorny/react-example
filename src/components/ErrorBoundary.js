import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
    console.debug('start')
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    console.debug('derive', error)
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    // logErrorToMyService(error, errorInfo);
    console.debug('ERROR', error, errorInfo)
  }

  render() {
    console.debug('render', this.props)
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h2>OOOps :(</h2>;
    }


    return this.props.children;
  }

  reset() {
    this.state = { hasError: false };
    console.debug('reset')
  }
}

export default ErrorBoundary;
