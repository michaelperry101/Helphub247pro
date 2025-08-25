"use client";
import { useState, useEffect } from "react";

export default function SettingsPage() {
  const [theme, setTheme] = useState("light");
  const [fontSize, setFontSize] = useState("base");

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  return (
    <div
      className={`p-8 max-w-3xl mx-auto text-gray-800 dark:text-gray-200 text-${fontSize}`}
    >
      <h1 className="text-3xl font-bold mb-6">Settings</h1>

      {/* Theme Toggle */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Theme</h2>
        <button
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          className="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded-xl"
        >
          Switch to {theme === "light" ? "Dark" : "Light"} Mode
        </button>
      </div>

      {/* Text Size */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Text Size</h2>
        <select
          value={fontSize}
          onChange={(e) => setFontSize(e.target.value)}
          className="px-3 py-2 border rounded-lg bg-white dark:bg-gray-800"
        >
          <option value="sm">Small</option>
          <option value="base">Normal</option>
          <option value="lg">Large</option>
          <option value="xl">Extra Large</option>
        </select>
      </div>

      {/* Accessibility */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Accessibility Options</h2>
        <ul className="list-disc list-inside">
          <li>Toggle high contrast (coming soon)</li>
          <li>Text-to-speech support (coming soon)</li>
          <li>Keyboard navigation enhancements (coming soon)</li>
        </ul>
      </div>
    </div>
  );
}
