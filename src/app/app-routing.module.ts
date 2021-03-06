import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'loader',
    pathMatch: 'full'
  },
  {
    path: 'loader',
    loadChildren: () => import('./pages/loader/loader.module').then( m => m.LoaderPageModule)
  },
  {
    path: 'checklist',
    loadChildren: () => import('./pages/checklist/checklist.module').then( m => m.ChecklistPageModule)
  },
  {
    path: 'budgetmanager',
    loadChildren: () => import('./pages/budgetmanager/budgetmanager.module').then( m => m.BudgetmanagerPageModule)
  },
  {
    path: 'notes',
    loadChildren: () => import('./pages/notes/notes.module').then( m => m.NotesPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'add-new-task',
    loadChildren: () => import('./pages/add-new-item/add-new-task.module').then( m => m.AddNewTaskPageModule)
  },
  {
    path: 'update-list',
    loadChildren: () => import('./pages/update-list/update-list.module').then( m => m.UpdateListPageModule)
  },
  {
    path: 'notes/:id',
    loadChildren: () => import('./pages/notedetail/notedetail.module').then(m => m.NotedetailPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
