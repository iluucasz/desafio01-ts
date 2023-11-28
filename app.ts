import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'
import { NewAccount } from './class/newAccount'

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10)
const newAccount: NewAccount = new NewAccount(1, 'Lucas', 20)
const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)

//People Account
//deposito
console.log(peopleAccount.deposit(25));

//Company account
//emprestimo
console.log(companyAccount.getLoan(22));

//new Account
//todos os metodos
console.log(newAccount.deposit(20));
console.log(newAccount.getBalance());
console.log(newAccount.withdraw(20));
