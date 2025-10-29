import { useState, useCallback, useEffect, useRef } from 'react';
import { Copy } from 'lucide-react';

function App() {
  const passwordRef = useRef(null);
  const [copied, setCopied] = useState(false);
  const [length, setLength] = useState(8);
  const [password, setPassword] = useState('');
  const [settings, setSettings] = useState({
    lowercase: true,
    uppercase: false,
    numbers: false,
    symbols: false,
  });

  const generatePassword = useCallback(() => {
    const charset = {
      lowercase: 'abcdefghijklmnopqrstuvwxyz',
      uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
      numbers: '0123456789',
      symbols: '!@#$%^&*()_+[]{}|;:,.<>?'
    };

    let password = '';
    const activeCharsets = Object.entries(settings)
      .filter(([key, value]) => value)
      .map(([key]) => charset[key])
      .join('');

    if (activeCharsets.length === 0) return;

    for (let i = 0; i < length; i++) {
      password += activeCharsets.charAt(Math.floor(Math.random() * activeCharsets.length));
    }

    setPassword(password);
  }, [length, settings]);

  useEffect(() => {
    generatePassword();
  }, [length, settings]);

  const copyToClipboard = () => {
    if (!password) return
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
    navigator.clipboard.writeText(password);
    if (passwordRef.current) {
      passwordRef.current.focus();
      passwordRef.current.select();
    }
    
  };

  return (
    <div className='min-h-screen bg-linear-to-br from-gray-950 via-gray-900 to-black flex flex-col items-center justify-center px-4 text-white'>

      <h1 className="text-3xl md:text-5xl font-semibold mb-16 md:mb-28 text-center tracking-wide bg-linear-to-r from-blue-400 to-blue-500 bg-clip-text text-transparent">
        Password Generator
      </h1>

      <div className='bg-gray-900/70 backdrop-blur-xl border border-gray-800 rounded-3xl shadow-2xl w-full max-w-md p-8 text-gray-200'>
        
        <div className='flex items-center gap-3 mb-6'>
          <input
            ref={passwordRef}
            type="text"
            value={password}
            readOnly
            placeholder="Your secure password"
            className="w-full px-4 py-3 rounded-xl bg-gray-800 border border-gray-700 text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />

          <div className='relative'>
            <button
              onClick={copyToClipboard}
              className='p-3 rounded-xl bg-blue-600 hover:bg-blue-700'
              title="Copy to clipboard"
            >
              <Copy size={18} />
            </button>

            {copied && (
              <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs text-blue-400 animate-fade">
                Copied!
              </span>
            )}
          </div>
            
        </div>

        <div className="mb-6">

          <div className="flex justify-between items-center mb-6">
            <span className="text-sm text-gray-400">
              {length <= 8 ? "Weak" : length <= 16 ? "Medium" : "Strong"}
            </span>

            <div className='flex items-center gap-2'>
              {[0, 1,2].map((i) => (

                <div
                  key={i}
                  className={`h-2 w-12 md:w-24 rounded-full transition-all duration-300 ${
                    length <= 8
                      ? i === 0
                        ? "bg-red-500"
                        : "bg-gray-700"
                      : length <= 16
                      ? i <= 1
                        ? "bg-yellow-400"
                        : "bg-gray-700"
                      : "bg-green-500"
                  }`}
                />
              ))}
            </div>
          </div>

          <label className="block text-sm font-medium mb-2">
            Password Length: <span className="font-bold">{length}</span>
          </label>
          <input
            type="range"
            min="6"
            max="32"
            value={length}
            onChange={(e) => setLength(e.target.value)}
            className="w-full accent-blue-500 cursor-pointer"
          />
        </div>

        <div className="grid grid-cols-2 gap-3">
          {Object.entries(settings).map(([key, value]) => (
            <label
              key={key}
              className="flex items-center space-x-2 bg-gray-800 px-3 py-2 rounded-xl cursor-pointer hover:bg-gray-700 transition"
            >
              <input
                type="checkbox"
                checked={value}
                onChange={() => {
                  const newSettings = { ...settings, [key]: !settings[key] };

                  if (key === "uppercase" && !newSettings.uppercase) {
                    newSettings.lowercase = true;
                  }

                  if (key === "lowercase" && !newSettings.lowercase) {
                    newSettings.uppercase = true;
                  }

                  setSettings(newSettings);
                }}
                className="accent-blue-500"
              />
              <span className="text-sm">
                {key === "lowercase"
                  ? "Lowercase  (a-z)"
                  : key === "uppercase"
                  ? "Uppercase (A-Z)"
                  : key === "numbers"
                  ? "Numbers (0-9)"
                  : "Symbols (!@#$%)"}
              </span>
            </label>
          ))}
        </div>

      </div>

      <footer className="mt-10 text-sm text-gray-500 text-center">
        © {new Date().getFullYear()} <span className="text-gray-300 font-medium">Syabdl</span> · Built with <span className="text-blue-400">React</span> + <span className="text-sky-400">TailwindCSS</span>
      </footer>
    </div>
  )
}

export default App;