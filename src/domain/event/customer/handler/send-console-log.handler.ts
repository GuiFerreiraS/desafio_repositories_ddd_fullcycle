import Customer from "../../../entity/customer";
import EventHandlerInterface from "../../@shared/event-handler.interface";
import EventInterface from "../../@shared/event.interface";
import CustomerAddressChangedEvent from "../customer-address-changed.event";

export default class EnviaConsoleLogHandler
  implements EventHandlerInterface<CustomerAddressChangedEvent>
{
  handle(event: CustomerAddressChangedEvent): void {
    const { Address, id, name } = event.eventData;
    console.log(
      `Endereço do cliente: ${id}, ${name} alterado para: ${Address.street} - ${Address.city} ,${Address.number}.`
    );
  }
}
