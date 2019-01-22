/* global describe it */
import {run} from '@syncano/test'
import axios from 'axios'
import sinon from 'sinon'

describe('#createTask', function () {
  it('add task to Jira', async () => {
    const ctx = {
      args: {
        project: 'projectKey',
        issues: [
          {
            name: 'Awesome task name',
            description: 'Task description...',
            type: 'Story',
          }
        ]
      }
    }

    axios.request =  sinon.stub().onFirstCall().resolves({})



    const res = await run('createTask', ctx)
    expect(res).toHaveProperty('code', 200)
  })

  it('error simulation', async () => {
    const ctx = {
      args: {
        project: 'projectKey',
        issues: [
          {
            name: 'Awesome task name',
            description: 'Task description...',
            type: 'Story',
          }
        ]
      }
    }

    axios.request =  sinon.stub().onFirstCall().rejects(new Error('Something went wrong.'))

    const res = await run('createTask', ctx)
    expect(res).toHaveProperty('code', 400)
    expect(res.data).toHaveProperty('message', 'Something went wrong.')
  })
})
