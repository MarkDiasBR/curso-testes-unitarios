import { faker } from "@faker-js/faker";
import { generateProtocolForPacient } from "protocols-generator";

jest.mock("uuid", () => ( {v4: () => "mock protocol"} ));

describe("Protocol generation test", () => {

  it("should create a protocol", async () => {
    const firstName = faker.person.firstName();
    const lastName = faker.person.lastName();
    const priority = faker.datatype.boolean();
    const protocol = generateProtocolForPacient(firstName, lastName, priority);
    expect(protocol).toEqual(
      {
        priority,
        date: expect.any(Date),
        pacient: `${firstName} ${lastName}`,
        protocol: "mock protocol"
      }
    )
  });
});