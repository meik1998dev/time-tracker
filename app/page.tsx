import { fetchActivities } from "./lib/helpers";
import { ErrorComponent } from "./components/ErrorComponent";
import { UserMainCard } from "./components/UserMainCard";
import { ActivitesList } from "./components/ActivitesList";

export default async function Home() {
  const activities = await fetchActivities();

  if (!activities) {
    return <ErrorComponent />;
  }

  return (
    <main className="flex bg-very-dark-blue min-h-screen h-full flex-col items-center justify-center p-4">
      <div className="grid w-full gap-8 container text-white md:grid-cols-8 grid-cols-1 md:h-[400px] grid-rows-6">
        <div className="md:col-span-2 row-span-6 col-span-full">
          <UserMainCard />
        </div>

        <ActivitesList activities={activities} />
      </div>
    </main>
  );
}
