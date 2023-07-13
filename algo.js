function checkpointalgo(x) {
    let l = x.length;
    let nbrmots = x.split(' ').length;
    let nbrvoy = (x.match(/[aeiou]/gi) || []).length;
  
    return {
      long: l,
      nbrm: nbrmots,
      nbrv: nbrvoy
    };
  }
  
  // Exemple d'utilisation
  const phrase = "Ceci est une phrase d'exemple.";
  const resultat = checkpointalgo(phrase);
  
  console.log("Longueur de la phrase:", resultat.long);
  console.log("Nombre de mots:", resultat.nbrm);
  console.log("Nombre de voyelles:", resultat.nbrv);
  
  console.log(checkpointalgo("bonjour"));
  