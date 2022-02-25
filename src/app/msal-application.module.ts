// import { ConfigsLoaderService } from './shared/configs-loader.service';
// import { APP_INITIALIZER, NgModule } from '@angular/core';
// import { MSAL_CONFIG, MSAL_CONFIG_ANGULAR, MsalAngularConfiguration, MsalService, MsalModule } from '@azure/msal-angular';
// import { Configuration } from 'msal';

// function MSALConfigFactory(configsLoaderService: ConfigsLoaderService): Configuration {
//   const authority = 'https://login.microsoftonline.com/' + configsLoaderService.AZURE_AD_TENENTID;
//   return {
//     auth: {
//       clientId: configsLoaderService.AZURE_AD_CLIENTID,
//       redirectUri: configsLoaderService.AZURE_AD_REDIRECTURI,
//       authority: authority,
//     },
//     cache: {
//       cacheLocation: 'sessionStorage',
//       // storeAuthStateInCookie: isIE, // set to true for IE 11
//     },
//     system: {
//       loadFrameTimeout: 30000,
//     },
//   };
// }

// function MSALAngularConfigFactory(): MsalAngularConfiguration {
//   return {
//     popUp: false,
//     consentScopes: ['user.read', 'openid', 'profile'],
//   };
// }

// export function appInitializerFactory(configsLoaderService: ConfigsLoaderService) {
//   return () => configsLoaderService.loadConfigs();
// }

// @NgModule({
//   providers: [],
//   imports: [MsalModule],
// })
// export class MsalApplicationModule {
//   static forRoot() {
//     return {
//       ngModule: MsalApplicationModule,
//       providers: [
//         ConfigsLoaderService,
//         {
//           provide: APP_INITIALIZER,
//           useFactory: appInitializerFactory,
//           deps: [ConfigsLoaderService],
//           multi: true,
//         },

//         {
//           provide: MSAL_CONFIG,
//           useFactory: MSALConfigFactory,
//           deps: [ConfigsLoaderService],
//         },
//         {
//           provide: MSAL_CONFIG_ANGULAR,
//           useFactory: MSALAngularConfigFactory,
//         },
//         MsalService,
//       ],
//     };
//   }
// }
