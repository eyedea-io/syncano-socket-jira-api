import * as S from '@eyedea/syncano'
import axios from 'axios'

interface Fields {
  name: string
  description: string
  type: string
}

interface Args {
  project: string
  issues: Fields[]
}

class Endpoint extends S.Endpoint {
  async run(
    {response}: S.Core,
    {args, config}: S.Context<Args>
  ) {
    const {project, issues} = args

    const res = await Promise.all(
      issues.map(async ({name, description, type}) => {
        const {data} = await axios.request({
          method: 'POST',
          url: `https://${config.DOMAIN_NAME}.atlassian.net/rest/api/2/issue`,
          auth: {
            username: config.USER_EMAIL,
            password: config.USER_API_TOKEN,
          },
          data: {
            fields: {
              project: {
                key: project,
              },
              summary: name,
              description,
              issuetype: {
                name: type,
              },
            },
          },
        })

        return data
      })
    )

    return response.json(res)
  }

  endpointDidCatch(err: Error) {
    console.warn(err)

    return this.syncano.response.json({message: err.message}, 400)
  }
}

export default ctx => new Endpoint(ctx)
