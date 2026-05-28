import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, OnDestroy, Output, ViewChild, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Book } from '../../types';
import { LucideIconComponent } from './lucide-icon.component';
import { LanguageService } from '../services/language.service';
import { getLocalizedBook } from '../../data/translations';

@Component({
  selector: 'app-home-hero',
  standalone: true,
  imports: [CommonModule, LucideIconComponent],
  template: `
    <!--
      Hero section is shifted up by -mt-20 so the video sits under the
      transparent header. Tight horizontal/top inset so the oval frame
      sits closer to the viewport edges.
    -->
    <section class="relative w-full -mt-20 mb-14 md:mb-20 px-1.5 sm:px-2 md:px-3 pt-1 md:pt-2" id="home-hero-section">
      <!-- Oval-edged video stage — no animated border, strong elevation -->
      <div class="hero-frame relative isolate overflow-hidden rounded-[2rem] sm:rounded-[2.75rem] md:rounded-[3.5rem]">

        <!-- Background Video Overlay (loops silently behind hero content) -->
        <video
          #heroVideo
          autoplay
          loop
          muted
          playsinline
          preload="auto"
          disablepictureinpicture
          disableremoteplayback
          aria-hidden="true"
          class="absolute inset-0 w-full h-full object-cover -z-30 pointer-events-none"
          src="assets/videos/hero-bg.mp4"
        ></video>
        <!-- Background Decorative Tech Grid -->
        <div class="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none -z-10 opacity-50"></div>
        <div class="absolute top-1/4 left-1/4 -translate-y-1/2 w-96 h-96 bg-neon-pink/10 rounded-full blur-[120px] pointer-events-none -z-10"></div>
        <div class="absolute bottom-1/4 right-1/4 translate-y-1/2 w-96 h-96 bg-neon-purple/10 rounded-full blur-[120px] pointer-events-none -z-10"></div>

        <!--
          pt-28/md:pt-36 reserves vertical room under the transparent
          sticky header so the headline never sits *behind* the navbar.
        -->
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 md:pt-36 pb-10 md:pb-16 relative">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start min-h-[580px]">
          
          <!-- LEFT COLUMN: Main Typography and Hero Copy -->
          <div class="slide-in-left lg:col-span-7 flex flex-col justify-center h-full pt-4 md:pt-8 text-start">
            <div class="font-display font-medium text-sm sm:text-base md:text-lg uppercase text-white" [ngClass]="{'tracking-[0.20em] sm:tracking-[0.35em]': !lang.isRtl()}">
              <!--
                Same slit-reveal motion as the bold title: the phrase is one
                text run (preserves Arabic shaping) that rises out of a glowing
                slit. Solid neon-pink, no resting glow/gradient on the text.
              -->
              <span class="hero-emerge-wrap inline-block">
                <span class="hero-slit" aria-hidden="true"></span>
                <span class="hero-emerge">{{ lang.t().heroPre }}</span>
              </span>
            </div>
            
            <h1 class="font-display font-bold text-5xl sm:text-7xl md:text-8xl tracking-[0.03em] leading-none uppercase mt-3 select-none">
              <span class="text-white inline-block">{{ lang.t().heroLightTitle }}</span>
              <!--
                heroBoldTitle ("TORS") emerges from a glowing slit: a thin
                light line splits open in the layout, then the word rises out
                of it and settles. .hero-slit is the opening; .hero-emerge is
                the clipped word that climbs out.
              -->
              <span class="hero-emerge-wrap text-neon-pink block sm:inline-block glow-text-pink">
                <span class="hero-slit" aria-hidden="true"></span>
                <span class="hero-emerge">{{ lang.t().heroBoldTitle }}</span>
              </span>
            </h1>

            <p class="mt-6 text-white text-sm sm:text-base leading-relaxed max-w-lg font-light">
              {{ lang.t().heroDesc }}
            </p>

            <!-- CTA action buttons -->
            <div class="mt-10 flex flex-wrap items-center gap-6">
              <button
                (click)="onExploreClick.emit()"
                class="px-10 py-3.5 rounded-full text-sm font-semibold tracking-wider text-white uppercase bg-transparent border-2 border-neon-pink hover:bg-neon-pink/10 transition-all duration-300 shadow-neon-pink shadow-neon-pink-hover cursor-pointer"
                id="hero-explore-btn"
              >
                {{ lang.t().heroExploreBtn }}
              </button>

              <button
                (click)="onSubmitDraftClick.emit()"
                class="flex items-center gap-2 text-white hover:text-neon-pink font-semibold text-sm transition-colors group cursor-pointer"
                id="hero-submit-draft-btn"
              >
                <span>{{ lang.t().heroWriteWithUs }}</span>
                <app-lucide-icon [name]="lang.isRtl() ? 'ArrowLeft' : 'ArrowRight'" className="transform group-hover:translate-x-1.5 transition-transform" [size]="16"></app-lucide-icon>
              </button>
            </div>

            <!-- Today's Best Seller / Highest Bid Capsule positioned at bottom left -->
            <div class="mt-16 md:mt-24 lg:mt-28" id="featured-bid-container">
              <span class="text-white text-xs font-mono uppercase tracking-[0.15em] block mb-3">{{ lang.t().heroFeaturedTag }}</span>
              
              <div 
                (click)="onBookClick.emit(featuredBook)"
                class="inline-flex items-center p-4 rounded-xl bg-[#12121a]/85 border border-white/[0.08] hover:border-neon-pink/35 transition-all cursor-pointer shadow-md group relative max-w-md w-full sm:w-auto text-start"
              >
                <!-- Book graphic simulation -->
                <div class="w-14 h-16 rounded-md bg-gradient-to-br {{ localizedFeaturedBook.coverGradient }} p-1 mr-4 rtl:mr-0 rtl:ml-4 flex items-center justify-center border border-white/10 group-hover:scale-105 transition-transform shrink-0 shadow-lg">
                  <app-lucide-icon [name]="localizedFeaturedBook.iconName" className="text-neon-pink animate-pulse" [size]="24"></app-lucide-icon>
                </div>
                
                <div class="text-left rtl:text-right">
                  <span class="text-xs font-mono text-gray-400 block tracking-tight">{{ lang.t().heroActiveBid }}</span>
                  <span class="font-display font-medium text-sm sm:text-base text-white block mt-0.5 group-hover:text-neon-pink transition-colors line-clamp-1">
                    {{ localizedFeaturedBook.title }}
                  </span>
                  <div class="flex items-center gap-2 mt-1">
                    <span class="font-mono text-xs font-medium text-neon-pink">0.02 ETH</span>
                    <span class="text-[10px] text-gray-500">=</span>
                    <span class="font-mono text-[11px] text-gray-400">\${{ localizedFeaturedBook.price }} USD</span>
                    <span class="text-[10px] bg-neon-pink/10 text-neon-pink px-1.5 py-0.2 rounded font-mono">
                      {{ localizedFeaturedBook.rating }} ★
                    </span>
                  </div>
                </div>

                <!-- Floating shine arrow -->
                <div class="ms-auto ps-4">
                  <app-lucide-icon [name]="lang.isRtl() ? 'ChevronLeft' : 'ChevronRight'" className="text-gray-500 group-hover:text-neon-pink group-hover:translate-x-1 transition-all" [size]="18"></app-lucide-icon>
                </div>
              </div>
            </div>
          </div>

          <!-- RIGHT COLUMN: Offset Floating Pills & Live Countdown Timer -->
          <div class="slide-in-right lg:col-span-5 flex flex-col justify-between h-full lg:min-h-[580px] pt-8 lg:pt-0">
            
            <!-- STAIR-OFFSET BULLETS (Capsules modeled on image) -->
            <div class="flex flex-col space-y-6 sm:space-y-8 items-end w-full lg:pe-4" id="floating-capsules">
              
              <!-- Capsule 1: 100% Authenticity -->
              <div class="p-4 sm:p-5 rounded-xl bg-[#12121a]/80 border border-white/[0.08] shadow-neon-pink/5 shadow-md max-w-xs w-full sm:w-72 transform -translate-y-2 hover:-translate-y-3 transition-transform text-start">
                <div class="flex items-center gap-3.5">
                  <div class="w-8 h-8 rounded-lg bg-neon-pink/10 flex items-center justify-center border border-neon-pink/30 shrink-0">
                    <app-lucide-icon name="CheckCircle" className="text-neon-pink" [size]="16"></app-lucide-icon>
                  </div>
                  <span class="font-display font-medium text-sm sm:text-base text-gray-100 tracking-wide">
                    {{ lang.t().capsuleAuthentic }}
                  </span>
                </div>
              </div>

              <!-- Capsule 2: 50,000+ Creators -->
              <div class="p-4 sm:p-5 rounded-xl bg-[#12121a]/80 border border-white/[0.08] shadow-neon-pink/5 shadow-md max-w-xs w-full sm:w-72 transform translate-x-0 sm:rtl:translate-x-8 sm:ltr:-translate-x-8 hover:-translate-y-1 transition-transform text-start">
                <div class="flex items-center gap-3.5">
                  <div class="w-8 h-8 rounded-lg bg-neon-purple/10 flex items-center justify-center border border-neon-purple/30 shrink-0">
                    <app-lucide-icon name="Users" className="text-neon-purple" [size]="16"></app-lucide-icon>
                  </div>
                  <span class="font-display font-medium text-sm sm:text-base text-gray-100 tracking-wide">
                    {{ lang.t().capsuleCreators }}
                  </span>
                </div>
              </div>

              <!-- Capsule 3: 5k+ Tec Titles Authored -->
              <div class="p-4 sm:p-5 rounded-xl bg-[#12121a]/80 border border-white/[0.08] shadow-neon-pink/5 shadow-md max-w-xs w-full sm:w-72 transform hover:translate-y-1 transition-transform text-start">
                <div class="flex items-center gap-3.5">
                  <div class="w-8 h-8 rounded-lg bg-neon-cyan/10 flex items-center justify-center border border-neon-cyan/30 shrink-0">
                    <app-lucide-icon name="Layers" className="text-neon-cyan" [size]="16"></app-lucide-icon>
                  </div>
                  <span class="font-display font-medium text-sm sm:text-base text-gray-100 tracking-wide">
                    {{ lang.t().capsuleStored }}
                  </span>
                </div>
              </div>
            </div>

            <!-- COUNTDOWN TIMER BOX -->
            <div class="mt-16 md:mt-24 lg:mt-auto flex flex-col items-center lg:items-end w-full" id="countdown-timer-container">
              <span class="text-white text-xs font-mono uppercase tracking-[0.15em] mb-4 block text-center lg:text-end w-full">
                {{ lang.t().heroNextDrop }}
              </span>
              
              <div class="flex items-center gap-3 sm:gap-4 select-none" style="direction: ltr;">
                
                <!-- Days card -->
                <div class="flex flex-col items-center">
                  <div class="w-14 h-16 sm:w-18 sm:h-20 rounded-xl bg-[#12121a] border border-white/[0.08] shadow-lg flex items-center justify-center">
                    <span class="font-mono text-xl sm:text-2xl font-bold text-white tracking-widest">
                      {{ formatTime(days()) }}
                    </span>
                  </div>
                  <span class="text-[10px] text-white uppercase font-semibold mt-1.5 tracking-wider">{{ lang.t().countdownDays }}</span>
                </div>

                <span class="text-gray-700 font-mono font-bold text-lg -mt-4">:</span>

                <!-- Hours card -->
                <div class="flex flex-col items-center">
                  <div class="w-14 h-16 sm:w-18 sm:h-20 rounded-xl bg-[#12121a] border border-white/[0.08] shadow-lg flex items-center justify-center">
                    <span class="font-mono text-xl sm:text-2xl font-bold text-white tracking-widest">
                      {{ formatTime(hours()) }}
                    </span>
                  </div>
                  <span class="text-[10px] text-white uppercase font-semibold mt-1.5 tracking-wider">{{ lang.t().countdownHours }}</span>
                </div>

                <span class="text-gray-700 font-mono font-bold text-lg -mt-4">:</span>

                <!-- Minutes card -->
                <div class="flex flex-col items-center">
                  <div class="w-14 h-16 sm:w-18 sm:h-20 rounded-xl bg-[#12121a] border border-white/[0.08] shadow-lg flex items-center justify-center">
                    <span class="font-mono text-xl sm:text-2xl font-bold text-white tracking-widest">
                      {{ formatTime(minutes()) }}
                    </span>
                  </div>
                  <span class="text-[10px] text-white uppercase font-semibold mt-1.5 tracking-wider">{{ lang.t().countdownMinutes }}</span>
                </div>

                <span class="text-gray-700 font-mono font-bold text-lg -mt-4">:</span>

                <!-- Seconds card -->
                <div class="flex flex-col items-center flex-shrink-0">
                  <div class="w-14 h-16 sm:w-18 sm:h-20 rounded-xl bg-gradient-to-br from-[#12121a] to-neon-pink/[0.03] border border-neon-pink/25 shadow-neon-pink/10 shadow-md flex items-center justify-center">
                    <span class="font-mono text-xl sm:text-2xl font-bold text-neon-pink tracking-widest glow-text-pink animate-pulse">
                      {{ formatTime(seconds()) }}
                    </span>
                  </div>
                  <span class="text-[10px] text-neon-pink uppercase font-semibold mt-1.5 tracking-wider">{{ lang.t().countdownSeconds }}</span>
                </div>

              </div>
            </div>

          </div>
        </div>
        </div>
      </div>
    </section>
  `
})
export class HomeHeroComponent implements OnInit, AfterViewInit, OnDestroy {
  @Input() featuredBook!: Book;
  @Output() onExploreClick = new EventEmitter<void>();
  @Output() onSubmitDraftClick = new EventEmitter<void>();
  @Output() onBookClick = new EventEmitter<Book>();

