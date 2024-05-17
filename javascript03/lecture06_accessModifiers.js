class BankAccount{
    #balance = 0;
    
    deposit(amount){
        this.#balance+=amount;
        console.log(`Amount ${amount} credited, updated balance is ${this.#balance}`)
    }

    withdraw(amount){
        this.#balance-=amount;
        if(amount<this.#balance){
            console.log(`Amount ${amount} debited, updated balance is ${this.#balance}`)
        }
        else{
            console.log(`Insufficient funds`);
        }
    }
    showBalance(){
        console.log(this.#balance);
    }
}

const acount = new BankAccount();
acount.deposit(2000);
acount.showBalance();
acount.withdraw(500);
acount.showBalance();