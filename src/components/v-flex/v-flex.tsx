import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'v-flex',
  styleUrl: 'v-flex.css',
  shadow: true,
})
export class VFlex {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
