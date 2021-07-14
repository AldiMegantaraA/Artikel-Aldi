import { articles } from '../../../data'

export const handler = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)

  const articles = await res.json()
}
