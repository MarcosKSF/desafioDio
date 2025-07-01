export abstract class DioAccount {
  private readonly name: string
  private readonly accountNumber: number
  balance: number = 0
  private depositValue: number = 0
  private withdrawValue: number = 0
  private status: boolean = true


  constructor(name: string, accountNumber: number){
    this.name = name
    this.accountNumber = accountNumber
  }

 // setName = (name: string): void => {
 //   this.name = name
 //   console.log('Nome alterado com sucesso!')
 // }

  getName = (): string => {
    return this.name
  }

  
  deposit = (depositValue: number): void => {
    if(this.validateStatus()){
      console.log('Digite o valor para depositar', depositValue)
      this.depositValue = depositValue
      this.balance = this.balance + depositValue
    console.log('Voce depositou',this.depositValue)
    }
  }

  withdraw = (withdrawValue: number): void => {
    this.withdrawValue = withdrawValue
    if(this.validateStatus()){
      if(this.balance>=withdrawValue){
        console.log('digite o valor a sacar', withdrawValue)
        this.balance = this.balance - withdrawValue
      console.log('seu novo saldo é',this.balance)
      }
      else{
        throw new Error('Saldo insuficiente')
      }

    }
    
  }

  getBalance = (): void => {
    console.log('seu saldo é de: ',this.balance)
  }

  validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    throw new Error('Conta inválida')
  }

}
