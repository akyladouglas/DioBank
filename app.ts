import { BonusAccount } from "./class/BonusAccount";
import { CompanyAccount } from "./class/CompanyAccount";
import { PeopleAccount } from "./class/PeopleAccount";

const peopleAccount: PeopleAccount = new PeopleAccount("John", 1, 123);
peopleAccount.deposit(1000);
peopleAccount.withdraw(200);

const companyAccount: CompanyAccount = new CompanyAccount("DIO", 20);
companyAccount.deposit(1000);
companyAccount.withdraw(200);
companyAccount.getLoan(10000);

const bonusAccount: BonusAccount = new BonusAccount("Bonus", 30);
bonusAccount.deposit(1000);
bonusAccount.withdraw(200);
