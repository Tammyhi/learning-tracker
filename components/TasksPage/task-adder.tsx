import { Plus } from "lucide-react";

interface TaskAdderProps extends React.HTMLAttributes<HTMLDivElement> { }

export default function TaskAdder({ className }: TaskAdderProps) {
  return (
    <section className={`${className}`}>
        <div className="flex bg-violet-950 rounded-lg p-4 gap-4">
        <button onClick={handleClick}>
            <Plus></Plus>
        </button>
        <p>Task to Add</p>
        </div>
    </section>
  );
}
