const conf = {
    APPWRITEURL : String(import.meta.env.VITE_APPWRITE_URL),
    PROJECTID : String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    DATABASEID : String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
    COLLECTIONID : String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
    BUCKET_ID : String(import.meta.env.VITE_APPWRITE_BUCKET_ID)
}
export default conf