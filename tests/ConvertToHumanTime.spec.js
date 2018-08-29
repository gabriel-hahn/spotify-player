import { expect } from 'chai';
import convertoToHumanTime from '../src/ConvertToHumanTime';

describe('ConvertToHumanTime', () => {
  // 0ms -> 0:00
  it('Should receive 0ms and convert to 0:00', () => {
    expect(convertoToHumanTime(0)).to.be.equal('0:00');
  });

  // 10000ms -> 0:01
  it('Should receive 1000ms and convert to 0:01', () => {
    expect(convertoToHumanTime(1000)).to.be.equal('0:01');
  });

  // 11000ms -> 0:11
  it('Should receive 11000ms and convert to 0:11', () => {
    expect(convertoToHumanTime(11000)).to.be.equal('0:11');
  });

  // 60000ms -> 1:00
  it('Should receive 60000ms and convert to 1:00', () => {
    expect(convertoToHumanTime(60000)).to.be.equal('1:00');
  });
});
