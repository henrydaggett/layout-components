import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'h-flex',
  styleUrl: 'h-flex.css',
  shadow: true,
})
export class HFlex {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
