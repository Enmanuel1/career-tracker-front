export type DashboardSummary = {
  totalApplications: number;
  activeApplications: number;
  interviewing: number;
  offers: number;
  rejections: number;
  remindersDue: number;
};

export type DashboardActivityType = "application" | "interview" | "resume" | "message";

export type DashboardActivityItem = {
  id: string;
  title: string;
  description: string;
  timestampLabel: string;
  type: DashboardActivityType;
};

export type DashboardReminderUrgency = "TODAY" | "IN_2_DAYS" | "THIS_WEEK";

export type DashboardReminderItem = {
  id: string;
  title: string;
  description: string;
  urgency: DashboardReminderUrgency;
};
