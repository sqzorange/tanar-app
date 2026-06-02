export * from './task-interfaces';

import {
  DragDropTask,
  QuizTask,
  InlineChoiceTask,
  SelectionTask,
  AiFillInTask,
  ListeningTask,
  PhraseSelectionTask,
  ImageFillInTask,
  SingleImageFillInTask,
} from './task-interfaces';

import { topic1DragDrop, topic1Quiz, topic1Selection } from './topic-1-data';
import {
  topic2DragDrop,
  topic2InlineChoice,
  topic2Listening,
  topic2AiFillIn,
  topic2PhraseSelection,
} from './topic-2-data';
import {
  topic3DragDrop,
  topic3Quiz,
  topic3AiFillIn,
  topic3ImageFillIn, // <-- Innen jön a 10 képes feladat
  topic3ImageTable, // <-- Innen jön a táblázatos feladat
} from './topic-3-data';
import { topic4DragDrop, topic4AiFillIn } from './topic-4-data';
import { topic5DragDrop, topic5Quiz, topic5AiFillIn } from './topic-5-data';

export const DRAG_DROP_DATABASE: { [key: string]: DragDropTask } = {
  ...topic1DragDrop,
  ...topic2DragDrop,
  ...topic3DragDrop,
  ...topic4DragDrop,
  ...topic5DragDrop,
};

export const QUIZ_DATABASE: { [key: string]: QuizTask } = {
  ...topic1Quiz,
  ...topic3Quiz,
  ...topic5Quiz,
};

export const INLINE_CHOICE_DATABASE: { [key: string]: InlineChoiceTask } = {
  ...topic2InlineChoice,
};

export const SELECTION_DATABASE: { [key: string]: SelectionTask } = {
  ...topic1Selection,
};

export const LISTENING_DATABASE: { [key: string]: ListeningTask } = {
  ...topic2Listening,
};

export const AI_FILL_IN_DATABASE: { [key: string]: AiFillInTask } = {
  ...topic2AiFillIn,
  ...topic3AiFillIn,
  ...topic4AiFillIn,
  ...topic5AiFillIn,
};

export const PHRASE_SELECTION_DATABASE: { [key: string]: PhraseSelectionTask } = {
  ...topic2PhraseSelection,
};

// --- KÉPES FELADATOK ---
export const IMAGE_FILL_IN_DATABASE: { [key: string]: ImageFillInTask } = {
  ...topic3ImageFillIn,
};

export const IMAGE_TABLE_DATABASE: { [key: string]: SingleImageFillInTask } = {
  ...topic3ImageTable,
};
