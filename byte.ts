let reg0 = 0;
let reg1 = 0;
let reg2 = 0;
let reg3 = 0;
let reg4 = 0;
let reg5 = 0;
let reg6 = 0;
let reg7 = 0;

/**
* Computer Gates for Bytes. [Not for blocks]
*/


/**
 * Custom blocks
 */
//% weight=199 color=#3e5eee icon=""

namespace byte {
    /**
     * Returns input if switch input is on. If the switch input is off, return null.
     */
    //% block="BASE: Switch" weight=120
    export function byteSwitch(input: any, byteSwitch: any) {
        let bitrSwiSaveVar = 0;
        if (byteSwitch == 0) {
            bitrSwiSaveVar = null;
        } else {
            bitrSwiSaveVar = input;
        }
        return bitrSwiSaveVar;
    }

    /**
     * Returns the selected bit from a positive decimal
     * @param bit The selected bit (e.g. 0 => check 2^0)
     */
    //% block="BASE: Split" weight=100
    export function split(input: any, bit: any) {
        let byteSplitSaveVar = input;
        let byteSplitSaveVar2 = 0;
        for (let i = 7; i >= bit; i--) {
            if (byteSplitSaveVar >= 2 ** i) {
                if (i == bit) {
                    byteSplitSaveVar2 = 1;
                }
                byteSplitSaveVar -= 2 ** i
            }
        }
        if (input == null || bit == null) {
            byteSplitSaveVar = null;
        }
        return byteSplitSaveVar2;
    }

    /**
     * Returns the seleted bit real value from a positive decimal
     * @param bit The selected bit (e.g. 0 => check 2^0 and output value)
     */
    //% block="BASE: Value" weight=99
    export function value(input: any, bit: any) {
        let byteValueSaveVar = input;
        let byteValueSaveVar2 = 0;
        for (let i = 7; i >= bit; i--) {
            if (byteValueSaveVar >= 2 ** i) {
                if (i == bit) {
                    byteValueSaveVar2 = 1;
                }
                byteValueSaveVar -= 2 ** i
            }
        }
        if (input == null || bit == null) {
            byteValueSaveVar = null;
        }
        return byteValueSaveVar2 * 10 ** bit;
    }

    /**
     * Returns a 8-digit binary from a positive decimal
     */
    //% block="BASE: Binary" weight=98.5
    export function binary(input: any) {
        let byteBinarySaveVar = 0;
        for (let i = 7; i >= 0; i--) {
            byteBinarySaveVar += byte.value(input, i)
        }
        return byteBinarySaveVar;
    }

    /**
     * Returns a decimal from a positive 8-digit binary
     */
    //% block="BASE: Decimal" weight=98.4
    export function decimal(input: any) {
        let byteFormSaveVar = 0;
        for (let i = 8; i > 0; i--) {
            if (Math.floor((input / 10 ** (i - 1)) % 10) == 1) {
                byteFormSaveVar += 2 ** (i - 1)
            }
        }
        if (input == null) {
            byteFormSaveVar = null;
        }
        return byteFormSaveVar;
    }

    /**
     * Returns a 8-digit binary by NOT-gate a positive 8-digit binary
     */
    //% block="LOGIC: NOT" weight=96
    export function not(input: any) {
        let byteNotSaveVar = 0;
        for (let i = 7; i >= 0; i--) {
            if (byte.split(byte.decimal(input), i) == 0) {
                byteNotSaveVar += 10 ** i
            }
        }
        if (input == null) {
            byteNotSaveVar = null;
        }
        return byteNotSaveVar;
    }

    /**
     * Returns a 8-digit binary by AND-gate 2 positive 8-digit binary
     */
    //% block="LOGIC: AND" weight=95
    export function and(input0: any, input1: any) {
        let byteAndSaveVar = 0;
        for (let i = 7; i >= 0; i--) {
            if (byte.split(byte.decimal(input0), i) == 1 && byte.split(byte.decimal(input1), i) == 1) {
                byteAndSaveVar += 10 ** i
            }
        }
        if (input0 == null || input1 == null) {
            byteAndSaveVar = null;
        }
        return byteAndSaveVar;
    }

