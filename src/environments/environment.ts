// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiDocsBaseUrl:'api',
  superAdminApi:'/superadmin',
  adminApi:'/admin',
  playerApi:'/player',
  guestApi:'/guest',
  courtsPackage:'/courts',
  joinProposalPackage:'/joinproposals',
  noticePackage:'/notices',
  corsApi:'',
  authorizationApi:'/authorization'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
