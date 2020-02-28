# Fullstack with Nest and Angular

`Note:` some are taken from https://dev.to/azure/build-your-first-serverless-app-with-angular-nestjs-and-azure-108h

##  Server

1.  Install nest:
    *   npm install -g @nestjs/cli
2.  Create template:
    *   nest new catfacts-server
3.  Create controller:
    *   nest generate controller facts
4.  Edit controller, see `src/facts/facts.controller.ts`
5.  Make it a global API, edit `src/main.ts`:
6.  Run it:
    *   npm start
7.   Check:
    http://localhost:3000/api/facts/random

##  Client

1.  Create template:
    *   ng new catfacts-client --defaults
2.  Edit `src/environments/environment.ts` accordingly
3.  Create file in root client location: `proxy.local.js`
4.  Edit `package.json`
5.  Add http client module in Angular so that it can fetch from local server:
    *   Edit `src/app/app.module.ts`
6.  Edit `src/app/app.component.ts`
7.  Edit `src/app/app.component.html`
8.  Run the server first (see above), then run Angular:
    *   npm run start:local
