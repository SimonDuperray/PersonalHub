'use strict';
// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
// import axios from 'axios';
const requestModule = require('request')

class GithubDashboardsController {

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
          this.setDevId(request.requestBody.devId)
          let req_url = `https://api.github.com/users/${this.getDevId()}`;
          console.debug(`> [GHDB-CONTROLLER]: the following request'll be sent: ${ req_url }`)
          requestModule({
               url: req_url,
               headers: {
                    'User-Agent': 'SimonDuperray'
               }
          }, function(error, response, body) {
               console.error('error:', error); 
               console.log('statusCode:', response && response.statusCode); 
               console.log('body:', body); 
          });
          console.debug(`====== request ended`)
     }

     // public async formProcess({ view, request }) {
     //      console.debug("> [GHDB-CONTROLLER]: form submitted")
     //      // get devId from form
     //      this.setDevId(request.requestBody.devId)
     //      await axios.get(`https://api.github.com/users/${this.getDevId()}`).then(request_response => {
     //           console.debug(`> [GHDB-CONTROLLER]: Github API Request initiated`)
     //           console.debug(`> [GHDB-CONTROLLER]: Github API request status: ${request_response.status}`)
     //           if(request_response.status==200){
     //                this.addKVToState("devId", this.getDevId())
     //                this.addKVToState("devName", request_response.data.name)
     //                this.addKVToState("avatarUrl", request_response.data.avatar_url)
     //                console.debug(`>>> State filled`)
     //                return view.render('github-dashboard/gh-db', this.getState())
     //           } else if(request_response.status==404){
     //                throw "Error status 404"
     //           } else {
     //                console.debug(`>>> State empty`)
     //                return view.render('github-dashboard/gh-db-form', {
     //                     error: "No user found"
     //                })
     //           }
     //      })
     //      console.debug(`====== request ended`)
     //      // console.debug(`> [GHDB-CONTROLLER]: devId saved: ${ this.getDevId() }`)
     //      // this.addKVToState("devId", this.getDevId());
     //      // return view.render('github-dashboard/gh-db', this.getState())
     // }

     public async index({  }) {
          console.log(`> [GHDB-CONTROLLER]: index called`)
     }
}

module.exports = GithubDashboardsController;