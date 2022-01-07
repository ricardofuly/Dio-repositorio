const arrays = [
    {
        arr: [2, 4, 3, 2],
    },
    {
        arr: [6, 6, 6, 6],
    },
    {
        arr:[2, 2, 2, 2],
    }
  ]
  const tomada = -3;
  const i = ``;

  function somaTomada(arrays){
      return arrays.reduce(function(prev, current){
          return prev + current.arr - tomada;
      }, i);
  }

  console.log(somaTomada(i, arrays));
  
  