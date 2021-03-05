import mongoose from 'mongoose';

export function mongoConnection(uri: string){
    try {
        mongoose.connect(uri, {
            useCreateIndex: true,
            useFindAndModify: true,
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        mongoose.connection.once('open', () => {
            console.log('Database connected successfully')
        }).on('error', (error) => {
            console.log(`Database connection error ${error}`);
        })
    } 
    catch(error) {
        console.log(error);
    }
}