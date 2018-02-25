import { LocalStorageCache, CacheState } from './LocalStorageCache';

describe('LocalStorageCache', () => {
  let state: CacheState;
  let mock: LocalStorageMock;

  beforeEach(() => {
    const arrival: Date = new Date();
    const leave: Date = new Date();
    // Reset milliseconds because of flaky tests
    arrival.setUTCMilliseconds(0);
    leave.setUTCMilliseconds(0);

    state = {
      arrival: arrival,
      leave: leave
    };

    mock = new LocalStorageMock(JSON.stringify(state));
    Object.defineProperty(window, 'localStorage', {
      value: mock
    });
  });

  it('should read the right state from the storage', () => {
    const cachedState: CacheState = LocalStorageCache.read();
    expect(JSON.stringify(cachedState)).toEqual(JSON.stringify(state));
  });

  it('should update the storage', () => {
    const arrival: Date = new Date();
    const leave: Date = new Date();
    // Reset milliseconds because of flaky tests
    arrival.setUTCMilliseconds(0);
    leave.setUTCMilliseconds(0);

    state = {
      arrival: arrival,
      leave: leave
    };

    LocalStorageCache.update(state);
    expect(mock.store[LocalStorageMock.KEY]).toEqual(JSON.stringify(state));
  });

  it('should remove the state from the storage', () => {
    LocalStorageCache.remove();
    expect(mock.store[LocalStorageMock.KEY]).toBeUndefined();
  });
});

class LocalStorageMock implements Storage {
  public static readonly KEY = 'thisIsJustAMock';

  store: {};
  readonly length: number;
  [index: number]: string;

  constructor(initialState: string | null = null) {
    this.store = {};
    this.length = 0;

    if (initialState) {
      this.store[LocalStorageMock.KEY] = initialState;
    }
  }

  key(index: number): string | null {
    return null;
  }

  getItem(key: string): string | null {
    return this.store[LocalStorageMock.KEY] || null;
  }

  setItem(key: string, data: string): void {
    this.store[LocalStorageMock.KEY] = data;
  }

  removeItem(key: string): void {
    delete this.store[LocalStorageMock.KEY];
  }

  clear(): void {
    this.store = {};
  }
}
