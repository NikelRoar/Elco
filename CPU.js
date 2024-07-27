class CPU {
  constructor() {
    this.memory = new Uint8Array(256);
    this.registers = {
      A: 0,
      B: 0,
      C: 0,
      D: 0,
      PC: 0,
      SP: 255,
      FLAGS: 0
    };
  }
  fetch() {
    return this.memory[this.registers.PC++];
  }
  decodeAndExecute(opcode) {
    switch(opcode) {
        
