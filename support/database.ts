import { MongoClient } from 'mongodb';

const uri = 'mongodb://localhost:27017/linkai';
const client = new MongoClient(uri);

//remove apenas um usuário por vez
/*
export async function removeUserByEmail(email: string) {
    await client.connect()
    const result = await client
        .db()
        .collection('users')
        .deleteOne({ email: email })
    return result.deletedCount;
*/

//remove a collection users inteira
export async function removeUserByEmail() {
    await client.connect()
    const result = await client
        .db()
        .collection('users')
        .deleteMany({})
        console.log('Collection users removida com sucesso')
    return result.deletedCount;
}
