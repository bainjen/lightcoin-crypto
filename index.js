class Account {

  constructor(username) {
    this.username = username;
    this.balance = 0;
  }

}

class Transaction {

  constructor(amount, account) {
    this.amount  = amount;
    this.account = account;
  }

  commit() {
    this.account.balance += this.value;
  }

}

class Deposit extends Transaction {

  get value() {
    return this.amount
  }

}

class Withdrawal extends Transaction {

  get value() {
    return -this.amount;
  }

}

// DRIVER CODE BELOW

const myAccount = new Account('billybob');

console.log('Starting Balance:', myAccount.balance);

const t1 = new Deposit(120.00, myAccount);
t1.commit();

const t2 = new Withdrawal(50.00, myAccount);
t2.commit();

console.log('Ending Balance:', myAccount.balance);



// class Account {

//   constructor(username) {
//     this.username = username;
//     this.balance = 0;
//   }
// }
// // let balance = 500.00;

// class Transaction {

//   constructor(amount, account) {
//     this.amount = amount;
//     this.account = account;
//   }

//   commit() {
//     this.amount.balance += this.value;
//   }
// }

// class Withdrawal extends Transaction {

//   get value() {
//     return -this.amount;
//   }
//   // constructor(amount, account) {
//   //   this.amount = amount;
//   //   this.account = account;
//   // }

//   // commit() {
//   //   this.account.balance -= this.amount
//   // }
// }

// class Deposit extends Transaction {

//   get value() {
//     return this.amount
//   }
//   // constructor(amount, account) {
//   //   this.amount = amount;
//   //   this.account = this.account;
//   // }
//   // commit() {
//   //   this.account.balance += this.amount;
//   // }

// }

// const myAccount = new Account('billybob');

// console.log('Starting Balance:', myAccount.balance);

// const t1 = new Deposit(120.00, myAccount);
// t1.commit();

// const t2 = new Withdrawal(50.00, myAccount);
// t2.commit();

// console.log('Ending Balance:', myAccount.balance);

// // DRIVER CODE BELOW
// // We use the code below to "drive" the application logic above and make sure it's working as expected
// // const myAccount = new Account("snow-patrol");
// // t1 = new Withdrawal(50.25, myAccount);
// // t1.commit();
// // console.log(myAccount)

// // console.log('Transaction 1:', t1);

// // t2 = new Withdrawal(9.99, myAccount);
// // t2.commit();
// // console.log('Transaction 2:', t2);

// // console.log('Balance:', balance);

// // console.log(t1.amount);

// // t3 = new Deposit(120.00, myAccount);
// // t3.commit();
// // console.log('Transaction 3: ', t3);

