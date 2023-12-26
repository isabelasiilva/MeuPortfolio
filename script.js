function toggleMode() {
  const html = document.documentElement
  // document é a representação do nosso documento em formato de objeto JS
  // sempre que coloca um . vc ta acessando propriedades e funcionalidades

  //   if (html.classList.contains("light")) {
  //     html.classList.remove("light")
  //   } else {
  //     html.classList.add("light")
  //  } TODO ESSE IF PODE SER RESUMIDO EM:
  html.classList.toggle("light")
  // funciona da mesma forma que o if, se tiver light ele mantem, se nao ele tira

  // para trocar a imagem quando trocar o modo visual da página, usa IF da mesma forma que usou em cima

  // tem que pegar a tag img
  const img = document.querySelector("#profile img")

  // substituir a imagem - se já tiver no light mode, adicionar a imagem light
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    // se estiver no dark mode, manter a imagem normal
    img.setAttribute("src", "./assets/Avatarisa.png")
  }

 
}
