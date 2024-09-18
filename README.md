# AI Client Config Command

> 【English|[中文](./README.cn.md)】
---

The [Offline AI Client](https://npmjs.org/package/@offline-ai/cli) builtin command plugin for managing the configuration file.

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/%40offline-ai%2Fcli-plugin-cmd-config.svg)](https://npmjs.org/package/@offline-ai/cli-plugin-cmd-config)
[![Downloads/week](https://img.shields.io/npm/dw/%40offline-ai%2Fcli-plugin-cmd-config.svg)](https://npmjs.org/package/@offline-ai/cli-plugin-cmd-config)

# Quick Start

Before using, you need to first install the [Offline AI Client](https://npmjs.org/package/@offline-ai/cli).

# Install

```bash
#If not already installed, install the client:
npm install -g @offline-ai/cli
```

<!-- toc -->
* [AI Client Config Command](#ai-client-config-command)
* [Quick Start](#quick-start)
* [Install](#install)
* [Commands](#commands)
<!-- tocstop -->

# Commands

<!-- commands -->
* [`ai config [ITEM_NAME]`](#ai-config-item_name)
* [`ai config:save [DATA]`](#ai-configsave-data)

## `ai config [ITEM_NAME]`

🛠️  Manage the AI Configuration.

```
USAGE
  $ ai config [ITEM_NAME] [--json] [-u <value>] [-s <value>...] [-l
    trace|debug|verbose|info|warn|error|fatal|silence] [--histories <value>] [-n] [-k] [-t <value> -i] [--no-chats]
    [--no-inputs ] [-m] [-f <value>] [-d <value>] [-D <value>...] [-a <value>] [-b <value>] [-p <value>...] [-L <value>]
    [-A <value>] [-e true|false|line] [-e <value>]

ARGUMENTS
  ITEM_NAME  the config item name path to get

FLAGS
  -A, --aiPreferredLanguage=<value>    the ISO 639-1 code for the AI preferred language to translate the user input
                                       automatically, eg, en, etc.
  -D, --data=<value>...                the data which will be passed to the ai-agent script: key1=value1 key2=value2
  -L, --userPreferredLanguage=<value>  the ISO 639-1 code for the user preferred language to translate the AI result
                                       automatically, eg, en, zh, ja, ko, etc.
  -a, --arguments=<value>              the json data which will be passed to the ai-agent script
  -b, --brainDir=<value>               the brains(LLM) directory
  -d, --dataFile=<value>               the data file which will be passed to the ai-agent script
  -e, --streamEcho=<option>            [default: true] stream echo mode, defaults to true
                                       <options: true|false|line>
  -e, --streamEchoChars=<value>        stream echo max characters limit, defaults to no limit
  -f, --script=<value>                 the ai-agent script file name or id
  -i, --[no-]interactive               interactive mode
  -k, --backupChat                     whether to backup chat history before start, defaults to false
  -l, --logLevel=<option>              the log level
                                       <options: trace|debug|verbose|info|warn|error|fatal|silence>
  -m, --[no-]stream                    stream mode, defaults to true
  -n, --[no-]newChat                   whether to start a new chat history, defaults to false in interactive mode, true
                                       in non-interactive
  -p, --promptDirs=<value>...          the prompts template directory
  -s, --agentDirs=<value>...           the search paths for ai-agent script file
  -t, --inputs=<value>                 the input histories folder for interactive mode to record
  -u, --api=<value>                    the api URL
      --histories=<value>              the chat histories folder to record
      --no-chats                       disable chat histories, defaults to false
      --no-inputs                      disable input histories, defaults to false

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  🛠️  Manage the AI Configuration.

  show current configuration if no commands.

EXAMPLES
  # list all configurations

    $ ai config

  # get the brainDir config item
  $ ai config brainDir
  AI Configuration:
  {
    "brainDir": "~/.local/share/ai/brain"
  }
```

_See code: [src/commands/config/index.ts](https://github.com/offline-ai/cli-plugin-cmd-config.js/blob/v0.1.16/src/commands/config/index.ts)_

## `ai config:save [DATA]`

💾 Save the current configuration to file which can be used to initialize config.

```
USAGE
  $ ai config:save [DATA] [--json] [-c <value>] [--banner] [-u <value>] [-s <value>...] [-l
    trace|debug|verbose|info|warn|error|fatal|silence] [--histories <value>] [-n] [-k] [-t <value> -i] [--no-chats]
    [--no-inputs ] [-m] [-f <value>] [-d <value>] [-D <value>...] [-a <value>] [-b <value>] [-p <value>...] [-L <value>]
    [-A <value>] [-e true|false|line] [-e <value>]

ARGUMENTS
  DATA  the json data which will be passed to the ai-agent script

FLAGS
  -A, --aiPreferredLanguage=<value>    the ISO 639-1 code for the AI preferred language to translate the user input
                                       automatically, eg, en, etc.
  -D, --data=<value>...                the data which will be passed to the ai-agent script: key1=value1 key2=value2
  -L, --userPreferredLanguage=<value>  the ISO 639-1 code for the user preferred language to translate the AI result
                                       automatically, eg, en, zh, ja, ko, etc.
  -a, --arguments=<value>              the json data which will be passed to the ai-agent script
  -b, --brainDir=<value>               the brains(LLM) directory
  -c, --config=<value>                 the config file
  -d, --dataFile=<value>               the data file which will be passed to the ai-agent script
  -e, --streamEcho=<option>            [default: true] stream echo mode, defaults to true
                                       <options: true|false|line>
  -e, --streamEchoChars=<value>        stream echo max characters limit, defaults to no limit
  -f, --script=<value>                 the ai-agent script file name or id
  -i, --[no-]interactive               interactive mode
  -k, --backupChat                     whether to backup chat history before start, defaults to false
  -l, --logLevel=<option>              the log level
                                       <options: trace|debug|verbose|info|warn|error|fatal|silence>
  -m, --[no-]stream                    stream mode, defaults to true
  -n, --[no-]newChat                   whether to start a new chat history, defaults to false in interactive mode, true
                                       in non-interactive
  -p, --promptDirs=<value>...          the prompts template directory
  -s, --agentDirs=<value>...           the search paths for ai-agent script file
  -t, --inputs=<value>                 the input histories folder for interactive mode to record
  -u, --api=<value>                    the api URL
      --[no-]banner                    show banner
      --histories=<value>              the chat histories folder to record
      --no-chats                       disable chat histories, defaults to false
      --no-inputs                      disable input histories, defaults to false

GLOBAL FLAGS
  --json  Format output as json.
```

_See code: [src/commands/config/save.ts](https://github.com/offline-ai/cli-plugin-cmd-config.js/blob/v0.1.16/src/commands/config/save.ts)_
<!-- commandsstop -->
