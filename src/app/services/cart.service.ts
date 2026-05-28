import { Injectable, signal, computed } from '@angular/core';
import { Book, CartItem } from '../../types';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  readonly cart = signal<CartItem[]>([]);
  readonly walletConnected = signal<boolean>(false);
  readonly walletAddress = signal<string>('');

  readonly totalItems = computed(() => {
    return this.cart().reduce((sum, item) => sum + item.quantity, 0);
  });

  readonly totalCost = computed(() => {
    return this.cart().reduce((sum, item) => sum + (item.book.price * item.quantity), 0);
  });

  addToCart(book: Book) {
    const current = this.cart();
    const existingIndex = current.findIndex(item => item.book.id === book.id);

    if (existingIndex > -1) {
      const updated = [...current];
      updated[existingIndex] = {
        ...updated[existingIndex],
        quantity: updated[existingIndex].quantity + 1
      };
      this.cart.set(updated);
    } else {
      this.cart.set([...current, { book, quantity: 1 }]);
    }
  }

  removeFromCart(bookId: string) {
    this.cart.set(this.cart().filter(item => item.book.id !== bookId));
  }

  updateQuantity(bookId: string, delta: number) {
    const current = this.cart();
    const itemIndex = current.findIndex(item => item.book.id === bookId);
    
    if (itemIndex > -1) {
      const updated = [...current];
      const newQty = updated[itemIndex].quantity + delta;
      
      if (newQty <= 0) {
        this.removeFromCart(bookId);
      } else {
        updated[itemIndex] = {
          ...updated[itemIndex],
          quantity: newQty
        };
        this.cart.set(updated);
      }
    }
  }

  clearCart() {
    this.cart.set([]);
  }

  connectWallet(address: string) {
    this.walletConnected.set(true);
    this.walletAddress.set(address);
  }

  disconnectWallet() {
    this.walletConnected.set(false);
    this.walletAddress.set('');
  }
}
