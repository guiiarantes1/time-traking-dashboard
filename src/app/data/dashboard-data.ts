export type Dashboard = Dashboard2[]

export interface Dashboard2 {
  title: string
  timeframes: Timeframes
}

export interface Timeframes {
  daily: Daily
  weekly: Weekly
  monthly: Monthly
}

export interface Daily {
  current: number
  previous: number
}

export interface Weekly {
  current: number
  previous: number
}

export interface Monthly {
  current: number
  previous: number
}
