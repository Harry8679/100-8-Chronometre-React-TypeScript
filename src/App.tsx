import { Stopwatch } from './components/Stopwatch';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-800 dark:text-white mb-4">
            ⏱️ Chronomètre
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-lg mb-2">
            Projet 8/100 • React + TypeScript + useEffect
          </p>
          <p className="text-gray-500 dark:text-gray-500 text-sm">
            Maîtrise useEffect, setInterval et cleanup functions
          </p>
        </div>

        {/* Stopwatch */}
        <Stopwatch />

        {/* Section explicative */}
        <div className="mt-12 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
            📚 Concepts React abordés
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {/* useEffect */}
            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
              <h3 className="font-semibold text-blue-700 dark:text-blue-300 mb-3 flex items-center gap-2">
                <span>⚡</span>
                useEffect Hook
              </h3>
              <div className="text-sm text-gray-700 dark:text-gray-300 space-y-2">
                <div>• Side effects dans React</div>
                <div>• Dependencies array</div>
                <div>• Cleanup functions</div>
                <div>• Component lifecycle</div>
              </div>
              <div className="mt-3 bg-white dark:bg-gray-700 rounded p-2 font-mono text-xs">
                useEffect(() =&gt; &#123; /* effect */ &#125;, [deps])
              </div>
            </div>

            {/* setInterval */}
            <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4">
              <h3 className="font-semibold text-green-700 dark:text-green-300 mb-3 flex items-center gap-2">
                <span>⏰</span>
                Timers (setInterval)
              </h3>
              <div className="text-sm text-gray-700 dark:text-gray-300 space-y-2">
                <div>• setInterval pour timer</div>
                <div>• clearInterval cleanup</div>
                <div>• Update every 10ms</div>
                <div>• Éviter memory leaks</div>
              </div>
              <div className="mt-3 bg-white dark:bg-gray-700 rounded p-2 font-mono text-xs">
                setInterval(() =&gt; &#123;...&#125;, 10)
              </div>
            </div>

            {/* useRef */}
            <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-4">
              <h3 className="font-semibold text-purple-700 dark:text-purple-300 mb-3 flex items-center gap-2">
                <span>📌</span>
                useRef Hook
              </h3>
              <div className="text-sm text-gray-700 dark:text-gray-300 space-y-2">
                <div>• Références mutables</div>
                <div>• Persister entre renders</div>
                <div>• Stocker interval ID</div>
                <div>• Ne déclenche pas re-render</div>
              </div>
              <div className="mt-3 bg-white dark:bg-gray-700 rounded p-2 font-mono text-xs">
                const intervalRef = useRef&lt;number | null&gt;(null)
              </div>
            </div>

            {/* Cleanup */}
            <div className="bg-orange-50 dark:bg-orange-900/20 rounded-lg p-4">
              <h3 className="font-semibold text-orange-700 dark:text-orange-300 mb-3 flex items-center gap-2">
                <span>🧹</span>
                Cleanup Functions
              </h3>
              <div className="text-sm text-gray-700 dark:text-gray-300 space-y-2">
                <div>• Nettoyer les effets</div>
                <div>• Éviter memory leaks</div>
                <div>• clearInterval au unmount</div>
                <div>• Return cleanup function</div>
              </div>
              <div className="mt-3 bg-white dark:bg-gray-700 rounded p-2 font-mono text-xs">
                return () =&gt; clearInterval(id)
              </div>
            </div>
          </div>
        </div>

        {/* Code Examples */}
        <div className="mt-8 bg-gray-900 rounded-xl shadow-lg p-6 text-white">
          <h3 className="text-xl font-bold mb-4">💻 Exemples de code</h3>

          <div className="space-y-4">
            {/* Example 1 */}
            <div>
              <div className="text-sm text-gray-400 mb-2">1. setInterval avec useEffect</div>
              <pre className="bg-gray-800 rounded p-3 overflow-x-auto text-sm">
                <code>{`const [time, setTime] = useState(0);
const intervalRef = useRef<number | null>(null);

const start = () => {
  intervalRef.current = setInterval(() => {
    setTime(prev => prev + 10); // Update every 10ms
  }, 10);
};

// Cleanup on unmount
useEffect(() => {
  return () => {
    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current);
    }
  };
}, []);`}</code>
              </pre>
            </div>

            {/* Example 2 */}
            <div>
              <div className="text-sm text-gray-400 mb-2">2. useRef pour persister les valeurs</div>
              <pre className="bg-gray-800 rounded p-3 overflow-x-auto text-sm">
                <code>{`const intervalRef = useRef<number | null>(null);
const startTimeRef = useRef<number>(0);

// useRef ne déclenche PAS de re-render
intervalRef.current = setInterval(() => {
  setTime(Date.now() - startTimeRef.current);
}, 10);

// Cleanup
if (intervalRef.current !== null) {
  clearInterval(intervalRef.current);
}`}</code>
              </pre>
            </div>

            {/* Example 3 */}
            <div>
              <div className="text-sm text-gray-400 mb-2">3. Cleanup function dans useEffect</div>
              <pre className="bg-gray-800 rounded p-3 overflow-x-auto text-sm">
                <code>{`useEffect(() => {
  // Setup
  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === ' ') toggleTimer();
  };
  
  window.addEventListener('keydown', handleKeyDown);
  
  // Cleanup function
  return () => {
    window.removeEventListener('keydown', handleKeyDown);
  };
}, [toggleTimer]); // Dependencies`}</code>
              </pre>
            </div>

            {/* Example 4 */}
            <div>
              <div className="text-sm text-gray-400 mb-2">4. useCallback pour optimiser</div>
              <pre className="bg-gray-800 rounded p-3 overflow-x-auto text-sm">
                <code>{`const start = useCallback(() => {
  if (!isRunning) {
    setIsRunning(true);
    startTimeRef.current = Date.now() - time;
    
    intervalRef.current = setInterval(() => {
      setTime(Date.now() - startTimeRef.current);
    }, 10);
  }
}, [isRunning, time]);`}</code>
              </pre>
            </div>
          </div>
        </div>

        {/* Next Project */}
        <div className="mt-8 bg-gradient-to-r from-green-500 to-teal-500 rounded-xl shadow-lg p-6 text-white">
          <h3 className="text-xl font-bold mb-2">🚀 Prochaine étape</h3>
          <p className="mb-4">
            Projet 9 : Générateur de Citations (Fetch API, loading states)
          </p>
          <button className="px-6 py-2 bg-white text-green-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Voir le projet suivant →
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;