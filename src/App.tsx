import { useState } from "react";

export default function Chatbot() {
  const [messages, setMessages] = useState<{ text: string; sender: string }[]>(
    []
  );
  const [input, setInput] = useState("");

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { text: input, sender: "user" };
    setMessages([...messages, userMessage]);
    setInput("");

    // Simulate bot response (Replace with API call)
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { text: `You asked: ${input}`, sender: "bot" },
      ]);
    }, 1000);
  };

  return (
    <div className="flex flex-col h-screen bg-gray-900 text-white">
      {/* Header */}
      <div className="bg-gray-800 p-4 text-lg font-semibold text-center shadow-md">
        📢 CDP Support Chatbot
      </div>

      {/* Chat Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((msg, index) => (
          <div key={index} className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
            <div
              className={`rounded-lg px-4 py-2 max-w-xs ${
                msg.sender === "user" ? "bg-blue-500 text-white" : "bg-gray-700"
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}
      </div>

      {/* Input Field */}
      <div className="p-4 bg-gray-800 flex items-center">
        <input
          type="text"
          className="flex-1 p-2 rounded-md bg-gray-700 border-none text-white focus:ring-2 focus:ring-blue-400"
          placeholder="Ask me something..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && handleSend()}
        />
        <button
          className="ml-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-md"
          onClick={handleSend}
        >
          Send
        </button>
      </div>
    </div>
  );
}
