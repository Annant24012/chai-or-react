import { Client, Account, ID } from "appwrite";
import conf from "../conf"
export class AuthServices{
    client = new Client()
    account;

    AuthServices()
    {
        this.client
           .setEndpoint(conf.APPWRITEURL)
           .setProject(conf.PROJECTID);
        this.account = new Account(this.client);
    }

    async createAccount({email,password,name})
    {
        try {
        const userAccount = await this.account.create(ID.unique,email,password,name);
        } catch (error) {
            throw error;
        }
        if (userAccount) {
            // call another method
            return this.login({email,password});
        } else {
            return userAccount;
        }
    }

    async login({email,password})
    {
        try {
            return await this.account.createEmailPasswordSession(email,password);
            
        } catch (error) {
            throw error;
        }
    }
    async getCuurentAccount()
    {
        try {
            return await this.account.get();
        } catch (error) {
            throw error;
        }

        return null;
    }
    async logout()
    {
        try {
           await this.account.deleteSessions(); 
        } catch (error) {
            console.log("AuthServices Error :: logout error :",error);
        }
    }
}

const authServices = new AuthServices();

export default authServices;



