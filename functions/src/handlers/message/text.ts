import { Line } from '../../line.config'
import { datastoreGetFindBy } from '../../lib/gcloud/datastore'
import { dsKindUser } from '../../models'
import { User } from '../../models/user'
// import * as status from '../../status'

export const text = async (event: Line.MessageEvent): Promise<string> => {
  const user: User | undefined = await datastoreGetFindBy(
    dsKindUser,
    'userId',
    event.source.userId
  )

  console.log(user)

  return ''
}
