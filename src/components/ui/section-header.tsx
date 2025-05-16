import React from "react";

interface SectionHeaderProps {
  title: string;
}

export function SectionHeader({ title }: SectionHeaderProps) {
  return (
    <div className="w-full border-b border-gray-200 pb-2 mb-4">
      <h3 className="text-gray-800 font-medium text-lg">{title}</h3>
    </div>
  );
}