'use client'

import { useState, useEffect } from 'react'
import { Button } from '@nextui-org/react'

export default function Sidebar({ defaultCollapsed }: { defaultCollapsed: boolean }) {
  const [collapsed, setCollapsed] = useState(defaultCollapsed)

  useEffect(() => {
    document.cookie = `sidebar-collapsed=${collapsed}; path=/`
  }, [collapsed])

  return (
    <div
      className={`bg-gray-900 text-white p-4 transition-all duration-300 ${
        collapsed ? 'w-16' : 'w-64'
      } hidden md:flex flex-col`}
    >
      <div className="flex justify-between items-center mb-4">
        <h2 className={`text-lg font-bold transition-opacity duration-300 ${collapsed ? 'hidden' : 'opacity-100'}`}>
          Chat History
        </h2>
        <Button
          isIconOnly
          size="sm"
          variant="light"
          onClick={() => setCollapsed(!collapsed)}
          className="text-white cursor-pointer"
        >
          {!collapsed ? (
              <svg
                className="w-6 h-6 text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M10 4H4c-1.10457 0-2 .89543-2 2v12c0 1.1046.89543 2 2 2h6V4ZM7.79283 9.29289c.39053.39053.39053 1.02371 0 1.41421L6.5 11.9999l1.29283 1.2929c.39053.3905.39053 1.0237 0 1.4142-.39052.3905-1.02368.3905-1.41421 0l-1.99994-2c-.39052-.3905-.39052-1.0236 0-1.4142l1.99994-1.99991c.39053-.39052 1.02369-.39052 1.41421 0Z"
                  clipRule="evenodd"
                />
                <path d="M12 20h8c1.1046 0 2-.8954 2-2V6c0-1.10457-.8954-2-2-2h-8v16Z" />
              </svg>
            ) : (
              <svg
                className="w-6 h-6 text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M10 4H4c-1.10457 0-2 .89543-2 2v12c0 1.1046.89543 2 2 2h6V4ZM4.37868 9.29289c-.39052.39053-.39052 1.02371 0 1.41421l1.29283 1.2928-1.29283 1.2929c-.39052.3905-.39052 1.0237 0 1.4142.39052.3905 1.02369.3905 1.41421 0l1.99994-2c.39053-.3905.39053-1.0236 0-1.4142L5.79289 9.29289c-.39052-.39052-1.02369-.39052-1.41421 0Z"
                  clipRule="evenodd"
                />
                <path d="M12 20h8c1.1046 0 2-.8954 2-2V6c0-1.10457-.8954-2-2-2h-8v16Z" />
              </svg>
            )}
        </Button>
      </div>
      {!collapsed && (
        <ul className="space-y-2 text-sm">
          <li className="text-gray-400 cursor-pointer">New Chat</li>
          <li className="text-gray-400 cursor-pointer">Chat with AI</li>
        </ul>
      )}
    </div>
  )
}
