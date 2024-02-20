import { Activity } from "./types";

export async function fetchActivities(): Promise<Activity[] | undefined> {
  try {
    const res = await fetch("https://wookie.codesubmit.io/time-tracking", {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        Accept: "application/json",
      },
    });

    if (!res.ok) {
      throw new Error("Something went wrong...");
    }

    return await res.json();
  } catch (error) {
    console.log(error);
  }
}
