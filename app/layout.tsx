import SideBar from "@/components/Sidebar/SideBar";
import "@/styles/globals.css";

export const metadata = {
  title: "Chat-GPT",
  description: "Generated by Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="flex">
          {/* Sidebar */}
          <div className="bg-[#202123] max-w-xs h-screen overflow-y-auto md:min-w-[20rem]">
            <SideBar />
          </div>
          {/* Client Provider (provides all the notifications) */}

          <div className="flex-1 bg-[#343541]">{children}</div>
        </div>
      </body>
    </html>
  );
}
