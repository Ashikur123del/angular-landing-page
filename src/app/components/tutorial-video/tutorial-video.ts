import { Component, signal } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-tutorial-video',
  imports: [],
  templateUrl: './tutorial-video.html',
  styleUrl: './tutorial-video.css',
})
export class TutorialVideo {
  videos = signal([
    {
      title: 'Eduman- Teacher Information',
      thumbnail: 'https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
    },
    {
      title: 'Eduman- Student Information',
      thumbnail: 'https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
    },
    {
      title: 'Eduman- Core Settings',
      thumbnail: 'https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
    },
    {
      title: 'Eduman- Core Settings',
      thumbnail: 'https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
    },
    {
      title: 'Eduman- Core Settings',
      thumbnail: 'https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
    },
    {
      title: 'Eduman- Core Settings',
      thumbnail: 'https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
    },
    {
      title: 'Eduman- Core Settings',
      thumbnail: 'https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
    },
    {
      title: 'Eduman- Core Settings',
      thumbnail: 'https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
    },
    {
      title: 'Eduman- Core Settings',
      thumbnail: 'https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
    },
  ]);

  selectedVideo = signal<string | null>(null);

  constructor(private sanitizer: DomSanitizer) {}

  // ভিডিও ইউআরএলটি নিরাপদ করার জন্য
  get safeVideoUrl() {
    const url = this.selectedVideo();
    return url ? this.sanitizer.bypassSecurityTrustResourceUrl(url + '?autoplay=1') : null;
  }

  openVideo(url: string) {
    this.selectedVideo.set(url);
  }

  closeVideo() {
    this.selectedVideo.set(null);
  }
}
