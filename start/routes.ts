/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer''
|
*/

import Route from '@ioc:Adonis/Core/Route'

// HOMEPAGE
Route.get('/', 'HomepagesController.index').as('homepage')

// GITHUB DASHBOARD
Route.get('/github-dashboard', 'GithubDashboardsController.displayForm')

Route.post('/github-dashboard', 'GithubDashboardsController.formProcess')

Route.get('/github-dashboard/dev/:id', 'DashboardController.index').as('form.redirect')
// Route.get('github-dashboard/dev/userid', ({ view }) => {
//   return 'redirected to dev/userid'
// })
// Route.get('/github-dashboard/dev/:id', async ({ view, params }) => {
//   console.debug(`> [ROUTER]: ${ params.id }`)
//   const state = {
//     id: params.id,
//   }
//   return view.render('github-dashboard/gh-db', state)
// })