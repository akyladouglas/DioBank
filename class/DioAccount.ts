export abstract class DioAccount {
  private readonly name: string;
  private readonly accountNumber: number;
  private balance: number = 0;
  private status: boolean = true;

  constructor(name: string, accountNumber: number) {
    this.name = name;
    this.accountNumber = accountNumber;
  }

  getName = (): string => {
    return this.name;
  };

  getBalance = (): number => {
    return this.balance;
  };

  setBalance = (balance: number): void => {
    this.balance = balance;
  };

  deposit = (money: number): void => {
    if (this.validateStatus()) {
      this.balance += money;
      console.log(`Voce depositou ${money}`);
      console.log(`Seu saldo atual é ${this.balance}`);
    }
  };

  withdraw = (money: number): void => {
    if (this.validateStatus() && this.validateWithdraw(money)) {
      this.balance -= money;
      console.log(`Voce sacou ${money}`);
      console.log(`Seu saldo atual é ${this.balance}`);
    }
  };

  validateStatus = (): boolean => {
    if (this.status) {
      return this.status;
    }

    throw new Error("Conta inativa");
  };

  private validateWithdraw = (money: number): boolean => {
    if (money <= this.balance) {
      return true;
    }

    throw new Error("Saldo insuficiente");
  };
}
