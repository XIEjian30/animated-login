"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Checkbox = Checkbox;
var React = require("react");
var radix_ui_1 = require("radix-ui");
var utils_1 = require("@/lib/utils");
var react_1 = require("@hugeicons/react");
var core_free_icons_1 = require("@hugeicons/core-free-icons");
function Checkbox(_a) {
    var className = _a.className, props = __rest(_a, ["className"]);
    return (<radix_ui_1.Checkbox.Root data-slot="checkbox" className={(0, utils_1.cn)("peer relative flex size-4 shrink-0 items-center justify-center rounded-[6px] border border-input transition-shadow outline-none group-has-disabled/field:opacity-50 after:absolute after:-inset-x-3 after:-inset-y-2 focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-[3px] aria-invalid:ring-destructive/20 aria-invalid:aria-checked:border-primary dark:bg-input/30 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 data-checked:border-primary data-checked:bg-primary data-checked:text-primary-foreground dark:data-checked:bg-primary", className)} {...props}>
      <radix_ui_1.Checkbox.Indicator data-slot="checkbox-indicator" className="grid place-content-center text-current transition-none [&>svg]:size-3.5">
        <react_1.HugeiconsIcon icon={core_free_icons_1.Tick02Icon} strokeWidth={2}/>
      </radix_ui_1.Checkbox.Indicator>
    </radix_ui_1.Checkbox.Root>);
}
