import { useState, useRef, useEffect } from 'react';
import { gitCommands, gitConcepts, gitPatterns } from '@/lib/gitHelp';

interface ChatMessage {
  id: string;
  type: 'user' | 'bot';
  content: string;
  timestamp: Date;
}

interface GitChatbotProps {
  isVisible: boolean;
  onClose: () => void;
}

export default function GitChatbot({ isVisible, onClose }: GitChatbotProps) {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      type: 'bot',
      content:
        'Hello! I\'m your Git assistant. Ask me about any Git command or concept. Try "help git status" or "what is a merge conflict?"',
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isVisible) {
      inputRef.current?.focus();
    }
  }, [isVisible]);

  // Simple pattern matching for git help
  const processQuery = (query: string): string => {
    const lowerQuery = query.toLowerCase().trim();

    // Direct command help: "help git status" or "git status help"
    const helpMatch = lowerQuery.match(
      /(?:help\\s+)?(git[\\s-]+\\w+)|(?:(git[\\s-]+\\w+)\\s+help)/
    );
    if (helpMatch) {
      const command = (helpMatch[1] || helpMatch[2]).replace(/\\s+/g, '-');
      const gitCommand = gitCommands[command];
      if (gitCommand) {
        return formatCommandHelp(gitCommand);
      }
    }

    // Concept queries
    for (const pattern of gitPatterns.patterns) {
      const hasKeywords = pattern.keywords.some((keyword) =>
        lowerQuery.includes(keyword.toLowerCase())
      );

      if (hasKeywords) {
        if (pattern.type === 'concept') {
          const concept = gitConcepts[pattern.response];
          if (concept) {
            return formatConceptHelp(concept);
          }
        } else if (pattern.type === 'command') {
          const command = gitCommands[pattern.response];
          if (command) {
            return formatCommandHelp(command);
          }
        }
      }
    }

    // Fallback responses
    const fallbacks = [
      "I'm not sure about that. Try asking about specific Git commands like 'git status' or concepts like 'merge conflicts'.",
      'Could you rephrase that? I can help with Git commands, merge conflicts, branching, and more!',
      "I didn't understand. Ask me things like 'help git commit' or 'what is staging area'.",
    ];

    return fallbacks[Math.floor(Math.random() * fallbacks.length)];
  };

  const formatCommandHelp = (command: (typeof gitCommands)[string]): string => {
    let response = `**${command.command}**\\n\\n`;
    response += `${command.description}\\n\\n`;
    response += `**Usage:**\\n${command.usage.join('\\n')}\\n\\n`;
    response += `**Examples:**\\n${command.examples.map((ex) => `  ${ex}`).join('\\n')}`;

    if (command.commonFlags && command.commonFlags.length > 0) {
      response += `\\n\\n**Common Flags:**\\n${command.commonFlags
        .map((flag) => `  ${flag}`)
        .join('\\n')}`;
    }

    if (command.relatedCommands && command.relatedCommands.length > 0) {
      response += `\\n\\n**See also:** ${command.relatedCommands.join(', ')}`;
    }

    return response;
  };

  const formatConceptHelp = (concept: (typeof gitConcepts)[string]): string => {
    let response = `**${concept.term}**\\n\\n`;
    response += `${concept.definition}`;

    if (concept.examples && concept.examples.length > 0) {
      response += `\\n\\n**Examples:**\\n${concept.examples.map((ex) => `  • ${ex}`).join('\\n')}`;
    }

    return response;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = {
      id: Date.now().toString(),
      type: 'user' as const,
      content: input.trim(),
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    // Simulate thinking time
    await new Promise((resolve) => setTimeout(resolve, 800 + Math.random() * 400));

    const response = processQuery(input.trim());
    const botMessage = {
      id: (Date.now() + 1).toString(),
      type: 'bot' as const,
      content: response,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, botMessage]);
    setIsTyping(false);
  };

  const formatMessageContent = (content: string) => {
    // Simple markdown-like formatting
    return content.split('\\n').map((line, index) => {
      if (line.startsWith('**') && line.endsWith('**')) {
        return (
          <div key={index} className="font-bold text-green-400 mb-1">
            {line.slice(2, -2)}
          </div>
        );
      }
      if (line.startsWith('  ')) {
        return (
          <div key={index} className="text-gray-300 font-mono text-sm ml-4">
            {line}
          </div>
        );
      }
      return line ? (
        <div key={index} className="mb-1">
          {line}
        </div>
      ) : (
        <div key={index} className="mb-2"></div>
      );
    });
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-gray-900 border border-gray-600 rounded-lg w-full max-w-4xl h-[600px] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-600">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <h3 className="text-white font-semibold">Git Assistant</h3>
          </div>
          <button onClick={onClose} className="text-gray-400 hover:text-white transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[80%] p-3 rounded-lg ${
                  message.type === 'user' ? 'bg-blue-600 text-white' : 'bg-gray-800 text-gray-100'
                }`}
              >
                <div className="text-sm">{formatMessageContent(message.content)}</div>
                <div className="text-xs opacity-60 mt-1">
                  {message.timestamp.toLocaleTimeString()}
                </div>
              </div>
            </div>
          ))}

          {isTyping && (
            <div className="flex justify-start">
              <div className="bg-gray-800 text-gray-100 p-3 rounded-lg">
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse"></div>
                  <div
                    className="w-2 h-2 bg-gray-400 rounded-full animate-pulse"
                    style={{ animationDelay: '0.2s' }}
                  ></div>
                  <div
                    className="w-2 h-2 bg-gray-400 rounded-full animate-pulse"
                    style={{ animationDelay: '0.4s' }}
                  ></div>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="border-t border-gray-600 p-4">
          <form onSubmit={handleSubmit} className="flex gap-2">
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about Git commands or concepts..."
              className="flex-1 bg-gray-800 text-white px-3 py-2 rounded border border-gray-600 focus:border-green-500 focus:outline-none"
              disabled={isTyping}
            />
            <button
              type="submit"
              disabled={isTyping || !input.trim()}
              className="bg-green-600 hover:bg-green-700 disabled:bg-gray-600 text-white px-4 py-2 rounded transition-colors"
            >
              Send
            </button>
          </form>
          <div className="text-xs text-gray-400 mt-2">
            Try: "help git status", "what is a merge conflict?", "git commit examples"
          </div>
        </div>
      </div>
    </div>
  );
}
