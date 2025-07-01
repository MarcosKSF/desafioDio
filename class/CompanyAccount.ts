import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {

  private loanValue:number = 0

  constructor(name: string, accountNumber: number){
    super(name, accountNumber)
  }

  getLoan = (loanValue:number): void => {
    if(this.validateStatus()){
    console.log('Digite o valor do emprestimo')
      this.loanValue = loanValue
      console.log('seu emprestimo foi de ',loanValue)
      this.balance = this.balance + this.loanValue
      console.log('seu novo saldo é de: ',this.balance)
    }
  }

}