  @ViewChild('heroVideo') heroVideoRef?: ElementRef<HTMLVideoElement>;

  lang = inject(LanguageService);

  // Writable Signals for timer countdown values
  days = signal(12);
  hours = signal(3);
  minutes = signal(11);
  seconds = signal(43);

  private timerIntervalId: any;
  private resumeTimerId: any;
  private readyFallbackId: any;

  get localizedFeaturedBook() {
    return getLocalizedBook(this.featuredBook, this.lang.language());
  }

  ngOnInit() {
    this.timerIntervalId = setInterval(() => {
      const s = this.seconds();
      const m = this.minutes();
      const h = this.hours();
      const d = this.days();

      if (s > 0) {
        this.seconds.set(s - 1);
      } else if (m > 0) {
        this.minutes.set(m - 1);
        this.seconds.set(59);
      } else if (h > 0) {
        this.hours.set(h - 1);
        this.minutes.set(59);
        this.seconds.set(59);
      } else if (d > 0) {
        this.days.set(d - 1);
        this.hours.set(23);
        this.minutes.set(59);
        this.seconds.set(59);
      } else {
        // Loop back
        this.days.set(12);
        this.hours.set(3);
        this.minutes.set(11);
        this.seconds.set(43);
      }
    }, 1000);
  }

