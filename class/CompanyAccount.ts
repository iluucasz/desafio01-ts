import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {
  balance: number = 0;

  constructor(name: string, accountNumber: number) {
    super(name, accountNumber,)
  }

  getLoan = (value: number): string => {
    if (this.verify()) {
      this.balance += value;
      return `Emprestimo realizado com sucesso, novo saldo: ${this.balance}`
    }
    return `Não foi possível realizar o emprestimo, Conta não autorizada`
  }

  public verifyMethods = () => {
    this.verify();
  }

}
