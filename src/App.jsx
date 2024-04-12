import "./App.css";
import ErrorBoundary from "./ErrorBoundary";
import NewsPage from "./pages/NewsPage";

function App() {
  return (
    <ErrorBoundary>
      <div className="App">
        <p>
          todo: make reset filters work send filter params to api apply author
          filter (optional)
        </p>
        <NewsPage />
      </div>
    </ErrorBoundary>
  );
}

export default App;
