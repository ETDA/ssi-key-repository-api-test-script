import { Key } from './key'
import { v4 as uuidv4 } from 'uuid'

let getInitState: any = () => ({
  keyId: ''
})

describe('Key sign', () => {

  const state = getInitState()
  jest.setTimeout(20000)

  test('Key sign', async () => {
    try {
      const genKey = await Key.GenKey()
      console.log('Gen Key: ', JSON.stringify(genKey.data, null, 2))
      // expect(genKey.status).toEqual(201)
      state.keyId = genKey.data.id

      const message = 'testing'
      const sign = await Key.Sign(state.keyId,message)
      console.log('Sign: ', JSON.stringify(sign.data, null, 2))
      expect(sign.status).toEqual(200)
    } catch (err) {
      console.log(err.response)
      expect(err).not.toBeTruthy()
    }
  })

  test('Key sign - Send request with incorrect ID', async () => {
    try {
      state.keyId = uuidv4()

      const message = 'testing'
      const sign = await Key.Sign(state.keyId,message)
      console.log('Sign: ', JSON.stringify(sign.data, null, 2))
      expect(sign.status).toEqual(200)
    } catch (err) {
      console.log(err.response)
      console.log(JSON.stringify(err.response.data,null,2))
      expect(err).not.toBeTruthy()
    }
  })
})
