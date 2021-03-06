export default class IncludeFragmentElement extends HTMLElement {
  readonly data: Promise<string>;
  src: string;
  accept: string;
  fetch(request: Request): Promise<Response>;
}

declare global {
  interface Window {
    IncludeFragmentElement: typeof IncludeFragmentElement
  }
  interface HTMLElementTagNameMap {
    'include-fragment': IncludeFragmentElement
  }
}