/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
 /* tslint:disable */

import * as import0 from '@angular/core/src/linker/ng_module_factory';
import * as import1 from './app.module';
import * as import2 from '@angular/common/src/common_module';
import * as import3 from '@angular/core/src/application_module';
import * as import4 from '@angular/platform-browser/src/browser';
import * as import5 from '@angular/router/src/router_module';
import * as import6 from './heroes-routing.module';
import * as import7 from './heroes.module';
import * as import8 from '@angular/common/src/localization';
import * as import9 from '@angular/core/src/application_init';
import * as import10 from '@angular/core/src/testability/testability';
import * as import11 from '@angular/core/src/application_ref';
import * as import12 from '@angular/core/src/linker/compiler';
import * as import13 from '@angular/platform-browser/src/dom/events/hammer_gestures';
import * as import14 from '@angular/platform-browser/src/dom/events/event_manager';
import * as import15 from '@angular/platform-browser/src/dom/shared_styles_host';
import * as import16 from '@angular/platform-browser/src/dom/dom_renderer';
import * as import17 from '@angular/platform-browser/src/security/dom_sanitization_service';
import * as import18 from '@angular/core/src/linker/view_utils';
import * as import19 from '@angular/platform-browser/src/browser/title';
import * as import20 from '@angular/common/src/location/location';
import * as import21 from '@angular/router/src/url_tree';
import * as import22 from '@angular/router/src/router_outlet_map';
import * as import23 from '@angular/core/src/linker/system_js_ng_module_factory_loader';
import * as import24 from '@angular/router/src/router_preloader';
import * as import25 from '@angular/core/src/di/injector';
import * as import26 from './hero-list.component.ngfactory';
import * as import27 from './app.component.ngfactory';
import * as import28 from '@angular/core/src/application_tokens';
import * as import29 from '@angular/platform-browser/src/dom/events/dom_events';
import * as import30 from '@angular/platform-browser/src/dom/events/key_events';
import * as import31 from '@angular/core/src/zone/ng_zone';
import * as import32 from '@angular/platform-browser/src/dom/debug/ng_probe';
import * as import33 from '@angular/common/src/location/platform_location';
import * as import34 from '@angular/common/src/location/location_strategy';
import * as import35 from './hero-list.component';
import * as import36 from '@angular/router/src/router';
import * as import37 from '@angular/core/src/console';
import * as import38 from '@angular/core/src/i18n/tokens';
import * as import39 from '@angular/core/src/error_handler';
import * as import40 from '@angular/platform-browser/src/dom/dom_tokens';
import * as import41 from '@angular/platform-browser/src/dom/animation_driver';
import * as import42 from '@angular/core/src/render/api';
import * as import43 from '@angular/core/src/security';
import * as import44 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import45 from '@angular/core/src/change_detection/differs/keyvalue_differs';
import * as import46 from '@angular/core/src/linker/ng_module_factory_loader';
import * as import47 from '@angular/router/src/router_config_loader';
import * as import48 from '@angular/router/src/router_state';
class AppModuleInjector extends import0.NgModuleInjector<import1.AppModule> {
  _CommonModule_0:import2.CommonModule;
  _ApplicationModule_1:import3.ApplicationModule;
  _BrowserModule_2:import4.BrowserModule;
  _ROUTER_FORROOT_GUARD_3:any;
  _RouterModule_4:import5.RouterModule;
  _HeroRoutingModule_5:import6.HeroRoutingModule;
  _HeroesModule_6:import7.HeroesModule;
  _AppModule_7:import1.AppModule;
  __LOCALE_ID_8:any;
  __NgLocalization_9:import8.NgLocaleLocalization;
  _ErrorHandler_10:any;
  _ApplicationInitStatus_11:import9.ApplicationInitStatus;
  _Testability_12:import10.Testability;
  _ApplicationRef__13:import11.ApplicationRef_;
  __ApplicationRef_14:any;
  __Compiler_15:import12.Compiler;
  __APP_ID_16:any;
  __DOCUMENT_17:any;
  __HAMMER_GESTURE_CONFIG_18:import13.HammerGestureConfig;
  __EVENT_MANAGER_PLUGINS_19:any[];
  __EventManager_20:import14.EventManager;
  __DomSharedStylesHost_21:import15.DomSharedStylesHost;
  __AnimationDriver_22:any;
  __DomRootRenderer_23:import16.DomRootRenderer_;
  __RootRenderer_24:any;
  __DomSanitizer_25:import17.DomSanitizerImpl;
  __Sanitizer_26:any;
  __ViewUtils_27:import18.ViewUtils;
  __IterableDiffers_28:any;
  __KeyValueDiffers_29:any;
  __SharedStylesHost_30:any;
  __Title_31:import19.Title;
  __ROUTER_CONFIGURATION_32:any;
  __LocationStrategy_33:any;
  __Location_34:import20.Location;
  __UrlSerializer_35:import21.DefaultUrlSerializer;
  __RouterOutletMap_36:import22.RouterOutletMap;
  __NgModuleFactoryLoader_37:import23.SystemJsNgModuleLoader;
  __ROUTES_38:any[];
  __Router_39:any;
  __ActivatedRoute_40:any;
  _NoPreloading_41:import24.NoPreloading;
  _PreloadingStrategy_42:any;
  _RouterPreloader_43:import24.RouterPreloader;
  __PreloadAllModules_44:import24.PreloadAllModules;
  __APP_BOOTSTRAP_LISTENER_45:any[];
  constructor(parent:import25.Injector) {
    super(parent,[
      import26.HeroListComponentNgFactory,
      import26.HeroListComponentNgFactory,
      import26.HeroListComponentNgFactory,
      import27.AppComponentNgFactory
    ]
    ,[import27.AppComponentNgFactory]);
  }
  get _LOCALE_ID_8():any {
    if ((this.__LOCALE_ID_8 == (null as any))) { (this.__LOCALE_ID_8 = 'en-US'); }
    return this.__LOCALE_ID_8;
  }
  get _NgLocalization_9():import8.NgLocaleLocalization {
    if ((this.__NgLocalization_9 == (null as any))) { (this.__NgLocalization_9 = new import8.NgLocaleLocalization(this._LOCALE_ID_8)); }
    return this.__NgLocalization_9;
  }
  get _ApplicationRef_14():any {
    if ((this.__ApplicationRef_14 == (null as any))) { (this.__ApplicationRef_14 = this._ApplicationRef__13); }
    return this.__ApplicationRef_14;
  }
  get _Compiler_15():import12.Compiler {
    if ((this.__Compiler_15 == (null as any))) { (this.__Compiler_15 = new import12.Compiler()); }
    return this.__Compiler_15;
  }
  get _APP_ID_16():any {
    if ((this.__APP_ID_16 == (null as any))) { (this.__APP_ID_16 = import28._appIdRandomProviderFactory()); }
    return this.__APP_ID_16;
  }
  get _DOCUMENT_17():any {
    if ((this.__DOCUMENT_17 == (null as any))) { (this.__DOCUMENT_17 = import4._document()); }
    return this.__DOCUMENT_17;
  }
  get _HAMMER_GESTURE_CONFIG_18():import13.HammerGestureConfig {
    if ((this.__HAMMER_GESTURE_CONFIG_18 == (null as any))) { (this.__HAMMER_GESTURE_CONFIG_18 = new import13.HammerGestureConfig()); }
    return this.__HAMMER_GESTURE_CONFIG_18;
  }
  get _EVENT_MANAGER_PLUGINS_19():any[] {
    if ((this.__EVENT_MANAGER_PLUGINS_19 == (null as any))) { (this.__EVENT_MANAGER_PLUGINS_19 = [
      new import29.DomEventsPlugin(),
      new import30.KeyEventsPlugin(),
      new import13.HammerGesturesPlugin(this._HAMMER_GESTURE_CONFIG_18)
    ]
    ); }
    return this.__EVENT_MANAGER_PLUGINS_19;
  }
  get _EventManager_20():import14.EventManager {
    if ((this.__EventManager_20 == (null as any))) { (this.__EventManager_20 = new import14.EventManager(this._EVENT_MANAGER_PLUGINS_19,this.parent.get(import31.NgZone))); }
    return this.__EventManager_20;
  }
  get _DomSharedStylesHost_21():import15.DomSharedStylesHost {
    if ((this.__DomSharedStylesHost_21 == (null as any))) { (this.__DomSharedStylesHost_21 = new import15.DomSharedStylesHost(this._DOCUMENT_17)); }
    return this.__DomSharedStylesHost_21;
  }
  get _AnimationDriver_22():any {
    if ((this.__AnimationDriver_22 == (null as any))) { (this.__AnimationDriver_22 = import4._resolveDefaultAnimationDriver()); }
    return this.__AnimationDriver_22;
  }
  get _DomRootRenderer_23():import16.DomRootRenderer_ {
    if ((this.__DomRootRenderer_23 == (null as any))) { (this.__DomRootRenderer_23 = new import16.DomRootRenderer_(this._DOCUMENT_17,this._EventManager_20,this._DomSharedStylesHost_21,this._AnimationDriver_22)); }
    return this.__DomRootRenderer_23;
  }
  get _RootRenderer_24():any {
    if ((this.__RootRenderer_24 == (null as any))) { (this.__RootRenderer_24 = import32._createConditionalRootRenderer(this._DomRootRenderer_23,this.parent.get(import32.NgProbeToken,(null as any)))); }
    return this.__RootRenderer_24;
  }
  get _DomSanitizer_25():import17.DomSanitizerImpl {
    if ((this.__DomSanitizer_25 == (null as any))) { (this.__DomSanitizer_25 = new import17.DomSanitizerImpl()); }
    return this.__DomSanitizer_25;
  }
  get _Sanitizer_26():any {
    if ((this.__Sanitizer_26 == (null as any))) { (this.__Sanitizer_26 = this._DomSanitizer_25); }
    return this.__Sanitizer_26;
  }
  get _ViewUtils_27():import18.ViewUtils {
    if ((this.__ViewUtils_27 == (null as any))) { (this.__ViewUtils_27 = new import18.ViewUtils(this._RootRenderer_24,this._APP_ID_16,this._Sanitizer_26)); }
    return this.__ViewUtils_27;
  }
  get _IterableDiffers_28():any {
    if ((this.__IterableDiffers_28 == (null as any))) { (this.__IterableDiffers_28 = import3._iterableDiffersFactory()); }
    return this.__IterableDiffers_28;
  }
  get _KeyValueDiffers_29():any {
    if ((this.__KeyValueDiffers_29 == (null as any))) { (this.__KeyValueDiffers_29 = import3._keyValueDiffersFactory()); }
    return this.__KeyValueDiffers_29;
  }
  get _SharedStylesHost_30():any {
    if ((this.__SharedStylesHost_30 == (null as any))) { (this.__SharedStylesHost_30 = this._DomSharedStylesHost_21); }
    return this.__SharedStylesHost_30;
  }
  get _Title_31():import19.Title {
    if ((this.__Title_31 == (null as any))) { (this.__Title_31 = new import19.Title()); }
    return this.__Title_31;
  }
  get _ROUTER_CONFIGURATION_32():any {
    if ((this.__ROUTER_CONFIGURATION_32 == (null as any))) { (this.__ROUTER_CONFIGURATION_32 = {}); }
    return this.__ROUTER_CONFIGURATION_32;
  }
  get _LocationStrategy_33():any {
    if ((this.__LocationStrategy_33 == (null as any))) { (this.__LocationStrategy_33 = import5.provideLocationStrategy(this.parent.get(import33.PlatformLocation),this.parent.get(import34.APP_BASE_HREF,(null as any)),this._ROUTER_CONFIGURATION_32)); }
    return this.__LocationStrategy_33;
  }
  get _Location_34():import20.Location {
    if ((this.__Location_34 == (null as any))) { (this.__Location_34 = new import20.Location(this._LocationStrategy_33)); }
    return this.__Location_34;
  }
  get _UrlSerializer_35():import21.DefaultUrlSerializer {
    if ((this.__UrlSerializer_35 == (null as any))) { (this.__UrlSerializer_35 = new import21.DefaultUrlSerializer()); }
    return this.__UrlSerializer_35;
  }
  get _RouterOutletMap_36():import22.RouterOutletMap {
    if ((this.__RouterOutletMap_36 == (null as any))) { (this.__RouterOutletMap_36 = new import22.RouterOutletMap()); }
    return this.__RouterOutletMap_36;
  }
  get _NgModuleFactoryLoader_37():import23.SystemJsNgModuleLoader {
    if ((this.__NgModuleFactoryLoader_37 == (null as any))) { (this.__NgModuleFactoryLoader_37 = new import23.SystemJsNgModuleLoader(this._Compiler_15,this.parent.get(import23.SystemJsNgModuleLoaderConfig,(null as any)))); }
    return this.__NgModuleFactoryLoader_37;
  }
  get _ROUTES_38():any[] {
      if ((this.__ROUTES_38 == (null as any))) { (this.__ROUTES_38 = [[
        {
          path: '',
          component: import35.HeroListComponent
        }
        ,
        {
          path: 'heroes',
          component: import35.HeroListComponent
        }
        ,
        {
          path: '**',
          component: import35.HeroListComponent
        }

      ]
    ]); }
    return this.__ROUTES_38;
  }
  get _Router_39():any {
    if ((this.__Router_39 == (null as any))) { (this.__Router_39 = import5.setupRouter(this._ApplicationRef_14,this._UrlSerializer_35,this._RouterOutletMap_36,this._Location_34,this,this._NgModuleFactoryLoader_37,this._Compiler_15,this._ROUTES_38,this._ROUTER_CONFIGURATION_32)); }
    return this.__Router_39;
  }
  get _ActivatedRoute_40():any {
    if ((this.__ActivatedRoute_40 == (null as any))) { (this.__ActivatedRoute_40 = import5.rootRoute(this._Router_39)); }
    return this.__ActivatedRoute_40;
  }
  get _PreloadAllModules_44():import24.PreloadAllModules {
    if ((this.__PreloadAllModules_44 == (null as any))) { (this.__PreloadAllModules_44 = new import24.PreloadAllModules()); }
    return this.__PreloadAllModules_44;
  }
  get _APP_BOOTSTRAP_LISTENER_45():any[] {
    if ((this.__APP_BOOTSTRAP_LISTENER_45 == (null as any))) { (this.__APP_BOOTSTRAP_LISTENER_45 = [import5.initialRouterNavigation(this._Router_39,this._ApplicationRef_14,this._RouterPreloader_43,this._ROUTER_CONFIGURATION_32)]); }
    return this.__APP_BOOTSTRAP_LISTENER_45;
  }
  createInternal():import1.AppModule {
    this._CommonModule_0 = new import2.CommonModule();
    this._ApplicationModule_1 = new import3.ApplicationModule();
    this._BrowserModule_2 = new import4.BrowserModule(this.parent.get(import4.BrowserModule,(null as any)));
    this._ROUTER_FORROOT_GUARD_3 = import5.provideForRootGuard(this.parent.get(import36.Router,(null as any)));
    this._RouterModule_4 = new import5.RouterModule(this._ROUTER_FORROOT_GUARD_3);
    this._HeroRoutingModule_5 = new import6.HeroRoutingModule();
    this._HeroesModule_6 = new import7.HeroesModule();
    this._AppModule_7 = new import1.AppModule();
    this._ErrorHandler_10 = import4.errorHandler();
    this._ApplicationInitStatus_11 = new import9.ApplicationInitStatus(this.parent.get(import9.APP_INITIALIZER,(null as any)));
    this._Testability_12 = new import10.Testability(this.parent.get(import31.NgZone));
    this._ApplicationRef__13 = new import11.ApplicationRef_(this.parent.get(import31.NgZone),this.parent.get(import37.Console),this,this._ErrorHandler_10,this,this._ApplicationInitStatus_11,this.parent.get(import10.TestabilityRegistry,(null as any)),this._Testability_12);
    this._NoPreloading_41 = new import24.NoPreloading();
    this._PreloadingStrategy_42 = this._NoPreloading_41;
    this._RouterPreloader_43 = new import24.RouterPreloader(this._Router_39,this._NgModuleFactoryLoader_37,this._Compiler_15,this,this._PreloadingStrategy_42);
    return this._AppModule_7;
  }
  getInternal(token:any,notFoundResult:any):any {
    if ((token === import2.CommonModule)) { return this._CommonModule_0; }
    if ((token === import3.ApplicationModule)) { return this._ApplicationModule_1; }
    if ((token === import4.BrowserModule)) { return this._BrowserModule_2; }
    if ((token === import5.ROUTER_FORROOT_GUARD)) { return this._ROUTER_FORROOT_GUARD_3; }
    if ((token === import5.RouterModule)) { return this._RouterModule_4; }
    if ((token === import6.HeroRoutingModule)) { return this._HeroRoutingModule_5; }
    if ((token === import7.HeroesModule)) { return this._HeroesModule_6; }
    if ((token === import1.AppModule)) { return this._AppModule_7; }
    if ((token === import38.LOCALE_ID)) { return this._LOCALE_ID_8; }
    if ((token === import8.NgLocalization)) { return this._NgLocalization_9; }
    if ((token === import39.ErrorHandler)) { return this._ErrorHandler_10; }
    if ((token === import9.ApplicationInitStatus)) { return this._ApplicationInitStatus_11; }
    if ((token === import10.Testability)) { return this._Testability_12; }
    if ((token === import11.ApplicationRef_)) { return this._ApplicationRef__13; }
    if ((token === import11.ApplicationRef)) { return this._ApplicationRef_14; }
    if ((token === import12.Compiler)) { return this._Compiler_15; }
    if ((token === import28.APP_ID)) { return this._APP_ID_16; }
    if ((token === import40.DOCUMENT)) { return this._DOCUMENT_17; }
    if ((token === import13.HAMMER_GESTURE_CONFIG)) { return this._HAMMER_GESTURE_CONFIG_18; }
    if ((token === import14.EVENT_MANAGER_PLUGINS)) { return this._EVENT_MANAGER_PLUGINS_19; }
    if ((token === import14.EventManager)) { return this._EventManager_20; }
    if ((token === import15.DomSharedStylesHost)) { return this._DomSharedStylesHost_21; }
    if ((token === import41.AnimationDriver)) { return this._AnimationDriver_22; }
    if ((token === import16.DomRootRenderer)) { return this._DomRootRenderer_23; }
    if ((token === import42.RootRenderer)) { return this._RootRenderer_24; }
    if ((token === import17.DomSanitizer)) { return this._DomSanitizer_25; }
    if ((token === import43.Sanitizer)) { return this._Sanitizer_26; }
    if ((token === import18.ViewUtils)) { return this._ViewUtils_27; }
    if ((token === import44.IterableDiffers)) { return this._IterableDiffers_28; }
    if ((token === import45.KeyValueDiffers)) { return this._KeyValueDiffers_29; }
    if ((token === import15.SharedStylesHost)) { return this._SharedStylesHost_30; }
    if ((token === import19.Title)) { return this._Title_31; }
    if ((token === import5.ROUTER_CONFIGURATION)) { return this._ROUTER_CONFIGURATION_32; }
    if ((token === import34.LocationStrategy)) { return this._LocationStrategy_33; }
    if ((token === import20.Location)) { return this._Location_34; }
    if ((token === import21.UrlSerializer)) { return this._UrlSerializer_35; }
    if ((token === import22.RouterOutletMap)) { return this._RouterOutletMap_36; }
    if ((token === import46.NgModuleFactoryLoader)) { return this._NgModuleFactoryLoader_37; }
    if ((token === import47.ROUTES)) { return this._ROUTES_38; }
    if ((token === import36.Router)) { return this._Router_39; }
    if ((token === import48.ActivatedRoute)) { return this._ActivatedRoute_40; }
    if ((token === import24.NoPreloading)) { return this._NoPreloading_41; }
    if ((token === import24.PreloadingStrategy)) { return this._PreloadingStrategy_42; }
    if ((token === import24.RouterPreloader)) { return this._RouterPreloader_43; }
    if ((token === import24.PreloadAllModules)) { return this._PreloadAllModules_44; }
    if ((token === import28.APP_BOOTSTRAP_LISTENER)) { return this._APP_BOOTSTRAP_LISTENER_45; }
    return notFoundResult;
  }
  destroyInternal():void {
    this._ApplicationRef__13.ngOnDestroy();
    this._RouterPreloader_43.ngOnDestroy();
  }
}
export const AppModuleNgFactory:import0.NgModuleFactory<import1.AppModule> = new import0.NgModuleFactory(AppModuleInjector,import1.AppModule);