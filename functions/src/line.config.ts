import * as Line from '@line/bot-sdk'
import * as Types from '@line/bot-sdk/dist/types'
import * as functions from 'firebase-functions'

const accessToken = functions.config().someservice.access_token as string
const channelSecret = functions.config().someservice.channel_secret as string

const config = {
  channelAccessToken: accessToken,
  channelSecret: channelSecret,
}
const client = new Line.Client(config)

const errorMessage = 'エラーが発生しました'

export { client, config, errorMessage, Line, Types }
