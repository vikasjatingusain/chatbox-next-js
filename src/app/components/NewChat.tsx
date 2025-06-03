"use client";

import { useState, useRef, useEffect } from "react";
import Chat from "./Chat";
import { FaArrowUp } from "react-icons/fa";

export default function NewChat({ chatId }: { chatId: string }) {
  const [messages, setMessages] = useState<{ role: string; content: string }[]>(
    []
  );
  const [input, setInput] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const newMessages = [...messages, { role: "user", content: input }];
    setMessages(newMessages);
    setInput("");
    setIsGenerating(true);

    const res = await fetch(`api/chat?prompt=${encodeURIComponent(input)}`);
    const reader = res.body?.getReader();
    const decoder = new TextDecoder();

    let assistantMessage = "";
    setMessages((current) => [...current, { role: "assistant", content: "" }]);
    setIsGenerating(false);

    while (reader) {
      const { done, value } = await reader.read();
      if (done) break;

      const chunk = decoder.decode(value);
      const lines = chunk
        .split("\n")
        .filter((line) => line.startsWith("data: "));
      for (const line of lines) {
        try {
          const json = JSON.parse(line.replace("data: ", ""));
          assistantMessage += json.message?.content || "";
          setMessages((current) => {
            const updated = [...current];
            updated[updated.length - 1] = {
              role: "assistant",
              content: assistantMessage,
            };
            return updated;
          });
        } catch {}
      }
    }
  };

  return (
    <div className="flex flex-col h-full w-full px-4 py-2 overflow-y-auto bg-[#212121]">
      <div className="flex flex-col flex-1 mb-4 overflow-y-auto px-10">
        {messages.map((msg, i) => (
          <Chat key={i} role={msg.role} content={msg.content} />
        ))}
        {isGenerating && (
          <div className="text-gray-400 italic mb-2">thinking...</div>
        )}
        <div ref={chatEndRef} />
      </div>
      <form
        onSubmit={handleSubmit}
        className="flex items-center w-1/2 m-auto my-3 rounded-2xl bg-[#303030] gap-2 px-4 py-4 justify-center"
      >
        <input
          className="w-full border outline-none border-none rounded-lg bg-transparent text-gray-white"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Send a message"
        />
        <button
          type="submit"
          className="bg-white text-black px-4 py-4 rounded-full disabled:bg-black/50 disabled:text-white/20"
          disabled={!input}
        >
          <FaArrowUp />
        </button>
      </form>
    </div>
  );
}
