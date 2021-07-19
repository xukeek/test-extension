import { h, render, Component } from "preact";

let Header = () => {
  return (
    <header class="h-24 bg-blue-200">This is header by Preact</header>
  )
}

document.addEventListener("DOMContentLoaded", () => {
  render(<Header />, document.body);
});