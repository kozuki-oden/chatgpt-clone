import ChatWindow from "@/components/Chat/ChatWindow";
import InputTab from "@/components/Chat/InputTab";

type Props = {
  params: {
    id: string;
  };
};

function ChatPage({ params: { id } }: Props) {
  return (
    <div className="flex flex-col overflow-hidden h-screen">
      
      {/* Chat Window*/}
      <ChatWindow chatId={id} />
      
      {/* Input Tab */}
      <InputTab chatId={id} />
    </div>
  );
}

export default ChatPage;