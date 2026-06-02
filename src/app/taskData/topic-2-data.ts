// topic-2-data.ts
import {
  DragDropTask,
  InlineChoiceTask,
  ListeningTask,
  AiFillInTask,
  PhraseSelectionTask,
} from './task-interfaces';

export const topic2DragDrop: { [key: string]: DragDropTask } = {
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
      { label: 'Ill (Sick)', correctAnswer: 'unwell,sick,in poor health,nauseous' },
      { label: 'Not ill (Healthy)', correctAnswer: 'healthy,fit,well,in good health' },
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
      {
        label: 'no_gap_1',
        correctAnswer: '',
        textWithGap: '<strong>Doctor:</strong> How are you feeling today?',
      },
      {
        label: 'gap_1',
        correctAnswer: 'unwell',
        textWithGap: '<br><br><strong>Patient:</strong> Not very {gap}.',
      },
      {
        label: 'gap_2',
        correctAnswer: 'ill',
        textWithGap: '<br><br><strong>Doctor:</strong> How long have you been feeling {gap}?',
      },
      {
        label: 'no_gap_2',
        correctAnswer: '',
        textWithGap: '<br><br><strong>Patient:</strong> About a week.',
      },
      {
        label: 'gap_3',
        correctAnswer: 'health',
        textWithGap: '<br><br><strong>Doctor:</strong> What is your {gap} like normally?',
      },
      {
        label: 'gap_4',
        correctAnswer: 'fit',
        textWithGap: "<br><br><strong>Patient:</strong> Very good. I'm usually quite {gap}",
      },
      { label: 'gap_5', correctAnswer: 'well', textWithGap: ' and {gap}.' },
      {
        label: 'no_gap_3',
        correctAnswer: '',
        textWithGap: '<br><br><strong>Doctor:</strong> What is the problem now?',
      },
      {
        label: 'gap_6',
        correctAnswer: 'sick',
        textWithGap:
          "<br><br><strong>Patient:</strong> It's my stomach. <strong>Doctor:</strong> Do you feel {gap}?",
      },
      {
        label: 'no_gap_yes',
        correctAnswer: '',
        textWithGap: '<br><br><strong>Patient:</strong> Yes.',
      },
      {
        label: 'gap_7',
        correctAnswer: 'vomiting',
        textWithGap: '<br><br><strong>Doctor:</strong> Have you actually been {gap}?',
      },
      {
        label: 'no_gap_no',
        correctAnswer: '',
        textWithGap: '<br><br><strong>Patient:</strong> No.',
      },
      {
        label: 'gap_8',
        correctAnswer: 'illnesses',
        textWithGap: '<br><br><strong>Doctor:</strong> Have you had any serious {gap} in the past?',
      },
      {
        label: 'no_gap_end',
        correctAnswer: '',
        textWithGap: '<br><br><strong>Patient:</strong> No, none at all.',
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
    dropZones: [
      { label: 'gap_1_walk', correctAnswer: 'walk' },
      { label: 'gap_2_take', correctAnswer: 'take' },
      { label: 'gap_3_exhale', correctAnswer: 'exhale' },
      { label: 'gap_4_micturate', correctAnswer: 'micturate' },
      { label: 'gap_5_water', correctAnswer: 'water' },
      { label: 'gap_6_faeces', correctAnswer: 'faeces' },
      { label: 'gap_7_period', correctAnswer: 'period' },
    ],
  },
  '2_7': {
    id: '2_7',
    title: 'Task 7 - Symptoms and Questions',
    instruction: 'Match the medical symptoms to the questions a doctor would ask.',
    type: 'list-to-table',
    availableOptions: ['dysuria', 'dysphagia', 'diplopia', 'dysphasia', 'dyspnoea'],
    requiredCount: 5,
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
    dropZones: [
      { label: 'gap_a_breathing', correctAnswer: 'dyspnoea' },
      { label: 'gap_b_water', correctAnswer: 'dysuria' },
      { label: 'gap_c_speech', correctAnswer: 'dysphasia' },
      { label: 'gap_d_swallowing', correctAnswer: 'dysphagia' },
      { label: 'gap_e_vision', correctAnswer: 'diplopia' },
    ],
  },
  '2_12_part2_match': {
    id: '2_12_part2_match',
    title: 'SYNONYM MATCH',
    instruction: 'Match the following synonyms by dragging the correct words to the table cells.',
    type: 'list-to-table',
    availableOptions: [
      'probable',
      'just',
      'look at',
      'lethal',
      'safeguard',
      'such as',
      'giving',
      'get',
      'prevent',
      'usual',
    ],
    requiredCount: 10,
    tableHeaders: ['Word', 'Synonym'],
    tableRows: [
      [
        { type: 'static', value: '1. like' },
        { type: 'drop', value: 'gap_1_like' },
      ],
      [
        { type: 'static', value: '2. deadly' },
        { type: 'drop', value: 'gap_2_deadly' },
      ],
      [
        { type: 'static', value: '3. stop' },
        { type: 'drop', value: 'gap_3_stop' },
      ],
      [
        { type: 'static', value: '4. likely' },
        { type: 'drop', value: 'gap_4_likely' },
      ],
      [
        { type: 'static', value: '5. develop' },
        { type: 'drop', value: 'gap_5_develop' },
      ],
      [
        { type: 'static', value: '6. common' },
        { type: 'drop', value: 'gap_6_common' },
      ],
      [
        { type: 'static', value: '7. only' },
        { type: 'drop', value: 'gap_7_only' },
      ],
      [
        { type: 'static', value: '8. protect' },
        { type: 'drop', value: 'gap_8_protect' },
      ],
      [
        { type: 'static', value: '9. check' },
        { type: 'drop', value: 'gap_9_check' },
      ],
      [
        { type: 'static', value: '10. feeding' },
        { type: 'drop', value: 'gap_10_feeding' },
      ],
    ],
    dropZones: [
      { label: 'gap_1_like', correctAnswer: 'such as' },
      { label: 'gap_2_deadly', correctAnswer: 'lethal' },
      { label: 'gap_3_stop', correctAnswer: 'prevent' },
      { label: 'gap_4_likely', correctAnswer: 'probable' },
      { label: 'gap_5_develop', correctAnswer: 'get' },
      { label: 'gap_6_common', correctAnswer: 'usual' },
      { label: 'gap_7_only', correctAnswer: 'just' },
      { label: 'gap_8_protect', correctAnswer: 'safeguard' },
      { label: 'gap_9_check', correctAnswer: 'look at' },
      { label: 'gap_10_feeding', correctAnswer: 'giving' },
    ],
  },
};

