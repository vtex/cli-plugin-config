import chalk from 'chalk'

import { createFlowIssueError, saveEnvironment, saveCluster, ENV_DEFAULT_VALUE, CLUSTER_DEFAULT_VALUE } from 'vtex'

export default (name: string) => {
  switch (name) {
    case 'env':
      saveEnvironment(ENV_DEFAULT_VALUE)
      break

    case 'cluster':
      saveCluster(CLUSTER_DEFAULT_VALUE)
      break

    default:
      throw createFlowIssueError(`The supported configurations are: ${chalk.blue('env')}, ${chalk.blue('cluster')}`)
  }
}
