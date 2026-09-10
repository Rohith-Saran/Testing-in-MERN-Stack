import {describe, expect, test} from '@jest/globals';
import {sum} from '../index.js';

describe('sum module', () => {
  test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
  });
});

// If we are learning to write test in javascripts we should learn about describe and it.
//It does testing to all the ts files in src folders
// what is difference b/w testing and ci checks or both is the same ??