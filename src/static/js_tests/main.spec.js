describe('When Alina and Liviu are created', function() {
  var alina, liviu;

  beforeEach(function() {
    spyOn(window, 'getCurrentDate').and.returnValue(new Date(2015, 9, 25))
  });

  beforeEach(function() {
    alina = new Person();
    alina.name = 'Alina';
    alina.firstName = 'Staicu';
    alina.birthDate = new Date(1984, 11, 4);
    alina.sex = 'female';
    alina.address = new Address();
    alina.address.streetName = 'Nymphemburgerstr.';
    alina.address.streetNumber = '126';
    alina.address.postalCode = '80636';
  });

  beforeEach(function() {
    liviu = new Person();
    liviu.name = 'Liviu';
    liviu.firstName = 'Ignat';
    liviu.birthDate = new Date(1983, 9, 26);
    liviu.sex = 'male';
    liviu.address = new Address();
    liviu.address.streetName = 'Nymphemburgerstr.';
    liviu.address.streetNumber = '126';
    liviu.address.postalCode = '80636';
  });

  it('Alina should have correct age', function() {
    expect(alina.age()).toBe(30);
  });

  it('Liviu should have correct age', function() {
    expect(liviu.age()).toBe(31);
  });

  it('Liviu\'s fullName schould be Liviu, Ignat', function() {
    expect(liviu.fullName()).toBe('Liviu, Ignat');
  });


  describe('When BankAccount is created for Alina', function() {

    var alinasAccount;
    beforeEach(function() {
      alinasAccount = new BankAccount(alina);
    });

    describe('When person is under 18', function() {
      beforeEach(function() {
        var today = new Date(getCurrentDate().getTime());
        today.setFullYear(today.getFullYear() - 10);

        alina.birthDate = today;
      });

      it('Should fail creating the account', function() {
        var func = function() {
          new BankAccount(alina);
        };

        expect(func).toThrow(new Error('Not allowed to have an account at 18!'));
      });
    });

    describe('When person is older than 18', function() {
      var account;

      beforeEach(function() {
        var today = new Date(getCurrentDate().getTime());
        today.setFullYear(today.getFullYear() - 20);

        alina.birthDate = today;
        account = new BankAccount(alina);
      });

      it('Should create the bank account', function() {
        expect(account).toBeDefined();
      });

      it('Account should have a 0 amount', function() {
        expect(account.amount).toBe(0);
      });
    });

    describe('When BankAccount is created for liviu', function() {
      var liviusAccount;
      beforeEach(function() {
        liviusAccount = new BankAccount(liviu);
      });

      describe('When transfering 100 from alina to livius bank account', function() {
        it('should throw an error Isufficient founds', function() {
          var func = function() {
            transferAmount(alinasAccount, liviusAccount, 100);
          };

          expect(func).toThrow(new Error('Isufficient founds!'));
        });
      });

      describe('When alina adds 1300 to her account', function() {
        beforeEach(function() {
          alinasAccount.addAmount(1300);
        });

        it('Alina should have a balance of 1300', function() {
          expect(alinasAccount.amount).toBe(1300);
        });

        describe('When alina adds 300.15 to her account', function() {
          beforeEach(function() {
            alinasAccount.addAmount(300.15);
          });

          it('Alina should have a balance of 1600.15', function() {
            expect(alinasAccount.amount).toBe(1600.15);
          });
        });

        describe('When alina transfers 150 to livius bank account', function() {
          beforeEach(function() {
            transferAmount(alinasAccount, liviusAccount, 150);
          });

          it('Alina should have 1150 balance', function() {
            expect(alinasAccount.amount).toBe(1150);
          });

          it('Liviu should have 150 balance', function() {
            expect(liviusAccount.amount).toBe(150);
          });
        });
      });
    });
  });


});


