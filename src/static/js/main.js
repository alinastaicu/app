function getCurrentDate() {
  return new Date();
}

var Person = function () {
  this.name = '';
  this.firstName = '';
  this.birthDate = new Date();
  this.sex = '';
  this.address = new Address();

  this.fullName = function () {
    return this.name + ', ' + this.firstName;
  }

  this.age = function () {
    var currentDate = getCurrentDate();
    var difference = currentDate.getTime() - this.birthDate.getTime();

    return Math.floor(difference / (1000 * 60 * 60 * 24 * 365.25));
  }
};

var Address = function () {
  this.streetName = '';
  this.streetNumber = '';
  this.postalCode = '';
};

var BankAccount = function (person) {
  if(person.age() < 18) {
    throw new Error('Not allowed to have an account at 18!');
  }

  this.iban = '';
  this.amount = 0;
  this.person = person;

  this.addAmount = function (sum) {
    this.amount = this.amount + sum;
  };
}

function transferAmount(accountFrom, accountTo, sum) {
  if(accountFrom.amount - sum < 0) {
    throw new Error('Isufficient founds!');
  }

  accountTo.amount = accountTo.amount + sum;
  accountFrom.amount = accountFrom.amount - sum;
}

// var liviusAccount = new BankAccount(liviu);
// liviusAccount.amount = 30000.00;
// var alinasAccount = new BankAccount(alina);
// alinasAccount.amount = 2500.54;


