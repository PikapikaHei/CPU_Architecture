/**
* Computer Gates for Bit. [Not for blocks]
*/

/**
 * Custom blocks
 */
//% weight=200 color=#4f6fff icon="" 
namespace bit {
    /**
     * Returns input if switch input is on. If the switch input is off, return null.
     */
    //% block="BASE: Switch" weight=120
    export function bitSwitch(input: any, bitSwitch: any) {
        let bitSwiSaveVar = 0;
        if (bitSwitch == 0) {
            bitSwiSaveVar = null;
        } else {
            if (input == 1) {
                bitSwiSaveVar == input;
            }
        }
        return bitSwiSaveVar;
    }

    /**
     * Returns the input
     */
    //% block="LOGIC: Buffer" weight=100
    export function buffer(input: any) {
        return input;
    }

    /**
     * Inverse the input
     */
    //% block="LOGIC: NOT" weight=99
    export function not(input: any) {
        let bitNotSaveVar = 0;
        if (input == 0) {
            bitNotSaveVar++;
        }
        if (input == null) {
            bitNotSaveVar = null;
        }
        return bitNotSaveVar;
    } 

    /**
     * Returns 1 if 2 input is 1
     */
    //% block="LOGIC: AND" weight=98
    export function and(input0: any, input1: any) {
        let bitAndSaveVar = 0;
        if (input0 == 1 && input1 == 1) {
            bitAndSaveVar = 1;
        }
        if (input0 == null || input1 == null) {
            bitAndSaveVar = null;
        }
        return bitAndSaveVar;
    }

    /**
     * Returns 1 if 1+ input is 1
     */
    //% block="LOGIC: OR" weight=97
    export function or(input0: any, input1: any) {
        let bitOrSaveVar = 0;
        if (input0 == 1 || input1 == 1) {
            bitOrSaveVar = 1;
        }
        if (input0 == null || input1 == null) {
            bitOrSaveVar = null;
        }
        return bitOrSaveVar;
    }

    /**
     * Returns 1 if 1+ input is 0
     */
    //% block="LOGIC: NAND" weight=96
    export function nand(input0: any, input1: any) {
        let bitNandSaveVar = 0;
        if (input0 == 0 || input1 == 0) {
            bitNandSaveVar = 1;
        }
        if (input0 == null || input1 == null) {
            bitNandSaveVar = null;
        }
        return bitNandSaveVar;
    }

    /**
     * Returns 1 if both input is 0
     */
    //% block="LOGIC: NOR" weight=95
    export function nor(input0: any, input1: any) {
        let bitNorSaveVar = 0;
        if (input0 == 0 && input1 == 0) {
            bitNorSaveVar = 1;
        }
        if (input0 == null || input1 == null) {
            bitNorSaveVar = null;
        }
        return bitNorSaveVar;
    }

    /**
     * Returns 1 if 1 input is 1
     */
    //% block="LOGIC: XOR" weight=94
    export function xor(input0: any, input1: any) {
        let bitXorSaveVar = 0;
        if (input0 + input1 == 1) {
            bitXorSaveVar = 1;
        }
        if (input0 == null || input1 == null) {
            bitXorSaveVar = null;
        }
        return bitXorSaveVar;
    }

    /**
     * Returns 1 if both input is the same
     */
    //% block="LOGIC: XNOR" weight=93
    export function xnor(input0: any, input1: any) {
        let bitXnorSaveVar = 0;
        if (input0 == input1) {
            bitXnorSaveVar = 1;
        }
        if (input0 == null || input1 == null) {
            bitXnorSaveVar = null;
        }
        return bitXnorSaveVar;
    }

    /**
    * Returns the input after 1/2 second
    */
    //% block="MEMORY: Pause" weight=80
    export function pause(input: any) {
        timer.after(500, function() {
            return input;
        })
    }

    /**
     * Returns either the input or the reversed of input
     * @param value 0 = buffer, 1 = NOT Gate
     */
    //% block="ARCHITECTURE: Decoder" weight=60
    export function decoder(input: any, value: any) {
        let bitDecoderSaveVar = input;
        if (value == 1) {
            bitDecoderSaveVar = bit.not(input);
        }
        if (input == null || value == null) {
            bitDecoderSaveVar = null;
        }
        return bitDecoderSaveVar;
    }
}