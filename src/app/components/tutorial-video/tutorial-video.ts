import { Component, signal, computed } from '@angular/core'; // computed যোগ করা হয়েছে
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-tutorial-video',
  standalone: true, // যদি standalone হয়
  imports: [],
  templateUrl: './tutorial-video.html',
  styleUrl: './tutorial-video.css',
})
export class TutorialVideo {
  videos = signal([
    {
      title: 'Eduman- Teacher Information',
      thumbnail: 'thumbnail.jpg.jpeg',
      videoUrl: 'https://youtu.be/rCCVGi_h3nA'
    },
    {
      title: 'Eduman- Teacher Information',
      thumbnail: 'thumbnail.jpg.jpeg',
      videoUrl: 'https://youtu.be/rCCVGi_h3nA'
    },
    
    {
      title: 'Eduman- Teacher Information',
      thumbnail: 'thumbnail.jpg.jpeg',
      videoUrl: 'https://youtu.be/rCCVGi_h3nA'
    },
    
    {
      title: 'Eduman- Teacher Information',
      thumbnail: 'thumbnail.jpg.jpeg',
      videoUrl: 'https://youtu.be/rCCVGi_h3nA'
    },
    
    {
      title: 'Eduman- Teacher Information',
      thumbnail: 'thumbnail.jpg.jpeg',
      videoUrl: 'https://youtu.be/rCCVGi_h3nA'
    },
    
    {
      title: 'Eduman- Teacher Information',
      thumbnail: 'thumbnail.jpg.jpeg',
      videoUrl: 'https://youtu.be/rCCVGi_h3nA'
    },
    
    {
      title: 'Eduman- Teacher Information',
      thumbnail: 'thumbnail.jpg.jpeg',
      videoUrl: 'https://youtu.be/rCCVGi_h3nA'
    },
    
    {
      title: 'Eduman- Teacher Information',
      thumbnail: 'thumbnail.jpg.jpeg',
      videoUrl: 'https://youtu.be/rCCVGi_h3nA'
    },
    
    {
      title: 'Eduman- Teacher Information',
      thumbnail: 'thumbnail.jpg.jpeg',
      videoUrl: 'https://youtu.be/rCCVGi_h3nA'
    },
    
  ]);

  selectedVideo = signal<string | null>(null);

  constructor(private sanitizer: DomSanitizer) {}

  get safeVideoUrl(): SafeResourceUrl | null {
    const rawUrl = this.selectedVideo();
    if (!rawUrl) return null;
    let videoId = '';
    if (rawUrl.includes('youtu.be/')) {
      videoId = rawUrl.split('youtu.be/')[1].split('?')[0];
    } else if (rawUrl.includes('watch?v=')) {
      videoId = rawUrl.split('v=')[1].split('&')[0];
    }

    const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
    return this.sanitizer.bypassSecurityTrustResourceUrl(embedUrl);
  }

  openVideo(url: string) {
    this.selectedVideo.set(url);
  }

  closeVideo() {
    this.selectedVideo.set(null);
  }
}