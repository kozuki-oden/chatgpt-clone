"use client";

import { signOut, useSession } from "next-auth/react";
import { useCollection } from "react-firebase-hooks/firestore";
import { collection, orderBy, query } from "firebase/firestore";
import { db } from "@/firebase/firebase";
import NewChat from "../Chat/NewChat";
// import ChatRow from "../Chat/ChatRow";

function SideBar() {
  const { data: session } = useSession();
  const [chats, loading, error] = useCollection(
    session &&
      query(
        collection(db, "users", session?.user?.email!, "chats"),
        orderBy("createdAt", "asc")
      )
  );

  return (
    <div className="flex flex-col p-2 h-screen">
      <div className="flex-1">
        <div>
          {/* New Chat Button */}
          <NewChat />
          <div>{/* Model Selection Dropdown */}</div>

          {/* Mapping through chats stored in DB */}
          {/* {chats?.docs.map((chat) => (
              <ChatRow key={chat.id} id={chat.id} />
            ))} */}
        </div>
      </div>

      {session && (
        <div className="flex flex-row items-center justify-center">
          <img
            src={session.user?.image!}
            alt="profile pic"
            className="h-12 w-12 rounded-md cursor-pointer hover:opacity-50"
            onClick={() => signOut()}
          />
          <span className="text-gray-400 ml-1 mt-6">{session.user?.name!}</span>
        </div>
      )}
    </div>
  );
}

export default SideBar;
