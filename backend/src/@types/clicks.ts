export type Clicks = {
  id: string;
  name: string;
  timestamp: string;
  timeBetweenClicks: number;
};

export type FetchClicks = {
  Clicks: Clicks[];
  count: number;
};
