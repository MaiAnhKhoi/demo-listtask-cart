import { useEffect, useRef } from "react";

export const AutoFocusForm = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  // Auto focus khi component mount
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleFocus = () => {
    inputRef.current?.focus();
  };

  return (
    <div>
      <input
        ref={inputRef}
        type="text"
        placeholder="Enter your name"
      />

      <button onClick={handleFocus}>
        Focus
      </button>
    </div>
  );
};
