import type { IOptionLoader, RangeValue, RecursivePartial } from "tsparticles-engine";
import type { IWobbleSpeed } from "../Interfaces/IWobbleSpeed";
export declare class WobbleSpeed implements IWobbleSpeed, IOptionLoader<IWobbleSpeed> {
    angle: RangeValue;
    move: RangeValue;
    constructor();
    load(data?: RecursivePartial<IWobbleSpeed>): void;
}
