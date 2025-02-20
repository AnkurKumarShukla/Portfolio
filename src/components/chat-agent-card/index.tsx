import { useState, useEffect, useRef, Fragment } from 'react';

interface Message {
  sender: 'user' | 'ai';
  text: string;
}

const Chat = () => {
  const [messages, setMessages] = useState<Message[]>([
    { sender: 'ai', text: 'Hello! How can I assist you today?' },
  ]);
  const [input, setInput] = useState('');
  const chatContainerRef = useRef<HTMLDivElement | null>(null);

  // Auto-scroll only inside the chat container
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTo({
        top: chatContainerRef.current.scrollHeight,
        behavior: 'smooth',
      });
    }
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;

    const newMessage: Message = { sender: 'user', text: input };
    setMessages((prev) => [...prev, newMessage]);
    setInput('');

    // Simulated AI Response
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          sender: 'ai',
          text: "I'm jusare like Aldus PageMaker including versions of Lorem Ipsum.",
        },
      ]);
    }, 1000);
  };

  // Handle Enter key to send message
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <Fragment>
      <div className="col-span-1 lg:col-span-2">
        <div className="grid grid-cols-1 gap-6">
          <div className="card compact bg-base-100 shadow bg-opacity-40">
            <div className="card-body">
              <div className="mx-3 flex items-center justify-between mb-2">
                <h5 className="card-title text-base-content opacity-70">
                  Chat Assistant
                </h5>
              </div>

              {/* Chat Display */}
              <div
                ref={chatContainerRef}
                className="h-64 overflow-y-auto p-3 border border-base-300 rounded-md bg-base-100 text-base-content"
              >
                {messages.map((msg, idx) => (
                  <div
                    key={idx}
                    className={`p-2 my-1 rounded-md text-sm ${
                      msg.sender === 'user'
                        ? 'bg-base text-base-content text-right opacity-70'
                        : 'bg-base text-base-content opacity-70'
                    }`}
                  >
                    {msg.text}
                  </div>
                ))}
              </div>

              {/* Input Field */}
              <div className="flex mt-3">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown} // Detect Enter key press
                  className="flex-grow p-2 border border-base-300 rounded-l-md bg-base-100 text-base-content"
                  placeholder="Type a message..."
                />
                <button
                  onClick={handleSend}
                  className="bg-primary px-4 text-primary-content rounded-r-md"
                >
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Chat;
