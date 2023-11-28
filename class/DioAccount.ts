export abstract class DioAccount {
  private name: string
  private readonly accountNumber: number
  balance: number = 0;
  private status: boolean = true

  constructor(name: string, accountNumber: number) {
    this.name = name
    this.accountNumber = accountNumber
  }

  setName = (name: string): string => {
    this.name = name
    return 'Nome alterado com sucesso!'
  }

  getName = (): string => {
    return this.name
  }

  deposit = (value: number): string => {
    if (this.validateStatus()) {
      this.balance += value;
      return `Valor depositado com sucesso, você depositou: ${value}`;
    }
    return `Ocorreu um erro`;
  }

  withdraw = (value: number): string => {
    if (this.validateStatus() && value <= this.balance) {
      this.balance -= value;
      return `Você Sacou ${value} e seu novo saldo é ${this.balance}`
    } else {
      return `Saldo insuficiente para saque seu saldo é ${this.balance}`;
    }
  }

  getBalance = (): string => {
    return `seu saldo é ${this.balance}`;
  }

  private validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }
    throw new Error('Conta inválida')
  }
  protected verify = (): boolean => {
    return this.validateStatus()
  }
}
