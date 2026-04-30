// Közös interfészek, hogy a TypeScript segítsen
export interface DropZone {
  label: string;
  top?: number;
  left?: number;
  correctAnswer: string;
  textWithGap?: string;
}

export interface TableCell {
  type: 'static' | 'drop';
  value: string;
  textBefore?: string;
  textAfter?: string;
  rowspan?: number;
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
  tableHeaders?: string[];
  tableRows?: TableCell[][];
}

export interface ListeningQuestion {
  text: string;
  correctAnswer: string;
}

export interface ListeningTask {
  id: string;
  title: string;
  instruction: string;
  audioSrc: string;
  questions: ListeningQuestion[];
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

// --- ÚJ INTERFÉSZ AZ INLINE KATTINTÓS FELADATHOZ ---
export interface InlineChoiceSentence {
  before: string;
  options: string[];
  after: string;
  correctAnswer: string;
}

export interface InlineChoiceTask {
  id: string;
  title: string;
  instruction: string;
  sentences: InlineChoiceSentence[];
}

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

export interface AiFillInSentence {
  before: string;
  after: string;
  correctAnswer: string;
}

export interface AiFillInTask {
  id: string;
  title: string;
  instruction: string;
  sentences: AiFillInSentence[];
}

export const DRAG_DROP_DATABASE: { [key: string]: DragDropTask } = {
  '9': {
    id: '9',
    title: 'Head and Neck Identification',
    instruction:
      'Drag the appropriate anatomical term from the left list to the correct part of the image!',
    type: 'list-to-image',
    imageSrc: '/assets/head_neck_anatomy.png',
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
    tableHeaders: ['Medical Term', 'Everyday Term'],
    tableRows: [
      [
        { type: 'static', value: 'axilla' },
        { type: 'drop', value: 'row1_everyday' },
      ],
      [
        { type: 'drop', value: 'row2_medical' },
        { type: 'static', value: 'collar bone, clavicle' },
      ],
      [
        { type: 'drop', value: 'row3_medical' },
        { type: 'static', value: 'breast bone' },
      ],
      [
        { type: 'static', value: 'costae' },
        { type: 'drop', value: 'row4_everyday' },
      ],
      [
        { type: 'static', value: 'abdomen' },
        { type: 'static', value: 'belly, tummy, stomach' },
      ],
      [
        { type: 'static', value: 'umbilicus' },
        { type: 'static', value: 'navel, belly button' },
      ],
      [
        { type: 'drop', value: 'row7_medical' },
        { type: 'static', value: 'chest' },
      ],
      [
        { type: 'drop', value: 'row8_medical' },
        { type: 'static', value: 'inner elbow, elbow pit' },
      ],
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
  '2_6': {
    id: '2_6',
    title: 'Task 6 - Body Functions',
    instruction: 'Drag the correct words to fill in the empty cells of the table!',
    type: 'list-to-table',
    availableOptions: ['walk', 'take', 'exhale', 'micturate', 'water', 'faeces', 'period'],
    requiredCount: 7,
    dropZones: [
      { label: 'gap_1_walk', correctAnswer: 'walk' },
      { label: 'gap_2_take', correctAnswer: 'take' },
      { label: 'gap_3_exhale', correctAnswer: 'exhale' },
      { label: 'gap_4_micturate', correctAnswer: 'micturate' },
      { label: 'gap_5_water', correctAnswer: 'water' },
      { label: 'gap_6_faeces', correctAnswer: 'faeces' },
      { label: 'gap_7_period', correctAnswer: 'period' },
    ],
    tableHeaders: ['Function', 'Verb', 'Noun'],
    tableRows: [
      [
        { type: 'static', value: 'speaking' },
        { type: 'static', value: 'speak' },
        { type: 'static', value: 'speech' },
      ],
      [
        { type: 'static', value: 'walking' },
        { type: 'drop', value: 'gap_1_walk' },
        { type: 'static', value: 'gait' },
      ],
      [
        { type: 'static', value: 'breathing\nrespiration', rowspan: 3 },
        { type: 'static', value: 'inhale / breathe in' },
        { type: 'static', value: 'breath', rowspan: 3 },
      ],
      [{ type: 'drop', value: 'gap_2_take', textAfter: 'a breath in' }],
      [{ type: 'drop', value: 'gap_3_exhale', textAfter: '/ breathe out' }],
      [
        { type: 'static', value: 'urination\nmicturition', rowspan: 3 },
        { type: 'static', value: 'urinate' },
        { type: 'static', value: 'urine', rowspan: 3 },
      ],
      [{ type: 'drop', value: 'gap_4_micturate' }],
      [{ type: 'drop', value: 'gap_5_water', textBefore: 'pass urine / pass' }],
      [
        { type: 'static', value: 'defecation', rowspan: 2 },
        { type: 'static', value: 'defecate' },
        { type: 'static', value: 'faeces' },
      ],
      [
        { type: 'drop', value: 'gap_6_faeces', textBefore: 'pass', textAfter: '/ pass stools' },
        { type: 'static', value: 'stools' },
      ],
      [
        { type: 'static', value: 'menstruation', rowspan: 2 },
        { type: 'static', value: 'menstruate' },
        { type: 'static', value: '(menstrual) period' },
      ],
      [
        { type: 'drop', value: 'gap_7_period', textBefore: 'have a' },
        { type: 'static', value: '(monthly) period' },
      ],
    ],
  },
  '2_7': {
    id: '2_7',
    title: 'Task 7 - Symptoms and Questions',
    instruction:
      'Match the medical symptoms to the questions a doctor would ask by dragging the correct symptom next to the appropriate question.',
    type: 'list-to-table',
    availableOptions: ['dysuria', 'dysphagia', 'diplopia', 'dysphasia', 'dyspnoea'],
    requiredCount: 5,
    dropZones: [
      { label: 'gap_a_breathing', correctAnswer: 'dyspnoea' },
      { label: 'gap_b_water', correctAnswer: 'dysuria' },
      { label: 'gap_c_speech', correctAnswer: 'dysphasia' },
      { label: 'gap_d_swallowing', correctAnswer: 'dysphagia' },
      { label: 'gap_e_vision', correctAnswer: 'diplopia' },
    ],
    tableHeaders: ["Doctor's Question", 'Medical Symptom'],
    tableRows: [
      [
        { type: 'static', value: 'a) What is your breathing like?' },
        { type: 'drop', value: 'gap_a_breathing' },
      ],
      [
        { type: 'static', value: 'b) Do you have any pain when you pass water?' },
        { type: 'drop', value: 'gap_b_water' },
      ],
      [
        { type: 'static', value: 'c) Do you have any difficulty with your speech?' },
        { type: 'drop', value: 'gap_c_speech' },
      ],
      [
        { type: 'static', value: 'd) Do you have any trouble swallowing?' },
        { type: 'drop', value: 'gap_d_swallowing' },
      ],
      [
        { type: 'static', value: 'e) Is your vision normal?' },
        { type: 'drop', value: 'gap_e_vision' },
      ],
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

export const INLINE_CHOICE_DATABASE: { [key: string]: InlineChoiceTask } = {
  '2_4_sentences': {
    id: '2_4_sentences',
    title: 'Task 4 - Sickness and Recovery',
    instruction: 'Choose the correct word to complete each sentence.',
    sentences: [
      {
        before: 'Her condition',
        options: ['deteriorated', 'improved'],
        after: 'and she died.',
        correctAnswer: 'deteriorated',
      },
      {
        before: 'He',
        options: ['relapsed', 'recovered'],
        after: 'and was allowed to go home from hospital.',
        correctAnswer: 'recovered',
      },
      {
        before: 'The cause of sleeping',
        options: ['illness', 'sickness'],
        after: 'was discovered in 1901.',
        correctAnswer: 'sickness',
      },
      {
        before: 'The patient made a full',
        options: ['remission', 'recovery'],
        after: '.',
        correctAnswer: 'recovery',
      },
      {
        before: 'I have been in',
        options: ['poor', 'good'],
        after: 'health for months and feel very fit.',
        correctAnswer: 'good',
      },
      {
        before: 'It was a month before I',
        options: ['got over', 'got better'],
        after: 'the illness.',
        correctAnswer: 'got over',
      },
      {
        before: 'He seems to be rather',
        options: ['unhealthy', 'unwell'],
        after: '— his diet is bad and he never exercises.',
        correctAnswer: 'unhealthy',
      },
    ],
  },
  '2_9_expressions': {
    id: '2_9_expressions',
    title: 'Task 9 - Body Functions',
    instruction: 'Choose the correct expression from the brackets to complete the sentences below.',
    sentences: [
      {
        before: '1/a. When I eat solid food, I have to',
        options: ['bite', 'chew'],
        after: 'it for a long time before I can swallow it.',
        correctAnswer: 'chew',
      },
      {
        before: '1/b. When I eat solid food, I have to chew it for a long time before I can',
        options: ['swallow', 'eat'],
        after: 'it.',
        correctAnswer: 'swallow',
      },
      {
        before: '2. Do you have any pain when you',
        options: ['pass', 'have'],
        after: 'stools?',
        correctAnswer: 'pass',
      },
      {
        before: '3. I have no',
        options: ['taste', 'appetite'],
        after: "and I've lost five kilos in the last few weeks.",
        correctAnswer: 'appetite',
      },
      {
        before: '4. When did you last',
        options: ['have', 'pass'],
        after: 'a period?',
        correctAnswer: 'have',
      },
      {
        before: '5. The garden is full of flowers, but my',
        options: ['sense', 'sensation'],
        after: "of smell has disappeared and I can't enjoy the perfume.",
        correctAnswer: 'sense',
      },
      {
        before: '6. Take a deep',
        options: ['breathe', 'breath'],
        after: 'in.',
        correctAnswer: 'breath',
      },
    ],
  },
};

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

export const LISTENING_DATABASE: { [key: string]: ListeningTask } = {
  '2_13_listening': {
    id: '2_13_listening',
    title: 'Task 13 - Listening: Comprehension',
    instruction: 'Listen to the audio and answer the questions below in your own words.',
    audioSrc: '/assets/allergies_ff_1.mp3',
    questions: [
      {
        text: 'What did the article say an allergy to peanuts can be?',
        correctAnswer: 'deadly | lethal | fatal | kill | dangerous',
      },
      {
        text: 'How many different studies did the researchers look at?',
        correctAnswer: '146 | one hundred and forty',
      },
      {
        text: "How many children's data did the researchers look at?",
        correctAnswer: '200 | 200,000 | 200000 | two hundred',
      },
      {
        text: 'How much less likely to get an egg allergy were babies who ate eggs?',
        correctAnswer: '40 | forty',
      },
      {
        text: 'How much less likely to get a peanut allergy were babies who ate peanuts?',
        correctAnswer: '70 | seventy',
      },
      {
        text: 'What are the two most common childhood food allergies?',
        correctAnswer: 'egg | eggs, peanut | peanuts',
      },
      {
        text: 'What might happen if babies eat whole nuts?',
        correctAnswer: 'choke | choking | block | breathe',
      },
      {
        text: 'What kind of peanut butter did a doctor say babies should eat?',
        correctAnswer: 'smooth | creamy',
      },
      {
        text: 'How should parents give babies food they might be allergic to?',
        correctAnswer: 'small | tiny | little | bit | gradually',
      },
      {
        text: 'What thing did the researchers say needed to be done more?',
        correctAnswer: 'research | studies | study | investigate',
      },
    ],
  },
};

export const AI_FILL_IN_DATABASE: { [key: string]: AiFillInTask } = {
  '2_8_ai_fill': {
    id: '2_8_ai_fill',
    title: 'Task 8 - Describing Symptoms',
    instruction:
      'Patients are describing symptoms of the conditions shown in brackets. Type the missing word or phrase. The AI will evaluate your answers!',
    sentences: [
      {
        before: "1. I've got pain and",
        after: 'in both feet. (peripheral neuropathy)',
        correctAnswer: 'numbness | tingling | loss of sensation | lack of feeling',
      },
      {
        before: "2. I'm having difficulty",
        after: 'solid food. (oesophageal stricture)',
        correctAnswer: 'swallowing | eating',
      },
      {
        before: '3. I have a lot of problems',
        after: '. (prostatic hypertrophy)',
        correctAnswer: 'passing urine | urinating | peeing | passing water',
      },
      {
        before: "4. I've been",
        after: "more than usual, even when it's not hot. (hyperthyroidism)",
        correctAnswer: 'sweating | perspiring',
      },
      {
        before: "5. I've noticed that my hands",
        after: "when I'm not using them. (Parkinsonism)",
        correctAnswer: 'shake | tremble | shaking | trembling',
      },
      {
        before: '6. I have trouble',
        after: 'when I climb the stairs. (left heart failure)',
        correctAnswer: 'breathing | catching my breath',
      },
    ],
  },
};
