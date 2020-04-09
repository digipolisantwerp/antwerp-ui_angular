export class Filter {
  public id: string;
  public name: string;
  public options: any[];
  public value: string | any[];
  public parse: (data: any[], value: any) => any[];

  public parseData(data) {
    return this.parse(data, this.value);
  }
}
