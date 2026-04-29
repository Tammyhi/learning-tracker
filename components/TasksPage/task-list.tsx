import Task from "@/components/TasksPage/task";
import TaskAdder from "./task-adder";
interface TaskListProps extends React.HTMLAttributes<HTMLDivElement> {}

export default function TaskList({ className }: TaskListProps) {
  return (
    <section className={`${className}`}>
      <p className="uppercase mb-4">Tasks</p>
      <ul className="flex flex-col gap-4 mb-4">
        <li>
          <Task></Task>
        </li>
        <li>
          <Task></Task>
        </li>
        <li>
          <Task></Task>
        </li>
        <li>
          <Task></Task>
        </li>
        <li>
          <Task></Task>
        </li>
        <li>
          <Task></Task>
        </li>
        <li>
          <Task></Task>
        </li>
        <li>
          <Task></Task>
        </li>
        <li>
          <Task></Task>
        </li>
      </ul>
      <TaskAdder></TaskAdder>
    </section>
  );
}
