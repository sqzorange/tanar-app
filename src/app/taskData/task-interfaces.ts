// task-interfaces.ts

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
