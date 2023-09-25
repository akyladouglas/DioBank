import { DioAccount } from "./DioAccount";

export class BonusAccount extends DioAccount {
  constructor(name: string, accountNumber: number) {
    super(name, accountNumber);
  }

  deposit = (amount: number): void => {
    let balance = this.getBalance();
    this.setBalance((balance += amount += 10));
    console.log(`Você depositou ${amount} + bonus de 10`);
    console.log(`Seu saldo atual é ${this.getBalance()}`);
  };
}
