import './App.css';
import PromptContainer from './components/prompt_container/PromptContainer.tsx';
import prompts from './data/prompts.json';

function App() {
  return (
    <div className="App">
      <div className="grid-container">
        {/* Left side - Prompts */}
        <div className="prompts-column">
          <PromptContainer data={prompts} />
        </div>

        {/* Right side - Two placeholders */}
        <div className="placeholder-container">
          <div className="placeholder">Placeholder 1</div>
          <div className="placeholder">Placeholder 2</div>
        </div>
      </div>
    </div>
  );
}

export default App;
