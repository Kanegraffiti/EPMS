export function notify(message, type = "success") {
  window.dispatchEvent(new CustomEvent("epmsNotice", { detail: { message, type } }));
}
