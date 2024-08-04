const { MongoClient,ObjectId } = require('mongodb');

const url = 'mongodb://127.0.0.1:27017';
const dbName = 'wpu';

const client=new MongoClient(url,{useNewUrlParser:true,useUnifiedTopology:true})
client.connect((error,client) => {
    if(error){
        return console.log('koneksi gagal')
    }
    
    const db =client.db(dbName)
    //menambhakan satu data ke mahasiswa
//     db.collection('mahasiswa').insertOne({
//         nama:"mohamad farhat",
//         status:"mahasiswa"
//     }, 
//     (error,result) => {
//         if (error){
//             console.log('ternyata error')
//         }else{
//             console.log(result)
//         }
//     }
// )

//menambahkan lebih dari satu data

// db.collection('mahasiswa').insertMany[
//     {
//     nama:'farhat',
//     email:'farhat@yahoo.com'
//     },
//     {
//         nama:'ojan afif',
//         email:'fauzanAfif@gmail.com'
//     }
// ],(error,result)=>{
//     if(error){
//         console.log('wah error')
//     }else{
//         console.log(result)
//     }
// }


    //menampilkan semua data yang ada
    // console.log(db.collection('mahasiswa').find().toArray((error,result)=>{
    //     console.log(result)
    // }))


    //menampilkan sebagian data yang ada
    // console.log(db.collection('mahasiswa').find({ _id: ObjectId('66adb24ea1074e1ac924cc3e') })
    // .toArray((error,result)=>{
    //     console.log(result)
    // }))

    // mengubah data dengan id
    // db.collection('mahasiswa').updateOne({
    //     _id:ObjectId('66adb24ea1074e1ac924cc3e')
    // },{
    //     $set:{
    //         nama:'uhuy',
    //     }
    // })

    //mengubah banyak data dengan id
    db.collection('mahasiswa').updateMany({
        nama:'uhuy'
    },{
        $set:{
            nama:'nada',
        }
    },)

    //menghapus data
    db.collection('mahasiswa').deleteOne({
        nama:'nada'
    }).then((result)=>{
        console.log(result)
    })
})