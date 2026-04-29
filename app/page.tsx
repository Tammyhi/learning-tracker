import { DeployButton } from "@/components/deploy-button";
import { EnvVarWarning } from "@/components/env-var-warning";
import { AuthButton } from "@/components/auth-button";
import { Hero } from "@/components/hero";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { ConnectSupabaseSteps } from "@/components/tutorial/connect-supabase-steps";
import { SignUpUserSteps } from "@/components/tutorial/sign-up-user-steps";
import { hasEnvVars } from "@/lib/utils";
import Link from "next/link";
import { Suspense } from "react";
import { createClient } from "@/lib/supabase/server";
import ActiveTask from "@/components/TasksPage/active-task";
import TaskList from "@/components/TasksPage/task-list";
import PrioritiesList from "@/components/TasksPage/priorities-list";
import "./globals.css";

async function ToDoListData() {
  const supabase = await createClient();
  const { data: tasks } = await supabase.from("Daily_Tasks").select();
  return <pre>{JSON.stringify(tasks, null, 2)}</pre>;
}

export default function Home() {
  return (
    <main className="m-8 md:my-[5vw] md:mx-[10vw] flex flex-col">
      {/*<ThemeSwitcher className="inline"></ThemeSwitcher>*/}
      <ActiveTask className="flex flex-col mb-8"></ActiveTask>
      <div className="flex flex-col md:grid md:grid-cols-3 gap-[5vh] lg:gap-[10vw] mb-8">
        <TaskList className="flex flex-col col-span-2"></TaskList>
        <PrioritiesList className="flex flex-col col-span-1"></PrioritiesList>
      </div>
      {/*<Suspense fallback={<div>Loading Tasks...</div>}>
        <ToDoListData />
      </Suspense>*/}
    </main>
  );
}
