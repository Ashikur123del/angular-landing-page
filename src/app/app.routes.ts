
import { Routes } from '@angular/router';
import { Create} from './pages/create/create/create';
import { Home } from './pages/home/home';
import { Future } from './pages/future/future';
import { WhyEduman } from './pages/why-eduman/why-eduman';
import { DemoVideo } from './pages/demo-video/demo-video';
import { GraphicalView } from './pages/graphical-view/graphical-view';
import { LiveSoftware } from './pages/live-software/live-software';
import { Tutorial } from './pages/tutorial/tutorial';
import { PriceList } from './pages/price-list/price-list';
import { Blog } from './pages/blog/blog';
import { Support } from './pages/support/support';
import { FaqPage } from './pages/faq-page/faq-page';


export const routes: Routes = [
    { 
        path: '', 
        component: Home, 
        pathMatch: 'full' 
    },
    { 
        path: 'future', 
        component: Future, pathMatch: 'full'
    },
    { 
        path: 'why-eduman', 
        component: WhyEduman , pathMatch: 'full'
    },
    { 
        path: 'demo/video', 
        component: DemoVideo , pathMatch: 'full'
    },
    { 
        path: 'graphical/view', 
        component: GraphicalView , pathMatch: 'full'
    },
    { 
        path: 'live-software', 
        component: LiveSoftware , pathMatch: 'full'
    },
    { 
        path: 'tutorial', 
        component: Tutorial , pathMatch: 'full'
    },
    { 
        path: 'pricing', 
        component: PriceList , pathMatch: 'full'
    },
    { 
        path: 'blog', 
        component: Blog , pathMatch: 'full'
    },
    { 
        path: 'support', 
        component: Support , pathMatch: 'full'
    },
    { 
        path: 'faq', 
        component: FaqPage , pathMatch: 'full'
    },
   
    { 
        path: 'create', 
       component: Create, pathMatch: 'full' 
    },
    
    // ওয়াইল্ডকার্ড রাউট সবার নিচে থাকবে
    { path: '**', redirectTo: '' }
];