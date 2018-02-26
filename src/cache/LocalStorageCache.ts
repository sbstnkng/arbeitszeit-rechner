import { CacheData } from '../types';
export class LocalStorageCache {
  private static readonly CACHE_KEY = 'appTimeData';

  public static read(): CacheData {
    const cacheState: CacheData = this.createInitialCacheState();
    const cachedTime: string | null = localStorage.getItem(this.CACHE_KEY);

    if (cachedTime) {
      const time: CacheData = JSON.parse(cachedTime);
      const arrivalDate = time.arrival ? new Date(time.arrival) : undefined;
      const leaveDate = time.leave ? new Date(time.leave) : undefined;

      cacheState.arrival = arrivalDate;
      cacheState.leave = leaveDate;
    }

    return cacheState;
  }

  public static update(stateToCache: CacheData): void {
    if (stateToCache) {
      localStorage.setItem(this.CACHE_KEY, JSON.stringify(stateToCache));
    }
  }

  public static remove(): void {
    localStorage.removeItem(this.CACHE_KEY);
  }

  private static createInitialCacheState(): CacheData {
    return { arrival: undefined, leave: undefined };
  }
}
