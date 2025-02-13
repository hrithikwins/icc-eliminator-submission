import type { IOptionLoader, RangeValue, RecursivePartial } from "tsparticles-engine";
import type { IWobble } from "../Interfaces/IWobble";
import { WobbleSpeed } from "./WobbleSpeed";
export declare class Wobble implements IWobble, IOptionLoader<IWobble> {
    distance: RangeValue;
    enable: boolean;
    speed: WobbleSpeed;
    constructor();
    load(data?: RecursivePartial<IWobble>): void;
}
