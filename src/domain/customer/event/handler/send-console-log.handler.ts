import Customer from "../../entity/customer";
import EventHandlerInterface from "../../../@shared/event/event-handler.interface";
import EventInterface from "../../../@shared/event/event.interface";

export default class EnviaConsoleLogHandler implements EventHandlerInterface {
  handle(event: EventInterface<Customer>): void {
    const { Address, id, name } = event.eventData;
    console.log(
      `Endereço do cliente: ${id}, ${name} alterado para: ${Address.street} - ${Address.city} ,${Address.number}.`
    );
  }
}
