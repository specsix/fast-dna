import { html, ref, repeat, slotted, children } from "@microsoft/fast-element";
import { Carousel } from "./carousel";
import { FlipperDirection } from "../flipper";
import { TabsTemplate } from "../tabs";

export const TablistTemplate = html`
    ${repeat<Carousel>(
        x => x.getTabPanels(),
        html<Carousel>`<fast-tab slot="tab" id="tab-${(x, c) => c.index + 1}"
            ><div class="slide-tab"
        /></fast-tab>`,
        { positioning: true }
    )}
`;

export const CarouselTemplate = html<Carousel>`
<template
        class="carousel"
        aria-roledescription="carousel"
        tabindex="0"
        ${ref("carousel")}
    >
    </div>
        ${TabsTemplate}
        ${/*<slot ${slotted("items")}></slot>*/ ""}
        <slot name="play-toggle"></slot>
        <div class="previous-flipper" @click="${(x, c) =>
            x.handleFlipperClick(-1, c.event as MouseEvent)}">
            <slot name="previous-button">
                <fast-flipper direction=${FlipperDirection.previous}>
            </slot>
        </div>
        <div class="next-flipper" @click="${(x, c) =>
            x.handleFlipperClick(1, c.event as MouseEvent)}">
            <slot name="next-button">
                <fast-flipper direction=${FlipperDirection.next}>
            </slot>
        </div>
        ${
            /*<div role="tablist" class="slide-tabs" ${children("tabs")}>${repeat<Carousel>(
    x => x.filteredItems,
    html<Carousel>`<div class="slide-tab tab-${(x, c) => c.index + 1}" />`,
    { positioning: true }
)}*/ ""
        }
</template>
`;
