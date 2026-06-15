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

export interface PhraseCategory {
  title: string;
  description?: string;
  phrases: string[];
  requiredCount: number;
}

export interface PhraseSelectionTask {
  id: string;
  title: string;
  instruction: string;
  categories: PhraseCategory[];
}

// --- TÖBB KIS KÉPES FELADAT (Ami a 2-es topicban van) ---
export interface ImageFillItem {
  id: number;
  imageSrc: string;
  correctAnswer: string;
}

export interface ImageFillInTask {
  id: string;
  title: string;
  instruction: string;
  images: ImageFillItem[];
}

// --- EGY NAGY KÉP + TÁBLÁZAT FELADAT (Ami a 3-as topicban van) ---
export interface SingleImageRow {
  id: number;
  label: string;
  correctAnswer: string;
}

export interface SingleImageFillInTask {
  id: string;
  title: string;
  instruction: string;
  imageSrc: string;
  rows: SingleImageRow[];
}

export interface TrueFalseQuestion {
  id: number;
  text: string;
  correctAnswer: boolean;
}

export interface TrueFalseImageTask {
  id: string;
  title: string;
  instruction: string;
  imageSrc: string;
  questions: TrueFalseQuestion[];
}
