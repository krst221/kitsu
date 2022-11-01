import { CountryTransformPipe } from './country.pipe';

describe('CountryPipe', () => {
  it('create an instance', () => {
    const pipe = new CountryTransformPipe();
    expect(pipe).toBeTruthy();
  });
});
