import { prisma } from '../../lib/db.ts'

export default async function handler(req, res) {

  return (
    prisma.theme.findMany({
    })
      .then(response => {
        res.send(response)
      })
      .catch(error => console.log('error: ', error))
  )

}
