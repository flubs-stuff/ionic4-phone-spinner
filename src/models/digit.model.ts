export class Digit {
  public value:number = this.getRandomDigit();
  public isLocked:boolean = false;
  public isCorrectColor:boolean = true;
  public isCorrectIcon:boolean = true;

  private getRandomDigit():number {
    return Math.round(Math.random() * 9);
  }

  public randomize():void {
    this.value = this.getRandomDigit();
  }

  public toggleIsLocked():void {
    this.isLocked = !this.isLocked;
  }
}
