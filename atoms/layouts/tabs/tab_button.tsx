import React from "react";
import "./tab_button.css";

export interface TabButtonProps {
  id: string;
  index: number;
  name: string;
  isDisabled: boolean;
  isSelected: boolean;
  onSelect: (index: number) => void;
  error?: Error;
}

export function TabButton({
  id,
  index,
  name,
  isDisabled,
  isSelected,
  onSelect,
}: TabButtonProps) {
  const select = () => {
    onSelect(index);
  };

  return (
    <button
      role="tab"
      key={index}
      disabled={isDisabled}
      onClick={select}
      aria-selected={isSelected}
      aria-controls={id}
    >
      {name}
    </button>
  );
}
