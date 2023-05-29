// Use AsyncStorage to store the token: https://docs.expo.dev/versions/latest/sdk/async-storage/
// TODO Fetch token from storage if it exists - make sure it's still valid
import {AsyncStorage} from 'react-native'

let token = null, tokenValidUntil = 0;

export function setToken(data) {
    const token = data.access_token;
    // const tokenValidUntil = Date.now() + expiresIn * 1000; 
    // ExpiresIn ne renvoie pas une durée mais une date
    const tokenValidUntil = data.expires_at;
    try{
        const nomToken = token.toString();
        const 
        const tokenData = {
            nomToken : token,

        }
        await AsyncStorage.setItem(nomToken, 
    } catch(err){

    }
}

export function setRefreshToken(data) {
    // TODO Store refresh token in persistent storage
    const refresh_token = data.refresh_token;
    try{
        const nomRefreshtoken=refresh_token.toString()
        await AsyncStorage.setItem(nomRefreshtoken,refresh_token)
    } catch(err){

    }
}

export async function getToken() {
    if(Date.now() > tokenValidUntil) {
        // TODO Call the auth API with the refresh token to fetch a new one
    }
    // If needed, use the refresh token to fetch a new one
    return token;
}
