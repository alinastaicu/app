class Car {
  constructor(make, cost) {
    this.isConvertible = -1;
    this.isFourWheelDrive = -1;
    this.isTopDown = -1;

    this.doorCount = 2;
    this.make = make;
    this.cost = cost;
  }
  toString() {
    return 'The ' + this.make + ' costs ' + this.cost;
  }

  tryToPutTopUp() {
    if (this.getIsTopUp()) {
      return false;
    }
    this.setTopUp();
    return true;
  }

  setIsTopDown(val) {
    this.isTopDown = val === true ? 1 : 0;
  }
  getIsTopDown() {
    return this.isTopDown === 1;
  }
  setTopUp() {
    this.setIsTopDown(false);
  }
  getIsTopUp() {
    return !this.getIsTopDown();
  }

  setIsConvertible(val) {
    this.isConvertible = val === true ? 1 : 0;
  }
  getIsConvertible() {
    return this.isConvertible === 1;
  }

  setIsFourWheelDrive(val) {
    this.isFourWheelDrive = val === true ? 1 : 0;
  }
  getIsFourWheelDrive() {
    return this.isFourWheelDrive === 1;
  }
}

export default Car;
