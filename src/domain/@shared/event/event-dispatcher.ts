import EventDispatcherInterface from "./event-dispatcher.interface";
import EventHandlerInterface from "./event-handler.interface";
import EventInterface from "./event.interface";

export default class EventDispatcher implements EventDispatcherInterface {
  private eventHandlers: { [eventName: string]: EventHandlerInterface[] } = {};

  get getEventHandlers(): { [eventName: string]: EventHandlerInterface[] } {
    return this.eventHandlers;
  }

  notify(event: EventInterface): void {
    const eventName = event.constructor.name;
    const eventHandlers = this.getEventHandlers[eventName];

    if (eventHandlers) {
      eventHandlers.forEach((eventHandler) => {
        eventHandler.handle(event);
      });
    }
  }

  register(
    eventName: string,
    eventHandler: EventHandlerInterface<EventInterface>
  ): void {
    if (!this.eventHandlers[eventName]) {
      this.eventHandlers[eventName] = [];
    }
    this.eventHandlers[eventName].push(eventHandler);
  }

  unregister(
    eventName: string,
    eventHandler: EventHandlerInterface<EventInterface>
  ): void {
    if (this.eventHandlers[eventName]) {
      this.eventHandlers[eventName] = this.eventHandlers[eventName].filter(
        (handler) => handler !== eventHandler
      );
    }
  }

  unregisterAll(): void {
    this.eventHandlers = {};
  }
}
