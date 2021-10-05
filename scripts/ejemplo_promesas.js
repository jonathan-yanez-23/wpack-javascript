const addItem = (item, list) => {
    const promise = new Promise((resolve, reject) => {
      if (!list) {
        reject('No existe el array');
      }
      setTimeout(function () {
        list.push(item);
        resolve(list);
      }, 2000);
    });
  
    return promise;
  };
  
  const list = [];
  
//   addItem('Amarillo', list)
//     .then((list) => {
//       console.log(`El listado final es: ${list.join(', ')}`);
//     })
//     .catch((err) => {
//       throw new Error(err);
//     });



addItem('The big Lewoski', list)
  .then(() => addItem('O Brother, Where Art Thou?', list))
  .then(() => addItem('The Man Who Wasnt There', list))
  .then(() => addItem('The Ladykillers', []))
  .then(() => {
    console.log(list);
  })
  .catch((err)=>{
      console.error(err)
  })
  ;
  