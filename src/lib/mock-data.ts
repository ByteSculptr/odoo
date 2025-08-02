export type Ticket = {
  id: string;
  subject: string;
  description: string;
  category: 'General Inquiry' | 'Technical Support' | 'Billing' | 'Bug Report';
  status: 'Open' | 'In Progress' | 'Resolved' | 'Closed';
  priority: 'Low' | 'Medium' | 'High';
  createdBy: string;
  agent: string;
  createdAt: string;
  updatedAt: string;
  upvotes: number;
  downvotes: number;
  comments: Comment[];
};

export type Comment = {
  id: string;
  author: string;
  authorAvatar: string;
  content: string;
  createdAt: string;
};

export const users = {
  'user-1': { name: 'Alice Johnson', avatar: 'https://placehold.co/100x100.png' },
  'user-2': { name: 'Bob Williams', avatar: 'https://placehold.co/100x100.png' },
  'agent-1': { name: 'Charlie Brown', avatar: 'https://placehold.co/100x100.png' },
  'agent-2': { name: 'Diana Miller', avatar: 'https://placehold.co/100x100.png' },
};

export const tickets: Ticket[] = [
  {
    id: 'TKT-001',
    subject: 'Cannot reset my password',
    description: 'I am trying to reset my password through the "Forgot Password" link, but I am not receiving the email with the reset instructions. I have checked my spam folder as well. Please assist.',
    category: 'Technical Support',
    status: 'In Progress',
    priority: 'High',
    createdBy: 'Alice Johnson',
    agent: 'Charlie Brown',
    createdAt: '2024-07-28T10:00:00Z',
    updatedAt: '2024-07-28T14:30:00Z',
    upvotes: 15,
    downvotes: 1,
    comments: [
        { id: 'c1', author: 'Charlie Brown', authorAvatar: 'https://placehold.co/100x100.png', content: 'Hi Alice, I am looking into this issue for you. I will update you shortly.', createdAt: '2024-07-28T10:05:00Z' },
        { id: 'c2', author: 'Alice Johnson', authorAvatar: 'https://placehold.co/100x100.png', content: 'Thank you, Charlie!', createdAt: '2024-07-28T10:10:00Z' },
    ],
  },
  {
    id: 'TKT-002',
    subject: 'Question about billing cycle',
    description: 'Could you clarify when my next billing date is? My dashboard shows two different dates.',
    category: 'Billing',
    status: 'Open',
    priority: 'Medium',
    createdBy: 'Bob Williams',
    agent: 'Unassigned',
    createdAt: '2024-07-27T15:20:00Z',
    updatedAt: '2024-07-27T15:20:00Z',
    upvotes: 5,
    downvotes: 0,
    comments: [],
  },
  {
    id: 'TKT-003',
    subject: 'Feature Request: Dark Mode',
    description: 'I would love to see a dark mode option in the application. It would be easier on the eyes, especially at night.',
    category: 'General Inquiry',
    status: 'Resolved',
    priority: 'Low',
    createdBy: 'Alice Johnson',
    agent: 'Diana Miller',
    createdAt: '2024-07-26T09:00:00Z',
    updatedAt: '2024-07-27T11:00:00Z',
    upvotes: 42,
    downvotes: 2,
    comments: [
        { id: 'c3', author: 'Diana Miller', authorAvatar: 'https://placehold.co/100x100.png', content: 'Thanks for the suggestion! We have added it to our product roadmap. I will mark this as resolved for now.', createdAt: '2024-07-27T11:00:00Z' },
    ],
  },
    {
    id: 'TKT-004',
    subject: 'UI Glitch on Dashboard',
    description: 'The main chart on the dashboard is not rendering correctly on Firefox. It seems to be an issue with the responsive layout.',
    category: 'Bug Report',
    status: 'Closed',
    priority: 'High',
    createdBy: 'Bob Williams',
    agent: 'Charlie Brown',
    createdAt: '2024-07-25T11:30:00Z',
    updatedAt: '2024-07-26T18:00:00Z',
    upvotes: 8,
    downvotes: 0,
    comments: [],
  },
];
