// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import axios from 'axios'

class GhdbFormsController {
     async formProcess({ view }) {
          console.debug(`> [GH-DB]: Form submitted\n> [GH-DB]: The following request will be sent https://api.github.com/users/SimonDuperray`)
          axios.get(`https://api.github.com/users/SimonDuperray`).then(response => {
               console.debug(`> [GH-DB]: Response received with code ${response.status}\n> [GH-DB]: ${JSON.stringify(response.data, null, 2)}`)
               if(response.status==200) {
                    console.debug(`> [GH-DB]: Redirected to dashboard`)
                    return view.render('github-dashboard/gh-db')
               }
          }).catch(error => {
               console.error(`> [GH-DB]: Error received with code ${error.response.status}\n> [GH-DB]: ${JSON.stringify(error.response.data, null, 2)}`)
          })
     }
}

module.exports = GhdbFormsController
