import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TawkService {
  private scriptLoaded = false;

  constructor() { }

  loadScript(): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      if (!this.scriptLoaded) {
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = 'https://embed.tawk.to/666a3de1981b6c56477c8d1a/1i07g3f4p';
        // script.src = 'https://embed.tawk.to/666a3de1981b6c56477c8d1a/1i07huvvu';
        script.onload = () => {
          this.scriptLoaded = true;
          setTimeout(() => {
            this.openChat();
          }, 300);
          resolve();
        };
        document.head.appendChild(script);
      } else {
        this.openChat();
        resolve();
      }
    });
  }

  private openChat(): void {
    if ((window as any).Tawk_API) {
      (window as any).Tawk_API.maximize();
    }
  }
}
