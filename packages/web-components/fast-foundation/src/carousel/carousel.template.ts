import { html, ref, repeat, slotted, children } from "@microsoft/fast-element";
import { Carousel } from "./carousel";
import { FlipperDirection } from "../flipper";

export const CarouselTemplate = html<Carousel>`
<template>
    <div
        class="carousel"
        aria-roledescription="carousel"
        tabindex="-1"
        ${ref("carousel")}
    >
        <slot ${slotted("items")}></slot>
        <slot name="play-toggle"></slot>
        <div class="previous-flipper">
            <slot name="previous-button">
                <fast-flipper direction=${FlipperDirection.previous}>
            </slot>
        </div>
        <div class="next-flipper">
            <slot name="next-button">
                <fast-flipper direction=${FlipperDirection.next}>
            </slot>
        </div>
        <div class="slide-tabs" ${children("tabs")}>${repeat<Carousel>(
    x => x.filteredItems,
    html<Carousel>`<div class="slide-tab tab-${(x, c) => c.index + 1}" />`,
    { positioning: true }
)}
        </div>    
    </div>
</template>
`;