    /**
     * Returns a 8-digit binary by OR-gate 2 positive 8-digit binary
     */
    //% block="LOGIC: OR" weight=94
    export function or(input0: any, input1: any) {
        let byteOrSaveVar = 0;
        for (let i = 7; i >= 0; i--) {
            if (byte.split(byte.decimal(input0), i) == 1 || byte.split(byte.decimal(input1), i) == 1) {
                byteOrSaveVar += 10 ** i
            }
        }
        if (input0 == null || input1 == null) {
            byteOrSaveVar = null;
        }
        return byteOrSaveVar;
    }

    /**
     * Returns a 8-digit binary by NAND-gate 2 positive 8-digit binary
     */
    //% block="LOGIC: NAND" weight=93
    export function nand(input0: any, input1: any) {
        let byteNandSaveVar = 0;
        for (let i = 7; i >= 0; i--) {
            if (byte.split(byte.decimal(input0), i) == 0 || byte.split(byte.decimal(input1), i) == 0) {
                byteNandSaveVar += 10 ** i
            }
        }
        if (input0 == null || input1 == null) {
            byteNandSaveVar = null;
        }
        return byteNandSaveVar;
    }

    /**
     * Returns a 8-digit binary by NOR-gate 2 positive 8-digit binary
     */
    //% block="LOGIC: NOR" weight=92
    export function nor(input0: any, input1: any) {
        let byteNorSaveVar = 0;
        for (let i = 7; i >= 0; i--) {
            if (byte.split(byte.decimal(input0), i) == 0 && byte.split(byte.decimal(input1), i) == 0) {
                byteNorSaveVar += 10 ** i
            }
        }
        if (input0 == null || input1 == null) {
            byteNorSaveVar = null;
        }
        return byteNorSaveVar;
    }

    /**
     * Returns a 8-digit binary by XOR-gate 2 positive 8-digit binary
     */
    //% block="LOGIC: XOR" weight=91
    export function xor(input0: any, input1: any) {
        let byteXorSaveVar = 0;
        for (let i = 7; i >= 0; i--) {
            if (byte.split(byte.decimal(input0), i) + byte.split(byte.decimal(input1), i) == 1) {
                byteXorSaveVar += 10 ** i
            }
        }
        if (input0 == null || input1 == null) {
            byteXorSaveVar = null;
        }
        return byteXorSaveVar;
    }

    /**
     * Returns a 8-digit binary by XNOR-gate 2 positive 8-digit binary
     */
    //% block="LOGIC: XNOR" weight=91
    export function xnor(input0: any, input1: any) {
        let byteXnorSaveVar = 0;
        for (let i = 7; i >= 0; i--) {
            if (byte.split(byte.decimal(input0), i) + byte.split(byte.decimal(input1), i) != 1) {
                byteXnorSaveVar += 10 ** i
            }
        }
        if (input0 == null || input1 == null) {
            byteXnorSaveVar = null;
        }
        return byteXnorSaveVar;
    }

    /**
     * Returns a 8-digit binary by adding  2 positive 8-digit binary
     * @param carry If 1, output the carry bit instead
     */
    //% block="ARITHMETIC: Add" weight=78
    export function add(input0: any, input1: any, carry: any) {
        let byteAddSaveVar = byte.decimal(input0) + byte.decimal(input1);
        if (carry == 1) {
            byteAddSaveVar = 0;
        }
        if (byteAddSaveVar > 255) {
            if (carry == 0) {
                byteAddSaveVar -= 255;
            } else {
                byteAddSaveVar = 1;
            }
        }
        if ((input0 == null || input1 == null) || carry == null) {
            byteAddSaveVar = null;
        }
        return byte.binary(byteAddSaveVar);
    }

