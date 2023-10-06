import { faker } from "@faker-js/faker";

import { createOrder, getOrderByProtocol } from "../../src/order-service";
import * as orderRepository from "../../src/order-repository";
import { OrderInput } from "../../src/validator";

beforeEach(() => {
  jest.clearAllMocks();
});

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

    jest.spyOn(orderRepository, "create").mockImplementationOnce((): any => {
      return orderOutput
    })

    const result = await createOrder(orderInput);

    expect(orderRepository.create).toBeCalledTimes(1);
    expect(result).toEqual(orderOutput);
  });

  it("should return an order based on the protocol", async () => {
    jest.spyOn(orderRepository, "getByProtocol").mockImplementationOnce((protocol): any => {
      return {
        protocol,
        status: "IN_PREPARATION"
      }
    });

    const protocol = "fake protocol";

    const result = await getOrderByProtocol(protocol);

    expect(orderRepository.getByProtocol).toBeCalledTimes(1);
    expect(result).toEqual(
      {
        protocol,
        status: "IN_PREPARATION"
      }
    );
  });

  it("should return status INVALID when protocol doesn't exists", async () => {
    const mock = jest.spyOn(orderRepository, "getByProtocol");
    mock.mockImplementationOnce((): any => {
      return undefined;
    });

    const protocol = "does_not_exists_protocol";
    const order = await getOrderByProtocol(protocol);
    expect(orderRepository.getByProtocol).toBeCalledTimes(1);
    expect(order).toEqual({
      protocol,
      status: "INVALID"
    });
  });
});