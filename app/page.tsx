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

async function ToDoListData() {
  const supabase = await createClient();
  const { data: tasks } = await supabase.from("Daily_Tasks").select();
  return <pre>{JSON.stringify(tasks, null, 2)}</pre>;
}

export default function Home() {
  return (
    <main className="">
      <ThemeSwitcher></ThemeSwitcher>
      <Suspense fallback={<div>Loading Tasks...</div>}>
        <ToDoListData />
      </Suspense>
    </main>
  );
}