    /**
     * Returns 1 if a 8-digit binary is equal to the other
     */
    //% block="ARITHMETIC: Equal" weight=80
    export function equal(input0: any, input1: any) {
        let byteEqSaveVar = 0;
        if (input0 == input1) {
            byteEqSaveVar = 1;
        }
        return byteEqSaveVar;
    }

    /**
     * Returns 1 if a 8-digit binary is smaller than the other
     */
    //% block="ARITHMETIC: Less" weight=79
    export function less(input0: any, input1: any) {
        let byteEqSaveVar = 0;
        if (input0 < input1) {
            byteEqSaveVar = 1;
        }
        if (input0 == null || input1 == null) {
            byteEqSaveVar = null;
        }
        return byteEqSaveVar;
    }

    /**
     * Returns a decoded decimal of a value from any 3 combinable values in a binary
     * @param value Choose the decoded data [0 - 7]
     */
    //% block="ARCHITECTURE: Decoder" weight=60
    export function decoder(input: any, value: any) {
        let byteDecoderSaveVar = input;
        let bdsvChoice = 1;
        let bdsv1;
        let bdsv2;
        let bdsv3;
        for (let i = 8; i >= 0; i--) {
            if (byte.decimal(byteDecoderSaveVar) >= 2 ** i) {
                if (bdsvChoice == 1) {
                    bdsv1 = 10 ** i;
                } else if (bdsvChoice == 2) {
                    bdsv2 = 10 ** i;
                } else if (bdsvChoice == 3) {
                    bdsv3 = 10 ** i;
                }
                bdsvChoice++;
                byteDecoderSaveVar -= 10 ** i;
            }
        }
        byteDecoderSaveVar = 0;
        if (value % 2 == 1) {
            byteDecoderSaveVar += bdsv3;
        }
        if (value % 4 == 2 || value % 4 == 3) {
            byteDecoderSaveVar += bdsv2;
        }
        if (value >= 4) {
            byteDecoderSaveVar += bdsv1;
        }
        if (input == null || value == null) {
            byteDecoderSaveVar = null;
        }
        return byte.decimal(byteDecoderSaveVar);
    }

    /**
     * Returns a 8-digit binary from a register
     * @param register Choose the register to load [0 - 7]
     */
    //% block="ARCHITECTURE: Load" weight=40
    export function load(register: any) {
        let byteLoadSaveVar = 0;
        if (register == 0) {
            byteLoadSaveVar = reg0;
        } else if (register == 1) {
            byteLoadSaveVar = reg1;
        } else if (register == 2) {
            byteLoadSaveVar = reg2;
        } else if (register == 3) {
            byteLoadSaveVar = reg3;
        } else if (register == 4) {
            byteLoadSaveVar = reg4;
        } else if (register == 5) {
            byteLoadSaveVar = reg5;
        } else if (register == 6) {
            byteLoadSaveVar = reg6;
        } else if (register == 7) {
            byteLoadSaveVar = reg7;
        }
        if (register == null) {
            byteLoadSaveVar = null;
        }
        return byte.binary(byteLoadSaveVar);
    }

    /**
    * Copy a input into a register
    * @param register Choose the register to save the value [0 - 7]
    */
    //% block="ASSEMBLY: Copy [Type: Set]" weight=39
    export function copy(input: any, register: any) {
        if (register == 0) {
            reg0 = byte.decimal(input);
        } else if (register == 1) {
            reg1 = byte.decimal(input);
        } else if (register == 2) {
            reg2 = byte.decimal(input);
        } else if (register == 3) {
            reg3 = byte.decimal(input);
        } else if (register == 4) {
            reg4 = byte.decimal(input);
        } else if (register == 5) {
            reg5 = byte.decimal(input);
        } else if (register == 6) {
            reg6 = byte.decimal(input);
        } else if (register == 7) {
            reg7 = byte.decimal(input);
        }
    }
}