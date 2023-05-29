// Use AsyncStorage to store the token: https://docs.expo.dev/versions/latest/sdk/async-storage/
// TODO Fetch token from storage if it exists - make sure it's still valid
import AsyncStorage from '@react-native-async-storage/async-storage';

export const CLIENT_ID = 'f8dc9e85e89b1cded2cf1127f1af4dd1f792802d';
export const CLIENT_SECRET = '108f2507d25402eadbe6f61bc4a8feadf29bd858';


const TOKEN_KEY = "@access_token", REFRESH_TOKEN_KEY = "@refresh_token";

export async function setToken(data) {
   
    const token = data.access_token;
    const tokenValidUntil = new Date(data.expires_at);
    try{
        const tokenData = {
            'access_token': token,
            'expires_at' : tokenValidUntil.getTime(),
        }
        await AsyncStorage.setItem(TOKEN_KEY, JSON.stringify(tokenData));
    } catch(err){
        console.log(err);
    }
}

export async function setRefreshToken(data) {
    const refresh_token = data.refresh_token;
    try{
        await AsyncStorage.setItem(REFRESH_TOKEN_KEY, refresh_token)
    } catch(err){
        console.log(err);
    }
}

export async function getToken() {
    const tokenDataStr = await AsyncStorage.getItem(TOKEN_KEY)
    const tokenData = JSON.parse(tokenDataStr);
    const tokenValidUntil = tokenData.expires_at

    // console.log(Date.now(), tokenValidUntil*1000, (Date.now() > tokenValidUntil*1000));
    if(Date.now() > tokenValidUntil*1000) {
        const refresh_token = await AsyncStorage.getItem(REFRESH_TOKEN_KEY)
        const response = await fetch('https://auth.viarezo.fr/oauth/token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: 'grant_type=refresh_token' +
              '&refresh_token=' + refresh_token +
              '&client_id=' + CLIENT_ID +
              '&client_secret=' + CLIENT_SECRET,
        });
        const data = await response.json();

        setToken(data);
        setRefreshToken(data)
        return data.access_token;
    } else {
        return tokenData.access_token
    }
}


