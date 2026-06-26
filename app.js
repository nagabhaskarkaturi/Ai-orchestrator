const { useState } = React;

const Orchestrator = () => {
  const [status, setStatus] = useState('Idle');

  const runTask = () => {
    setStatus('Processing...');
    setTimeout(() => setStatus('Completed!'), 2000);
  };

  return (
    <div className="max-w-md mx-auto bg-slate-800 p-6 rounded-2xl border border-slate-700 shadow-2xl">
      <h1 className="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
        AI Orchestrator
      </h1>
      
      <div className="flex items-center justify-between mb-10">
        {['Input', 'Process', 'Output'].map((step, index) => (
          <div key={step} className="flex flex-col items-center">
            <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center mb-2">
              {index + 1}
            </div>
            <span className="text-xs text-slate-400">{step}</span>
          </div>
        ))}
      </div>

      <div className="flex justify-between items-center">
        <p className="text-sm text-slate-400">Status: {status}</p>
        <button 
          onClick={runTask}
          className="px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-500 transition-colors"
        >
          Run
        </button>
      </div>
    </div>
  );
};

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<Orchestrator />);
