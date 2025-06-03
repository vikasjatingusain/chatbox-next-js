import { randomUUID } from "crypto";
import Sidebar from "./components/Sidebar";
import NewChat from "./components/NewChat";

export const metadata = () => {
  return {
    title: "ChatGPT clone",
    description: "Render Stream Responses"
  }
}

const RootPage = () => {
  const id = randomUUID();

  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col bg-white">
        <NewChat chatId={id} />
      </div>
    </div>
  )
}

export default RootPage;
