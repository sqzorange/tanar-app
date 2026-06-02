import {
  DragDropTask,
  QuizTask,
  AiFillInTask,
  ImageFillInTask,
  SingleImageFillInTask,
} from './task-interfaces';

export const topic3DragDrop: { [key: string]: DragDropTask } = {
  '3_5': {
    id: '3_5',
    title: 'Adjectives to Nouns',
    instruction: 'Drag the correct noun from the list to match each anatomical adjective!',
    type: 'list-to-table',
    availableOptions: [
      'lymph',
      'muscle',
      'nerve',
      'skeleton',
      'circulation',
      'respiration',
      'digestion',
      'integument',
      'urine',
      'reproduction',
    ],
    requiredCount: 10,
    tableHeaders: ['Adjective', 'Noun'],
    tableRows: [
      [
        { type: 'static', value: 'lymphatic' },
        { type: 'drop', value: 'gap_1' },
      ],
      [
        { type: 'static', value: 'muscular' },
        { type: 'drop', value: 'gap_2' },
      ],
      [
        { type: 'static', value: 'nervous' },
        { type: 'drop', value: 'gap_3' },
      ],
      [
        { type: 'static', value: 'skeletal' },
        { type: 'drop', value: 'gap_4' },
      ],
      [
        { type: 'static', value: 'circulatory' },
        { type: 'drop', value: 'gap_5' },
      ],
      [
        { type: 'static', value: 'respiratory' },
        { type: 'drop', value: 'gap_6' },
      ],
      [
        { type: 'static', value: 'digestive' },
        { type: 'drop', value: 'gap_7' },
      ],
      [
        { type: 'static', value: 'integumentary' },
        { type: 'drop', value: 'gap_8' },
      ],
      [
        { type: 'static', value: 'urinary' },
        { type: 'drop', value: 'gap_9' },
      ],
      [
        { type: 'static', value: 'reproductive' },
        { type: 'drop', value: 'gap_10' },
      ],
    ],
    dropZones: [
      { label: 'gap_1', correctAnswer: 'lymph' },
      { label: 'gap_2', correctAnswer: 'muscle' },
      { label: 'gap_3', correctAnswer: 'nerve' },
      { label: 'gap_4', correctAnswer: 'skeleton' },
      { label: 'gap_5', correctAnswer: 'circulation' },
      { label: 'gap_6', correctAnswer: 'respiration' },
      { label: 'gap_7', correctAnswer: 'digestion' },
      { label: 'gap_8', correctAnswer: 'integument' },
      { label: 'gap_9', correctAnswer: 'urine' },
      { label: 'gap_10', correctAnswer: 'reproduction' },
    ],
  },
  '3_7': {
    id: '3_7',
    title: 'General vs. Medical English',
    instruction: 'Drag the medical terms to match the general English expressions!',
    type: 'list-to-table',
    availableOptions: [
      'oesophagus',
      'duodenum, jejunum, ileum, colon, rectum',
      'buccal cavity',
      'colon',
      'saliva',
      'hard and soft palate',
      'pharynx',
      'ileum',
    ],
    requiredCount: 8,
    tableHeaders: ['General English', 'Medical English'],
    tableRows: [
      [
        { type: 'static', value: 'mouth' },
        { type: 'drop', value: 'gap_1' },
      ],
      [
        { type: 'static', value: 'roof of the mouth' },
        { type: 'drop', value: 'gap_2' },
      ],
      [
        { type: 'static', value: 'spit' },
        { type: 'drop', value: 'gap_3' },
      ],
      [
        { type: 'static', value: 'bowel' },
        { type: 'drop', value: 'gap_4' },
      ],
      [
        { type: 'static', value: 'throat' },
        { type: 'drop', value: 'gap_5' },
      ],
      [
        { type: 'static', value: 'gullet' },
        { type: 'drop', value: 'gap_6' },
      ],
      [
        { type: 'static', value: 'small intestine' },
        { type: 'drop', value: 'gap_7' },
      ],
      [
        { type: 'static', value: 'large intestine' },
        { type: 'drop', value: 'gap_8' },
      ],
    ],
    dropZones: [
      { label: 'gap_1', correctAnswer: 'buccal cavity' },
      { label: 'gap_2', correctAnswer: 'hard and soft palate' },
      { label: 'gap_3', correctAnswer: 'saliva' },
      { label: 'gap_4', correctAnswer: 'colon' },
      { label: 'gap_5', correctAnswer: 'pharynx' },
      { label: 'gap_6', correctAnswer: 'oesophagus' },
      { label: 'gap_7', correctAnswer: 'duodenum, jejunum, ileum, colon, rectum' },
      { label: 'gap_8', correctAnswer: 'ileum' },
    ],
  },
  '3_10': {
    id: '3_10',
    title: "Doctor's Questions",
    instruction: "Drag the correct feature (e.g., blood, bulk) to match the doctor's question.",
    type: 'list-to-table',
    availableOptions: [
      'blood',
      'bowel habit',
      'change in bowel habit',
      'bulk',
      'colour',
      'consistency',
    ],
    requiredCount: 6,
    tableHeaders: ['Feature', "Doctor's Question"],
    tableRows: [
      [
        { type: 'drop', value: 'gap_1' },
        { type: 'static', value: 'How often do you open your bowels?' },
      ],
      [
        { type: 'drop', value: 'gap_2' },
        { type: 'static', value: 'Are you going to the toilet more often than normal?' },
      ],
      [
        { type: 'drop', value: 'gap_3' },
        { type: 'static', value: 'Are the motions hard or loose?' },
      ],
      [
        { type: 'drop', value: 'gap_4' },
        { type: 'static', value: 'Do the motions have an unusual smell?' },
      ],
      [
        { type: 'drop', value: 'gap_5' },
        { type: 'static', value: 'What about the appearance of the stools?' },
      ],
      [
        { type: 'drop', value: 'gap_6' },
        { type: 'static', value: 'Have you passed black stools?' },
      ],
    ],
    dropZones: [
      { label: 'gap_1', correctAnswer: 'bowel habit' },
      { label: 'gap_2', correctAnswer: 'change in bowel habit' },
      { label: 'gap_3', correctAnswer: 'consistency' },
      { label: 'gap_4', correctAnswer: 'bulk' },
      { label: 'gap_5', correctAnswer: 'colour' },
      { label: 'gap_6', correctAnswer: 'blood' },
    ],
  },
};

