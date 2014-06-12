describe("Math Functions", function () {
    var result;

    it("should add numbers properly", function() {
      result = add (2, 3);
      expect(result).toBe(5);
    });

    it("should subtract numbers properly", function() {
      result = subtract (5, 1);
      expect(result).toBe(4);
    });

    it("should multiply numbers properly", function() {
      result = multiply (4, 6);
      expect(result).toBe(24);
    });

    it("should divide numbers properly", function() {
      result = divide (30, 10);
      expect(result).toBe(3);
    });

    it("should calculate exponents properly", function() {
      result = power (12, 2);
      expect(result).toBe(144);
    });

    it("should solve test addition problem 1", function() {
      result = test_add_1();
      expect(result).toBe(9);
    });


    it("should solve test addition problem 2", function() {
      result = test_add_2();
      expect(result).toBe(12);
    });

    it("should solve test subtraction problem 1", function() {
      result = test_subtract_1();
      expect(result).toBe(1);
    });

    it("should solve test subtraction problem 2", function() {
      result = test_subtract_2();
      expect(result).toBe(2);
    });


});