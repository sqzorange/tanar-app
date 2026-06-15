import {
  DragDropTask,
  QuizTask,
  AiFillInTask,
  ImageFillInTask,
  SingleImageFillInTask,
  TrueFalseImageTask,
  InlineChoiceTask,
  ListeningTask,
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
  '3_8': {
    id: '3_8',
    title: 'Task 8 - Organ Movements',
    instruction: 'Drag the correct movement into the empty cells of the table.',
    type: 'list-to-table',
    // Itt csak a hiányzó 3 elemet adjuk meg, amit be kell húzni (2x Peristalsis, 1x None)
    availableOptions: ['Peristalsis', 'Peristalsis', 'None'],
    requiredCount: 3,
    tableHeaders: ['Organ', 'What movement is involved?'],
    tableRows: [
      [
        { type: 'static', value: 'Mouth' },
        { type: 'static', value: 'Chewing' },
      ],
      [
        { type: 'static', value: 'Oesophagus' },
        { type: 'drop', value: 'gap_1_oesophagus' },
      ],
      [
        { type: 'static', value: 'Stomach' },
        {
          type: 'static',
          value:
            'Upper muscle in stomach relaxes to let food enter, and lower muscle mixes food with digestive juice',
        },
      ],
      [
        { type: 'static', value: 'Small intestine' },
        { type: 'drop', value: 'gap_2_small_intestine' },
      ],
      [
        { type: 'static', value: 'Pancreas' },
        { type: 'static', value: 'None' },
      ],
      [
        { type: 'static', value: 'Liver' },
        { type: 'drop', value: 'gap_3_liver' },
      ],
      [
        { type: 'static', value: 'Large intestine' },
        { type: 'static', value: 'Peristalsis' },
      ],
    ],
    dropZones: [
      { label: 'gap_1_oesophagus', correctAnswer: 'Peristalsis' },
      { label: 'gap_2_small_intestine', correctAnswer: 'Peristalsis' },
      { label: 'gap_3_liver', correctAnswer: 'None' },
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
  '3_12': {
    id: '3_12',
    title: 'Task 12 - Vitamins, Minerals, and Oils',
    instruction:
      'Complete the descriptions of vitamins, minerals, and oils with the words below. Drag the correct word into the gaps.',
    type: 'list-to-text',
    availableOptions: [
      'teeth',
      'organs',
      'enzymes',
      'nervous system',
      'eyes',
      'skin',
      'skin',
      'brain',
      'immune system',
      'muscles',
      'bones',
      'cardiovascular system',
      'cells',
      'blood',
    ],
    requiredCount: 14,
    dropZones: [
      {
        label: 'gap_1',
        correctAnswer: 'skin',
        textWithGap:
          '<strong>Vitamin C</strong> is needed to help the {gap} repair itself when it is cut or damaged. It is found in fruit, especially citrus fruit like oranges and grapefruit.<br><br>',
      },
      {
        label: 'gap_2',
        correctAnswer: 'nervous system',
        textWithGap:
          '<strong>The B-vitamins</strong> keep the {gap} healthy and help reduce stress. They are found in foods like wholegrain bread and cereals.<br><br>',
      },
      {
        label: 'gap_3',
        correctAnswer: 'eyes',
        textWithGap:
          '<strong>Vitamin A</strong> keeps the {gap} healthy and is important for good vision. It is found in fatty foods like butter, cheese, whole milk, and yoghurt.<br><br>',
      },
      {
        label: 'gap_4',
        correctAnswer: 'teeth',
        textWithGap:
          '<strong>Vitamin D</strong> is needed for healthy bones and {gap} because it helps the body absorb calcium. ',
      },
      {
        label: 'gap_5',
        correctAnswer: 'skin',
        textWithGap: 'Our body makes Vitamin D when our {gap} is exposed to sunlight.<br><br>',
      },
      {
        label: 'gap_6',
        correctAnswer: 'bones',
        textWithGap:
          "<strong>Calcium</strong> is needed for children's {gap} and teeth to grow. It is found in foods like milk, cheese, and yoghurt.<br><br>",
      },
      {
        label: 'gap_7',
        correctAnswer: 'blood',
        textWithGap:
          '<strong>Iron</strong> helps your {gap} carry oxygen. If you do not get enough iron, you will be pale and tired and you may get anaemia. Iron is found in red meats, especially liver.<br><br>',
      },
      {
        label: 'gap_8',
        correctAnswer: 'immune system',
        textWithGap:
          '<strong>Zinc</strong> makes your {gap} stronger so that you can fight colds and infections. It is found in shellfish, nuts, and seeds.<br><br>',
      },
      {
        label: 'gap_9',
        correctAnswer: 'brain',
        textWithGap:
          '<strong>Omega-3</strong> is an essential fatty acid which helps your {gap} function well. It is found in oily fish like mackerel, sardines, salmon, and tuna.<br><br>',
      },
      {
        label: 'gap_10',
        correctAnswer: 'muscles',
        textWithGap:
          '<strong>Protein</strong> builds up, maintains, and replaces the tissues in your body. Your {gap}, ',
      },
      {
        label: 'gap_11',
        correctAnswer: 'organs',
        textWithGap: 'your {gap}, and your immune system are made up mostly of protein.<br><br>',
      },
      {
        label: 'gap_12',
        correctAnswer: 'enzymes',
        textWithGap: '<strong>Carbohydrates</strong> are sugars which are broken down by {gap} ',
      },
      {
        label: 'gap_13',
        correctAnswer: 'cells',
        textWithGap:
          'then stored in the {gap} as a source of energy. Grain products such as rice, bread, and pasta are sources of carbohydrate.<br><br>',
      },
      {
        label: 'gap_14',
        correctAnswer: 'cardiovascular system',
        textWithGap:
          '<strong>Fats</strong> fuel the body and help absorb some vitamins. They are also the building blocks of hormones, and they insulate nervous system tissue in the body. Unsaturated fats, found in oils and nuts, for example, are believed to protect the {gap}.',
      },
    ],
  },

  '3_16': {
    id: '3_16',
    title: 'Task 16 - Vocabulary: Food',
    instruction:
      'Fill in the missing words in the text about a healthy diet. Drag the correct word into the gaps.',
    type: 'list-to-text',
    availableOptions: [
      'absorbed',
      'amino acids',
      'amounts',
      'balanced',
      'bioavailable',
      'cellulose',
      'cereals',
      'energy',
      'fish',
      'flavour',
      'haemoglobin',
      'healing',
      'insulation',
      'intake',
      'iodine',
      'lost',
      'minerals',
      'protect',
      'pulses',
      'riboflavin',
      'starches',
      'stored',
      'undernutrition',
    ],
    requiredCount: 23,
    dropZones: [
      {
        label: 'gap_1',
        correctAnswer: 'balanced',
        textWithGap:
          'A (1) {gap} diet contains all the necessary substances required by body cells. ',
      },
      {
        label: 'gap_2',
        correctAnswer: 'undernutrition',
        textWithGap: 'There can be adverse effects from overeating as well as from (2) {gap}. ',
      },
      {
        label: 'gap_3',
        correctAnswer: 'intake',
        textWithGap:
          'A varied diet is the best way to ensure an adequate (3) {gap} of all the essential nutrients. ',
      },
      {
        label: 'gap_4',
        correctAnswer: 'minerals',
        textWithGap:
          'The essential nutrients are water, carbohydrate, protein, lipid, vitamins and (4) {gap}.<br><br>',
      },
      {
        label: 'gap_5',
        correctAnswer: 'energy',
        textWithGap: '<strong>Carbohydrates</strong> are the main source of (5) {gap}. ',
      },
      {
        label: 'gap_6',
        correctAnswer: 'starches',
        textWithGap: 'They comprise sugars, (6) {gap} and complex polysaccharides.<br><br>',
      },
      {
        label: 'gap_7',
        correctAnswer: 'cellulose',
        textWithGap:
          '<strong>Fruit and vegetables</strong> provide carbohydrate but leaves and stalks can be indigestible because they contain more (7) {gap}.<br><br>',
      },
      {
        label: 'gap_8',
        correctAnswer: 'amino acids',
        textWithGap:
          'The component (8) {gap} of protein are essential for structural maintenance, physiological regulation and energy supply. ',
      },
      {
        label: 'gap_9',
        correctAnswer: 'absorbed',
        textWithGap:
          'High quality protein which is easily digested and (9) {gap} is found in meat, eggs, milk and fish and ',
      },
      {
        label: 'gap_10',
        correctAnswer: 'pulses',
        textWithGap: '(10) {gap} (beans, peas, lentils etc.).<br><br>',
      },
      {
        label: 'gap_11',
        correctAnswer: 'insulation',
        textWithGap:
          '<strong>Lipids</strong> provide concentrated energy and are used by the body to store energy. They provide (11) {gap} under the skin, ',
      },
      {
        label: 'gap_12',
        correctAnswer: 'protect',
        textWithGap:
          '(12) {gap} major organs from trauma and are required for effective neural function. ',
      },
      {
        label: 'gap_13',
        correctAnswer: 'flavour',
        textWithGap:
          'They give food aroma and (13) {gap}, increase palatability and give a feeling of satiety.<br><br>',
      },
      {
        label: 'gap_14',
        correctAnswer: 'amounts',
        textWithGap: 'Only small (14) {gap} of <strong>vitamins</strong> are required. ',
      },
      {
        label: 'gap_15',
        correctAnswer: 'fish',
        textWithGap:
          'Fat-soluble vitamins are absorbed from the small intestine and are found in (15) {gap} and plant oils. ',
      },
      {
        label: 'gap_16',
        correctAnswer: 'stored',
        textWithGap: 'They can be (16) {gap} in the liver and adipose tissue. ',
      },
      {
        label: 'gap_17',
        correctAnswer: 'lost',
        textWithGap: 'Water-soluble vitamins are easily (17) {gap} from the body. ',
      },
      {
        label: 'gap_18',
        correctAnswer: 'riboflavin',
        textWithGap: 'Vitamin B complex includes thiamine, (18) {gap} and nicotinic acid. ',
      },
      {
        label: 'gap_19',
        correctAnswer: 'cereals',
        textWithGap:
          'Foods providing these include (19) {gap} (wheat, rye) yeast, milk and eggs.<br><br>',
      },
      {
        label: 'gap_20',
        correctAnswer: 'iodine',
        textWithGap:
          'There are many <strong>minerals</strong> that are essential for health, but iron, (20) {gap} and zinc are the most significant. ',
      },
      {
        label: 'gap_21',
        correctAnswer: 'healing',
        textWithGap:
          'Zinc is involved in enzyme reactions and is important during periods of growth and wound (21) {gap}. It is found in animal products. ',
      },
      {
        label: 'gap_22',
        correctAnswer: 'haemoglobin',
        textWithGap:
          'Iron is a major component of (22) {gap} and is important in enzyme processes and in the immune response. ',
      },
      {
        label: 'gap_23',
        correctAnswer: 'bioavailable',
        textWithGap: 'Iron is found in most foods but must be in (23) {gap} form.',
      },
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
      {
        before: 'g) urea, bladder, cortex, nephron →',
        after: ' SYSTEM',
        correctAnswer: 'urinary',
      },
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
  '3_9': {
    id: '3_9',
    title: 'Terms: Doctors vs. Patients',
    instruction: 'Fill in the missing terms used by doctors or patients to describe faeces.',
    sentences: [
      {
        before: 'Doctors:',
        after: '➡️ Patients: stool, poop',
        correctAnswer: 'faeces | feces | motions',
      },
      {
        before: 'Doctors: semi-solid, formed ➡️ Patients:',
        after: '',
        correctAnswer: 'normal | regular',
      },
      {
        before: 'Doctors:',
        after: '➡️ Patients: mushy, soft',
        correctAnswer: 'loose',
      },
      {
        before: 'Doctors:',
        after: '➡️ Patients: no solid pieces',
        correctAnswer: 'liquid | watery | unformed',
      },
      {
        before: 'Doctors:',
        after: '➡️ Patients: hard',
        correctAnswer: 'hard | firm | constipated',
      },
      {
        before: 'Doctors: large ➡️ Patients:',
        after: '',
        correctAnswer: 'bulky | big',
      },
      {
        before: 'Doctors:',
        after: '➡️ Patients: smells bad, smelly, stinky',
        correctAnswer: 'foul | offensive',
      },
      {
        before:
          'Doctors: pass stools, open bowels, move bowels, have a bowel movement ➡️ Patients:',
        after: '',
        correctAnswer: 'poop | poo | go to the toilet',
      },
      {
        before: 'Doctors:',
        after: '➡️ Patients: change in the frequency, odour, colour, consistency of the stool',
        correctAnswer: 'change in bowel habit | altered bowel habit',
      },
    ],
  },
};

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
export const topic3TrueFalseImage: { [key: string]: TrueFalseImageTask } = {
  '3_15': {
    id: '3_15',
    title: 'Task 15 - Reading: Fast Food',
    instruction:
      'Read the article "Super Size Me" and decide if the sentences are True (Yes) or False (No).',
    imageSrc: 'assets/3_15_reading.png',
    questions: [
      {
        id: 1,
        text: "The two girls in the article said fast food is 'nutritious and good for you'.",
        correctAnswer: false,
      },
      { id: 2, text: 'Fast food changed Morgan Spurlock psychologically.', correctAnswer: true },
      { id: 3, text: 'The film proved that fast food is good for you.', correctAnswer: false },
      {
        id: 4,
        text: 'Morgan Spurlock was overweight when he started filming.',
        correctAnswer: false,
      },
      { id: 5, text: 'Morgan Spurlock became a fast food addict.', correctAnswer: true },
    ],
  },
};
export const topic3InlineChoice: { [key: string]: InlineChoiceTask } = {
  '3_17': {
    id: '3_17',
    title: 'Task 17 - Energy Drinks: Headlines',
    instruction:
      'Read the sentences and decide if they are True (T) or False (F) based on the article.',
    sentences: [
      {
        before: 'Energy drinks cause more damage to your teeth than sports drinks.',
        options: ['T', 'F'],
        after: '',
        correctAnswer: 'T',
      },
      {
        before: 'Acid in energy drinks harm the enamel of our teeth.',
        options: ['T', 'F'],
        after: '',
        correctAnswer: 'T',
      },
      {
        before: 'A doctor said teenagers know of the harm energy drinks do to teeth.',
        options: ['T', 'F'],
        after: '',
        correctAnswer: 'F',
      },
      {
        before: 'The article says energy drinks lead to people having more cavities.',
        options: ['T', 'F'],
        after: '',
        correctAnswer: 'T',
      },
      {
        before: 'Up to 50% of U.S. teens drink at least one sports drink a day.',
        options: ['T', 'F'],
        after: '',
        correctAnswer: 'T',
      },
      {
        before: 'A doctor advised us to brush our teeth straight after a sports drink.',
        options: ['T', 'F'],
        after: '',
        correctAnswer: 'F', // (mert a savat dörzsölnék be vele)
      },
      {
        before: 'Another doctor recommended any kind of chewing gum.',
        options: ['T', 'F'],
        after: '',
        correctAnswer: 'F', // (mert csak a cukormentes jó)
      },
      {
        before: 'Rinsing the mouth with water helps keep acidity levels down in the mouth.',
        options: ['T', 'F'],
        after: '',
        correctAnswer: 'T',
      },
    ],
  },
};
export const topic3Listening: { [key: string]: ListeningTask } = {
  '3_18': {
    id: '3_18',
    title: 'Task 18 - Listening Comprehension',
    instruction:
      'Listen to the recording about energy drinks and answer the discussion questions below. Your answers will be reviewed by the AI.',
    audioSrc: 'assets/3_18_listening.mp3',
    questions: [
      {
        text: 'What part of the recording was surprising to you?',
        correctAnswer:
          'Accept any reasonable subjective answer describing a surprising fact from the recording.',
      },
      {
        text: 'What do you and do you not agree with?',
        correctAnswer:
          'Accept any reasonable subjective answer expressing agreement or disagreement with points made in the recording.',
      },
      {
        text: 'What is different in your country?',
        correctAnswer:
          "Accept any reasonable comparative answer regarding the situation in the student's country.",
      },
      {
        text: 'What alternatives to energy drinks can you suggest?',
        correctAnswer:
          'Accept logical alternatives such as water, coffee, tea, getting enough sleep, eating a healthy meal, etc.',
      },
      {
        text: 'How good is (chewing) gum for your teeth?',
        correctAnswer:
          'The answer should mention that sugar-free gum is good because it produces saliva which washes away acid, but sugary gum is bad.',
      },
      {
        text: 'Some energy drinks are addictive, why? What could be done about this?',
        correctAnswer:
          'The answer should mention high levels of sugar and caffeine as addictive substances. Solutions could include warning labels, age restrictions, or education.',
      },
    ],
  },
};
