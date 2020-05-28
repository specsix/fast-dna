import { attr, booleanConverter, FASTElement } from "@microsoft/fast-element";
import { StartEnd } from "../patterns/start-end";
import { applyMixins } from "../utilities/apply-mixins";

export enum MenuItemRole {
    menuitem = "menuitem",
    menuitemcheckbox = "menuitemcheckbox",
    menuitemradio = "menuitemradio",
}

export class MenuItem extends FASTElement {
    @attr({ mode: "boolean" })
    public disabled: boolean;

    @attr({ attribute: "aria-expanded", mode: "reflect", converter: booleanConverter })
    public expanded: boolean = false;

    @attr
    public role: MenuItemRole = MenuItemRole.menuitem;

    @attr
    public checked: boolean;

    public handleMenuItemKeyDown = (e: KeyboardEvent): boolean => {
        console.log("hello from menu item...");
        this.change();

        return true;
    };

    public handleFocus = (e: FocusEvent) => {
        console.log("MenuItem handleFocus called e:", e);
    };

    public handleMenuItemClick = (e: MouseEvent): void => {
        this.change();
    };

    private change = (): void => {
        this.$emit("change");
    };
}

/* eslint-disable-next-line */
export interface MenuItem extends StartEnd {}
applyMixins(MenuItem, StartEnd);
