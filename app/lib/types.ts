export interface TimeframeDetail {
  current: number;
  previous: number;
}

export interface Timeframes {
  daily: TimeframeDetail;
  monthly: TimeframeDetail;
  weekly: TimeframeDetail;
}

export interface Activity {
  timeframes: Timeframes;
  title: string;
}