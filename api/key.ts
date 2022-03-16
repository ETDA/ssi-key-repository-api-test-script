import axios from 'axios'
import { CONFIG } from './consts'

const genStoreMessage = (obj: {
  public_key: string, private_key: string, key_type: string
}) => {
  return {
    public_key: obj.public_key,
    private_key: obj.private_key,
    key_type: obj.key_type
  }
}

const genSignMessage = (obj: {
  id: string, message: string
}) => {
  return {
    id: obj.id,
    message: obj.message
  }
}

export class Key {

  static async GenKey () {
    return await axios.post(`${CONFIG.BASE_URL}/api/key/generate`)
  }

  static async GenRSAKey () {
    return await axios.post(`${CONFIG.BASE_URL}/api/key/generate/rsa`)
  }

  static async Store (publicKey: string, privateKey: string, keyType: string) {
    const message = genStoreMessage({
      public_key: publicKey,
      private_key: privateKey,
      key_type: keyType
    })
    return await axios.post(`${CONFIG.BASE_URL}/api/key/store`, message)
  }

  static async Sign (id: string, messageTosign: string) {
    const message = genSignMessage({
      id: id,
      message: messageTosign
    })
    return await axios.post(`${CONFIG.BASE_URL}/api/key/sign`,
      message)
  }
}
