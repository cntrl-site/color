export class ParseError {
  static merge(errors: ParseError[], index: number) {
    return new ParseError([
      'Multiple errors occured:',
      ...errors.map(err => err.toString())
    ].join('\n'), index);
  }

  public readonly name = 'ParseError';
  public readonly message: string;

  constructor(
    message: string,
    public index: number
  ) {
    this.message = `${message} at ${index}`;
  }

  toString() {
    return `${this.name}: ${this.message} at ${this.index}`;
  }

  toError() {
    return Object.assign(new Error(this.message), { name: this.name, index: this.index });
  }
}
