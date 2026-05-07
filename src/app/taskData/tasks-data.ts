// tasks-data.ts

// 1. Re-exportáljuk az interfészeket, hogy a többi komponens importjai ne törjenek el
export * from './task-interfaces';
import {
  DragDropTask,
  QuizTask,
  InlineChoiceTask,
  SelectionTask,
  AiFillInTask,
  ListeningTask,
} from './task-interfaces';

// 2. Beimportáljuk a feldarabolt topic fájlokat
import { topic1DragDrop, topic1Quiz, topic1Selection } from './topic-1-data';
import {
  topic2DragDrop,
  topic2InlineChoice,
  topic2Listening,
  topic2AiFillIn,
} from './topic-2-data';
import { topic3DragDrop, topic3Quiz, topic3AiFillIn } from './topic-3-data';
import { topic5DragDrop, topic5Quiz, topic5AiFillIn } from './topic-5-data';

// 3. Összefűzzük az adatbázisokat az Angular komponensek számára
export const DRAG_DROP_DATABASE: { [key: string]: DragDropTask } = {
  ...topic1DragDrop,
  ...topic2DragDrop,
  ...topic3DragDrop,
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
  ...topic5AiFillIn,
};
