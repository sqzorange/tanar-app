// topic-1-data.ts
import { DragDropTask, QuizTask, SelectionTask } from './task-interfaces';

export const topic1DragDrop: { [key: string]: DragDropTask } = {
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
};

export const topic1Quiz: { [key: string]: QuizTask } = {
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

export const topic1Selection: { [key: string]: SelectionTask } = {
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