export const topic3Quiz: { [key: string]: QuizTask } = {
  '3_2': {
    id: '3_2',
    title: 'Multiple Choice: Body Parts & Systems',
    questions: [
      {
        text: 'Which body part belongs to the Skeletal System?',
        options: ['cartilage', 'thyroid', 'aorta', 'neurone'],
        correctIndex: 0,
      },
      {
        text: 'Which term is related to the Reproductive System?',
        options: ['sweat', 'semen', 'vein', 'villi'],
        correctIndex: 1,
      },
      {
        text: 'Which body part belongs to the Integumentary System?',
        options: ['bone', 'hair', 'bladder', 'bronchus'],
        correctIndex: 1,
      },
      {
        text: 'Which term is related to the Endocrine System?',
        options: ['thyroid', 'rib', 'urea', 'mucus'],
        correctIndex: 0,
      },
      {
        text: 'Which body part belongs to the Cardiovascular System?',
        options: ['gland', 'tendon', 'aorta', 'node'],
        correctIndex: 2,
      },
      {
        text: 'Which term is related to the Digestive System?',
        options: ['marrow', 'fibrin', 'villi', 'olfactory'],
        correctIndex: 2,
      },
      {
        text: 'Which body part belongs to the Urinary System?',
        options: ['bladder', 'cartilage', 'sweat', 'valve'],
        correctIndex: 0,
      },
      {
        text: 'Which term is related to the Musculoskeletal System?',
        options: ['ova', 'tendon', 'hair', 'gland'],
        correctIndex: 1,
      },
      {
        text: 'Which body part belongs to Haematology?',
        options: ['nephron', 'leucocytes', 'bronchus', 'rib'],
        correctIndex: 1,
      },
      {
        text: 'Which term is related to the Lymphatic System?',
        options: ['nodes', 'aorta', 'villi', 'thyroid'],
        correctIndex: 0,
      },
      {
        text: 'Which body part belongs to the Nervous System?',
        options: ['cartilage', 'semen', 'sweat', 'neurones'],
        correctIndex: 3,
      },
      {
        text: 'Which term is related to the Respiratory System?',
        options: ['bladder', 'bronchus', 'tendon', 'fibrin'],
        correctIndex: 1,
      },
    ],
  },
};

