import React, { useState } from "react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// Utility function
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// React Component Example
function Button() {
  const [isActive, setIsActive] = useState(false);

  return (
    <button
      className={cn(
        "px-4 py-2 rounded-md text-white",
        isActive ? "bg-blue-500 hover:bg-blue-600" : "bg-gray-400 hover:bg-gray-500"
      )}
      onClick={() => setIsActive(!isActive)}
    >
      {isActive ? "Active" : "Inactive"}
    </button>
  );
}

export default Button;

