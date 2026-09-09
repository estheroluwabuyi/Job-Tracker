import { LuPanelLeftOpen } from "react-icons/lu";

export default function CollapsedSidebar({ onOpen }) {
  return (
    <div className="h-full bg-bg flex items-start justify-center pt-8">
      <button
        onClick={onOpen}
        className="p-3 rounded-xl text-text-secondary hover:bg-bg-muted hover:text-text transition-colors"
        aria-label="Open sidebar"
      >
        <LuPanelLeftOpen size={24} />
      </button>
    </div>
  );
}
