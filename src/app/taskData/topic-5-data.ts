// topic-5-data.ts
import { DragDropTask, QuizTask, AiFillInTask } from './task-interfaces';

export const topic5DragDrop: { [key: string]: DragDropTask } = {
  '5_4': {
    id: '5_4',
    title: 'The Dental Team: Match Jobs with Definitions',
    instruction: 'Drag the correct job title to match each definition.',
    type: 'list-to-table',
    availableOptions: [
      'dental hygienist',
      'dental nurse/assistant',
      'marketing manager',
      'dentist',
      'laboratory technician/ dental technician',
      'sterile processing technician',
      'janitor/cleaning crew',
      'receptionist',
    ],
    requiredCount: 8,
    tableHeaders: ['Job', 'Definition'],
    tableRows: [
      [
        { type: 'drop', value: 'gap_1' },
        {
          type: 'static',
          value:
            'provides sterilization of dental instruments and trays including sorting, cleaning, and decontaminating instruments following standard procedures and techniques.',
        },
      ],
      [
        { type: 'drop', value: 'gap_2' },
        {
          type: 'static',
          value:
            'the role ranges from providing office support, to providing basic supportive dental procedures, to working chairside to assist dentists in providing advanced restorative care.',
        },
      ],
      [
        { type: 'drop', value: 'gap_3' },
        {
          type: 'static',
          value:
            'greets visitors, answers phone calls, and runs errands while maintaining professional composure throughout interactions with customers or potential clients.',
        },
      ],
      [
        { type: 'drop', value: 'gap_4' },
        {
          type: 'static',
          value:
            'rarely works directly with patients, but receives instruction from dentists for making dental prostheses, crowns, bridges, braces.',
        },
      ],
      [
        { type: 'drop', value: 'gap_5' },
        {
          type: 'static',
          value:
            'diagnoses, plans treatment and prescribes medication. Provides treatment for diseases and conditions of, and associated with, the mouth, jaws, and teeth',
        },
      ],
      [
        { type: 'drop', value: 'gap_6' },
        {
          type: 'static',
          value:
            'saves teeth by preventing and treating gum disease, helping people get rid of associated problems like bad breath',
        },
      ],
      [
        { type: 'drop', value: 'gap_7' },
        {
          type: 'static',
          value: 'gets the word out about the services and products offered by the dental surgery',
        },
      ],
      [
        { type: 'drop', value: 'gap_8' },
        {
          type: 'static',
          value:
            'keeps the premises of a building(or office) clean, tends the heating system, and makes minor repairs',
        },
      ],
    ],
    dropZones: [
      { label: 'gap_1', correctAnswer: 'sterile processing technician' },
      { label: 'gap_2', correctAnswer: 'dental nurse/assistant' },
      { label: 'gap_3', correctAnswer: 'receptionist' },
      { label: 'gap_4', correctAnswer: 'laboratory technician/ dental technician' },
      { label: 'gap_5', correctAnswer: 'dentist' },
      { label: 'gap_6', correctAnswer: 'dental hygienist' },
      { label: 'gap_7', correctAnswer: 'marketing manager' },
      { label: 'gap_8', correctAnswer: 'janitor/cleaning crew' },
    ],
  },
};

export const topic5Quiz: { [key: string]: QuizTask } = {};

export const topic5AiFillIn: { [key: string]: AiFillInTask } = {};
