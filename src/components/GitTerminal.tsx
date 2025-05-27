"use client"

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, GitBranch, AlertCircle, CheckCircle2 } from 'lucide-react';

interface GitTerminalProps {
  onCommandExecute: (command: string) => void;
  currentBranch?: string;
  isCommandValid?: boolean;
  commandOutput?: string[];
}

const GitTerminal: React.FC<GitTerminalProps> = ({ 
  onCommandExecute, 
  currentBranch = 'main',
  isCommandValid = true,
  commandOutput = []
}) => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState<string[]>([]);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const terminalRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Update output when commandOutput prop changes
  useEffect(() => {
    if (commandOutput.length > 0) {
      setOutput(prev => [...prev, ...commandOutput]);
    }
  }, [commandOutput]);

  // Scroll to bottom when output changes
  useEffect(() => {
    if (terminalRef.current) {
      const scrollOptions: ScrollToOptions = {
        top: terminalRef.current.scrollHeight,
        behavior: 'smooth'
      };
      terminalRef.current.scrollTo(scrollOptions);
    }
  }, [output]);

  // Focus input on mount and after command execution
  useEffect(() => {
    const focusInput = () => {
      if (inputRef.current) {
        inputRef.current.focus();
      }
    };
    focusInput();
    // Add click handler to focus input when clicking anywhere in the terminal
    const terminal = terminalRef.current;
    if (terminal) {
      terminal.addEventListener('click', focusInput);
      return () => terminal.removeEventListener('click', focusInput);
    }
  }, []);

  const handleCommand = (command: string) => {
    if (!command.trim()) return;

    // Add command to history
    setCommandHistory(prev => [command, ...prev]);
    setHistoryIndex(-1);

    // Update output
    const newOutput = [
      ...output,
      `$ ${command}`,
      ...(commandOutput.length > 0 ? commandOutput : ['Command executed: ' + command])
    ];
    setOutput(newOutput);
    setInput('');
    onCommandExecute(command);
  };

  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      handleCommand(input);
    } else if (event.key === 'ArrowUp') {
      event.preventDefault();
      if (historyIndex < commandHistory.length - 1) {
        const newIndex = historyIndex + 1;
        setHistoryIndex(newIndex);
        setInput(commandHistory[newIndex]);
      }
    } else if (event.key === 'ArrowDown') {
      event.preventDefault();
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        setInput(commandHistory[newIndex]);
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setInput('');
      }
    }
  };

  return (
    <div className="terminal-container bg-gray-900 rounded-lg shadow-lg overflow-hidden flex flex-col h-[400px]">
      {/* Terminal header */}
      <div className="bg-gray-800 px-4 py-2 flex items-center justify-between border-b border-gray-700">
        <div className="flex items-center space-x-2">
          <Terminal className="w-4 h-4 text-green-400" />
          <span className="text-sm text-gray-300">Git Terminal</span>
        </div>
        <div className="flex items-center space-x-2">
          <GitBranch className="w-4 h-4 text-blue-400" />
          <span className="text-sm text-gray-300">{currentBranch}</span>
        </div>
      </div>

      {/* Terminal output */}
      <div 
        ref={terminalRef} 
        className="terminal-output flex-1 overflow-y-auto p-4 font-mono text-sm"
        style={{ 
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
          scrollbarWidth: 'thin',
          scrollbarColor: 'rgba(156, 163, 175, 0.5) transparent'
        }}
      >
        <div className="space-y-1">
          <AnimatePresence>
            {output.map((line, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className={`whitespace-pre-wrap break-words ${
                  line.startsWith('$') 
                    ? 'text-green-400' 
                    : line.startsWith('error') 
                      ? 'text-red-400' 
                      : 'text-gray-300'
                }`}
              >
                {line}
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Terminal input */}
      <div className="terminal-input p-4 bg-gray-800 border-t border-gray-700">
        <div className="flex items-center space-x-2">
          <span className="text-green-400 select-none">$</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyPress}
            className="bg-transparent border-none outline-none flex-grow text-gray-300 font-mono text-sm"
            placeholder="Enter git command..."
            spellCheck={false}
            autoComplete="off"
            autoCapitalize="off"
            autoCorrect="off"
          />
          {input && (
            <button
              onClick={() => handleCommand(input)}
              className="px-3 py-1 bg-green-500 hover:bg-green-600 text-white rounded text-sm transition-colors"
            >
              Execute
            </button>
          )}
        </div>
        {!isCommandValid && input && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-2 flex items-center text-red-400 text-sm"
          >
            <AlertCircle className="w-4 h-4 mr-1" />
            Invalid command. Type 'git help' for available commands.
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default GitTerminal; 