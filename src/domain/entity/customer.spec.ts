import Address from "./address";
import Customer from "./customer";

describe("Customer unity tests", () => {
  it("should throw error when id is empty", () => {
    expect(() => {
      let customer = new Customer("", "Guilherme");
    }).toThrow("Id cannot be empty");
  });

  it("should throw error when name have name smaller than 3", () => {
    expect(() => {
      let customer = new Customer("1", "");
    }).toThrow("Name must be at least 3 characters long");
  });

  it("should change name", () => {
    let customer = new Customer("1", "Guilherme");
    customer.changeName("James");
    expect(customer.name).toEqual("James");
  });

  it("should activate customer", () => {
    const customer = new Customer("1", "Customer 1");
    const address = new Address("Street 1", 10, "387468-000", "New York");
    customer.Address = address;
    customer.activate();
    expect(customer.isActive()).toBe(true);
  });

  it("should deactivate customer", () => {
    const customer = new Customer("1", "Customer 1");
    customer.deactivate();
    expect(customer.isActive()).toBe(false);
  });

  it("should throw error when activating customer without address", () => {
    const customer = new Customer("1", "Customer 1");

    expect(() => {
      customer.activate();
    }).toThrow("Address cannot be empty");
  });

  it("should add reward points", () => {
    const customer = new Customer("1", "Customer 1");
    expect(customer.rewardPoints).toBe(0);

    customer.addRewardPoints(5);
    expect(customer.rewardPoints).toBe(5);

    customer.addRewardPoints(5);
    expect(customer.rewardPoints).toBe(10);
  });
});
