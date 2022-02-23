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
Route.get('/github-dashboard', 'GithubDashboardsController.displayForm').as('dhbd-form')

Route.post('/github-dashboard', 'GithubDashboardsController.formProcess').as('ghdb-form-submitted')

Route.get('/github-dashboard/dev', 'DashboardController.index').as('form.redirect')