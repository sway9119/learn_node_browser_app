// 型定義
type Listeners = {
  [id: string]: {
    event: string;
    element: HTMLElement;
    handler: (e: Event) => void;
  };
};

export class EventListener {
  private readonly listeners: Listeners = {};

  // イベントハンドラを追加する
  // listenerId; "sample",
  // event: "click",
  // element: button,
  // handler: () => alert("clicked"));
  add(
    listenerId: string,
    event: string,
    element: HTMLElement,
    handler: (e: Event) => void
  ) {
    this.listeners[listenerId] = {
      event,
      element,
      handler,
    };

    element.addEventListener(event, handler);
  }

  // イベントハンドラを削除する
  remove(listenerId: string) {
    const listener = this.listeners[listenerId];

    if (!listener) return;
    listener.element.removeEventListener(listener.event, listener.handler);
    delete this.listeners[listenerId];
  }
}
