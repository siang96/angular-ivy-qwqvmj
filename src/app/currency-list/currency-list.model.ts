export class Currency {
  countryCode: string;
  countryName: string;
  currencyCode: string;
  population: string;
  capital: string;
  continentName: string;
  constructor(currency?: Currency) {
    this.countryCode = null;
    this.countryName = null;
    this.currencyCode = null;
    this.population = null;
    this.capital = null;
    this.continentName = null;
    if (currency) Object.assign(this, currency);
  }
}
