class LoremClass {
   randomArrayString;
   constructor() {
    this.randomArrayString = [];
  }

  timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async init()
  {
    await this.timeout(1000);
    this.randomArrayString = this.generateRandomArrayString();
    await this.timeout(1000);
  }

  generateRandomArrayString()
  {
    return [...Array(500)].map(() => {
      const randomStr = "abcdefghijklmnopqrstuvwxyz".split('').sort(() => .5-Math.random()).join('');
      return randomStr.slice(0, Math.random()*26 + 2)
    });
  }

  get()
  {
    return this.randomArrayString;
  }
}

export default LoremClass;