  ngAfterViewInit() {
    const v = this.heroVideoRef?.nativeElement;
    if (!v) return;

    // Hard-enforce silent playback regardless of external interference
    v.muted = true;
    v.volume = 0;
    v.defaultMuted = true;

    // If autoplay is blocked by the browser, retry on first user gesture
    const tryPlay = () => v.play().catch(() => { /* ignored, will retry */ });
    tryPlay();

    v.addEventListener('volumechange', () => {
      if (!v.muted || v.volume !== 0) {
        v.muted = true;
        v.volume = 0;
      }
    });

    // Restart automatically if the video pauses for any reason (tab focus, etc.)
    v.addEventListener('pause', () => {
      if (!v.ended) {
        clearTimeout(this.resumeTimerId);
        this.resumeTimerId = setTimeout(tryPlay, 80);
      }
    });

    document.addEventListener('visibilitychange', this.onVisibilityChange);

    // Only start the column slide-in animations once the background video
    // has actually begun rendering frames, so the elements never move
    // before the video itself is visible.
    const section = document.getElementById('home-hero-section');
    const markReady = () => section?.classList.add('hero-ready');

    if (v.readyState >= 3 && !v.paused) {
      markReady();
    } else {
      v.addEventListener('playing', markReady, { once: true });
      // Safety fallback in case the video never fires 'playing'
      // (e.g. blocked autoplay): reveal content after 1.8s anyway.
      this.readyFallbackId = setTimeout(markReady, 1800);
    }
  }

  private onVisibilityChange = () => {
    const v = this.heroVideoRef?.nativeElement;
    if (v && !document.hidden && v.paused) {
      v.play().catch(() => undefined);
    }
  };

  ngOnDestroy() {
    if (this.timerIntervalId) {
      clearInterval(this.timerIntervalId);
    }
    if (this.resumeTimerId) {
      clearTimeout(this.resumeTimerId);
    }
    if (this.readyFallbackId) {
      clearTimeout(this.readyFallbackId);
    }
    document.removeEventListener('visibilitychange', this.onVisibilityChange);
  }

  formatTime(num: number): string {
    return num < 10 ? `0${num}` : num.toString();
  }
}
