// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class GithubDashboardsController {

     public async displayForm({ view }) {
          console.debug("> [GHDB-CONTROLLER]: form displayed")
          return view.render('github-dashboard/gh-db-form')
     }

     public async formProcess({ view }) {
          console.debug("> [GHDB-CONTROLLER]: form submitted")
          return view.render('github-dashboard/gh-db')
     }
}