import { Routes } from '@angular/router';

export const routes: Routes = [{

  path: '',
  loadComponent: () =>
    import('./components/social-links/social-links.component').then((m) => m.SocialLinksComponent),
},

];
