import { prisma } from '../../lib/db.ts'

export default async function handler(req, res) {

  return (
    prisma.theme.findMany({
      include: {
        graphic: {
          select: { url: true }
        },
        templates: {
          select: {
            id: true,
            theme_id: true,
            name: true,
            group_name: true,
            display_size: true,
            width: true,
            height: true,
            graphics: {
              select: { url: true, key_graphic: true },
            }
          },
          orderBy: {
            group_name: 'asc'
          }
        }
      },
    })
      .then(response => {
        res.send(response)
      })
      .catch(error => console.log('error: ', error))
  )

}
