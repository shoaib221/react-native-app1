
import { Client, Account, Avatars, Databases } from 'react-native-appwrite';

export const client = new Client()
    .setEndpoint('https://fra.cloud.appwrite.io/v1')
    .setProject('680dc1a40004de8f3e92')
    .setPlatform('dev.shoaib.andriod-app');

export const account = new Account(client);

export const avatars = new Avatars(client);

export const databases = new Databases(client);


// appwrite -> userContext -> useUser -> login/register/logout