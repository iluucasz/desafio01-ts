import { DioAccount } from "./DioAccount";

export class NewAccount extends DioAccount {
    balance: number = 0;
    private doc_id: number

    constructor(doc_id: number, name: string, accountNumber: number) {
        super(name, accountNumber);
        this.doc_id = doc_id;
    }

    deposit = (value: number): string => {
        if (this.verify()) {
            let deposit = this.balance += value + 10;
            return `Valor depositado com sucesso, você depositou: ${value}`
        }
        return `Não foi possível realizar o deposito, Conta não autorizada`
    };

    protected verifyMethods = () => {
        this.verify()
    };
}

