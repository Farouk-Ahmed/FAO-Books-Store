import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartItem, Book } from '../../types';
import { LucideIconComponent } from './lucide-icon.component';
import { LanguageService } from '../services/language.service';
import { CartService } from '../services/cart.service';
import { getLocalizedBook } from '../../data/translations';

@Component({
  selector: 'app-cart-drawer',
  standalone: true,
  imports: [CommonModule, LucideIconComponent],
  template: `
    @if (isOpen) {
      <div class="fixed inset-0 z-50 flex justify-end bg-black/85 backdrop-blur-sm animate-fade-in" id="cart-drawer-overlay">
        <div class="absolute inset-0" (click)="close()"></div>

        <div 
          class="relative w-full max-w-md h-full bg-[#0d0d12] border-l border-white/[0.08] shadow-2xl p-6 flex flex-col justify-between overflow-y-auto text-start"
          id="cart-drawer-container"
        >
          <!-- Header bar items -->
          <div class="flex items-center justify-between pb-5 border-b border-white/[0.06] shrink-0">
            <div class="flex items-center gap-2">
              <app-lucide-icon name="ShoppingCart" className="text-neon-pink" [size]="19"></app-lucide-icon>
              <span class="font-display font-bold text-lg text-white uppercase tracking-wider">{{ lang.t().cartBasket }}</span>
              <span class="font-mono text-xs text-gray-400 bg-white/[0.04] px-2 py-0.5 rounded-md font-semibold font-mono">
                {{ cartService.totalItems() }} {{ lang.t().cartKeys }}
              </span>
            </div>
            
            <button
              (click)="close()"
              class="p-2 rounded-lg hover:bg-white/[0.04] text-gray-400 hover:text-white transition-colors cursor-pointer"
              id="close-cart-btn"
            >
              <app-lucide-icon name="X" [size]="15"></app-lucide-icon>
            </button>
          </div>

          <!-- Checkout Flow Selection -->
          @if (checkoutStep === 'cart') {
            <!-- Items scroll -->
            <div class="flex-1 space-y-4 overflow-y-auto pr-1 scrollbar-thin scrollbar-thumb-white/5 pb-6">
              @if (cartService.cart().length > 0) {
                @for (item of cartService.cart(); track item.book.id) {
                  <div 
                    class="p-3 rounded-xl bg-[#13131b] border border-white/[0.05] flex items-center justify-between gap-3 group text-start"
                    [id]="'cart-item-' + item.book.id"
                  >
                    <!-- Small cover mockup -->
                    <div class="w-12 h-14 rounded-md bg-gradient-to-br {{ item.book.coverGradient }} p-1 flex items-center justify-center border border-white/10 shrink-0">
                      <app-lucide-icon [name]="item.book.iconName" className="text-neon-pink" [size]="16"></app-lucide-icon>
                    </div>

                    <!-- Meta -->
                    <div class="flex-1 min-w-0">
                      <h4 class="font-semibold text-xs text-white tracking-wide truncate">{{ getLocalizedTitle(item.book) }}</h4>
                      <p class="text-[10px] text-gray-500 font-mono mt-0.5">{{ lang.isRtl() ? 'تأليف' : 'by' }} {{ getLocalizedAuthor(item.book) }}</p>
                      <span class="text-[11px] text-neon-pink font-mono font-bold block mt-1">
                        \${{ (item.book.price * item.quantity).toFixed(2) }}
                      </span>
                    </div>

                    <!-- Quantity counter adjustments -->
                    <div class="flex flex-col items-center gap-2 shrink-0">
                      <div class="flex items-center gap-1 bg-[#09090d] border border-white/[0.06] rounded-lg p-0.5">
                        <button
                          (click)="cartService.updateQuantity(item.book.id, -1)"
                          class="p-1 text-gray-400 hover:text-white transition-colors cursor-pointer"
                        >
                          <app-lucide-icon name="Minus" [size]="10"></app-lucide-icon>
                        </button>
                        <span class="font-mono text-xs font-bold text-white px-1">{{ item.quantity }}</span>
                        <button
                          (click)="cartService.updateQuantity(item.book.id, 1)"
                          class="p-1 text-gray-400 hover:text-white transition-colors cursor-pointer"
                        >
                          <app-lucide-icon name="Plus" [size]="10"></app-lucide-icon>
                        </button>
                      </div>

                      <button
                        (click)="cartService.removeFromCart(item.book.id)"
                        class="text-[10px] font-mono text-gray-500 hover:text-neon-pink transition-colors cursor-pointer"
                      >
                        {{ lang.isRtl() ? 'حذف' : 'Remove' }}
                      </button>
                    </div>

                  </div>
                }
              } @else {
                <div class="py-24 text-center">
                  <app-lucide-icon name="ShoppingBag" className="text-gray-600 mx-auto mb-4" [size]="32"></app-lucide-icon>
                  <p class="text-sm text-gray-400 font-light">{{ lang.t().cartEmpty }}</p>
                  <p class="text-xs text-gray-500 mt-1 font-mono">{{ lang.t().cartEmptySub }}</p>
                  <button
                    (click)="close()"
                    class="mt-6 px-5 py-2 rounded-xl bg-white/[0.04] border border-white/10 hover:border-white/20 text-xs font-bold text-white transition-colors cursor-pointer"
                  >
                    {{ lang.t().browseCatalog }}
                  </button>
                </div>
              }
            </div>

            <!-- Subtotal + Checkout action details -->
            @if (cartService.cart().length > 0) {
              <div class="pt-4 border-t border-white/[0.06] mt-auto text-start">
                <!-- Cost lines -->
                <div class="space-y-2.5 mb-6">
                  <div class="flex justify-between items-center text-xs text-gray-400 font-mono">
                    <span>{{ lang.isRtl() ? 'عدد الكتب:' : 'Books:' }}</span>
                    <span class="text-white">{{ cartService.totalItems() }} {{ lang.isRtl() ? 'كتاب' : 'books' }}</span>
                  </div>
                  <div class="flex justify-between items-center text-xs text-gray-400 font-mono">
                    <span>{{ lang.t().gasSurcharge }}</span>
                    <span class="text-[#06b6d4]">{{ lang.t().freeOption }}</span>
                  </div>
                  <div class="flex justify-between items-center text-sm text-gray-300 font-display font-semibold pt-2 border-t border-white/[0.03]">
                    <span>{{ lang.t().subtotalBalance }}</span>
                    <span class="text-neon-pink text-base font-mono font-bold animate-pulse">
                      \${{ cartService.totalCost().toFixed(2) }} USD
                    </span>
                  </div>
                </div>

                @if (cartService.walletConnected()) {
                  <button
                    (click)="handleCheckout()"
                    class="w-full py-3.5 rounded-xl bg-transparent border-2 border-neon-pink text-white text-xs font-bold uppercase tracking-wider hover:bg-neon-pink/10 shadow-neon-pink shadow-neon-pink-hover transition-all duration-300 cursor-pointer flex items-center justify-center gap-1.5"
                    id="trigger-checkout-btn"
                  >
                    <app-lucide-icon name="CheckCircle" [size]="13"></app-lucide-icon>
                    <span>{{ lang.t().authorizeCheckout }}</span>
                  </button>
                } @else {
                  <div class="p-4 rounded-xl bg-neon-pink/5 border border-neon-pink/20 text-center">
                    <p class="text-[11px] text-gray-400 leading-relaxed mb-3 font-light">
                      {{ lang.t().walletDisconnectedWarning }}
                    </p>
                    <button
                      (click)="triggerConnect()"
                      class="px-4 py-2 rounded-lg bg-neon-pink text-white text-[10px] uppercase font-bold hover:opacity-90 transition-opacity cursor-pointer shadow-neon-pink"
                      id="cart-connect-wallet-btn"
                    >
                      {{ lang.t().walletConnectBtn }}
                    </button>
                  </div>
                }
              </div>
            }
          }

          <!-- CHECKING OUT LOADER BLOCK -->
          @if (checkoutStep === 'checking-out') {
            <div class="flex-1 flex flex-col justify-center items-center py-12 text-center">
              <app-lucide-icon name="Sparkles" className="text-neon-pink animate-spin mb-6" [size]="32"></app-lucide-icon>
              <h3 class="font-display font-bold text-base text-white uppercase tracking-wider">
                {{ lang.t().checkoutProcessing }}
              </h3>
              
              <!-- Live terminal code animation text -->
              <div class="w-full mt-4 px-4 py-3 rounded-lg bg-black font-mono text-[11px] text-[#22c55e] text-start border border-white/[0.04]">
                <span class="text-green-500 block">✦ {{ lang.t().systemReadyStatus }}</span>
                <span class="text-neon-pink block animate-pulse mt-1">⌁ {{ checkoutTimerText }}</span>
                <span class="text-gray-600 block mt-1">{{ lang.isRtl() ? 'تطابق رمز التحقق الهاش' : 'Hash integrity matches' }}</span>
              </div>
              
              <p class="text-xs text-gray-500 mt-6 leading-relaxed">
                {{ lang.t().miningSystemMsg }}
              </p>
            </div>
          }

          <!-- SUCCESS OUTCOME BLOCK -->
          @if (checkoutStep === 'success') {
            <div class="flex-1 flex flex-col justify-center items-center py-12 text-center animate-scale-up text-start">
              <div class="w-16 h-16 rounded-full bg-neon-cyan/10 border border-neon-cyan/40 flex items-center justify-center mb-6 shadow-neon-cyan mx-auto">
                <app-lucide-icon name="CheckCircle" className="text-neon-cyan animate-bounce" [size]="28"></app-lucide-icon>
              </div>
              
              <h3 class="font-display font-bold text-xl text-white uppercase tracking-wide text-center">
                {{ lang.t().orderAuthorizedTitle }}
              </h3>
              
              <p class="text-sm text-gray-400 mt-3 max-w-xs leading-relaxed text-center mx-auto">
                {{ lang.t().orderAuthorizedDesc }}
              </p>

              <div class="w-full mt-6 p-4 rounded-xl bg-[#09090d] border border-white/[0.04] text-start">
                <span class="text-[10px] font-mono text-gray-500 uppercase block tracking-wider">{{ lang.t().invoiceTicket }}</span>
                <span class="text-xs font-mono font-bold text-neon-cyan block mt-1">#INVC-NODE-48202-TX</span>
                
                <div class="w-full h-[1px] bg-white/[0.05] my-2.5"></div>
                
                <div class="flex justify-between text-[11px] font-mono text-gray-400">
                  <span>{{ lang.t().paymentMethod }}</span>
                  <span class="text-white font-medium">{{ lang.isRtl() ? 'معاملة شبكة Web3 ذكية' : 'Web3 Smart Contract' }}</span>
                </div>
                <div class="flex justify-between text-[11px] font-mono text-gray-400 mt-1">
                  <span>{{ lang.t().transactionId }}</span>
                  <span class="text-white truncate max-w-[140px] font-medium">0x7a83d29b8c0a2</span>
                </div>
              </div>

              <button
                (click)="dismissSuccess()"
                class="mt-8 w-full py-3 rounded-xl bg-transparent border-2 border-neon-cyan text-white text-xs font-semibold uppercase hover:bg-neon-cyan/10 shadow-neon-cyan duration-300 transition-all cursor-pointer"
                id="success-dismiss-btn"
              >
                {{ lang.t().closeTerminal }}
              </button>
            </div>
          }

        </div>
      </div>
    }
  `
})
export class CartDrawerComponent {
  @Input() isOpen = false;
  @Output() closeEvent = new EventEmitter<void>();
  @Output() connectWalletEvent = new EventEmitter<void>();

