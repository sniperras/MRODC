export declare class FpsLimiter {
    private fpsLimit?;
    constructor(fpsLimit?: number);
    private lastLapTime;
    lap(): Promise<void>;
}
