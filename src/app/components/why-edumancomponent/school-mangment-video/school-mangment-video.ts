import { Component, OnDestroy, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-school-mangment-video',
  imports: [],
  templateUrl: './school-mangment-video.html',
  styleUrl: './school-mangment-video.css',
})
export class SchoolMangmentVideo implements OnDestroy {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  isVideoOpen = false;
  player: any = null;
  youtubeVideoId = 'dQw4w9WgXcQ';

  async toggleVideo() {
    this.isVideoOpen = !this.isVideoOpen;

    if (this.isVideoOpen) {
      if (isPlatformBrowser(this.platformId)) {
        document.body.style.overflow = 'hidden';
      }

      setTimeout(async () => {
        if (isPlatformBrowser(this.platformId)) {
          const Plyr = (await import('plyr')).default;
          this.player = new Plyr('#player', {
            autoplay: true,
            ratio: '16:9',
            youtube: {
              noCookie: true,
              rel: 0,
              modestbranding: 1,
              iv_load_policy: 3
            }
          });
        }
      }, 100);

    } else {
      this.destroyPlayer();
    }
  }

  destroyPlayer() {
    if (this.player) {
      this.player.stop();
      this.player.destroy();
      this.player = null;
    }
    if (isPlatformBrowser(this.platformId)) {
      document.body.style.overflow = 'auto';
    }
  }

  ngOnDestroy() {
    this.destroyPlayer();
  }
}