  lang = inject(LanguageService);
  cartService = inject(CartService);

  checkoutStep: 'cart' | 'checking-out' | 'success' = 'cart';
  checkoutTimerText = '';

  getLocalizedTitle(book: Book): string {
    return getLocalizedBook(book, this.lang.language()).title;
  }

  getLocalizedAuthor(book: Book): string {
    return getLocalizedBook(book, this.lang.language()).author;
  }

  close() {
    this.isOpen = false;
    this.closeEvent.emit();
  }

  triggerConnect() {
    this.connectWalletEvent.emit();
  }

  dismissSuccess() {
    this.checkoutStep = 'cart';
    this.cartService.clearCart();
    this.close();
  }

  handleCheckout() {
    this.checkoutStep = 'checking-out';
    this.checkoutTimerText = this.lang.isRtl() ? 'بدء عملية الدفع...' : 'Starting checkout...';

    const steps = this.lang.isRtl() ? [
      'فحص رصيد المحفظة...',
      'تشفير المعاملة...',
      'تقدير رسوم الغاز (0.0014 ETH)...',
      'تأكيد الكتلة على السلسلة...',
      'إصدار مفاتيح الكتب...'
    ] : [
      'Checking wallet balance...',
      'Encrypting transaction...',
      'Estimating gas (0.0014 ETH)...',
      'Confirming block on chain...',
      'Releasing book keys...'
    ];

    let i = 0;
    const interval = setInterval(() => {
      if (i < steps.length) {
        this.checkoutTimerText = steps[i];
        i++;
      } else {
        clearInterval(interval);
        this.checkoutStep = 'success';
      }
    }, 1000);
  }
}
