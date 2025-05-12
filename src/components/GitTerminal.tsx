import React, { useState, useRef, useEffect } from 'react';

interface GitTerminalProps {
  onCommandExecute: () => void;
}

const GitTerminal: React.FC<GitTerminalProps> = ({ onCommandExecute }) => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState<string[]>([]);
  const terminalRef = useRef<HTMLDivElement>(null);

  const handleCommand = (command: string) => {
    // Simulate command execution and update output
    const newOutput = [...output, `$ ${command}`, 'Command executed: ' + command];
    setOutput(newOutput);
    setInput('');
    onCommandExecute(); // Notify the game component
  };

  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      handleCommand(input);
    }
  };

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [output]);

  return (
    <div className="terminal-container bg-black text-green-400 p-4 rounded-lg font-mono">
      <div ref={terminalRef} className="terminal-output h-64 overflow-y-auto mb-4">
        {output.map((line, index) => (
          <div key={index}>{line}</div>
        ))}
      </div>
      <div className="terminal-input flex">
        <span className="mr-2">$</span>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={handleKeyPress}
          className="bg-transparent border-none outline-none flex-grow"
          autoFocus
        />
      </div>
    </div>
  );
};

export default GitTerminal; 