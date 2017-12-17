import storage from 'good-storage'


const TokenKey = 'FS_token'

export function getToken() {
    return storage.get(TokenKey)
}