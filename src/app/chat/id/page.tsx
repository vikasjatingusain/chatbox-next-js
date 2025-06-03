import Sidebar from '../../components/Sidebar';
import NewChat from '../../components/Chat'

interface ChatPageProps {
  params: { id: string };
}

export default function ChatPage({ params }: ChatPageProps) {
  const { id: chatId } = params;

  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col bg-white">
        <NewChat chatId={chatId} />
      </div>
    </div>
  );
}
