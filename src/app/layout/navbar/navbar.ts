import { Component, signal, HostListener, ElementRef } from '@angular/core';
import { RouterModule, Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  isDemoOpen = signal(false);
  isMobileMenuOpen = signal(false);

  // ডাটা স্ট্রাকচার: children থাকলে সেটি ড্রপডাউন মেনু 
  navItems = signal([
    { label: 'হোম', link: '', active: true },
    { label: 'ফিচারস', link: '/future', active: false },
    { label: 'কেন মেন্টরইআরপি', link: '/why-eduman', active: false },
    {
      label: 'ডেমো',
      active: false,
      children: [
        { label: 'ভিডিও ডেমো', link: '/demo/video' },
        { label: 'গ্রাফিক্যাল ভিউ', link: '/graphical/view' },
        { label: 'লাইভ সফটওয়্যার', link: '/live-software' }
      ]
    },
    { label: 'টিউটোরিয়াল', link: '/tutorial', active: false },
    { label: 'মূল্য তালিকা', link: '/pricing', active: false },
    { label: 'ব্লগ', link: '/blog', active: false },
    { label: 'সাপোর্ট', link: '/support', active: false },
    { label: 'FAQ', link: '/faq', active: false }
  ]);

  constructor(private el: ElementRef, public router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.updateActiveState();
      }
    });

    setTimeout(() => this.updateActiveState(), 0);
  }

  updateActiveState() {
    const currentUrl = this.router.url;
    this.navItems.update(items =>
      items.map(item => {
        let isActive = false;
        if (item.link === '' && currentUrl === '/') {
          isActive = true;
        } else if (item.link && item.link !== '' && currentUrl.startsWith(item.link)) {
          isActive = currentUrl === item.link;
        }

        if (item.children) {
          isActive = item.children.some(child => child.link === currentUrl);
        }

        return { ...item, active: isActive };
      })
    );
  }

  setActive(clickedItem: any) {
    this.isMobileMenuOpen.set(false);
    this.isDemoOpen.set(false);
  }


  toggleDemo(event: Event) {
    event.stopPropagation();
    this.isDemoOpen.update(v => !v);
  }

  onChildClick(parentLabel: string) {
    this.isDemoOpen.set(false);
    this.isMobileMenuOpen.set(false);
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen.update(v => !v);
  }


  @HostListener('document:click', ['$event'])
  onClick(event: Event) {
    if (!this.el.nativeElement.contains(event.target)) {
      this.isDemoOpen.set(false);
      this.isMobileMenuOpen.set(false);
    }
  }
}

