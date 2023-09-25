import { DioAccount } from "./DioAccount";

export class CompanyAccount extends DioAccount {
  constructor(name: string, accountNumber: number) {
    super(name, accountNumber);
  }

  getLoan = (moneyLoan: number): void => {
    if (this.validateStatus()) {
      let balance = this.getBalance();
      this.setBalance((balance += moneyLoan));
      console.log(`Voce pegou um emprestimo de ${moneyLoan}`);
      console.log(`Seu saldo atual é ${this.getBalance()}`);
    }
  };
}
