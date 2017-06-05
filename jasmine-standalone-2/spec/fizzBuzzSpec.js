describe("Fizzbuzz", function() {

  var fizzbuzz;

  beforeEach(function() {
    fizzbuzz = new Fizzbuzz();
  });

  describe('multiples of 3', function() {
    it ('"Fizz" when number is 3', function() {
      expect(fizzbuzz.says(3)).toEqual("Fizz");
    });

    it ('"Fizz" when number is 6', function() {
      expect(fizzbuzz.says(6)).toEqual("Fizz");
    });

    it ('"Fizz" when number is 36', function() {
      expect(fizzbuzz.says(36)).toEqual("Fizz");
    });
  });

  describe('multiples of 5', function() {
    it('"Buzz" when number is 5', function() {
      expect(fizzbuzz.says(5)).toEqual("Buzz");
    });

    it('"Buzz" when number is 25', function() {
      expect(fizzbuzz.says(25)).toEqual("Buzz");
    });

    it('"Buzz" when number is 50', function() {
      expect(fizzbuzz.says(50)).toEqual("Buzz");
    });
  });

  describe('multiples of 3 and 5', function() {
    it ('"Fizzbuzz" when number is 15', function() {
      expect(fizzbuzz.says(15)).toEqual("Fizzbuzz");
    });

    it ('"Fizzbuzz" when number is 30', function() {
      expect(fizzbuzz.says(30)).toEqual("Fizzbuzz");
    });

    it ('"Fizzbuzz" when number is 75', function() {
      expect(fizzbuzz.says(75)).toEqual("Fizzbuzz");
    });
  });

  describe('multiples of neither 3 nor 5', function() {
    it ('Number when it is 8', function() {
      expect(fizzbuzz.says(8)).toEqual(8);
    });

    it ('Number when it is 11', function() {
      expect(fizzbuzz.says(11)).toEqual(11);
    });
  });

});
