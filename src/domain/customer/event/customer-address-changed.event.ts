import Customer from "../entity/customer";
import EventInterface from "../../@shared/event/event.interface";

export default class CustomerAddressChangedEvent
  implements EventInterface<Customer>
{
  dataTimeOccurred: Date;
  eventData: Customer;

  constructor(eventData: Customer) {
    this.dataTimeOccurred = new Date();
    this.eventData = eventData;
  }
}
