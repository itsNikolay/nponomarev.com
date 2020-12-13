import { categoriesList } from './categories'

it('#categoriesList', () => {
  expect(categoriesList).toEqual([
    {
      name: 'Rails',
      path: '/rails'
    },
    {
      name: 'JavaScript',
      path: '/javascript',
    }
  ])
})
