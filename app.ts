import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'
import { ManagerAccount } from './class/ManagerAccount'

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10)
console.log(peopleAccount)
peopleAccount.deposit(230.00)
peopleAccount.deposit(50.00)
peopleAccount.getBalance()
peopleAccount.withdraw(30)
peopleAccount.getName()

const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
console.log(companyAccount)
companyAccount.deposit(24)
companyAccount.getLoan(230)
companyAccount.getName()

const managerAccount: ManagerAccount = new ManagerAccount('Marcos', 30)
console.log(managerAccount)
managerAccount.deposit(100)
managerAccount.getBalance()
managerAccount.withdraw(20)
managerAccount.getName()

