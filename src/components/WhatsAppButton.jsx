// components/WhatsappButton.jsx
import React from "react";

const WhatsappButton = () => {
  return (
    <a
      href="https://wa.me/905319432374"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-50 w-14 h-14 bg-green-500 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition-colors"
      aria-label="WhatsApp ile iletişime geç"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-7 h-7"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M20.52 3.48A11.83 11.83 0 0012 .68 11.79 11.79 0 00.68 12a11.56 11.56 0 001.6 6L0 24l6.45-2.12a11.72 11.72 0 005.55 1.42h.05A11.78 11.78 0 0024 12a11.75 11.75 0 00-3.48-8.52zM12 21.53a9.93 9.93 0 01-5.07-1.37l-.36-.21-3.83 1.25 1.26-3.73-.24-.38A9.94 9.94 0 1121.94 12 9.94 9.94 0 0112 21.53zm5.51-7.39c-.3-.15-1.78-.88-2.06-.98s-.48-.15-.69.15-.79.98-.97 1.18-.36.22-.66.07a8.15 8.15 0 01-2.4-1.47 8.88 8.88 0 01-1.64-2c-.17-.3 0-.47.13-.62.13-.14.3-.36.45-.54a2.11 2.11 0 00.3-.51.55.55 0 000-.51c-.07-.15-.69-1.65-.95-2.25s-.5-.52-.69-.52h-.58a1.12 1.12 0 00-.82.38 3.41 3.41 0 00-1.06 2.53 5.94 5.94 0 001.27 2.88c.15.2 2 3.1 4.83 4.34a11.6 11.6 0 001.14.42 2.72 2.72 0 001.24.07c.38-.06 1.17-.48 1.33-.95s.16-.86.11-.95-.18-.13-.48-.28z" />
      </svg>
    </a>
  );
};

export default WhatsappButton;
