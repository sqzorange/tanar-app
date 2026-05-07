// src/app/config/topics-config.ts

export interface TopicMeta {
  id: number;
  title: string;
  description: string;
  icon: string;
  color: string;
  isAvailable: boolean;
}

export const ALL_TOPICS: TopicMeta[] = [
  {
    id: 1,
    title: 'Topic 1: Introduction to the Body',
    description: 'Master anatomical terms, medical collocations, and common healthcare idioms.',
    icon: '🩺',
    color: '#6366f1',
    isAvailable: true,
  },
  {
    id: 2,
    title: 'Topic 2: Health and Illness',
    description:
      'Learn how to ask about health, describe recovery, and use medical idioms correctly.',
    icon: '🤒',
    color: '#f59e0b',
    isAvailable: true,
  },
  {
    id: 3,
    title: 'Topic 3: Body Systems, Digestion & Nutrition',
    description:
      'Explore the major systems of the human body, their functions, and medical terminology.',
    icon: '🫁',
    color: '#10b981',
    isAvailable: true,
  },
  {
    id: 4,
    title: 'Topic 4: Dental Education',
    description:
      'Explore dental studies, university structure, international degrees, and academic vocabulary.',
    icon: '🦷',
    color: '#8b5cf6',
    isAvailable: true,
  },
  {
    id: 5,
    title: 'Topic 5: People in Dentistry',
    description:
      'Explore the dental team, practice types, and specializations in modern dentistry.',
    icon: '🦷',
    color: '#6137cd',
    isAvailable: true,
  },
];
