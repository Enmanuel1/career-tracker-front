import type { DashboardActivityItem, DashboardReminderItem } from "@/features/dashboard/types/dashboard.types";

export const mockDashboardRecentActivity: DashboardActivityItem[] = [
  {
    id: "act-1",
    title: "Applied to Google",
    description: "Senior Frontend Engineer role submitted via careers page.",
    timestampLabel: "2h ago",
    type: "application",
  },
  {
    id: "act-2",
    title: "Interview Scheduled",
    description: "Phone screen with Stripe recruiter confirmed for Tuesday.",
    timestampLabel: "5h ago",
    type: "interview",
  },
  {
    id: "act-3",
    title: "Resume Updated",
    description: "Tailored resume for product-focused frontend roles.",
    timestampLabel: "Yesterday",
    type: "resume",
  },
  {
    id: "act-4",
    title: "Message Received",
    description: "Hiring manager follow-up received for Notion application.",
    timestampLabel: "2d ago",
    type: "message",
  },
];

export const mockDashboardUpcomingReminders: DashboardReminderItem[] = [
  {
    id: "rem-1",
    title: "Follow up with Stripe",
    description: "Send post-screen thank-you and ask for next steps.",
    urgency: "TODAY",
  },
  {
    id: "rem-2",
    title: "Prepare STAR stories",
    description: "Draft 3 leadership examples before Amazon interview.",
    urgency: "IN_2_DAYS",
  },
  {
    id: "rem-3",
    title: "Review referral status",
    description: "Check update from referral contact at Vercel.",
    urgency: "THIS_WEEK",
  },
];
