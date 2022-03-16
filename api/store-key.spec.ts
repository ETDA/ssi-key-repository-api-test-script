import { UPLOAD_KEY_TYPE } from './consts'
import { Key } from './key'
import { CryptoHelper as RSAGen } from './utils/rsa-CrytoHelper'
import { CryptoHelper } from './utils/ecdsa-CryptoHelper'

describe('store key', () => {

  test('store key - ECDSA', async () => {
    try {
      const keys = CryptoHelper.genKeys()
      const keyType = UPLOAD_KEY_TYPE.ECDSA
      const storeKey = await Key.Store(keys.public_key, keys.private_key, keyType)
      console.log('Store Key: ', JSON.stringify(storeKey.data, null, 2))
      expect(storeKey.status).toEqual(201)
    } catch (err) {
      console.log(err.response)
      expect(err).not.toBeTruthy()
    }
  })

  test('Upload key - RSA', async () => {
    try {
      const keys = RSAGen.genKeys()
      const keyType = UPLOAD_KEY_TYPE.RSA
      const storeKey = await Key.Store(keys.public_key, keys.private_key, keyType)
      console.log('Store Key: ', JSON.stringify(storeKey.data, null, 2))
      expect(storeKey.status).toEqual(201)
    } catch (err) {
      console.log(err.response)
      expect(err).not.toBeTruthy()
    }
  })
})
