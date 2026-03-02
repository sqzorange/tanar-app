import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login';
import { HomeComponent } from './pages/home/home';
import { TaskDragDropComponent } from './pages/task-drag-drop/task-drag-drop';
import { TaskQuizComponent } from './pages/task-quiz/task-quiz';
import { TaskComingSoonComponent } from './pages/task-coming-soon/task-coming-soon';
import { authGuard } from './services/guard';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent, canActivate: [authGuard] },

  { path: 'task/9', component: TaskDragDropComponent, canActivate: [authGuard] },
  { path: 'task/10', component: TaskQuizComponent, canActivate: [authGuard] },

  { path: 'task/:id', component: TaskComingSoonComponent, canActivate: [authGuard] },

  { path: '**', redirectTo: 'login' },
];
