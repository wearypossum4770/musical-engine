const currency = number =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  }).format(number);
const totalExpenditure = arr =>
  currency(arr.reduce((accum, curr) => accum + curr.expenditureAmount, 0));
const weightedExpenditures = arr =>
  currency(
    arr.reduce((accum, curr) => accum + curr.accumulatedExpenditures, 0),
  );

class CapitalizeQualifyingAsset {
  constructor({ expenditureDate, expenditureAmount }) {
    this.expenditureDate = expenditureDate;
    this.expenditureAmount = expenditureAmount;
    this.date = new Date(this.expenditureDate);
    this.capitalizationPeriod = this._capitalizationPeriod();
    this.capitalizationPercentage = this.capitalizationPeriod / 12;
    this.accumulatedExpenditures =
      this.capitalizationPercentage * this.expenditureAmount;
    this.formattedAccumulatedExpenditures = currency(
      this.accumulatedExpenditures,
    );
  }
  _capitalizationPeriod() {
    let [date, month] = [this.date.getDate(), this.date.getMonth()];
    if (date > 1 && month === 11) {
      return 0;
    } else {
      return 12 - month;
    }
  }
}
let questionFive = [
  {
    expenditureDate: "July 1, 2020",
    expenditureAmount: 3_000_000,
  },
  {
    expenditureDate: "September 1, 2020",
    expenditureAmount: 6_300_000,
  },
  {
    expenditureDate: "December 31, 2020",
    expenditureAmount: 6_000_000,
  },
].map(item => new CapitalizeQualifyingAsset(item));
let obj = [
  {
    expenditureDate: "March 1, 2021",
    expenditureAmount: 240_000,
  },
  {
    expenditureDate: "July 1, 2021",
    expenditureAmount: 480_000,
  },
  {
    expenditureDate: "November 1, 2021",
    expenditureAmount: 360_000,
  },
].map(item => new CapitalizeQualifyingAsset(item));
obj.totalExpenditure = totalExpenditure(obj);
obj.weightedExpenditures = weightedExpenditures(obj);

questionFive.totalExpenditure = totalExpenditure(questionFive);
questionFive.weightedExpenditures = weightedExpenditures(questionFive);
console.log(questionFive);
