import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideIconComponent } from './lucide-icon.component';
import { LanguageService } from '../services/language.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-wallet-modal',
  standalone: true,
  imports: [CommonModule, LucideIconComponent],
  template: `
    @if (isOpen) {
      <div class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm animate-fade-in" id="wallet-modal-overlay">
        <div class="absolute inset-0" (click)="close()"></div>

        <div 
          class="relative w-full max-w-md bg-[#0d0d14] border border-white/[0.08] rounded-2xl shadow-2xl p-6 text-start overflow-hidden animate-scale-up"
          id="wallet-connect-modal"
        >
          @if (!connectingId) {
            <button
              (click)="close()"
              class="absolute top-5 right-5 rlt:right-auto rlt:left-5 p-1.5 rounded-lg bg-white/[0.02] border border-white/[0.08] hover:border-white/20 hover:bg-white/[0.06] text-gray-400 hover:text-white transition-colors cursor-pointer"
              id="close-wallet-modal"
            >
              <app-lucide-icon name="X" [size]="14"></app-lucide-icon>
            </button>
          }

          @if (connectingId) {
            <!-- Connecting Loading Screen -->
            <div class="py-8 text-center" id="wallet-connecting-screen">
              <app-lucide-icon name="Cpu" className="text-neon-cyan animate-spin mx-auto mb-6" [size]="32"></app-lucide-icon>
              <h3 class="font-display font-bold text-sm text-white uppercase tracking-wider text-center">
                {{ lang.t().securingKeyTitle || 'AUTHORIZING SECURE ACCESS' }}
              </h3>
              
              <!-- Handshake logs -->
              <div class="mt-4 px-4 py-3 rounded-lg bg-black font-mono text-[11px] text-[#06b6d4] text-start border border-white/[0.04]">
                <span class="block text-gray-500">✦ {{ lang.t().walletHandshake || 'CONNECTION HANDSHAKE' }}</span>
                <span class="block animate-pulse mt-1">⌁ {{ loadingText }}</span>
              </div>
              
              <p class="text-[11px] text-gray-500 font-sans mt-5 max-w-xs mx-auto text-center">
                {{ lang.t().walletPopupMsg || 'Please approve the connection verification signature in your local wallet application popup.' }}
              </p>
            </div>
          } @else {
            <div id="wallet-selection-screen" class="text-start">
              <div class="mb-6">
                <span class="text-neon-cyan font-mono text-[10px] uppercase block tracking-widest glow-text-cyan font-semibold">
                  {{ lang.t().walletModalTitle || 'Web3 Gateway Connection' }}
                </span>
                <h3 class="font-display font-bold text-xl text-white uppercase tracking-wide mt-1 select-none">
                  {{ lang.t().connectToMarketplace }}
                </h3>
                <p class="text-xs text-gray-400 font-light mt-1.5 leading-relaxed">
                  {{ lang.t().walletDesc }}
                </p>
              </div>

              <div class="space-y-3">
                @for (w of wallets; track w.id) {
                  <button
                    (click)="handleWalletSelect(w.id, w.name)"
                    class="w-full p-3.5 rounded-xl bg-[#12121a]/80 border border-white/[0.04] hover:border-neon-cyan/45 hover:bg-white/[0.02] transition-all flex items-start gap-4 text-start group cursor-pointer"
                    [id]="'wallet-option-' + w.id"
                  >
                    <div class="w-9 h-9 shrink-0 rounded-lg bg-white/[0.04] border border-white/[0.08] group-hover:border-neon-cyan/25 flex items-center justify-center self-center transition-all">
                      <app-lucide-icon [name]="w.icon" className="text-gray-400 group-hover:text-neon-cyan transition-colors" [size]="16"></app-lucide-icon>
                    </div>
                    <div>
                      <h4 class="font-semibold text-xs text-white group-hover:text-neon-cyan transition-colors tracking-wide">{{ w.name }}</h4>
                      <p class="text-[10px] text-gray-500 font-light mt-0.5 leading-normal max-w-[240px]">{{ w.desc }}</p>
                    </div>
                  </button>
                }
              </div>

              <!-- Hint footer -->
              <div class="mt-5 pt-4 border-t border-white/[0.05] text-center">
                <span class="text-[10px] font-mono text-gray-400 leading-snug whitespace-pre-line">
                  {{ lang.t().walletFooter }}
                </span>
              </div>
            </div>
          }
        </div>
      </div>
    }
  `
})
export class WalletModalComponent {
  @Input() isOpen = false;
  @Output() closeEvent = new EventEmitter<void>();
  @Output() connectSuccess = new EventEmitter<void>();

  lang = inject(LanguageService);
  cartService = inject(CartService);

  connectingId: string | null = null;
  loadingText = '';

  get wallets() {
    return this.lang.isRtl() ? [
      { id: 'metamask', name: 'MetaMask', icon: 'Sparkles', desc: 'إضافة المتصفح أو تطبيق الهاتف' },
      { id: 'coinbase', name: 'Coinbase', icon: 'Building', desc: 'محفظة مناسبة للفرق والشركات' },
      { id: 'walletconnect', name: 'WalletConnect', icon: 'Network', desc: 'بروتوكول عام يدعم QR والروابط العميقة' },
      { id: 'phantom', name: 'Phantom', icon: 'Cpu', desc: 'تدعم سلاسل متعددة وتقدير رسوم تلقائي' }
    ] : [
      { id: 'metamask', name: 'MetaMask', icon: 'Sparkles', desc: 'Browser extension or mobile app' },
      { id: 'coinbase', name: 'Coinbase', icon: 'Building', desc: 'Wallet built for teams and companies' },
      { id: 'walletconnect', name: 'WalletConnect', icon: 'Network', desc: 'Open protocol with QR and deep links' },
      { id: 'phantom', name: 'Phantom', icon: 'Cpu', desc: 'Multi-chain support with auto gas estimation' }
    ];
  }

  close() {
    this.isOpen = false;
    this.connectingId = null;
    this.closeEvent.emit();
  }

  handleWalletSelect(walletId: string, walletName: string) {
    this.connectingId = walletId;
    this.loadingText = this.lang.isRtl() ? 'الاتصال بتطبيق المحفظة...' : 'Reaching wallet app...';

    const steps = this.lang.isRtl() ? [
      `بدء المصافحة مع ${walletName}...`,
      'طلب عنوان المحفظة...',
      'التحقق من التوقيع...',
      'تم. جاري إنهاء الاتصال...'
    ] : [
      `Handshake with ${walletName}...`,
      'Requesting wallet address...',
      'Verifying signature...',
      'Done. Finishing up...'
    ];

    let i = 0;
    const timer = setInterval(() => {
      if (i < steps.length) {
        this.loadingText = steps[i];
        i++;
      } else {
        clearInterval(timer);
        this.cartService.connectWallet('0x7a83d29b8c0a2b1684c59ffde1402d6b3dc8a74e');
        this.connectSuccess.emit();
        this.close();
      }
    }, 1200);
  }
}
