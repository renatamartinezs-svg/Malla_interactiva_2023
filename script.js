// Definir todos los ramos y sus dependencias
const curricula = {
    // Semestre I
    'Geomorfología y paisaje': { 
        sct: 5, 
        prerequisites: [],
        unlocks: ['Corita']
    },
    'Matemáticas I': { 
        sct: 5, 
        prerequisites: [],
        unlocks: ['Matemáticas II', 'Física']
    },
    'Química': { 
        sct: 5, 
        prerequisites: [],
        unlocks: ['Biogeoquímica']
    },
    'Diversidad biológica': { 
        sct: 5, 
        prerequisites: [],
        unlocks: ['Ecología']
    },
    'Clínica 1': { 
        sct: 5, 
        prerequisites: [],
        unlocks: ['Clínica 1A: Bases para el diagnóstico en comunidades humanas']
    },
    
    // Semestre II
    'Corita': { 
        sct: 2, 
        prerequisites: ['Geomorfología y paisaje'],
        unlocks: []
    },
    'Comprensión del medio social': { 
        sct: 4, 
        prerequisites: ['Geomorfología y paisaje'],
        unlocks: ['Comprensión del sistema cultural']
    },
    'Matemáticas II': { 
        sct: 5, 
        prerequisites: ['Matemáticas I'],
        unlocks: ['Matemáticas III', 'Estadística I']
    },
    'Física': { 
        sct: 5, 
        prerequisites: ['Matemáticas I'],
        unlocks: ['Física aplicada', 'Edafología']
    },
    'Biogeoquímica': { 
        sct: 5, 
        prerequisites: ['Química'],
        unlocks: ['Ecología', 'Química ambiental']
    },
    'Ecofisiología': { 
        sct: 5, 
        prerequisites: [],
        unlocks: []
    },
    'Clínica 1A: Bases para el diagnóstico en comunidades humanas': { 
        sct: 5, 
        prerequisites: ['Clínica 1'],
        unlocks: ['Clínica 1B: Procedimientos para el diagnóstico cualitativo y cuantitativo del sistema territorial']
    },
    'Libre': { 
        sct: 2, 
        prerequisites: [],
        unlocks: []
    },
    
    // Semestre III
    'Comprensión del sistema cultural': { 
        sct: 4, 
        prerequisites: ['Comprensión del medio social'],
        unlocks: ['Comprensión del medio ambiente']
    },
    'Matemáticas III': { 
        sct: 5, 
        prerequisites: ['Matemáticas II'],
        unlocks: ['Física aplicada']
    },
    'Ecología': { 
        sct: 4, 
        prerequisites: ['Diversidad biológica', 'Biogeoquímica'],
        unlocks: ['Comprensión del medio ambiente']
    },
    'Estadística I': { 
        sct: 5, 
        prerequisites: ['Matemáticas II'],
        unlocks: ['Estadística II', 'Geoinformática']
    },
    'Informática ambiental': { 
        sct: 4, 
        prerequisites: [],
        unlocks: ['Geoinformática']
    },
    'Clínica 1B: Procedimientos para el diagnóstico cualitativo y cuantitativo del sistema territorial': { 
        sct: 5, 
        prerequisites: ['Clínica 1A: Bases para el diagnóstico en comunidades humanas'],
        unlocks: ['Clínica 1C: Planificación de una intervención territorial: diagnóstico']
    },
    'Inglés I': { 
        sct: 3, 
        prerequisites: [],
        unlocks: ['Inglés II']
    },
    
    // Semestre IV
    'Economía y desarrollo territorial': { 
        sct: 4, 
        prerequisites: [],
        unlocks: ['Economía política', 'Formulación y evaluación de proyectos']
    },
    'Física aplicada': { 
        sct: 5, 
        prerequisites: ['Física', 'Matemáticas III'],
        unlocks: ['Percepción remota', 'Modelación ambiental', 'Energías']
    },
    'Estadística II': { 
        sct: 4, 
        prerequisites: ['Estadística I'],
        unlocks: ['Modelación ambiental']
    },
    'Geoinformática': { 
        sct: 5, 
        prerequisites: ['Estadística I', 'Informática ambiental'],
        unlocks: ['Percepción remota', 'Modelación ambiental', 'Gestión del agua']
    },
    'Edafología': { 
        sct: 4, 
        prerequisites: ['Física'],
        unlocks: []
    },
    'Clínica 1C: Planificación de una intervención territorial: diagnóstico': { 
        sct: 5, 
        prerequisites: ['Clínica 1B: Procedimientos para el diagnóstico cualitativo y cuantitativo del sistema territorial'],
        unlocks: ['Clínica 1D: Planificación de una intervención territorial: estrategia']
    },
    'Inglés II': { 
        sct: 3, 
        prerequisites: ['Inglés I'],
        unlocks: ['Inglés III']
    },
    
    // Semestre V
    'Economía política': { 
        sct: 4, 
        prerequisites: ['Economía y desarrollo territorial'],
        unlocks: []
    },
    'Percepción remota': { 
        sct: 5, 
        prerequisites: ['Física aplicada', 'Geoinformática'],
        unlocks: []
    },
    'Modelación ambiental': { 
        sct: 5, 
        prerequisites: ['Física aplicada', 'Estadística II', 'Geoinformática'],
        unlocks: []
    },
    'Química ambiental': { 
        sct: 4, 
        prerequisites: ['Biogeoquímica'],
        unlocks: []
    },
    'Comprensión del medio ambiente': { 
        sct: 4, 
        prerequisites: ['Ecología'],
        unlocks: ['Cambio global', 'Planificación estratégica y ordenamiento territorial']
    },
    'Clínica 1D: Planificación de una intervención territorial: estrategia': { 
        sct: 5, 
        prerequisites: ['Clínica 1C: Planificación de una intervención territorial: diagnóstico'],
        unlocks: ['Clínica 2A: Intervención para el cambio en un territorio de alta complejidad: el diagnóstico']
    },
    'Inglés III': { 
        sct: 3, 
        prerequisites: ['Inglés II'],
        unlocks: ['Inglés IV']
    },
    
    // Semestre VI
    'Gestión del agua': { 
        sct: 5, 
        prerequisites: ['Geoinformática'],
        unlocks: ['Manejo de recursos naturales renovables']
    },
    'Políticas y legislación ambiental': { 
        sct: 4, 
        prerequisites: [],
        unlocks: ['Gestión pública y privada para manejo ambiental']
    },
    'Cambio global': { 
        sct: 4, 
        prerequisites: ['Comprensión del medio ambiente'],
        unlocks: ['Gestión pública y privada para manejo ambiental', 'Manejo de recursos naturales renovables']
    },
    'Sistemas socioecológicos': { 
        sct: 4, 
        prerequisites: ['Comprensión del medio ambiente'],
        unlocks: []
    },
    'Planificación estratégica y ordenamiento territorial': { 
        sct: 5, 
        prerequisites: ['Comprensión del medio ambiente'],
        unlocks: ['Gestión pública y privada para manejo ambiental']
    },
    'Clínica 2A: Intervención para el cambio en un territorio de alta complejidad: el diagnóstico': { 
        sct: 5, 
        prerequisites: ['Clínica 1D: Planificación de una intervención territorial: estrategia'],
        unlocks: ['Clínica 2B: Intervención para el cambio en un territorio de alta complejidad: el plan estratégico']
    },
    'Inglés IV': { 
        sct: 3, 
        prerequisites: ['Inglés III'],
        unlocks: []
    },
    
    // Semestre VII
    'Energías': { 
        sct: 4, 
        prerequisites: ['Física aplicada'],
        unlocks: []
    },
    'Manejo de recursos naturales renovables': { 
        sct: 5, 
        prerequisites: ['Gestión del agua', 'Cambio global'],
        unlocks: []
    },
    'Formulación y evaluación de proyectos': { 
        sct: 4, 
        prerequisites: ['Economía y desarrollo territorial'],
        unlocks: []
    },
    'Gestión pública y privada para manejo ambiental': { 
        sct: 5, 
        prerequisites: ['Políticas y legislación ambiental', 'Cambio global', 'Planificación estratégica y ordenamiento territorial'],
        unlocks: []
    },
    'Clínica 2B: Intervención para el cambio en un territorio de alta complejidad: el plan estratégico': { 
        sct: 5, 
        prerequisites: ['Clínica 2A: Intervención para el cambio en un territorio de alta complejidad: el diagnóstico'],
        unlocks: []
    },
    'CFG (Curso de Formación General)': { 
        sct: 2, 
        prerequisites: [],
        unlocks: []
    },
    'Electivo Especializado 1': { 
        sct: 5, 
        prerequisites: ['Ciclo Básico Aprobado'],
        unlocks: []
    },
    
    // Semestre VIII
    'Electivos Especializados VIII': { 
        sct: 30, 
        prerequisites: ['Ciclo Básico Aprobado'],
        unlocks: []
    },
    
    // Semestre IX
    'Actividad de titulación IX': { 
        sct: 20, 
        prerequisites: ['Licenciatura (240 SCT aprobados)'],
        unlocks: []
    },
    'Electivos Especializados IX': { 
        sct: 10, 
        prerequisites: ['Ciclo Básico Aprobado'],
        unlocks: []
    },
    
    // Semestre X
    'Actividad de titulación X': { 
        sct: 10, 
        prerequisites: ['Licenciatura (240 SCT aprobados)'],
        unlocks: []
    },
    'Práctica profesional': { 
        sct: 20, 
        prerequisites: [],
        unlocks: []
    }
};

