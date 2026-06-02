// taskData/topic-4-data.ts
import { DragDropTask, AiFillInTask } from './task-interfaces';

export const topic4DragDrop: { [key: string]: DragDropTask } = {
  '4_1': {
    id: '4_1',
    title: 'Opinion Exchange: Goals of Education',
    instruction:
      'What are the main goals of education? Drag and drop the following sentences to put them in your order of importance.',
    type: 'list-to-list',
    availableOptions: [
      'provides knowledge to and develops skills in individuals',
      'prepares you for your future job',
      'enables you to achieve greater understanding and appreciation of our world',
      'enables you to earn a lot of money',
      'opens your horizons',
      'allows clever youth to develop themselves',
      'broadens your options of seeking a career',
      'is the key to success',
      'is a powerful weapon to make a change in the world',
    ],
    requiredCount: 9,
    dropZones: [
      {
        label: '1. (Most important)',
        correctAnswer: 'provides knowledge to and develops skills in individuals',
      },
      { label: '2.', correctAnswer: 'prepares you for your future job' },
      {
        label: '3.',
        correctAnswer: 'enables you to achieve greater understanding and appreciation of our world',
      },
      { label: '4.', correctAnswer: 'enables you to earn a lot of money' },
      { label: '5.', correctAnswer: 'opens your horizons' },
      { label: '6.', correctAnswer: 'allows clever youth to develop themselves' },
      { label: '7.', correctAnswer: 'broadens your options of seeking a career' },
      { label: '8.', correctAnswer: 'is the key to success' },
      {
        label: '9. (Least important)',
        correctAnswer: 'is a powerful weapon to make a change in the world',
      },
    ],
  },
  '4_4': {
    id: '4_4',
    title: 'Specialized Dental Departments',
    instruction:
      'Fill in the missing letters mentally (or on paper), then drag the correct description numbers (1-6) to match the departments!',
    type: 'list-to-table',
    availableOptions: ['1', '2', '3', '4', '5', '6'],
    requiredCount: 6,
    tableHeaders: ['Department', 'Match Number', 'Description'],
    tableRows: [
      [
        { type: 'static', value: 'a. Department of O___________cs and Pe_______ic Dentistry' },
        { type: 'drop', value: 'gap_a' },
        {
          type: 'static',
          value:
            '1. focuses on research into, diagnosis, and management of medically related diseases, disorders, and conditions affecting the oral and maxillofacial region.',
        },
      ],
      [
        { type: 'static', value: 'b. Department of O___________ and Esthetic Dentistry' },
        { type: 'drop', value: 'gap_b' },
        {
          type: 'static',
          value:
            '2. deals with the prevention and treatment of diseases or defects of the teeth that may or may not require a restoration, providing harmonious form and function, that includes all aspects of cosmetic and digital dentistry',
        },
      ],
      [
        { type: 'static', value: 'c. Department of P___________ogy' },
        { type: 'drop', value: 'gap_c' },
        {
          type: 'static',
          value:
            '3. concerned with the replacement of natural teeth with fixed or removable appliances, including dentures, bridges, and implants.',
        },
      ],
      [
        { type: 'static', value: 'd. Department of O___________ S___________' },
        { type: 'drop', value: 'gap_d' },
        {
          type: 'static',
          value:
            '4. concerned with the diagnosis, prevention, and correction of malpositioned teeth or jaws as well as the treatment of a wide variety of conditions and diseases related to oral health in children',
        },
      ],
      [
        { type: 'static', value: 'e. Department of P___________cs' },
        { type: 'drop', value: 'gap_e' },
        {
          type: 'static',
          value:
            '5. concerned with the prevention and treatment of gums and underlying bones and tissues that support the teeth',
        },
      ],
      [
        {
          type: 'static',
          value: 'f. Department of Oral B___________ and Experimental Dental R___________',
        },
        { type: 'drop', value: 'gap_f' },
        {
          type: 'static',
          value: '6. focuses on the surgical management of the jaw and oral cavity',
        },
      ],
    ],
    dropZones: [
      { label: 'gap_a', correctAnswer: '4' },
      { label: 'gap_b', correctAnswer: '2' },
      { label: 'gap_c', correctAnswer: '5' },
      { label: 'gap_d', correctAnswer: '6' },
      { label: 'gap_e', correctAnswer: '3' },
      { label: 'gap_f', correctAnswer: '1' },
    ],
  },
};
export const topic4AiFillIn: { [key: string]: AiFillInTask } = {
  '4_3': {
    id: '4_3',
    title: 'Scan and Find Information',
    instruction:
      'Scan the text below and type the correct answers based on the Faculty of Dentistry program.',
    sentences: [
      {
        before: 'a. When did dental education in Szeged start in the form of a Faculty? →',
        after: '',
        correctAnswer: '2007',
      },
      {
        before: 'b. What is the goal of the last two years of dental studies? →',
        after: '',
        correctAnswer:
          'intensive clinical study | intensive clinical study of each of the various disciplines of dentistry | clinical study',
      },
      {
        before: 'c. Can a degree from Szeged be used in the European Community? →',
        after: '',
        correctAnswer: 'Yes | Yes, automatically | automatically',
      },
      {
        before: 'd. What title do you get when finishing? →',
        after: '',
        correctAnswer: 'Doctor Medicinae Dentaire | Doctor Medicinae Dentaire (DMD)',
      },
    ],
  },
  '4_6': {
    id: '4_6',
    title: "Teachers' Titles in English",
    instruction:
      'Look at the collections of terms from the academic and Examination Regulations of the University. Type the correct English titles to match the Hungarian ones.',
    sentences: [
      { before: 'tanársegéd →', after: '', correctAnswer: 'assistant lecturer' },
      { before: 'adjunktus →', after: '', correctAnswer: 'senior lecturer' },
      { before: 'docens →', after: '', correctAnswer: 'associate professor' },
      { before: 'egyetemi tanár →', after: '', correctAnswer: 'professor' },
      { before: 'tanszékvezető →', after: '', correctAnswer: 'head of department' },
      { before: 'dékán →', after: '', correctAnswer: 'dean' },
    ],
  },
};
