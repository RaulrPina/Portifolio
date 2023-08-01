
function descrevendoLetra() {
	
}

function escrevendoLetra(){
function ativaletra(elemento){
	const arrtexto = elemento.innerHTML.split('');
	elemento.innerHTML='';
	arrtexto.forEach((letra,i)=>{
		setTimeout(()=>{
			elemento.innerHTML+=letra;
			},75*i);
	});''
}

const titulo = document.querySelector('.digitando');
ativaletra(titulo);
}

escrevendoLetra()

function menumobol() {
  const ativaMenu = document.querySelector('.fa-bars');
  const navMenu = document.querySelector('header .navegacao-primaria');

  ativaMenu.addEventListener('click', () => {
    ativaMenu.classList.toggle('fa-x');
    navMenu.classList.toggle('ativado');
  });
}

// Chama a função para ativar o menu
menumobol();


function sobreMim() {
  const divExperiencias = document.querySelectorAll('.experiencias_conteudo div');
  const liExperiencias = document.querySelectorAll('.experiencias_conteudo ul li');
  const divEducation = document.querySelectorAll('.education_content div');
  const liEducation = document.querySelectorAll('.education_content ul li');
  let currentIndexExperiencias = 0;
  let currentIndexEducation = 0;

  divExperiencias[0].classList.add('ativo');
  divEducation[0].classList.add('ativo');
  liExperiencias[0].classList.add('ativo');
  liEducation[0].classList.add('ativo');

  function slideShowExperiencias(index) {
    divExperiencias.forEach((div) => {
      div.classList.remove('ativo');
    });
    liExperiencias.forEach((botao) => {
      botao.classList.remove('ativo');
    });
    divExperiencias[index].classList.add('ativo');
    liExperiencias[index].classList.add('ativo');
  }

  function slideShowEducation(index) {
    divEducation.forEach((div) => {
      div.classList.remove('ativo');
    });
    liEducation.forEach((botao) => {
      botao.classList.remove('ativo');
    });
    divEducation[index].classList.add('ativo');
    liEducation[index].classList.add('ativo');
  }

  function scrollToNext() {
    currentIndexExperiencias = (currentIndexExperiencias + 1) % divExperiencias.length;
    slideShowExperiencias(currentIndexExperiencias);

    currentIndexEducation = (currentIndexEducation + 1) % divEducation.length;
    slideShowEducation(currentIndexEducation);
  }

  setInterval(scrollToNext, 6000);

  liExperiencias.forEach((event, index) => {
    event.addEventListener('click', () => {
      slideShowExperiencias(index);
    });
  });

  liEducation.forEach((event, index) => {
    event.addEventListener('click', () => {
      slideShowEducation(index);
    });
  });
}

sobreMim();
const listaAll = document.querySelectorAll('.projects_armazenamento ul li');
const buttonGeral = document.querySelectorAll('.projects_models ul li');
const buttonAll = document.querySelector('.projects_models .ativo');

function removeClick(index) {
  buttonGeral.forEach((item) => {
    item.classList.remove('ativo');
  });
  buttonGeral[index].classList.add('ativo');
}

buttonGeral.forEach((item, index) => {
  item.addEventListener('click', () => {
    removeClick(index);
  });
});

function showLista(lista, button = "todos") {
  lista.forEach((item) => {
    item.classList.remove('ativo');
  });
   if (button == 'blogs') {
    lista[3].classList.add('ativo');
  }

  if (button == 'e_commerce') {
    lista[5].classList.add('ativo');
    lista[7].classList.add('ativo');
  }
  if (button == 'websites') {
    lista[0].classList.add('ativo');
    lista[1].classList.add('ativo');
    lista[2].classList.add('ativo');
    lista[4].classList.add('ativo');
    lista[6].classList.add('ativo');

  }
  if (button == 'todos') {
    lista.forEach((item) => {
      item.classList.add('ativo');
    });
  }
}

buttonGeral.forEach((item) => {
  item.addEventListener('click', (e) => {
    let currentButton = e.target;

    if (currentButton.classList.contains('todos')) {
      showLista(listaAll);
    }

    if (currentButton.classList.contains('blogs')) {
      showLista(listaAll, 'blogs');
    }

    if (currentButton.classList.contains('e_commerce')) {
      showLista(listaAll, 'e_commerce');
    }

    if (currentButton.classList.contains('websites')) {
      showLista(listaAll, 'websites');
    }
  });
});
