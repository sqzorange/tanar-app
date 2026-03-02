import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login';
import { HomeComponent } from './pages/home/home';
import { TaskDragDropComponent } from './pages/task-drag-drop/task-drag-drop';
import { TaskQuizComponent } from './pages/task-quiz/task-quiz';
import { TaskComingSoonComponent } from './pages/task-coming-soon/task-coming-soon';
import { TopicOneComponent } from './pages/topic-one/topic-one';
import { authGuard } from './services/guard';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent, canActivate: [authGuard] },
  { path: 'topic/1', component: TopicOneComponent, canActivate: [authGuard] },

  // JAVÍTOTT UNIVERZÁLIS ÚTVONALAK
  { path: 'task/dragdrop/:id', component: TaskDragDropComponent, canActivate: [authGuard] },
  { path: 'task/quiz/:id', component: TaskQuizComponent, canActivate: [authGuard] },

  // Minden más Topic a "Hamarosan érkezik" oldalra visz
  { path: 'topic/:id', component: TaskComingSoonComponent, canActivate: [authGuard] },
  { path: '**', redirectTo: 'login' },
];
