export type Clicks = {
  id: string;
  timestamp: Date;
  name: string;
  timeBetweenClicks: number;
};

export type ClicksInputData = {
  id?: string;
  timestamp: Date;
  name: string;
  timeBetweenClicks: number;
};
