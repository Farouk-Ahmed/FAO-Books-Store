import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lucide-icon',
  standalone: true,
  imports: [CommonModule],
  template: `
    <svg 
      [attr.class]="className"
      [attr.width]="size"
      [attr.height]="size"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round">
      <ng-container [ngSwitch]="name">
        <svg:path *ngSwitchCase="'Network'" d="M16 16h6v6h-6v-6zM2 16h6v6H2v-6zM9 2h6v6H9V2zM12 8v8M12 11H5v5M12 11h7v5" />
        <svg:g *ngSwitchCase="'Cpu'">
          <svg:rect width="16" height="16" x="4" y="4" rx="2" />
          <svg:rect width="6" height="6" x="9" y="9" rx="1" />
          <svg:path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 15h3M1 9h3M1 15h3" />
        </svg:g>
        <svg:path *ngSwitchCase="'Code2'" d="m18 16 4-4-4-4M6 8l-4 4 4 4M14.5 4l-5 16" />
        <svg:g *ngSwitchCase="'BrainCircuit'">
          <svg:path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z" />
          <svg:path d="M9 13a3 3 0 0 1 3-3h1M12 15a3 3 0 0 0 3-3v-1" />
          <svg:path d="M12 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
          <svg:path d="M14 12a2 2 0 1 0 4 0 2 2 0 0 0-4 0Z" />
          <svg:path d="M12 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
        </svg:g>
        <svg:g *ngSwitchCase="'Terminal'">
          <svg:polyline points="4 17 10 11 4 5" />
          <svg:line x1="12" y1="19" x2="20" y2="19" />
        </svg:g>
        <svg:g *ngSwitchCase="'Layers'">
          <svg:path d="m12 3-10 5 10 5 10-5-10-5Z" />
          <svg:path d="m2 17 10 5 10-5" />
          <svg:path d="m2 12 10 5 10-5" />
        </svg:g>
        <svg:polygon *ngSwitchCase="'Play'" points="6 3 20 12 6 21 6 3" />
        <svg:g *ngSwitchCase="'Download'">
          <svg:path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
          <svg:polyline points="7 10 12 15 17 10" />
          <svg:line x1="12" y1="15" x2="12" y2="3" />
        </svg:g>
        <svg:g *ngSwitchCase="'Users'">
          <svg:path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <svg:circle cx="9" cy="7" r="4" />
          <svg:path d="M22 21v-2a4 4 0 0 0-3-3.87" />
          <svg:path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg:g>
        <svg:g *ngSwitchCase="'Building'">
          <svg:rect width="16" height="20" x="4" y="2" rx="2" />
          <svg:path d="M9 22v-4h6v4" />
          <svg:path d="M8 6h.01M16 6h.01M8 10h.01M16 10h.01M8 14h.01M16 14h.01" />
        </svg:g>
        <svg:path *ngSwitchCase="'MessageSquare'" d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        <svg:g *ngSwitchCase="'Truck'">
          <svg:rect width="7" height="9" x="14" y="5" rx="1" />
          <svg:rect width="10" height="12" x="2" y="9" rx="2" />
          <svg:circle cx="5.5" cy="18.5" r="2.5" />
          <svg:circle cx="18.5" cy="18.5" r="2.5" />
        </svg:g>
        <svg:g *ngSwitchCase="'Search'">
          <svg:circle cx="11" cy="11" r="8" />
          <svg:path d="m21 21-4.3-4.3" />
        </svg:g>
        <svg:g *ngSwitchCase="'ShoppingBag'">
          <svg:path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
          <svg:path d="M3 6h18" />
          <svg:path d="M16 10a4 4 0 0 1-8 0" />
        </svg:g>
        <svg:polygon *ngSwitchCase="'Star'" points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        <svg:g *ngSwitchCase="'Home'">
          <svg:path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <svg:polyline points="9 22 9 12 15 12 15 22" />
        </svg:g>
        <svg:g *ngSwitchCase="'Briefcase'">
          <svg:path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
          <svg:rect width="20" height="14" x="2" y="6" rx="2" />
        </svg:g>
        <svg:g *ngSwitchCase="'Mail'">
          <svg:rect width="20" height="16" x="2" y="4" rx="2" />
          <svg:path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg:g>
        <svg:path *ngSwitchCase="'ArrowRight'" d="M5 12h14M12 5l7 7-7 7" />
        <svg:path *ngSwitchCase="'ChevronRight'" d="m9 18 6-6-6-6" />
        <svg:path *ngSwitchCase="'X'" d="M18 6 6 18M6 6l12 12" />
        <svg:path *ngSwitchCase="'Plus'" d="M5 12h14M12 5v14" />
        <svg:path *ngSwitchCase="'Minus'" d="M5 12h14" />
        <svg:g *ngSwitchCase="'Info'">
          <svg:circle cx="12" cy="12" r="10" />
          <svg:path d="M12 16v-4M12 8h.01" />
        </svg:g>
        <svg:path *ngSwitchCase="'Sparkles'" d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
        <svg:g *ngSwitchCase="'CheckCircle'">
          <svg:circle cx="12" cy="12" r="10" />
          <svg:path d="m9 12 2 2 4-4" />
        </svg:g>
        <svg:g *ngSwitchCase="'Wallet'">
          <svg:path d="M21 12V7H5a2 2 0 0 1 0-4h14v4" />
          <svg:path d="M3 5v14a2 2 0 0 0 2 2h16v-5" />
          <svg:path d="M16 12H21v4H16z" />
        </svg:g>
        <svg:g *ngSwitchCase="'DollarSign'">
          <svg:line x1="12" y1="1" x2="12" y2="23" />
          <svg:path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
        </svg:g>
        <svg:g *ngSwitchCase="'Menu'">
          <svg:line x1="4" y1="12" x2="20" y2="12" />
          <svg:line x1="4" y1="6" x2="20" y2="6" />
          <svg:line x1="4" y1="18" x2="20" y2="18" />
        </svg:g>
        <svg:g *ngSwitchCase="'BookMarked'">
          <svg:path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z" />
          <svg:path d="M6 6h10M6 10h10" />
        </svg:g>
        <svg:g *ngSwitchCase="'ShoppingCart'">
          <svg:circle cx="8" cy="21" r="1" />
          <svg:circle cx="19" cy="21" r="1" />
          <svg:path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
        </svg:g>
        <svg:g *ngSwitchCase="'Send'">
          <svg:line x1="22" y1="2" x2="11" y2="13" />
          <svg:polygon points="22 2 15 22 11 13 2 9 22 2" />
        </svg:g>
        <!-- Fallback to BookOpen -->
        <svg:g *ngDefault>
          <svg:path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2zM22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
        </svg:g>
      </ng-container>
    </svg>
  `
})
export class LucideIconComponent {
  @Input() name: string = '';
  @Input() className: string = '';
  @Input() size: number = 20;
}
