import { AICommand, AICommonFlags, showBanner } from '@offline-ai/cli-common'
import { Args } from '@oclif/core'
import { parseJsJson, saveConfigFile } from '@isdk/ai-tool'

export default class AIConfigSaveCommand extends AICommand {
  static enableJsonFlag = true

  static summary = '💾 Save the current configuration to file which can be used to initialize config.'

  // static description = ''

  static args = {
    data: Args.string({
      description: 'the json data which will be passed to the ai-agent script',
      parse: (input: string) => parseJsJson(input),
    })
  }

  static flags = {
    ...AICommand.flags,
    ...AICommonFlags,
  }

  async run(): Promise<any> {
    const opts = await this.parse(AIConfigSaveCommand)
    const {flags} = opts
    const isJson = this.jsonEnabled()
    const userConfig = await this.loadConfig(flags.config, {...opts, skipLoadHook: true})
    if (userConfig.banner && !isJson) {showBanner('Config')}

    const filename = saveConfigFile(userConfig.configFile, userConfig)
    this.log(`Saved config to "${filename}"`)
  }
}
