import { DurationPipe } from "./duration.pipe";

describe('DurationPipe', () => {
  const pipe = new DurationPipe();
  
  it('transform date', () => {
    expect(pipe.transform(1000)).toBe('3:00');
  });
});
