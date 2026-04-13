// Közös interfészek, hogy a TypeScript segítsen
export interface DropZone {
  label: string;
  top?: number;
  left?: number;
  correctAnswer: string;
  textWithGap?: string;
}

export interface DragDropTask {
  id: string;
  title: string;
  instruction: string;
  type: 'list-to-list' | 'list-to-image' | 'list-to-table' | 'list-to-text';
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
  id: string;
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
  '15': {
    id: '15',
    title: 'Anterior vs. Posterior Classification',
    instruction: 'Place the words in the box under the correct heading.',
    type: 'list-to-list',
    availableOptions: [
      'shoulder blades',
      'sacrum',
      'chest',
      'back of head',
      'cheek bone',
      'Achilles tendon',
      'lower back',
      'jaw',
      'instep',
      'heel',
      'calf',
      'buttocks',
      'forehead',
      'spine',
      'shin',
      'chin',
      'collarbone',
      'navel',
      'knee cap',
      'nape',
    ],
    requiredCount: 20,
    dropZones: [
      {
        label: 'anterior',
        correctAnswer: 'chest,cheek bone,jaw,instep,forehead,shin,chin,collarbone,navel,knee cap',
      },
      {
        label: 'posterior',
        correctAnswer:
          'shoulder blades,sacrum,back of head,Achilles tendon,lower back,heel,calf,buttocks,spine,nape',
      },
    ],
  },
  '2_1': {
    id: '2_1',
    title: 'Synonym Collection: Health & Illness',
    instruction:
      'Sort the following expressions into the correct categories: synonyms for <strong>"Ill"</strong> and synonyms for <strong>"Not ill"</strong>.',
    type: 'list-to-list',
    availableOptions: [
      'unwell',
      'healthy',
      'sick',
      'fit',
      'in poor health',
      'well',
      'in good health',
      'nauseous',
    ],
    requiredCount: 8,
    dropZones: [
      {
        label: 'Ill (Sick)',
        correctAnswer: 'unwell,sick,in poor health,nauseous',
      },
      {
        label: 'Not ill (Healthy)',
        correctAnswer: 'healthy,fit,well,in good health',
      },
    ],
  },
  '2_2': {
    id: '2_2',
    title: 'Clinical Skills: What can the patient mean?',
    instruction:
      'Patients often use the word <strong>"sick"</strong> to mean different things (general illness or nausea/vomiting). Drag the possible clinical meanings into the correct category based on the patient\'s statement.',
    type: 'list-to-list',
    availableOptions: [
      'I vomited this morning',
      'I felt nauseous this morning',
      'I was unwell this morning',
      'I feel ill right now',
      'I am nauseous',
      'I have the urge to vomit',
      'I feel unwell',
    ],
    requiredCount: 7,
    dropZones: [
      {
        label: 'Statement: "I was sick this morning."',
        correctAnswer:
          'I vomited this morning,I felt nauseous this morning,I was unwell this morning',
      },
      {
        label: 'Statement: "I feel sick."',
        correctAnswer: 'I feel ill right now,I am nauseous,I have the urge to vomit,I feel unwell',
      },
    ],
  },
  '2_3': {
    id: '2_3',
    title: 'Clinical Conversation: Doctor & Patient',
    instruction:
      'Complete the conversation by dragging the correct medical expressions into the gaps.',
    type: 'list-to-text',
    availableOptions: ['unwell', 'ill', 'health', 'fit', 'well', 'sick', 'vomiting', 'illnesses'],
    requiredCount: 8,
    dropZones: [
      { label: 'gap_1', textWithGap: 'Patient: Not very {gap}.', correctAnswer: 'unwell' },
      {
        label: 'gap_2',
        textWithGap: 'Doctor: How long have you been feeling {gap}?',
        correctAnswer: 'ill',
      },
      {
        label: 'gap_3',
        textWithGap: 'Doctor: What is your {gap} like normally?',
        correctAnswer: 'health',
      },
      {
        label: 'gap_4',
        textWithGap: "Patient: Very good. I'm usually quite {gap}...",
        correctAnswer: 'fit',
      },
      { label: 'gap_5', textWithGap: 'Patient: ...and {gap}.', correctAnswer: 'well' },
      { label: 'gap_6', textWithGap: 'Doctor: Do you feel {gap}?', correctAnswer: 'sick' },
      {
        label: 'gap_7',
        textWithGap: 'Doctor: Have you actually been {gap}?',
        correctAnswer: 'vomiting',
      },
      {
        label: 'gap_8',
        textWithGap: 'Doctor: Have you had any serious {gap} in the past?',
        correctAnswer: 'illnesses',
      },
    ],
  },
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
