# Syncano Socket for jira-api

[![Syncano Socket](https://img.shields.io/badge/syncano-socket-blue.svg)](https://syncano.io)
[![CircleCI branch](https://img.shields.io/circleci/project/github/eyedea-io/syncano-socket-jira-api/master.svg)](https://circleci.com/gh/eyedea-io/syncano-socket-jira-api/tree/master)
[![Codecov branch](https://img.shields.io/codecov/c/github/eyedea-io/syncano-socket-jira-api/master.svg)](https://codecov.io/github/eyedea-io/syncano-socket-jira-api/)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![npm](https://img.shields.io/npm/dw/@eyedea-sockets/jira-api.svg)](https://www.npmjs.com/package/@eyedea-sockets/jira-api)
![license](https://img.shields.io/github/license/eyedea-io/syncano-socket-jira-api.svg)

Main Socket features:

* **jira-api/createTesk** — Creating tasks in Jira

## Getting Started

Install package in your project:

```sh
cd my_project
npm install @syncano/cli --save-dev
npm install @eyedea-sockets/jira-api --save
npx s deploy
```

Use it:

```js
import Syncano from '@syncano/client'

const s = new Syncano(<instaneName>)

// Search for a user
const params = {
  project: 'projectKey',
  issues: [
    {
      name: 'Awesome task name',
      description: 'Task description...',
      type: 'Story',
    }
  ]
}
const data = await s.post('jira-api/createTesk', params)

```
