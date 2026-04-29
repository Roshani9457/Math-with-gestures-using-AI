import { useEffect, useRef, useState } from "react";
import HelpPanel from "../components/ui/HelpPanel";
//import HistorySidebar from "../components/ui/HistorySidebar";

export default function CamMode() {
  const videoRef = useRef<HTMLImageElement>(null); // Reference for the video stream
  const [response, setResponse] = useState<string>(''); // State for AI response
  const [isConnected, setIsConnected] = useState<boolean>(false); // State for WebSocket connection
  const wsRef = useRef<WebSocket | null>(null); // Ref to store WebSocket instance
  const [history, setHistory] = useState<string[]>([]);
  //const [history, setHistory] = useState<
  //{ expression: string; result: string }[]
//>([]);

//const clearHistory = () => {
 // setHistory([]);
//};

  useEffect(() => {
    // Establish WebSocket connection
    const ws = new WebSocket('ws://localhost:8900/ws');
    wsRef.current = ws; // Store WebSocket instance in ref

    ws.onopen = () => {
      console.log('WebSocket connected');
      setIsConnected(true);
    };

    ws.onmessage = (event) => {
      if (typeof event.data === 'string') {
        // Handle AI response
        setResponse(event.data);
        setHistory((prev) => [event.data, ...prev]);
      } else {
        // Handle video stream (binary data)
        const blob = new Blob([event.data], { type: 'image/jpeg' });
        const url = URL.createObjectURL(blob);
        if (videoRef.current) {
          videoRef.current.src = url;
        }
      }
    };

    ws.onclose = () => {
      console.log('WebSocket disconnected');
      setIsConnected(false);
    };

    ws.onerror = (error) => {
      console.error('WebSocket error:', error);
    };

    // Cleanup on component unmount
    return () => {
      if (wsRef.current) {
        wsRef.current.close();
      }
    };
  }, []);

  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 p-4">
      <h1 className="text-2xl font-bold mb-4">Camera Mode</h1>
      <p className="mb-4">Use your hand gestures to draw and interact with the AI.</p>

      {/* Video Stream */}
      <div className="mb-4">
        <img
          ref={videoRef}
          alt="Video Stream"
          className="border-4 border-blue-400 rounded-xl shadow-lg"
          style={{ width: '640px', height: '360px' }}
        />
      </div>

      {/* AI Response */}
      <div className="w-full max-w-2xl bg-white/70 backdrop-blur-md p-4 rounded-xl shadow-lg mb-4 border">
        
        <h2 className="text-xl font-semibold mb-2">AI Response:</h2>
        {response ? (
          <p className="text-gray-700">{response}</p>
        ) : (
          <p className="text-gray-400 animate-pulse">
            Waiting for AI response...
          </p>
        )}
      </div>

      <div className="w-full max-w-2xl bg-white/70 backdrop-blur-md p-4 rounded-xl shadow-lg mb-4 border">
        <h2 className="text-xl font-semibold mb-2">History</h2>

        {history.length === 0 ? (
          <p className="text-gray-400">No history yet...</p>
        ) : (
          <ul className="space-y-2 max-h-40 overflow-y-auto">
            {history.map((item, index) => (
              <li
                key={index}
                className="bg-gray-100 p-2 rounded-md text-sm"
              >
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Connection Status */}
      <div className="mb-4">
        <p className={`text-sm font-semibold ${
          isConnected ? "text-green-600" : "text-red-600"
        }`}>
          ● {isConnected ? "Connected" : "Disconnected"}
        </p>
      </div>

      <HelpPanel />

    </div>
  );
}

