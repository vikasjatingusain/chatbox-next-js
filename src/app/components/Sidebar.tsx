'use client'

import { Button } from "@nextui-org/react";
import { useState } from "react";
import { TbLayoutSidebarRightExpandFilled, TbLayoutSidebarLeftExpandFilled } from "react-icons/tb"; 
export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <div
      className={`bg-[#181818] text-white p-4 transition-all duration-300 ${
        collapsed ? 'w-16' : 'w-64'
      } hidden md:flex flex-col`}
    >
      <div className="flex justify-between items-center mb-4">
        <h2 className={`text-lg font-bold transition-opacity duration-300 ${collapsed ? 'hidden' : 'opacity-100'}`}>
          Chat History
        </h2>
        <Button
          isIconOnly
          size="lg"
          variant="light"
          onClick={() => setCollapsed(!collapsed)}
          className="text-white cursor-pointer"
        >
          {!collapsed ? (
              <TbLayoutSidebarRightExpandFilled />
            ) : (
             <TbLayoutSidebarLeftExpandFilled />
            )}
        </Button>
      </div>
      {!collapsed && (
        <ul className="space-y-2 text-sm duration-300">
          <li className="text-gray-400 cursor-pointer">New Chat</li>
        </ul>
      )}
    </div>
  );
}
