// Shared data models for the app. Screens keep their own sample data locally.

export interface Category {
  id: string;
  label: string;
  icon: string;
}

export interface WeeklyExpense {
  id: string;
  icon: string;
  title: string;
  amount: number;
  date: string;
  weekday: string;
}

export interface Appointment {
  id: string;
  name: string;
  specialty: string;
  date: string;
  time: string;
  status: 'upcoming' | 'past';
}

export interface QuickAddItem {
  id: string;
  title: string;
  description: string;
}

export interface StatPoint {
  label: string;
  value: number;
}