export const topic3AiFillIn: { [key: string]: AiFillInTask } = {
  '3_1': {
    id: '3_1',
    title: 'Body Systems Terminology',
    instruction:
      'Type the name of the body system (without the word "system") that matches the given medical terms.',
    sentences: [
      {
        before: 'a) movement, bone, cartilage, ribs →',
        after: ' SYSTEM',
        correctAnswer: 'skeletal',
      },
      {
        before: 'b) ova, menstruation, semen, oestrogen →',
        after: ' SYSTEM',
        correctAnswer: 'reproductive',
      },
      {
        before: 'c) hair, sweat, verruca, pustules →',
        after: ' SYSTEM',
        correctAnswer: 'integumentary',
      },
      {
        before: 'd) thyroid, carriers, gland, neurosecretion →',
        after: ' SYSTEM',
        correctAnswer: 'endocrine',
      },
      {
        before: 'e) vein, valve, pressure, aorta →',
        after: ' SYSTEM',
        correctAnswer: 'cardiovascular',
      },
      {
        before: 'f) peritoneal cavity, chewing, absorption, villi →',
        after: ' SYSTEM',
        correctAnswer: 'digestive',
      },
      { before: 'g) urea, bladder, cortex, nephron →', after: ' SYSTEM', correctAnswer: 'urinary' },
      {
        before: 'h) striated, contraction, fibres, tendon →',
        after: ' SYSTEM',
        correctAnswer: 'musculoskeletal',
      },
      {
        before: 'i) leucocytes, coagulation, anaemia, fibrin →',
        after: '',
        correctAnswer: 'haematology | hematology',
      },
      {
        before: 'j) vessels, nodes, marrow, infection →',
        after: ' SYSTEM',
        correctAnswer: 'lymphatic',
      },
      {
        before: 'k) neurones, sensitivity, brain, olfactory →',
        after: ' SYSTEM',
        correctAnswer: 'nervous',
      },
      {
        before: 'l) bronchus, mucus, nose, ventilation →',
        after: ' SYSTEM',
        correctAnswer: 'respiratory',
      },
    ],
  },
  '3_3': {
    id: '3_3',
    title: 'Missing Letters',
    instruction:
      'Fill in the missing letters in the words representing parts of different body systems.',
    sentences: [
      {
        before: '1. _ _ b _ c _ _ _ s (gland) — This is a part of the integumentary system. →',
        after: '',
        correctAnswer: 'sebaceous',
      },
      {
        before: '2. _ _ r _ _ l _ _ _ — This is a part of the musculoskeletal system. →',
        after: '',
        correctAnswer: 'cartilage',
      },
      {
        before: '3. _ _ r _ _ h _ _ _ _ d — This is a part of the endocrine system. →',
        after: '',
        correctAnswer: 'parathyroid',
      },
      {
        before: '4. n _ _ _ p _ _ r _ _ _ — This is a part of the respiratory system. →',
        after: '',
        correctAnswer: 'nasopharynx',
      },
      {
        before:
          '5. g _ _ _ _ _ i _ _ _ _ t _ _ _ _ (tract) — This is a part of the digestive system. →',
        after: '',
        correctAnswer: 'gastrointestinal',
      },
    ],
  },
};

