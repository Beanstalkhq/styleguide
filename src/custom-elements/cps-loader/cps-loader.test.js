import { makeDots, makeDot, determineDotWidth, getOccasion } from './cps-loader.helper.js';

describe(`cps-loader.js`, () => {

  describe(`creating dots`, () => {
    it(`only creates 3 dots`, () => {
      expect(makeDots({}).length).toBe(3);
    });

    it(`defaults to 8 pixels`, () => {
      expect(determineDotWidth({})).toBe(8);
    });

    it(`defaults to 42 pixels when the page attribute is set`, () => {
      expect(determineDotWidth({ page: true })).toBe(42);
    });

    it(`respects the dotSize attribute`, () => {
      expect(determineDotWidth({ dotSize: 24 })).toBe(24);
    });

    it(`gives priority to the dotSize attribute over the page attribute`, () => {
      expect(determineDotWidth({ page: true, dotSize: 24 })).toBe(24);
    });

  })

  describe(`getOccasion`, () => {
    it(`should return december`, () => {
      // disabled because we've temporarily removed the december loader
      // window.spalpatineInitialTime = 1512158983477
      // expect(getOccasion()).toBe('december')
      // window.spalpatineInitialTime = undefined
    })
  })
});
