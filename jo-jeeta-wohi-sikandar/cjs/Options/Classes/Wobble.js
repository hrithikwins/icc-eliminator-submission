"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Wobble = void 0;
const WobbleSpeed_1 = require("./WobbleSpeed");
const tsparticles_engine_1 = require("tsparticles-engine");
class Wobble {
    constructor() {
        this.distance = 5;
        this.enable = false;
        this.speed = new WobbleSpeed_1.WobbleSpeed();
    }
    load(data) {
        if (!data) {
            return;
        }
        if (data.distance !== undefined) {
            this.distance = (0, tsparticles_engine_1.setRangeValue)(data.distance);
        }
        if (data.enable !== undefined) {
            this.enable = data.enable;
        }
        if (data.speed !== undefined) {
            if (typeof data.speed === "number") {
                this.speed.load({ angle: data.speed });
            }
            else {
                const rangeSpeed = data.speed;
                if (rangeSpeed.min !== undefined) {
                    this.speed.load({ angle: rangeSpeed });
                }
                else {
                    this.speed.load(data.speed);
                }
            }
        }
    }
}
exports.Wobble = Wobble;
