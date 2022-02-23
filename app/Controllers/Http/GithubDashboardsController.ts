// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class GithubDashboardsController {

     private devId: string = "";
     private state: Object = {};

     public getDevId(): string {
          return this.devId;
     }
     public setDevId(devId: string): void {
          this.devId = devId;
     }

     public getState(): Object {
          return this.state;
     }
     public addKVToState(key: string, value: any): void {
          this.state[key] = value;
     }

     public async displayForm({ view }) {
          console.debug("> [GHDB-CONTROLLER]: form displayed")
          return view.render('github-dashboard/gh-db-form')
     }

     public async formProcess({ view, request }) {
          console.debug("> [GHDB-CONTROLLER]: form submitted")
          // get devId from form
          this.setDevId(request.requestBody.devId);
          console.debug(`> [GHDB-CONTROLLER]: devId saved: ${ this.getDevId() }`)
          this.addKVToState("devId", this.getDevId());
          return view.render('github-dashboard/gh-db', this.getState())
     }

     public async index({  }) {
          console.log(`> [GHDB-CONTROLLER]: index called`)
     }
}