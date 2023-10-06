import { faker } from "@faker-js/faker";

import { createOrder, getOrderByProtocol } from "../../src/order-service";
import * as orderRepository from "../../src/order-repository";
import { OrderInput } from "../../src/validator";

describe("Order Service Tests", () => {
  it("should create an order", async () => {
    const orderInput: OrderInput = {
      client: faker.person.firstName(),
      description: faker.commerce.productDescription()
    }

    const orderOutput = {
      protocol: "fake protocol",
      status: "IN_PREPARATION"
    }

    jest.spyOn(orderRepository, "create").mockImplementation((): any => {
      return orderOutput
    })

    const order = await createOrder(orderInput);

    expect(orderRepository.create).toBeCalledTimes(1);
    expect(order).toEqual(orderOutput);
  });

  it("should return an order based on the protocol", async () => {
    // TODO
    expect(true).toBe(true);
  });

  it("should return status INVALID when protocol doesn't exists", async () => {
    // TODO
    expect(true).toBe(true);
  });
});