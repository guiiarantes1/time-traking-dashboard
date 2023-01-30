export interface Timeframes {
  daily: {
    current: number;
    previous: number;
  };
  weekly: {
    current: number;
    previous: number;
  };
  monthly: {
    current: number;
    previous: number;
  };
}

export interface Activity {
  title: string;
  timeframes: Timeframes;
}

export async function consumeData(): Promise<Activity[]> {
  const data = await fetch('data.json');
  const jsonData = await data.json();
  return jsonData;
}
