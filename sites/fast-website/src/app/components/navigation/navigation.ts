import { FASTElement, observable } from "@microsoft/fast-element";
import { applyMixins, StartEnd } from "@microsoft/fast-foundation";

export class Navigation extends FASTElement {
    @observable
    public opened: boolean = false;

    @observable
    public debounce: boolean = true;

    private mediaQueryList: MediaQueryList;

    private mqlListener = (e: MediaQueryListEvent): void => {
        this.debounce = true;

        if (!e.matches) {
            this.opened = false;
        }
    };

    constructor() {
        super();

        this.mediaQueryList = window.matchMedia("screen and (max-width: 800px)");
        this.mediaQueryList.addListener(this.mqlListener);
    }

    public handleOpenNavClick = (e: Event): void => {
        const htmlElement = document.body.parentElement as HTMLElement;
        const widthOffset = window.innerWidth - document.body.clientWidth;

        this.opened = !this.opened;
        this.debounce = false;

        htmlElement.style.setProperty("--width-offset", `${widthOffset}`);
        htmlElement.classList.toggle("menu-opened", this.opened);
    };
}

/* eslint-disable-next-line */
export interface Navigation extends StartEnd {}
applyMixins(Navigation, StartEnd);
