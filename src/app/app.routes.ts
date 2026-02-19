

import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', loadComponent: () => import('./pages/home/home').then(m => m.Home), pathMatch: 'full' },
    { path: 'future', loadComponent: () => import('./pages/future/future').then(m => m.Future) },
    { path: 'why-eduman', loadComponent: () => import('./pages/why-eduman/why-eduman').then(m => m.WhyEduman) },
    { path: 'demo/video', loadComponent: () => import('./pages/demo-video/demo-video').then(m => m.DemoVideo) },
    { path: 'graphical/view', loadComponent: () => import('./pages/graphical-view/graphical-view').then(m => m.GraphicalView) },
    {path: 'live-software', loadComponent: () => import('./pages/live-software/live-software').then(m => m.LiveSoftware) },
    {path: 'tutorial', loadComponent: () => import('./pages/tutorial/tutorial').then(m => m.Tutorial) },
    {path: 'pricing', loadComponent: () => import('./pages/price-list/price-list').then(m => m.PriceList) },
    {path: 'blog', loadComponent: () => import('./pages/blog/blog').then(m => m.Blog) },
    {path: 'support', loadComponent: () => import('./pages/support/support').then(m => m.Support) },
    {path: 'faq', loadComponent: () => import('./pages/faq-page/faq-page').then(m => m.FaqPage) },
    { path: '**', redirectTo: '' }
];