// JAVÍTVA: A 10 képes feladat a 3-as témában
export const topic3ImageFillIn: { [key: string]: ImageFillInTask } = {
  '3_vocab_3_4': {
    id: '3_vocab_3_4',
    title: 'Vocabulary 3-4) Body Systems',
    instruction: 'NAME THE BODY SYSTEMS ILLUSTRATED IN THE PICTURES BELOW.',
    images: [
      { id: 1, imageSrc: 'assets/system_1_nervous.png', correctAnswer: 'Nervous system' },
      { id: 2, imageSrc: 'assets/system_2_skeletal.png', correctAnswer: 'Skeletal system' },
      {
        id: 3,
        imageSrc: 'assets/system_3_cardiovascular.png',
        correctAnswer: 'Cardiovascular system | Circulatory system',
      },
      { id: 4, imageSrc: 'assets/system_4_respiratory.png', correctAnswer: 'Respiratory system' },
      { id: 5, imageSrc: 'assets/system_5_digestive.png', correctAnswer: 'Digestive system' },
      {
        id: 6,
        imageSrc: 'assets/system_6_integumentary.png',
        correctAnswer: 'Integumentary system | Skin',
      },
      {
        id: 7,
        imageSrc: 'assets/system_7_urinary.png',
        correctAnswer: 'Urinary system | Excretory system',
      },
      { id: 8, imageSrc: 'assets/system_8_reproductive.png', correctAnswer: 'Reproductive system' },
      {
        id: 9,
        imageSrc: 'assets/system_9_lymphatic.png',
        correctAnswer: 'Lymphatic system | Immune system',
      },
      { id: 10, imageSrc: 'assets/system_10_endocrine.png', correctAnswer: 'Endocrine system' },
    ],
  },
};

// JAVÍTVA: Az 1 képes táblázatos feladat a 3-as témában
export const topic3ImageTable: { [key: string]: SingleImageFillInTask } = {
  '3_6_digestive': {
    id: '3_6_digestive',
    title: 'Task 6 - Digestive System Terminology',
    instruction:
      'Identify the digestive system parts. Provide the English equivalents for the Hungarian and Latin terms shown in the table.',
    imageSrc: 'assets/digestive_system_main.png',
    rows: [
      { id: 1, label: 'szájüreg: cavum oris', correctAnswer: 'mouth | oral cavity' },
      { id: 2, label: 'nyelv: lingua', correctAnswer: 'tongue' },
      {
        id: 3,
        label: 'nyálmirigy: glandula salivaris',
        correctAnswer: 'salivary gland | salivary glands',
      },
      { id: 4, label: 'máj: hepar', correctAnswer: 'liver' },
      {
        id: 5,
        label: 'epehólyag: cholecysta/vesica fellea',
        correctAnswer: 'gallbladder | gall bladder',
      },
      {
        id: 6,
        label: 'vastagbél: intestinum crassum/colon',
        correctAnswer: 'large intestine | colon',
      },
      { id: 7, label: 'végbél: rectum', correctAnswer: 'rectum' },
      { id: 8, label: 'vékonybél: intestinum tenue', correctAnswer: 'small intestine' },
      { id: 9, label: 'hasnyálmirigy: pancreas', correctAnswer: 'pancreas' },
      { id: 10, label: 'gyomor: ventriculus/gaster', correctAnswer: 'stomach' },
      { id: 11, label: 'nyelőcső: oesophagus', correctAnswer: 'oesophagus | esophagus' },
      { id: 12, label: 'garat: pharynx', correctAnswer: 'pharynx | throat' },
    ],
  },
};
