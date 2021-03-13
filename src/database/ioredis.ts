import Redis from 'ioredis';

export async function redisConnection(uri: string){
    try{
        const redis = await new Redis(uri);
        const connectionStatus = redis.status;
        if(connectionStatus == 'connecting'){
            console.log(`Redis connection established correctly: ${connectionStatus}`);
        }
    }
    catch(error){
        console.log(error);
    }
}