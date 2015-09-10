import Car from 'static/car';

describe('When true', function() {
  var car;

  beforeEach(function() {
    car = new Car();
    car.setIsConvertible(true);
    car.setIsFourWheelDrive(true);
  });

  it('property isConvertible should be 1', function() {
    expect(car.isConvertible).toEqual(1);
  });

  it('property isFourWheelDrive should be 1', function() {
    expect(car.isFourWheelDrive).toEqual(1);
  });
});

describe('When false', function() {
  var car;

  beforeEach(function() {
    car = new Car();
    car.setIsConvertible(false);
    car.setIsFourWheelDrive(false);
  });

  it('property isConvertible should be 0', function() {
    expect(car.isConvertible).toEqual(0);
  });

  it('property isFourWheelDrive should be 0', function() {
    expect(car.isFourWheelDrive).toEqual(0);
  });
});

describe('When calling toString on a Bmw car which costs 10000', function() {
  var car;

  beforeEach(function() {
    car = new Car('Bmw', 10000);
  });

  it('should return The Bmw costs 10000', function() {
    expect(car.toString()).toBe('The Bmw costs 10000');
  });
});

describe('When the car is convertible', function() {
  var car;
  beforeEach(function() {
    car = new Car('Audi', -1000);
    car.setIsConvertible(true);
  });

  describe('When I try to put the top up', function() {
    describe('When the top is down', function() {
      beforeEach(function() {
        car.setIsTopDown(true);
      });

      it('should succeed and put the top up', function() {
        expect(car.tryToPutTopUp()).toBe(true);
        expect(car.getIsTopDown()).toBe(false);
      });
    });

    describe('When the top is up', function() {
      beforeEach(function() {
        car.setIsTopDown(false);
      });

      it('should not succeed in putting the top up', function() {
        expect(car.tryToPutTopUp()).toBe(false);
        expect(car.getIsTopDown()).toBe(false);
      });
    });
  });
});
