import "./App.css";
import ErrorBoundary from "./ErrorBoundary";
import NewsPage from "./pages/NewsPage";

function App() {
  return (
    <ErrorBoundary>
      <div className="App">
        <NewsPage />
      </div>
    </ErrorBoundary>
  );
}

export default App;
