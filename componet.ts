let ram = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

let programlist = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

let programRun = false;
let programAddress = 0;
while (programRun) {
    programAddress = 0;
    for (let i = 1; i <= 255; i++) {
        timer.after(500, function () {
            programAddress++;
        })
    }
}

/**
* Advanced Computer Gates. [Not for blocks]
*/


/**
 * Custom blocks
 */
//% weight=198 color=#2d4ddd icon=""

namespace component {
    /**
     * Output the value
     */
    //% block="BASE: Out [Type: Set]" weight=100
    export function out(input: any) {
        console.log(input);
    }

    /**
     * Execute the program (Increment address every 1/2 second)
     * @param If value = 0, stop executing
     */
    //% block="BASE: Execute [Type: Set]" weight=99
    export function execute(value: any) {
        if (value == 0) {
            programRun = false;
        } else {
            programRun = true;
        }
    }

    /**
     * Code a value at an address of the program
     * @param address The address to code [0 - 255]
     */
    //% block="BASE: Code [Type: Set]" weight=98
    export function code(input: any, address: any) {
        if (typeof input === "number" && typeof address == "number") {
            programlist[address] = input;
        }
    }

    /**
     * Returns true if program is activated, otherwise false
     */
    //% block="BASE: Activity [Type: Value]" weight=97
    export function activity() {
        return programRun;
    }

    /**
     * Returns the current output of the program
     */
    //% block="BASE: Program [Type: Value]" weight=96
    export function program() {
        return programlist[programAddress];
    }

    /**
     * Save a value at an address of a RAM
     * @param address The address to save [0 - 255]
     */
    //% block="MEMORY: Save [Type: Set]" weight=80
    export function save(input: any, address: any) {
        if (typeof input === "number" && typeof address == "number") {
            ram[address] = input;
        }
    }

    /**
     * Load a value at an address of a RAM
     * @param address The address to load [0 - 255]
     */
    //% block="MEMORY: Load [Type: Value]" weight=80
    export function load(address: any) {
        let cssv: any = null;
        if (typeof address == "number") {
            cssv = ram[address];
        }
        return cssv;
    }
}