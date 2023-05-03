import usuarios from './usuarios.json' assert { type: "json" };

    // const usuarioAceptado = Usuarios.filter(user=>user.fechaDeRegistro==="1234")
console.log(usuarios);

// const promesa= new Promise ((resolve,reject)=>{
//     usuarios
//     const number= Math.floor(Math.random()*10);
//     setTimeout(()=>{
//         if(number>5){
//             resolve(number);
//         }else{
//             reject("Error:El numero no es mayor a 5");
//         }
// },5000)
// });


// promesa
// .then((respuesta)=>respuesta+1)
// .then((respuesta)=>console.log("final::" + respuesta))
// .catch((error)=>console.log(error));