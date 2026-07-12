function aprobar(idRamo, idsSiguientes) {
    let ramo = document.getElementById(idRamo);
    if (!ramo || ramo.classList.contains('bloqueado')) return;
    
    // Alternar Aprobado / Disponible
    if (ramo.classList.contains('aprobado')) {
        ramo.classList.remove('aprobado');
        ramo.classList.add('disponible');
    } else {
        ramo.classList.remove('disponible');
        ramo.classList.add('aprobado');
    }
    
    // Chequear qué ramos se desbloquean en cadena
    if (idsSiguientes) {
        idsSiguientes.forEach(idSig => {
            let siguiente = document.getElementById(idSig);
            if (!siguiente) return;
            
            let requisitos = siguiente.getAttribute('data-req');
            if (requisitos) {
                let listaReq = requisitos.split(',');
                let todosAprobados = listaReq.every(reqId => {
                    let r = document.getElementById(reqId.trim());
                    return r && r.classList.contains('aprobado');
                });
                
                if (todosAprobados) {
                    siguiente.classList.remove('bloqueado');
                    siguiente.classList.add('disponible');
                } else {
                    siguiente.classList.remove('disponible');
                    siguiente.classList.remove('aprobado');
                    siguiente.classList.add('bloqueado');
                }
            }
        });
    }
}
