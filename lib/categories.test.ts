import { categoriesList } from './categories'

it('#categoriesList', () => {
  expect(categoriesList).toEqual([
    {
      name: 'Rails',
      path: '/posts/rails'
    },
    {
      name: 'JavaScript',
      path: '/posts/javascript',
    }
  ])
})
