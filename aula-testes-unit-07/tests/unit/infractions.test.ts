import * as userRepository from "../../src/users-repository";
import * as infractionsRepository from "../../src/infractions-repository";
import * as infractionsService from "../../src/infractions-service";
import { mockUser } from "./mock";

beforeEach(() => {
  jest.clearAllMocks();
  jest.resetAllMocks();
})

describe("Infractions Service Tests", () => {
  it("should get infractions from user", async () => {
    const { infractions, ...userData } = mockUser.createRandomUser();

    jest.spyOn(userRepository, "getUserByDocument").mockImplementationOnce((): any => {
      return userData;
    });

    jest.spyOn(infractionsRepository, "getInfractionsFrom").mockImplementation((): any => {
      return infractions;
    });

    const result = await infractionsService.getInfractionsFrom(userData.licenseId);

    expect(userRepository.getUserByDocument).toBeCalledTimes(1);
    expect(infractionsRepository.getInfractionsFrom).toBeCalledTimes(1);
    expect(result).toEqual({ infractions, ...userData });
  }); 

  it("should throw an error when driver license does not exists", () => {
    jest.spyOn(userRepository, "getUserByDocument").mockImplementationOnce((licenseId: string): any => {
      return null;
    });

    const result = infractionsService.getInfractionsFrom("invalidLicenseId");

    expect(userRepository.getUserByDocument).toBeCalledTimes(1);
    expect(result).rejects.toEqual({ type: "NOT_FOUND", message: "Driver not found." });
  });
});