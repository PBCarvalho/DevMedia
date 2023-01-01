const noticias = [
    'Cyberpunk 2077: Ray Tracing será exclusivo Nvidia no lançamento ',
    'Elon Musk planeja criar uma colônia de humanos em Marte até 2050 ',
  ];
  const novaNoticia = 'Among Us ganhará tradução em português do Brasil ';
  
  noticias.shift();
  noticias.push(novaNoticia);
  
  for (const noticia of noticias) {
    console.log(noticia);
  }