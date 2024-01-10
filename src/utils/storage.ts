type BrowserStorageKey = string;

export class BrowserStorage<E> {
  private key: BrowserStorageKey;

  constructor(key: BrowserStorageKey) {
    this.key = key;
  }

  private getStorageData(): E | null {
    const storedData = BrowserStorageHelper.get(this.key);
    return storedData ? JSON.parse(storedData) : null;
  }

  get(): E | null {
    return this.getStorageData();
  }

  set(target: E, temporary: boolean = false) {
    const serializedData = JSON.stringify(target);
    BrowserStorageHelper.set(this.key, serializedData, temporary);
  }

  clear() {
    BrowserStorageHelper.clear(this.key);
  }
}

class BrowserStorageHelper {
  static get(key: string): string | null {
    return localStorage.getItem(key);
  }

  static set(key: string, value: string, temporary: boolean): void {
    if (temporary) {
      sessionStorage.setItem(key, value);
    } else {
      localStorage.setItem(key, value);
    }
  }

  static clear(key: string): void {
    localStorage.removeItem(key);
    sessionStorage.removeItem(key);
  }
}
