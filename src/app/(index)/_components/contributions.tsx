"use client";
import useSWR from "swr";

interface GithubData {
  totalContributions: number;
  maxStreak: number;
  currentStreak: number;
  recentContributions: Array<number>;
}

const fetchGithubData = async (): Promise<GithubData> => {
  const token = process.env.NEXT_PUBLIC_GITHUB_PAT;
  const toDate = new Date();
  const fromDate = new Date();
  fromDate.setFullYear(toDate.getFullYear() - 1);
  console.log("fromDate", fromDate);

  const query = `
    query ($username: String!, $from: DateTime!, $to: DateTime!) {
      user(login: $username) {
        contributionsCollection(from: $from, to: $to) {
          contributionCalendar {
            weeks {
              contributionDays {
                date
                contributionCount
              }
            }
          }
        }
      }
    }
  `;

  const variables = {
    username: "mimifuwa",
    from: fromDate.toISOString(),
    to: toDate.toISOString(),
  };

  const res = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query, variables }),
  });

  const json = await res.json();

  const weeks = json.data.user.contributionsCollection.contributionCalendar.weeks;
  const days: { date: string; count: number }[] = weeks.flatMap(
    (week: { contributionDays: { date: string; contributionCount: number }[] }) =>
      week.contributionDays.map((day) => ({
        date: day.date,
        count: day.contributionCount,
      }))
  );

  // 総コントリビューション数を計算
  const totalContributions = days.reduce((sum, day) => sum + day.count, 0);

  // Streakを計算
  const { maxStreak, currentStreak } = days.reduce(
    (streaks, day) => {
      if (day.count > 0) {
        streaks.currentStreak++;
        streaks.maxStreak = Math.max(streaks.maxStreak, streaks.currentStreak);
      } else {
        streaks.currentStreak = 0;
      }
      return streaks;
    },
    { maxStreak: 0, currentStreak: 0 }
  );

  return {
    totalContributions,
    maxStreak,
    currentStreak,
    recentContributions: days.slice(-49).map((day) => day.count),
  };
};

export function GithubContributions() {
  const { data, error } = useSWR("github", fetchGithubData, {});

  return (
    <>
      <div className="flex flex-col items-start w-full h-full">
        {error && <p>Error loading data</p>}
        {data ? (
          <div className="flex gap-6 w-full h-full items-stretch">
            <div className="grid grid-cols-7 grid-rows-7 gap-0.5 sm:gap-1 h-full min-h-24 sm:min-h-36 aspect-square">
              {data.recentContributions.map((count, index) => (
                <div
                  key={index}
                  className={`aspect-square ${
                    count === 0
                      ? "bg-slate-200"
                      : count < 5
                        ? "bg-slate-500"
                        : count < 10
                          ? "bg-slate-700"
                          : "bg-slate-900"
                  }`}
                  title={`Contributions: ${count}`}
                  style={{ gridRow: (index % 7) + 1, gridColumn: Math.floor(index / 7) + 1 }}
                ></div>
              ))}
            </div>
            <div className="flex flex-col items-center gap-2 sm:gap-4">
              <p className="text-lg sm:text-2xl">
                {new Date().getFullYear() - 1} - {new Date().getFullYear()}
              </p>
              <div className="grid grid-cols-3 gap-3 items-center w-full">
                <div className="flex flex-col items-center gap-2">
                  <span className="text-5xl font-bold font-heading">{data.totalContributions}</span>
                  <span className="text-xs sm:text-base text-center px-1">Total Contrib</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <span className="text-5xl font-bold font-heading">{data.maxStreak}</span>
                  <span className="text-xs sm:text-base text-center px-1">Max Streak</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <span className="text-5xl font-bold font-heading">{data.currentStreak}</span>
                  <span className="text-xs sm:text-base text-center px-1">Current Streak</span>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex w-full h-full min-h-24 items-center justify-center">
            <div className="flex justify-center" aria-label="読み込み中">
              <div className="animate-ping h-3 w-3 bg-slate-700"></div>
              <div className="animate-ping h-3 w-3 bg-slate-500 mx-6"></div>
              <div className="animate-ping h-3 w-3 bg-slate-300"></div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
