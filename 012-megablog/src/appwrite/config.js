import { Client, Databases, Storage ,ID ,Account} from "appwrite";
import conf from '../conf/conf'

export class Service{
    client=new Client();
    databases;
    account
    bucket;

    constructor()
    {
        this.client
           .setEndpoint(conf.APPWRITEURL)
           .setProject(conf.PROJECTID);

        this.account = new Account(this.client);
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client)
    }
    async createPost({title,slug,content,featuredImage,status,userId}){
        try {
            return await this.databases.createDocument(
                conf.DATABASEID,
                conf.COLLECTIONID,
                slug,
                {
                    title,content,featuredImage,
                    status,userId,
                }
            )
        } catch (error) {
            console.log("Apperite Service :: Create Post :: error",error);
        }
    }
    async updatePost({title,content,featuredImage,status}){
        try {
            return await this.databases.updateDocument(conf.DATABASEID,
            conf.COLLECTIONID,
            slug,
            {
                title,content,featuredImage,
                status
            }
            )
        } catch (error) {
            console.log("Apperite Service :: Update Post :: error",error)
        }
    }
    async deletePost(slug){
        try {
             await this.databases.deleteDocument(
                conf.DATABASEID,
                conf.COLLECTIONID,
                slug
             )
             return true;
        } catch (error) {
            console.log("Apperite Service :: Delete Post :: error",error)
            return false;
        }
    }
    async getPost(slug){
       try {
        return await this.databases.getDocument(
            conf.DATABASEID,
            conf.COLLECTIONID,
            slug
        ) 
        
       } catch (error) {
        console.log("Apperite Service :: get Post :: error",error);
        return false
       } 
    }
    async getPosts(queries =[query.equal("status","active")]){
        try {
            return await this.databases.listDocuments(
                conf.DATABASEID,
                conf.COLLECTIONID,
                queries,
            )
        } catch (error) {
           console.log("Appwrite Service :: Update Post :: error",error)
           return false; 
        }
    }
    //file upload services
    async uploadFile(file){
        try {
            return await this.bucket.createFile(
                conf.BUCKETID,
                ID.unique,
                file
            )
        } catch (error) {
            console.log("Apperite Service :: Upload file :: error",error)
            return false;
        }
    }
    async deleteFile(fileId)
    {
        try {
            await this.bucket.deleteFile(
                conf.BUCKETID,
                fileId
            )
            return true
        } catch (error) {
            console.log("Apperite Service :: delete file :: error",error)
            return false
        }
    }
    getFilePreview(fileId)
    {
        return this.bucket.getFilePreview(
            conf.BUCKETID,
            fileId
        )
    }
}

const service = new Service()
export default service;