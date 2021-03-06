/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface HFlex {
    }
    interface VFlex {
    }
}
declare global {
    interface HTMLHFlexElement extends Components.HFlex, HTMLStencilElement {
    }
    var HTMLHFlexElement: {
        prototype: HTMLHFlexElement;
        new (): HTMLHFlexElement;
    };
    interface HTMLVFlexElement extends Components.VFlex, HTMLStencilElement {
    }
    var HTMLVFlexElement: {
        prototype: HTMLVFlexElement;
        new (): HTMLVFlexElement;
    };
    interface HTMLElementTagNameMap {
        "h-flex": HTMLHFlexElement;
        "v-flex": HTMLVFlexElement;
    }
}
declare namespace LocalJSX {
    interface HFlex {
    }
    interface VFlex {
    }
    interface IntrinsicElements {
        "h-flex": HFlex;
        "v-flex": VFlex;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "h-flex": LocalJSX.HFlex & JSXBase.HTMLAttributes<HTMLHFlexElement>;
            "v-flex": LocalJSX.VFlex & JSXBase.HTMLAttributes<HTMLVFlexElement>;
        }
    }
}
