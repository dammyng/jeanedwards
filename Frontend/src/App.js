import './App.css';
import DetailPanel from './DetailPanel';
import HistoryPanel from './HistoryPanel';
import SidePanel from './SidePanel';

function App() {
  return (
    <div className="app container">
      <SidePanel />
      <DetailPanel />
      <HistoryPanel />
    </div>
  );
}

export default App;