export const topic2InlineChoice: { [key: string]: InlineChoiceTask } = {
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
  '2_12_tf': {
    id: '2_12_tf',
    title: 'Task 12 - Before Listening (True / False)',
    instruction: 'Read the headline. Guess if a–h below are true (True) or false (False).',
    sentences: [
      {
        before: 'a) The article says most people are allergic to eggs or peanuts.',
        options: ['True', 'False'],
        after: '',
        correctAnswer: 'False',
      },
      {
        before: 'b) Researchers looked at 146 different studies.',
        options: ['True', 'False'],
        after: '',
        correctAnswer: 'True',
      },
      {
        before: 'c) Researchers looked at data on just fewer than 200,000 children.',
        options: ['True', 'False'],
        after: '',
        correctAnswer: 'False',
      },
      {
        before: 'd) Babies who ate eggs were 70% less likely to get an egg allergy.',
        options: ['True', 'False'],
        after: '',
        correctAnswer: 'False',
      },
      {
        before: 'e) Egg allergies are one of the most common food allergies for children.',
        options: ['True', 'False'],
        after: '',
        correctAnswer: 'True',
      },
      {
        before: 'f) A doctor said it was OK for babies to eat crunchy peanut butter.',
        options: ['True', 'False'],
        after: '',
        correctAnswer: 'False',
      },
      {
        before: 'g) Being allergic to soy is quite common.',
        options: ['True', 'False'],
        after: '',
        correctAnswer: 'False',
      },
      {
        before: 'h) Researchers want to find out the best age to give eggs to babies.',
        options: ['True', 'False'],
        after: '',
        correctAnswer: 'True',
      },
    ],
  },
};

export const topic2AiFillIn: { [key: string]: AiFillInTask } = {
  '2_8_ai_fill': {
    id: '2_8_ai_fill',
    title: 'Task 8 - Describing Symptoms',
    instruction:
      'Patients are describing symptoms of the conditions shown in brackets. Type the missing word or phrase.',
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

export const topic2Listening: { [key: string]: ListeningTask } = {
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
export const topic2PhraseSelection: { [key: string]: PhraseSelectionTask } = {
  '2_15_phrases': {
    id: '2_15_phrases',
    title: 'Task 15 - Agreeing and Disagreeing, Asking for Opinion and Giving Opinion',
    instruction:
      'Expressions to use in speaking and writing. We often give our opinions to friends and colleagues. <strong>Select your favorite phrases from each category!</strong>',
    categories: [
      {
        title: 'Giving your opinion',
        requiredCount: 3,
        phrases: [
          'In my opinion, this one would be better.',
          "To my mind this one's better.",
          "If you ask me, this one's better.",
          "To my way of thinking, this one's fine.",
          'In my view, this one is best.',
          "Know what I think? That one's best.",
          "I'd say tomorrow that one's better.",
          "What I think is that one's better.",
          "For me, that one's better.",
          "I tell you what I think, that one's best.",
        ],
      },
      {
        title: 'Asking for approval',
        description:
          "Sometimes we are not sure if it's a good idea to do something. So we need useful expressions for asking if other people agree with an idea or intended action.",
        requiredCount: 3,
        phrases: [
          "Do you think it's all right to do it?",
          'What do you think about (me doing that)?',
          'Do you think / reckon I ought to (do it)?',
          'What would you say if I (did it)?',
          'Would you approve of (doing something)?',
          'What is your attitude to the idea of...',
          'Are you in favour of (me doing something)?',
          "You are in favour of ... aren't you?",
          'Do you think anyone would mind if I...',
          'Do you think it would be really awful if I...',
        ],
      },
      {
        title: 'Disagreeing with people',
        description:
          "Sometimes people give an opinion and you don't agree with it. We have many ways to show disagreement in English. Here are ten of them.",
        requiredCount: 3,
        phrases: [
          "I'm not sure about that!",
          'You could be right, but...',
          "(I'm afraid) I don't agree.",
          'I agree up to a point, but..',
          "That's an interesting idea, but..",
          'Do you really think...?',
          'Rubbish! / Nonsense!',
          "You can't be serious!",
          'Actually, as a matter of fact. I think..',
          "That's not how I see it.",
        ],
      },
    ],
  },
};
