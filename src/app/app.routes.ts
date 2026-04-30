import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login';
import { HomeComponent } from './pages/home/home';
import { TaskDragDropComponent } from './pages/task-drag-drop/task-drag-drop';
import { TaskQuizComponent } from './pages/task-quiz/task-quiz';
import { TaskComingSoonComponent } from './pages/task-coming-soon/task-coming-soon';
import { TopicOneComponent } from './pages/topic-one/topic-one';
import { TopicTwoComponent } from './pages/topic-two/topic-two';
import { TopicThreeComponent } from './pages/topic-three/topic-three';
import { TopicFourComponent } from './pages/topic-four/topic-four';
import { authGuard } from './services/guard';
import { RegisterComponent } from './pages/register/register';
import { TaskInlineChoiceComponent } from './pages/task-inline-choice/task-inline-choice';
import { TaskListeningComponent } from './pages/task-listening/task-listening';
import { TaskAiFillInComponent } from './pages/task-ai-fill-in/task-ai-fill-in';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'home', component: HomeComponent, canActivate: [authGuard] },
  { path: 'topic/1', component: TopicOneComponent, canActivate: [authGuard] },
  { path: 'topic/2', component: TopicTwoComponent, canActivate: [authGuard] },
  { path: 'topic/3', component: TopicThreeComponent, canActivate: [authGuard] },
  { path: 'topic/4', component: TopicFourComponent, canActivate: [authGuard] },

  // FELADATOK ÚTVONALAI
  {
    path: 'task/inline-choice/:id',
    component: TaskInlineChoiceComponent,
    canActivate: [authGuard],
  },
  { path: 'task/listening/:id', component: TaskListeningComponent, canActivate: [authGuard] },
  { path: 'task/dragdrop/:id', component: TaskDragDropComponent, canActivate: [authGuard] },
  { path: 'task/quiz/:id', component: TaskQuizComponent, canActivate: [authGuard] },

  // --- ÚJ AI-FILL-IN ÚTVONAL ---
  { path: 'task/ai-fill-in/:id', component: TaskAiFillInComponent, canActivate: [authGuard] },

  // Minden más Topic a "Hamarosan érkezik" oldalra visz
  { path: 'topic/:id', component: TaskComingSoonComponent, canActivate: [authGuard] },

  // "Biztonsági háló": Ha semmi sem illeszkedik, irány a login!
  { path: '**', redirectTo: 'login' },
];
