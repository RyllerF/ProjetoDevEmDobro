const btnMostrarProjetos = document.querySelector('.btn-mostrar-projetos');
const projetosInativos = document.querySelectorAll('.projeto:not(.ativo)');

btnMostrarProjetos.addEventListener('click', () =>{
    mostrarMaisPjt();
    esconderBtn();

        
    });


function esconderBtn(){
    btnMostrarProjetos.classList.add('remover');
}

function mostrarMaisPjt(){
    projetosInativos.forEach(pjtInativo =>{
        pjtInativo.classList.add('ativo')
    })
}