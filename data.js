const blenderCommands = [
    // --- INTERFAZ ---
    {
        category: "Interfaz",
        name: "Buscador Universal",
        keys: ["F3"],
        description: "Busca cualquier herramienta o comando por su nombre.",
        example: "Presiona F3 y escribe 'Smoke' para encontrar efectos de humo rápido."
    },
    {
        category: "Interfaz",
        name: "Barra lateral (Tools)",
        keys: ["T"],
        description: "Muestra u oculta la barra de herramientas a la izquierda.",
        example: "Úsalo si desaparecen tus iconos de Mover, Rotar o Escalar."
    },
    {
        category: "Interfaz",
        name: "Panel de Propiedades",
        keys: ["N"],
        description: "Muestra u oculta el panel de propiedades a la derecha (Transform, View, etc).",
        example: "Presiona N para ver las dimensiones exactas de tu cubo."
    },
    {
        category: "Interfaz",
        name: "Guardar",
        keys: ["Ctrl", "S"],
        description: "Guarda el proyecto actual.",
        example: "¡Hazlo frecuentemente! Blender puede cerrarse inesperadamente."
    },
    {
        category: "Interfaz",
        name: "Deshacer",
        keys: ["Ctrl", "Z"],
        description: "Deshace la última acción.",
        example: "Si borraste algo por error, Ctrl + Z lo trae de vuelta."
    },
    {
        category: "Interfaz",
        name: "Rehacer",
        keys: ["Shift", "Ctrl", "Z"],
        description: "Rehace lo que acabas de deshacer.",
        example: "Si deshiciste demasiado, usa esto para volver al futuro."
    },
    
    // --- VISTA ---
    {
        category: "Vista",
        name: "Vista Superior (Top)",
        keys: ["Numpad 7"],
        description: "Pone la cámara justo encima de la escena.",
        example: "Ideal para alinear objetos en el plano del suelo."
    },
    {
        category: "Vista",
        name: "Vista Frontal",
        keys: ["Numpad 1"],
        description: "Pone la cámara frente a la escena.",
        example: "Perfecto para modelar personajes o edificios desde el frente."
    },
    {
        category: "Vista",
        name: "Vista Lateral (Side)",
        keys: ["Numpad 3"],
        description: "Pone la cámara al lado derecho de la escena.",
        example: "Útil para ver el perfil de tu modelo."
    },
    {
        category: "Vista",
        name: "Cámara Activa",
        keys: ["Numpad 0"],
        description: "Mira a través de la cámara que renderizará la escena.",
        example: "Usa esto para encuadrar tu foto final."
    },
    {
        category: "Vista",
        name: "Centrar en Selección",
        keys: ["Numpad ."],
        description: "Centra la vista y el zoom en el objeto seleccionado.",
        example: "Si perdiste tu objeto de vista, selecciónalo en el listado y presiona punto."
    },
    {
        category: "Vista",
        name: "Modo Estructura (Wireframe)",
        keys: ["Shift", "Z"],
        description: "Alterna entre ver sólidos o solo los 'alambres' de la malla.",
        example: "Úsalo para ver a través de los objetos."
    },
    {
        category: "Vista",
        name: "Modo Rayos X",
        keys: ["Alt", "Z"],
        description: "Hacer los objetos semitransparentes.",
        example: "Vital para seleccionar vértices que están detrás de otros."
    },

    // --- OBJETOS ---
    {
        category: "Objetos",
        name: "Agregar Objeto",
        keys: ["Shift", "A"],
        description: "Abre el menú para crear nuevos objetos (Cubos, Luces, Cámaras).",
        example: "Shift + A -> Mesh -> Sphere para crear una esfera."
    },
    {
        category: "Objetos",
        name: "Duplicar",
        keys: ["Shift", "D"],
        description: "Crea una copia idéntica del objeto seleccionado.",
        example: "Selecciona una silla, Shift + D, y mueve el ratón para poner otra al lado."
    },
    {
        category: "Objetos",
        name: "Duplicar Vinculado",
        keys: ["Alt", "D"],
        description: "Crea una copia que comparte los mismos datos (si editas uno, cambian todos).",
        example: "Genial para un bosque de árboles idénticos. Ahorra memoria."
    },
    {
        category: "Objetos",
        name: "Borrar",
        keys: ["X"],
        description: "Elimina lo seleccionado.",
        example: "Selecciona el cubo por defecto y presiona X para borrarlo."
    },
    {
        category: "Objetos",
        name: "Ocultar",
        keys: ["H"],
        description: "Oculta temporalmente los objetos seleccionados.",
        example: "Oculta el techo (H) para poder ver y trabajar dentro de la casa."
    },
    {
        category: "Objetos",
        name: "Mostrar Todo",
        keys: ["Alt", "H"],
        description: "Muestra todo lo que estaba oculto.",
        example: "Cuando termines dentro de la casa, Alt + H para que vuelva el techo."
    },
    {
        category: "Objetos",
        name: "Emparentar",
        keys: ["Ctrl", "P"],
        description: "Conecta objetos para que el hijo siga al padre.",
        example: "Selecciona la espada, luego la mano, Ctrl + P -> Object. La espada seguirá a la mano."
    },

    // --- TRANSFORMACIÓN ---
    {
        category: "Transformación",
        name: "Mover (Grab)",
        keys: ["G"],
        description: "Mueve el objeto libremente.",
        example: "G, luego X para moverlo solo en el eje rojo."
    },
    {
        category: "Transformación",
        name: "Rotar",
        keys: ["R"],
        description: "Rota el objeto.",
        example: "R, luego 90, luego Enter para rotar exactamente 90 grados."
    },
    {
        category: "Transformación",
        name: "Escalar",
        keys: ["S"],
        description: "Cambia el tamaño del objeto.",
        example: "S, luego desplaza el mouse para hacerlo gigante o diminuto."
    },
    {
        category: "Transformación",
        name: "Aplicar Transformación",
        keys: ["Ctrl", "A"],
        description: "Fija la escala y rotación actuales como las 'reales' (1.0).",
        example: "¡Importante antes de esculpir o usar texturas! Evita deformaciones raras."
    },

    // --- MODELADO ---
    {
        category: "Modelado",
        name: "Extruir",
        keys: ["E"],
        description: "Saca nueva geometría de una cara, borde o vértice.",
        example: "Selecciona una cara de un cubo y presiona E para crear una torre."
    },
    {
        category: "Modelado",
        name: "Insertar Cara (Inset)",
        keys: ["I"],
        description: "Crea una cara más pequeña dentro de la seleccionada.",
        example: "Selecciona una cara, presiona I. Útil para hacer marcos de ventanas."
    },
    {
        category: "Modelado",
        name: "Biselar (Bevel)",
        keys: ["Ctrl", "B"],
        description: "Suaviza o redondea las esquinas afiladas.",
        example: "Selecciona los bordes duros de una mesa y Ctrl + B para redondearlos."
    },
    {
        category: "Modelado",
        name: "Cortar Bucle (Loop Cut)",
        keys: ["Ctrl", "R"],
        description: "Corta el objeto con un anillo nuevo de vértices.",
        example: "Ctrl + R sobre un cilindro, rueda la ruedita del ratón para añadir más cortes."
    },
    {
        category: "Modelado",
        name: "Cuchillo (Knife)",
        keys: ["K"],
        description: "Permite dibujar cortes manualmente sobre la geometría.",
        example: "Presiona K Para dibujar una cicatriz en una cara."
    },
    {
        category: "Modelado",
        name: "Rellenar (Fill)",
        keys: ["F"],
        description: "Crea una cara entre los bordes o vértices seleccionados.",
        example: "Selecciona 4 vértices sueltos y presiona F para cerrarlos con una cara."
    },

    // --- SELECCIÓN ---
    {
        category: "Selección",
        name: "Seleccionar Todo",
        keys: ["A"],
        description: "Selecciona todo lo que hay en la escena o modo actual.",
        example: "Úsalo para asegurarte de mover todo el personaje junto."
    },
    {
        category: "Selección",
        name: "Selección de Caja",
        keys: ["B"],
        description: "Arrastra para dibujar un rectángulo de selección.",
        example: "B + Arrastrar ratón para seleccionar muchos vértices a la vez."
    },
    {
        category: "Selección",
        name: "Selección de Pincel",
        keys: ["C"],
        description: "Pinta sobre los objetos para seleccionarlos.",
        example: "C + Click y arrastra para 'pintar' la selección sobre una malla densa."
    },
    {
        category: "Selección",
        name: "Invertir Selección",
        keys: ["Ctrl", "I"],
        description: "Selecciona lo que NO tenías seleccionado y viceversa.",
        example: "Selecciona el objeto que quieres conservar, luego Ctrl + I y Borrar (X) para eliminar el resto."
    },
    {
        category: "Selección",
        name: "Seleccionar Vinculados",
        keys: ["L"],
        description: "Selecciona toda la pieza que está físicamente conectada a lo que tocas.",
        example: "Pon el ratón sobre un tornillo suelto de un modelo y presiona L."
    },

    // --- RENDER ---
    {
        category: "Render",
        name: "Renderizar Imagen",
        keys: ["F12"],
        description: "Calcula y muestra la imagen final de la cámara.",
        example: "Presiona F12 para ver cómo queda tu escena con luces y sombras reales."
    },
    {
        category: "Render",
        name: "Región de Render",
        keys: ["Ctrl", "B"],
        description: "En vista de cámara, dibuja un recuadro para renderizar solo esa parte.",
        example: "Úsalo para probar rápido cómo se ve solo la cara del personaje sin renderizar todo el fondo."
    }
];
