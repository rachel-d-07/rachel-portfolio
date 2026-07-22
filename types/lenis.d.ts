declare module 'lenis' {
  class Lenis {
    constructor(opts?: any);
    raf(time: number): void;
    destroy(): void;
  }
  export default Lenis;
}
