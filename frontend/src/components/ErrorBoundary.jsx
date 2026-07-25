import { Component } from "react";

class ErrorBoundary extends Component {

  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error("Caught by ErrorBoundary:", error, info);
  }

  handleReload = () => {
    this.setState({ hasError: false });
    window.location.href = "/";
  };

  render() {

    if (this.state.hasError) {

      return (

        <div className="min-h-screen flex flex-col items-center justify-center bg-pink-50 px-6 text-center">

          <h1 className="text-3xl font-bold text-gray-800">
            Something went wrong
          </h1>

          <p className="text-gray-500 mt-3 max-w-md">
            This part of GuestVoice hit an unexpected error. Try going back
            to the homepage — if it keeps happening, let us know what you
            were doing.
          </p>

          <button
            onClick={this.handleReload}
            className="mt-8 bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-xl transition"
          >
            Back to Home
          </button>

        </div>

      );

    }

    return this.props.children;

  }

}

export default ErrorBoundary;
