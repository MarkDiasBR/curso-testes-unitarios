import calculator from "../../src/calculator";

describe("When given all the required parameters", () => {
  it("should sum two elements correctly", async () => {
    let result = calculator.sum(0, 0);
    expect(result).toBe(0);

    result = calculator.sum(1, 0);
    expect(result).toBe(1);

    result = calculator.sum(0, 1);
    expect(result).toBe(1);

    result = calculator.sum(1, 1);
    expect(result).toBe(2);
  });

  it("should subtract two elements correctly", async () => {
    let result = calculator.sub(0, 0);
    expect(result).toBe(0);

    result = calculator.sub(1, 0);
    expect(result).toBe(1);

    result = calculator.sub(0, 1);
    expect(result).toBe(-1);

    result = calculator.sub(1, 1);
    expect(result).toBe(0);
  });

  it("should multiply two elements correctly", async () => {
    let result = calculator.mul(0, 0);
    expect(result).toBe(0);

    result = calculator.mul(1, 0);
    expect(result).toBe(0);

    result = calculator.mul(0, 1);
    expect(result).toBe(0);

    result = calculator.mul(1, 1);
    expect(result).toBe(1);
  });

  it("should divide two elements correctly", async () => {
    let result = calculator.div(0, 0);
    expect(result).toBe(0);

    result = calculator.div(1, 0);
    expect(result).toBe(0);

    result = calculator.div(0, 1);
    expect(result).toBe(0);

    result = calculator.div(1, 1);
    expect(result).toBe(1);
  });
});
