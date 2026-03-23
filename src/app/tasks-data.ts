// Közös interfészek, hogy a TypeScript segítsen
export interface DropZone {
  label: string;
  top?: number;
  left?: number;
  correctAnswer: string;
}

export interface DragDropTask {
  id: string; // ÚJ: Egyedi azonosító
  title: string;
  instruction: string;
  type: 'list-to-list' | 'list-to-image' | 'list-to-table';
  availableOptions: string[];
  correctAnswers?: string[];
  requiredCount: number;
  imageSrc?: string;
  dropZones?: DropZone[];
}

export interface QuizQuestion {
  text: string;
  options: string[];
  correctIndex: number;
}

export interface QuizTask {
  id: string; // ÚJ: Egyedi azonosító
  title: string;
  questions: QuizQuestion[];
}

// Az adatbázisok exportálása
export const DRAG_DROP_DATABASE: { [key: string]: DragDropTask } = {
  '9': {
    id: '9',
    title: 'Head and Neck Identification',
    instruction:
      'Drag the appropriate anatomical term from the left list to the correct part of the image!',
    type: 'list-to-image',
    imageSrc: '../../../../public/head_neck_anatomy.png',
    availableOptions: [
      'Zygoma (Cheekbone)',
      'Mandible (Lower jaw)',
      "Adam's apple",
      'Forehead',
      'Mentum (Chin)',
    ],
    requiredCount: 5,
    dropZones: [
      { label: 'A1', top: 15, left: 15, correctAnswer: 'Forehead' },
      { label: 'A2', top: 28, left: 80, correctAnswer: 'Zygoma (Cheekbone)' },
      { label: 'A3', top: 60, left: 15, correctAnswer: 'Mandible (Lower jaw)' },
      { label: 'A4', top: 80, left: 75, correctAnswer: 'Mentum (Chin)' },
      { label: 'A5', top: 80, left: 20, correctAnswer: "Adam's apple" },
    ],
  },
  '12': {
    id: '12',
    title: 'Trunk: Medical vs. Everyday Terms',
    instruction: 'Drag the missing terms into the empty cells of the table!',
    type: 'list-to-table',
    imageSrc: '../../../../public/trunk_anatomy.png',
    availableOptions: ['armpit', 'clavicula', 'sternum', 'ribs', 'chest', 'inner elbow, elbow pit'],
    requiredCount: 6,
    dropZones: [
      { label: 'row1_everyday', correctAnswer: 'armpit' },
      { label: 'row2_medical', correctAnswer: 'clavicula' },
      { label: 'row3_medical', correctAnswer: 'sternum' },
      { label: 'row4_everyday', correctAnswer: 'ribs' },
      { label: 'row7_medical', correctAnswer: 'chest' },
      { label: 'row8_medical', correctAnswer: 'inner elbow, elbow pit' },
    ],
  },
  // Ide jöhet a 15-ös task később...
};

export const QUIZ_DATABASE: { [key: string]: QuizTask } = {
  '10': {
    id: '10',
    title: 'Grammar Focus: Collocations',
    questions: [
      {
        text: 'Complete: "The ___ of the tongue"',
        options: ['Tip', 'Sole', 'Nape'],
        correctIndex: 0,
      },
      {
        text: 'Medical term for "Adam\'s apple"?',
        options: ['Zygoma', 'Mandibula', 'Laryngeal prominence'],
        correctIndex: 2,
      },
      {
        text: 'Complete: "The ___ of the foot"',
        options: ['Nape', 'Sole', 'Palm'],
        correctIndex: 1,
      },
    ],
  },
  '11': {
    id: '11',
    title: 'Body Idioms Warmup',
    questions: [
      {
        text: 'What does "cost an arm and a leg" mean?',
        options: ['Very expensive', 'To take a risk', 'To help out'],
        correctIndex: 0,
      },
      {
        text: 'To ignore someone is to give them the cold ___',
        options: ['Foot', 'Shoulder', 'Hand'],
        correctIndex: 1,
      },
    ],
  },
};
// --- ÚJ INTERFÉSZEK A SELECTION FELADATHOZ ---
export interface SelectionOption {
  id: number;
  text: string;
}

export interface SelectionTask {
  id: string;
  title: string;
  instruction: string;
  options: SelectionOption[];
  requiredCount: number;
}

export const SELECTION_DATABASE: { [key: string]: SelectionTask } = {
  '1': {
    id: '1',
    title: 'Semester Topic Priorities',
    instruction: 'Select exactly 5 topics that we must cover this semester!',
    requiredCount: 5,
    options: [
      { id: 1, text: 'Health, illness, complaints' },
      { id: 2, text: 'Body parts, organ systems' },
      { id: 3, text: 'Dental education at home and abroad' },
      { id: 4, text: 'Healthcare providers, job roles' },
      { id: 5, text: 'Specialist and further training at home and abroad' },
      { id: 6, text: 'Processing course materials, summarizing, condensing, study techniques' },
      { id: 7, text: 'Methodology of short presentations (ppt, prezi...)' },
      { id: 8, text: 'Note-taking techniques, reading comprehension' },
      { id: 9, text: 'Note-taking techniques, listening comprehension' },
    ],
  },
};
