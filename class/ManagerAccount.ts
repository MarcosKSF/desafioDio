import {DioAccount} from "./DioAccount"

export class ManagerAccount extends DioAccount {

    constructor(name: string, accountNumber: number) {
        super(name, accountNumber)
    }

    deposit = (depositValue: number): void => {
        if (this.validateStatus()) {
            console.log('Digite o valor para depositar', depositValue)
            console.log('Você depositou', depositValue)
            depositValue = this.balance + depositValue + 10
            this.balance = depositValue
        }
    }
}