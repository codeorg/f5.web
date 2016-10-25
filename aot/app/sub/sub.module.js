"use strict";
var core_1 = require("@angular/core");
var sub_routing_1 = require("./sub.routing");
var sub_app_component_1 = require("./sub-app.component");
var sub_home_component_1 = require("./sub-home.component");
var SubModule = (function () {
    function SubModule() {
    }
    SubModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [
                        sub_routing_1.subRouting,
                    ],
                    declarations: [
                        sub_app_component_1.SubAppComponent,
                        sub_home_component_1.SubHomeComponent,
                    ],
                },] },
    ];
    SubModule.ctorParameters = [];
    return SubModule;
}());
exports.SubModule = SubModule;
//# sourceMappingURL=sub.module.js.map