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
Route.get('/', async ({ view }) => {
  return view.render('welcome')
})

// GITHUB DASHBOARD
Route.get('/github-dashboard', async ({ view }) => {
  return view.render('github-dashboard/gh-db-form')
})

// PROJECTS IDEAS
Route.get('/projects-ideas', async ({ view }) => {
  return view.render('projects-ideas/pji')
})

// GOOGLE NEWS
Route.get('/google-news', async ({ view }) => {
  return view.render('google-news/google-news')
})
