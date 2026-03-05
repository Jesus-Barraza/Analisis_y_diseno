function openPopup(titulo, subtitulo, texto1, texto2) {
    document.getElementById("overlay").style.display = "block";
    document.getElementById("title-popup").textContent = titulo;
    document.getElementById("subtitle-popup").textContent = subtitulo;
    document.getElementById("text1-popup").textContent = texto1;
    document.getElementById("text2-popup").textContent = texto2;
};

function closePopup() {
    document.getElementById("overlay").style.display = "none";
    document.getElementById("title-popup").textContent = "";
    document.getElementById("subtitle-popup").textContent = "";
    document.getElementById("text1-popup").textContent = ""
    document.getElementById("text2-popup").textContent = "";
};

function cuadro1() {
    let title = "Vista de Cascada";
    let subtitle = "El enfoque clásico secuencial";
    let text1 = "- Requisitos: Definición completa del sistema \n- Diseño: Arquitectura y especificaciones \n- Implementación: Codificación y construcción. \n- Verificación: Pruebas y validación \n- Mantenimiento: Soporte y actualizaciones"
    let text2 = "Perfecto para proyectos con requisitos estables y bien documentados.";

    openPopup(title, subtitle, text1, text2)
};

function cuadro2() {
    let title = "Vista Modelo V";
    let subtitle = "Énfasis en calidad y verificación";
    let text1 = "Una variante sofisticada de la cascada que pone el foco en la calidad desde el diseño. \nPor cada etapa de desarrollo en el brazo ascendente, existe una etapa de prueba correspondiente en el brazo descendente."
    let text2 = "Ideal para sistemas críticos donde la confiabilidad es absolutamente esencial.";

    openPopup(title, subtitle, text1, text2)
};

function cuadro3() {
    let title = "Metodologías Ágiles";
    let subtitle = "Enfoques adaptativos";
    let text1 = "- Iterativo: Ciclos cortos de desarrollo que permiten ajustes constantes \n- Incremental: Entrega de funcionalidades pequeñas pero completas \n- Colaborativo: Comunicación contínua entre todo el equipo"
    let text2 = "Surgieron como respuesta a la rigidez de los modelos tradicionales. Se basan en el desarrollo iterativo e incremental, donde el software se entrega en versiones funcionales pequeñas que aportan valor real al usuario.";

    openPopup(title, subtitle, text1, text2)
};

function cuadro4() {
    let title = "Vista SCRUM";
    let subtitle = "El framework ágil más popular";
    let text1 = "Se trabaja en ciclos cortos llamados Sprints de 1 a 4 semanas. Al final de cada ciclo, se entrega una funcionalidad que aporta valor real al usuario."
    let text2 = "Roles clave: \n\n- Product owner: Define propiedades \n- Scrum master: Facilita el proceso \n- Equipo de desarrollo: Construye la solución";

    openPopup(title, subtitle, text1, text2)
};

function cuadro5() {
    let title = "Vista Kanban";
    let subtitle = "Kanban";
    let text1 = "Se enfoca en la gestión visual del flujo de trabajo. Utiliza tableros para limitar el 'trabajo en curso' (WIP) y evitar cuellos de botella."
    let text2 = "Ideal para equipos de soporte o mantenimiento contínuo.";

    openPopup(title, subtitle, text1, text2)
};

function cuadro6() {
    let title = "Vista XP (Extreme programming)";
    let subtitle = "Extreme programming (XP)";
    let text1 = "Orientada específicamente a la calidad del código"
    let text2 = "Promueve prácticas como la programación en parejas, pruebas unitarias constantes y lanzamientos frecuentes para asegurar código robusto";

    openPopup(title, subtitle, text1, text2)
};

function cuadro7() {
    let title = "Vista Híbridas-Modernas";
    let subtitle = "Combinando lo mejor de ambos mundos";
    let text1 = "Estaas metodologías combinan la estructura de las tradicionales con la flexibilidad de las ágiles, adaptándose a entornos corporativos complejos y proyectos de alta criticidad"
    let text2 = "- Metodología espiral: Combina desarrollo iterativo con análisis de riesgos. Utilizada en sistemas críticos donde un error puede ser catastróficos \n- DevOps: Más que una metodología, es una cultura. Integra desarrollo con operaciones para automatizar despliegue y asegurar estabilidad contínua. \n- Lean Software Development: Inspirado en Toyota, busca eliminar desperdicio, optimizar aprendizaje y entregar lo más rápido posible.";

    openPopup(title, subtitle, text1, text2)
};