// Ramos del ciclo básico para validar cuando están aprobados
const ramosCicloBasico = [
    'Geomorfología y paisaje', 'Matemáticas I', 'Química', 'Diversidad biológica', 'Clínica 1',
    'Corita', 'Comprensión del medio social', 'Matemáticas II', 'Física', 'Biogeoquímica',
    'Ecofisiología', 'Clínica 1A: Bases para el diagnóstico en comunidades humanas', 'Libre',
    'Comprensión del sistema cultural', 'Matemáticas III', 'Ecología', 'Estadística I',
    'Informática ambiental', 'Clínica 1B: Procedimientos para el diagnóstico cualitativo y cuantitativo del sistema territorial', 'Inglés I',
    'Economía y desarrollo territorial', 'Física aplicada', 'Estadística II', 'Geoinformática',
    'Edafología', 'Clínica 1C: Planificación de una intervención territorial: diagnóstico', 'Inglés II'
];

// Estado de aprobación
let aprobados = new Set();

// Inicializar la malla
document.addEventListener('DOMContentLoaded', function() {
    const ramos = document.querySelectorAll('.ramo');
    ramos.forEach(ramo => {
        const ramoId = ramo.getAttribute('data-id');
        
        // Bloquear ramos sin prerrequisitos cumplidos
        actualizarEstadoRamo(ramo, ramoId);
        
        // Agregar event listener
        ramo.addEventListener('click', function() {
            if (!ramo.classList.contains('bloqueado')) {
                toggleAprobado(ramo, ramoId);
            }
        });
    });
});

