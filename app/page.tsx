import { fetchActivities } from "./lib/helpers";
import { ErrorComponent } from "./components/ErrorComponent";
import { UserMainCard } from "./components/UserMainCard";

export default async function Home() {
  const activities = await fetchActivities();

  if (!activities) {
    return <ErrorComponent />;
  }

  return (
    <main className="flex bg-very-dark-blue min-h-screen flex-col items-center justify-center p-24">
      <div className="grid w-full gap-8 max-w-5xl text-white grid-cols-8 h-[370px] grid-rows-6">
        <div className="col-span-2 row-span-6">
          <UserMainCard />
        </div>
        <div className="col-span-2 row-span-3 col-start-3">2</div>
        <div className="col-span-2 row-span-3 col-start-3 row-start-4">3</div>
        <div className="col-span-2 row-span-3 col-start-5 row-start-1">4</div>
        <div className="col-span-2 row-span-3 col-start-7 row-start-1">7</div>
        <div className="col-span-2 row-span-3 col-start-5 row-start-4">8</div>
        <div className="col-span-2 row-span-3 col-start-7 row-start-4">9</div>
      </div>
    </main>
  );
}
