import { CustomCommand } from 'vtex'
import workspaceReset from '../../modules/reset'

export default class ConfigReset extends CustomCommand {
  static description = 'Reset the requested configuration to the default value'

  static aliases = []

  static examples = ['vtex config reset env', 'vtex config reset cluster']

  static flags = {
    ...CustomCommand.globalFlags,
  }

  static args = [{ name: 'configName', required: true, options: ['env', 'cluster'] }]

  async run() {
    const {
      args: { configName },
    } = this.parse(ConfigReset)

    workspaceReset(configName)
  }
}