// Actualizar estado de un ramo (bloqueado/desbloqueado)
function actualizarEstadoRamo(ramoElement, ramoId) {
    const ramoData = curricula[ramoId];
    
    if (!ramoData) {
        console.warn(`Ramo no encontrado: ${ramoId}`);
        return;
    }
    
    // Verificar si todos los prerequisitos están aprobados
    const requisitosAprobados = ramoData.prerequisites.every(prereq => {
        // Caso especial: "Ciclo Básico Aprobado"
        if (prereq === 'Ciclo Básico Aprobado') {
            return ramosCicloBasico.every(ramo => aprobados.has(ramo));
        }
        // Caso especial: "Licenciatura (240 SCT aprobados)"
        if (prereq === 'Licenciatura (240 SCT aprobados)') {
            // Contar SCT aprobados
            let sctAprobados = 0;
            aprobados.forEach(ramoAprobado => {
                if (curricula[ramoAprobado]) {
                    sctAprobados += curricula[ramoAprobado].sct;
                }
            });
            return sctAprobados >= 240;
        }
        return aprobados.has(prereq);
    });
    
    if (requisitosAprobados) {
        ramoElement.classList.remove('bloqueado');
    } else {
        ramoElement.classList.add('bloqueado');
    }
}

// Toggle de aprobado/no aprobado
function toggleAprobado(ramoElement, ramoId) {
    if (aprobados.has(ramoId)) {
        aprobados.delete(ramoId);
        ramoElement.classList.remove('aprobado');
    } else {
        aprobados.add(ramoId);
        ramoElement.classList.add('aprobado');
    }
    
    // Desbloquear ramos que dependen de este
    desbloquearDependencias(ramoId);
}

// Desbloquear ramos que dependen del ramo aprobado
function desbloquearDependencias(ramoId) {
    const ramoData = curricula[ramoId];
    
    if (!ramoData) return;
    
    const unlockedRamos = ramoData.unlocks;
    
    // Recorrer todos los ramos en la malla
    const todosLosRamos = document.querySelectorAll('.ramo');
    todosLosRamos.forEach(ramo => {
        const ramoElementId = ramo.getAttribute('data-id');
        
        // Si este ramo está en la lista de desbloqueos
        if (unlockedRamos.includes(ramoElementId)) {
            actualizarEstadoRamo(ramo, ramoElementId);
        }
        
        // Verificar si todos sus prerrequisitos están aprobados
        actualizarEstadoRamo(ramo, ramoElementId);
    });
}

// Reiniciar la malla
document.getElementById('resetBtn').addEventListener('click', function() {
    aprobados.clear();
    const ramos = document.querySelectorAll('.ramo');
    ramos.forEach(ramo => {
        ramo.classList.remove('aprobado');
        const ramoId = ramo.getAttribute('data-id');
        actualizarEstadoRamo(ramo, ramoId);
    });
});
