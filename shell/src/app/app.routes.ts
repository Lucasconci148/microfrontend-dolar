import { loadRemoteModule } from '@angular-architects/native-federation';
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      loadRemoteModule('mfeDollar', './Component').then((m) => m.AppComponent),
  },
];
