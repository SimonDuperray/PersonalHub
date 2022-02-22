// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class HomepagesController {
     public async index({ view }) {
          return view.render('homepage')     
     }
}
