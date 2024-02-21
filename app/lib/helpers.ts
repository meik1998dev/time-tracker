import { Activity } from "./types";
const { NEXT_PUBLIC_BASE_URL } = process.env;

export async function fetchActivities(): Promise<Activity[] | undefined> {
  try {
    const res = await fetch(`${NEXT_PUBLIC_BASE_URL}/time-tracking`, {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        Accept: "application/json",
      },

      next: { revalidate: 60 },
    });

    if (!res.ok) {
      throw new Error("Something went wrong...");
    }

    return await res.json();
  } catch (error) {
    console.log(error);
  }
}
