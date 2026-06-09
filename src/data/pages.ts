type Page = {
  id: string;
  lang: "es" | "en";
  path: string;
  title: string;
  description: string;
  h1: string;
  intro: string;
  sections: { title: string; body: string; items?: string[]; links?: { label: string; href: string }[] }[];
  cta?: { label: string; href: string };
  translate?: boolean;
};

const honoraryLinks = [
  { label: "Maestro Vinicio Quezada", href: "/vinicio-quezada/" },
  { label: "Maestro Roberto Rey", href: "/roberto-rey/" },
  { label: "Maestro Fernando Pérez", href: "/fernando-perez/" },
  { label: "Maestro Juan Carlos Sánchez", href: "/juan-carlos-sanchez/" }
];

const esPages: Page[] = [
  {
    id: "home",
    lang: "es",
    path: "/",
    title: "MUSICARTES | Derechos conexos para músicos en Guatemala",
    description: "Sociedad de gestión colectiva que protege y representa a intérpretes y ejecutantes de la música en Guatemala.",
    h1: "MUSICARTES",
    intro: "Sociedad de Artistas de la Música y Obras Audiovisuales de Guatemala. Trabajamos por el reconocimiento, la protección y la remuneración justa de intérpretes y ejecutantes.",
    sections: [
      { title: "¿Qué es Musicartes?", body: "Musicartes es la Sociedad de Gestión Colectiva que vela por los derechos conexos de los intérpretes y ejecutantes de la música en Guatemala." },
      { title: "Derecho conexo", body: "Si tu música suena en establecimientos que pagan licencia de comunicación pública, tienes derecho a una remuneración económica por ese uso." },
      { title: "Formación y beneficios", body: "Realizamos talleres educativos, promovemos una industria musical integrada y acompañamos a los músicos para que conozcan sus derechos." }
    ],
    cta: { label: "Hazte socio", href: "/hazte-socio/" }
  },
  {
    id: "about",
    lang: "es",
    path: "/nosotros/",
    title: "Nosotros | MUSICARTES Guatemala",
    description: "Conoce qué es MUSICARTES, qué son los derechos conexos y cómo la sociedad protege a intérpretes y ejecutantes.",
    h1: "¿Qué es MUSICARTES Guatemala?",
    intro: "MUSICARTES es la Sociedad de Gestión Colectiva de Guatemala que vela por los derechos conexos de los intérpretes y ejecutantes de la música.",
    sections: [
      { title: "Sociedad de Gestión Colectiva", body: "Una sociedad de gestión colectiva administra y defiende derechos de propiedad intelectual de manera colectiva. Permite monitorear usos públicos, recaudar regalías, distribuirlas y ofrecer respaldo legal a sus afiliados." },
      { title: "Derechos conexos", body: "Los derechos conexos protegen a quienes dan vida a una obra: cantantes, instrumentistas, músicos de sesión, integrantes de agrupaciones y artistas tradicionales." },
      { title: "Roles de MUSICARTES", body: "La sociedad actúa como intermediario de confianza entre los artistas y quienes utilizan fonogramas públicamente.", items: ["Recaudación por uso público a través del convenio interinstitucional con AGINPRO.", "Distribución justa de lo recaudado según criterios transparentes y estatutos.", "Representación legal ante usos no autorizados.", "Acuerdos internacionales de reciprocidad.", "Educación y conciencia de derechos."] }
    ],
    cta: { label: "Conoce los recursos legales", href: "/recursos-legales/" }
  },
  {
    id: "member",
    lang: "es",
    path: "/hazte-socio/",
    title: "Hazte socio | MUSICARTES",
    description: "Información para postularte como socio de MUSICARTES Guatemala si eres intérprete o ejecutante.",
    h1: "Hazte Socio de Musicartes",
    intro: "Intérprete o ejecutante, te damos la cordial bienvenida. Completa el proceso de postulación y registra tu repertorio para que podamos identificar tus obras.",
    sections: [
      { title: "Antes de postularte", body: "Musicartes representa derechos conexos de intérpretes y ejecutantes. Para iniciar el proceso conviene tener claridad sobre tu participación en grabaciones fonográficas y contar con información verificable de tu repertorio." },
      { title: "Registro de repertorio", body: "Descarga y completa el archivo Excel requerido para declarar tu primera canción o fonograma. La información se revisa antes de incorporarse a los procesos internos de gestión." },
      { title: "Formulario de afiliación", body: "Completa el formulario de afiliación con tus datos personales, información artística y documentos solicitados. Si el formulario se administra en un sistema externo, esta página servirá como entrada pública y clara hacia ese proceso." },
      { title: "Dudas y asistencia", body: "Si tienes alguna duda, puedes escribir a los correos de contacto de Musicartes.", links: [{ label: "Escribir a info@musicartes.org", href: "mailto:info@musicartes.org" }, { label: "Escribir a asistencia@musicartes.org", href: "mailto:asistencia@musicartes.org" }] }
    ],
    cta: { label: "Contacta a Musicartes", href: "/contacto/" }
  },
  {
    id: "legal",
    lang: "es",
    path: "/recursos-legales/",
    title: "Recursos legales | MUSICARTES",
    description: "Marco legal, autorización de funcionamiento, legislación nacional y tratados internacionales vinculados a MUSICARTES.",
    h1: "Recursos legales MUSICARTES",
    intro: "Los tratados internacionales en materia de derechos de autor y derechos conexos, junto con la ley guatemalteca, establecen el marco de protección de artistas intérpretes y ejecutantes.",
    sections: [
      { title: "Registro de interpretaciones nacionales", body: "Musicartes ha iniciado la creación de un registro de interpretaciones discográficas del repertorio de música producida en Guatemala, parte del patrimonio cultural del país." },
      { title: "Distribución de regalías fonográficas", body: "AGINPRO representa a productores discográficos y otorga licencias por comunicación pública de música fonograbada. Musicartes vela por directrices de distribución equitativa en favor de músicos participantes." },
      { title: "Autorización de funcionamiento", body: "MUSICARTES obtuvo personalidad jurídica del Ministerio de Gobernación conforme a la Partida 10828. En agosto de 2008 fue autorizada como sociedad de gestión colectiva por el Registro de la Propiedad Intelectual de Guatemala." },
      { title: "Legislación y tratados", body: "El marco incluye legislación nacional y convenios internacionales.", items: ["Ley de Derechos de Autor y Derechos Conexos de Guatemala.", "Convenio de Berna.", "Convención de Roma.", "Tratado OMPI sobre Derecho de Autor (WCT).", "Tratado OMPI sobre Interpretación o Ejecución y Fonogramas (WPPT).", "CAFTA-DR, capítulo de Propiedad Intelectual.", "Acuerdo TRIPS de la OMC."] }
    ],
    cta: { label: "Consulta preguntas frecuentes", href: "/preguntas-frecuentes-faq/" }
  },
  {
    id: "financial",
    lang: "es",
    path: "/estados-financieros/",
    title: "Estados financieros | MUSICARTES",
    description: "Transparencia financiera y documentos publicados por MUSICARTES.",
    h1: "Estados financieros",
    intro: "Espacio de transparencia institucional para consultar estados financieros autorizados por Asamblea General y publicaciones relacionadas.",
    sections: [
      { title: "Documentos disponibles", body: "La versión actual mantiene continuidad con las URLs existentes y organiza los documentos financieros por año para facilitar consulta pública.", items: ["Estados financieros 2017.", "Estados financieros 2018.", "Nuevos estados financieros se pueden agregar como documentos enlazados o páginas por año."] }
    ],
    cta: { label: "Ver memoria de labores", href: "/memoria-de-labores/" }
  },
  {
    id: "reports",
    lang: "es",
    path: "/memoria-de-labores/",
    title: "Memoria de labores | MUSICARTES",
    description: "Memorias de labores y soportes presentados en Asamblea General de MUSICARTES.",
    h1: "Memorias de Labores MUSICARTES",
    intro: "En Musicartes presentamos en cada Asamblea General una memoria de labores ejecutadas durante el año.",
    sections: [
      { title: "Memorias publicadas", body: "Aquí se organizan vínculos a documentos de soporte o videos presentados durante las Asambleas Generales correspondientes.", items: ["Memoria de labores 2024.", "Memoria de labores 2021.", "Memoria de labores 2020.", "Memoria de labores 2019.", "Memoria de labores 2018.", "Memoria de labores 2017."] }
    ],
    cta: { label: "Revisa documentos institucionales", href: "/estados-financieros/" }
  },
  {
    id: "workshops",
    lang: "es",
    path: "/talleres/",
    title: "Talleres | MUSICARTES",
    description: "Talleres, formación y recursos educativos para músicos e intérpretes.",
    h1: "Talleres MUSICARTES",
    intro: "MUSICARTES impulsa formación para músicos en producción, composición, promoción, cuidado auditivo y desarrollo artístico.",
    sections: [
      { title: "Áreas de formación", body: "La programación histórica ha incluido talleres presenciales y recursos digitales para fortalecer la carrera de los músicos.", items: ["Cuidado del oído y uso de monitores.", "Producción musical y proceso de grabación.", "Home studio, acústica y microfonía.", "Desarrollo artístico y promoción.", "Monetización para artistas."] }
    ],
    cta: { label: "Leer el blog educativo", href: "/blog/" }
  },
  {
    id: "faq",
    lang: "es",
    path: "/preguntas-frecuentes-faq/",
    title: "Preguntas frecuentes | MUSICARTES",
    description: "Respuestas básicas para músicos sobre afiliación, derechos conexos, licencias y contacto.",
    h1: "Preguntas frecuentes",
    intro: "Respuestas rápidas para resolver dudas comunes de intérpretes, ejecutantes, socios y usuarios de música en Guatemala.",
    sections: [
      { title: "¿Quién puede afiliarse?", body: "Pueden postularse intérpretes y ejecutantes vinculados a grabaciones fonográficas. El proceso requiere información personal, datos artísticos y declaración de repertorio para que Musicartes pueda identificar participaciones." },
      { title: "¿Qué son los derechos conexos?", body: "Son derechos que protegen la interpretación o ejecución fijada en un fonograma. No sustituyen el derecho de autor de la composición; reconocen la participación de quienes interpretan o ejecutan la música grabada." },
      { title: "¿Dónde inicio el proceso?", body: "Puedes iniciar tu proceso de postulación en la página Hazte socio.", links: [{ label: "Ir a Hazte socio", href: "/hazte-socio/" }] },
      { title: "¿Cómo declaro obras o fonogramas?", body: "La declaración de repertorio debe incluir la información solicitada por Musicartes para identificar tema, artista, participación e identificadores disponibles. Los socios pueden consultar la zona de socios y la página de obras no declaradas." },
      { title: "¿Qué pasa si un usuario no paga licencia?", body: "Musicartes puede realizar gestiones de fiscalización y exigir el pago de licencias correspondientes conforme al marco legal aplicable." },
      { title: "¿Dónde encuentro documentos institucionales?", body: "Los estatutos, reglamentos, memorias y estados financieros se organizan en las páginas de gestión y transparencia del sitio.", links: [{ label: "Recursos legales", href: "/recursos-legales/" }, { label: "Estados financieros", href: "/estados-financieros/" }] }
    ],
    cta: { label: "Contacta a Musicartes", href: "/contacto/" }
  },
  {
    id: "contact",
    lang: "es",
    path: "/contacto/",
    title: "Contacto | MUSICARTES",
    description: "Dirección, teléfono y horarios de atención de MUSICARTES Guatemala.",
    h1: "Contáctanos",
    intro: "Comunícate con MUSICARTES Guatemala para consultas institucionales, afiliación y asistencia.",
    sections: [
      { title: "MUSICARTES Guatemala", body: "Dirección: 21 Avenida B 0-10 zona 15 Vista Hermosa 2, Guatemala. Teléfono: +502 2316 8116. Horarios de atención: lunes a viernes de 9:00am a 4:00pm." }
    ]
  },
  {
    id: "news",
    lang: "es",
    path: "/noticias/",
    title: "Noticias | MUSICARTES",
    description: "Actualidad institucional de MUSICARTES y noticias relevantes para la comunidad musical.",
    h1: "Noticias",
    intro: "Sección para comunicados, novedades institucionales y actualizaciones relevantes para socios y músicos.",
    sections: [{ title: "Contenido en organización", body: "Esta página conserva la URL principal y queda lista para publicar comunicados o enlazar entradas relevantes del blog." }],
    cta: { label: "Ver blog", href: "/blog/" }
  },
  {
    id: "events",
    lang: "es",
    path: "/eventos/",
    title: "Eventos | MUSICARTES",
    description: "Eventos, talleres y actividades institucionales de MUSICARTES.",
    h1: "Eventos",
    intro: "Agenda para talleres, asambleas, actividades institucionales y espacios de formación.",
    sections: [{ title: "Próximas actividades", body: "La arquitectura queda lista para publicar eventos vigentes sin alterar la URL existente." }]
  },
  {
    id: "statutes",
    lang: "es",
    path: "/estatutos/",
    title: "Estatutos | MUSICARTES",
    description: "Consulta de estatutos y documentos normativos de MUSICARTES.",
    h1: "Estatutos",
    intro: "Página institucional para publicar y enlazar los estatutos vigentes de MUSICARTES.",
    sections: [{ title: "Documentos normativos", body: "Mantiene continuidad SEO para la consulta pública de estatutos y documentos institucionales." }]
  },
  {
    id: "honorary",
    lang: "es",
    path: "/socios-honorarios/",
    title: "Socios honorarios | MUSICARTES",
    description: "Reconocimiento a maestras, maestros y personalidades intérpretes y ejecutantes de la música.",
    h1: "Socios Honorarios Musicartes",
    intro: "Por disposición de la Asamblea General, MUSICARTES reconoce a luminarias musicales y personalidades intérpretes y ejecutantes de la música.",
    sections: [
      { title: "Memoria y reconocimiento", body: "Esta sección debe convertirse en un archivo vivo de memoria cultural. Cada perfil individual se trabajará con cuidado editorial, fuentes verificadas y respeto por la trayectoria de cada maestra o maestro." },
      { title: "Perfiles prioritarios", body: "Estas biografías tienen prioridad por relevancia cultural y señal de búsqueda en Search Console.", links: honoraryLinks },
      { title: "Maestros y maestras reconocidos", body: "Listado base de socios honorarios identificados en el sitio actual.", items: ["Maestro Joaquín Orellana.", "Maestro Vinicio Quezada.", "Maestra Ivonne Reyna.", "Maestro Roberto Rey.", "Maestro Juan Carlos Sánchez.", "Maestro Fernando Pérez.", "Maestra Maritza Estrada.", "Maestro Byron Sosa.", "Maestro Carlos Duarte.", "Maestro Héctor Castro.", "Maestro Guillermo de León Ruiz.", "Maestro German Giordano.", "Maestro Leonel Franco.", "Maestro Miguel Ángel Villagrán."] }
    ],
    translate: false
  },
  {
    id: "active",
    lang: "es",
    path: "/socios-activos/",
    title: "Socios activos | MUSICARTES",
    description: "Información institucional sobre socios activos de MUSICARTES.",
    h1: "Socios activos",
    intro: "Listado público de socios activos de Musicartes y punto de referencia para quienes buscan confirmar pertenencia institucional.",
    sections: [
      { title: "Criterio editorial", body: "El listado completo debe publicarse a partir de una fuente oficial actualizada. En esta fase se conserva la URL, se mejora el contexto y se prepara la estructura para cargar el directorio definitivo." },
      { title: "Socios identificados en el sitio actual", body: "El sitio vigente contiene un listado extenso de socios activos. Antes de migrarlo completo conviene validar nombres, acentos, duplicados y estado de afiliación.", items: ["Ada Gabriela Marroquín Salas.", "Carlos Enrique Peña Aldana.", "Dieter Hasso Lehnhoff Temme.", "Fernando Pérez Barreda.", "Francisco Antonio Páez Méndez.", "Jacobo Nitsch Velásquez.", "Juan Carlos Garcia Romero.", "Magda Angélica García Von Hoegen.", "Miguel Angel Villagran Galindo."] },
      { title: "Relación con socios honorarios", body: "Los socios honorarios cuentan con una sección independiente de memoria cultural.", links: [{ label: "Ver socios honorarios", href: "/socios-honorarios/" }] }
    ]
  },
  {
    id: "undeclared-works",
    lang: "es",
    path: "/obras-no-declaradas/",
    title: "Canciones o fonogramas no declarados | MUSICARTES",
    description: "Información para consultar y reclamar interpretaciones o ejecuciones de fonogramas pendientes de declarar ante Musicartes.",
    h1: "Canciones o fonogramas no declarados",
    intro: "Musicartes conserva información sobre interpretaciones y ejecuciones de fonogramas pendientes de declarar para que los artistas representados puedan revisar posibles participaciones.",
    sections: [
      { title: "Plazo de resguardo", body: "Las interpretaciones y ejecuciones pendientes de declarar se resguardan por un periodo de cinco años. Después de ese plazo los montos prescriben y ya no pueden reclamarse." },
      { title: "Qué debe revisar el artista", body: "La consulta debe permitir identificar año, tema, ISRC cuando exista y artista relacionado. El listado completo requiere una migración controlada para evitar duplicados y errores de formato." },
      { title: "Cómo proceder", body: "Si reconoces una participación pendiente, comunícate con Musicartes o utiliza el proceso indicado en la zona de socios para completar la declaración correspondiente.", links: [{ label: "Ir a zona de socios", href: "/zona-de-socios/" }, { label: "Contactar a Musicartes", href: "/contacto/" }] }
    ],
    translate: false
  },
  {
    id: "member-zone",
    lang: "es",
    path: "/zona-de-socios/",
    title: "Zona de socios | MUSICARTES",
    description: "Guía para socios de MUSICARTES sobre portal, declaración de canciones grabadas y reglas internas de participación de fonogramas.",
    h1: "Zona de socios",
    intro: "Espacio de orientación para socios de Musicartes sobre declaración de repertorio, portal de socios y reglas internas de participación de fonogramas.",
    sections: [
      { title: "Portal de socios", body: "Musicartes utiliza un sistema digital para la gestión de repertorios. Esta página debe funcionar como entrada pública al portal y como guía para quienes necesitan declarar obras o actualizar información.", links: [{ label: "Portal de socios", href: "https://website.sociosmusicartes.org" }] },
      { title: "Declaración de participación", body: "La declaración de canciones grabadas permite identificar intérpretes, ejecutantes, artista principal y participación en cada fonograma. Esa información es necesaria para procesos de distribución." },
      { title: "Reglas internas", body: "El sitio vigente explica reglas generales de distribución entre intérpretes y ejecutantes, así como la posibilidad de contratos privados válidos por escrito cuando las partes acuerden porcentajes específicos." },
      { title: "Soporte", body: "Para dudas sobre acceso, declaración de repertorio o información pendiente, el socio puede comunicarse con Musicartes.", links: [{ label: "Contactar", href: "/contacto/" }, { label: "Obras no declaradas", href: "/obras-no-declaradas/" }] }
    ],
    translate: false
  },
  {
    id: "vinicio-quezada",
    lang: "es",
    path: "/vinicio-quezada/",
    title: "Vinicio Quezada | Socios honorarios MUSICARTES",
    description: "Perfil del maestro Vinicio Quezada, pianista, arreglista y compositor guatemalteco reconocido como socio honorario de MUSICARTES.",
    h1: "Vinicio Quezada",
    intro: "Pianista, arreglista y compositor guatemalteco, integrante del grupo de socios honorarios de MUSICARTES desde 2016.",
    sections: [
      { title: "Trayectoria", body: "El maestro Vinicio Quezada inició su formación musical desde niño y desarrolló una amplia carrera como pianista, arreglista, productor y director musical." },
      { title: "Formación y escenarios", body: "Su formación incluye estudios en Guatemala, Costa Rica y Estados Unidos. Se ha presentado como pianista, director y arreglista en Centroamérica, Estados Unidos, Sudamérica y Europa." },
      { title: "Aportes", body: "Ha sido solista con orquestas, pianista acompañante, productor y arreglista. El sitio actual de Musicartes destaca su trabajo como productor y arreglista del cantautor Ricardo Arjona y su labor docente." },
      { title: "Reconocimiento MUSICARTES", body: "Musicartes lo reconoce como un orgullo guatemalteco y socio honorario por su trayectoria y aporte a la música nacional.", links: [{ label: "Volver a socios honorarios", href: "/socios-honorarios/" }] }
    ],
    translate: false
  },
  {
    id: "roberto-rey",
    lang: "es",
    path: "/roberto-rey/",
    title: "Roberto Rey | Socios honorarios MUSICARTES",
    description: "Perfil del maestro Roberto Rey, cantante guatemalteco reconocido por su trayectoria en bolero y balada romántica.",
    h1: "Roberto Rey",
    intro: "Julio Roberto Sandoval Orizábal, conocido artísticamente como Roberto Rey, es uno de los cantantes guatemaltecos más destacados de su generación.",
    sections: [
      { title: "Una voz para el bolero y la balada", body: "El sitio actual de Musicartes lo presenta como una de las grandes voces guatemaltecas, con dominio del bolero, la balada romántica y formatos de entretenimiento musical en vivo." },
      { title: "Trayectoria", body: "Nacido en Antigua Guatemala en 1959, inició su camino musical en tríos románticos y escenarios nocturnos. Su carrera supera las cuatro décadas de actividad artística." },
      { title: "Representación internacional", body: "Representó a Guatemala en el Festival Internacional OTI de la Canción en Miami en 1989 con el tema Traigo la voz." },
      { title: "Reconocimientos", body: "Entre sus reconocimientos figuran premios como intérprete, distinciones en Guatemala y Estados Unidos, y la declaración como Embajador de la Música por la Municipalidad de La Antigua Guatemala en 2009.", links: [{ label: "Volver a socios honorarios", href: "/socios-honorarios/" }] }
    ],
    translate: false
  },
  {
    id: "fernando-perez",
    lang: "es",
    path: "/fernando-perez/",
    title: "Fernando Pérez | Socios honorarios MUSICARTES",
    description: "Perfil del maestro Fernando Pérez, percusionista guatemalteco especializado en percusión latina, jazz y ritmos afrocubanos.",
    h1: "Fernando Pérez",
    intro: "Percusionista guatemalteco con trayectoria en percusión latina, jazz, salsa, rock y ritmos afrocubanos.",
    sections: [
      { title: "Formación", body: "Inició estudios musicales en 1981 en el Conservatorio Nacional de Música, donde cursó solfeo, flauta, piano y percusión." },
      { title: "Especialidad", body: "Se especializó en instrumentos de percusión latina como bongó, timbales, tumbadoras y recursos de percusión utilizados en ritmos afrocubanos." },
      { title: "Escenarios y colaboraciones", body: "Su trayectoria incluye proyectos de latin jazz, participación con agrupaciones guatemaltecas y alternancia con artistas internacionales de jazz, salsa y música latina." },
      { title: "Reconocimientos", body: "Ha recibido distinciones por su aporte a la música, entre ellas reconocimientos a su trayectoria artística y a su trabajo por la cultura musical guatemalteca.", links: [{ label: "Volver a socios honorarios", href: "/socios-honorarios/" }, { label: "Clases con Fernando Pérez", href: "/clases-con-fernando-perez/" }] }
    ],
    translate: false
  },
  {
    id: "juan-carlos-sanchez",
    lang: "es",
    path: "/juan-carlos-sanchez/",
    title: "Juan Carlos Sánchez | Socios honorarios MUSICARTES",
    description: "Perfil del maestro Juan Carlos Sánchez, músico y compositor garífuna de Livingston, Guatemala.",
    h1: "Juan Carlos Sánchez",
    intro: "Músico, compositor y líder espiritual garífuna de Livingston, Guatemala, reconocido por su labor en la parranda o paranda garífuna.",
    sections: [
      { title: "Raíces", body: "Juan Carlos Sánchez Álvarez nació en Livingston, Izabal, el 21 de noviembre de 1966. La música estuvo presente desde su infancia y marcó su camino artístico." },
      { title: "Parranda garífuna", body: "Desde 1989 se ha dedicado a cultivar la música tradicional garífuna, especialmente la parranda o paranda, género asociado a serenatas y a la memoria oral de su pueblo." },
      { title: "Rescate cultural", body: "Su obra se centra en mantener viva la música garífuna, formar a nuevas generaciones y compartir tradiciones musicales en Guatemala y escenarios internacionales." },
      { title: "Liderazgo comunitario", body: "Además de su trabajo musical, el sitio actual de Musicartes destaca su papel como líder espiritual, activista cultural y colaborador en proyectos de salvaguarda garífuna.", links: [{ label: "Volver a socios honorarios", href: "/socios-honorarios/" }] }
    ],
    translate: false
  },
  {
    id: "agreements",
    lang: "es",
    path: "/acuerdos-internacionales/",
    title: "Acuerdos internacionales | MUSICARTES",
    description: "Acuerdos de reciprocidad y representación internacional de MUSICARTES.",
    h1: "Acuerdos internacionales",
    intro: "MUSICARTES pertenece a redes internacionales de sociedades de gestión que protegen a músicos intérpretes dentro y fuera de Guatemala.",
    sections: [{ title: "Representación internacional", body: "La sociedad extiende la protección de afiliados mediante acuerdos de reciprocidad y participación en federaciones internacionales como FILAIE y SCAPR." }]
  },
  {
    id: "distribution",
    lang: "es",
    path: "/reglamento-distribucion/",
    title: "Reglamento de distribución | MUSICARTES",
    description: "Reglamento de distribución de derechos conexos y remuneraciones de MUSICARTES.",
    h1: "Reglamento de distribución",
    intro: "Consulta el marco que orienta la distribución de derechos conexos y remuneraciones de grabaciones musicales recaudadas por MUSICARTES.",
    sections: [{ title: "Documento vigente", body: "El sitio actual referencia el Reglamento de Distribución 2025. Esta página queda lista para enlazar el PDF oficial y futuras versiones documentadas." }]
  },
  {
    id: "press",
    lang: "es",
    path: "/prensa/",
    title: "Prensa | MUSICARTES",
    description: "Recursos de prensa y comunicados institucionales de MUSICARTES.",
    h1: "Prensa",
    intro: "Sección para comunicados, recursos institucionales y contactos de prensa.",
    sections: [{ title: "Recursos para medios", body: "Base preparada para publicar comunicados, fotografías oficiales y documentos de referencia." }],
    cta: { label: "Contactar", href: "/contacto/" }
  }
];

const enCopy: Record<string, Partial<Page>> = {
  home: { h1: "MUSICARTES", intro: "Collective Management Organization for musicians, performers and audiovisual artists in Guatemala.", title: "MUSICARTES | Neighboring rights for musicians in Guatemala", description: "Collective rights management organization protecting performers and musicians in Guatemala." },
  about: { h1: "About MUSICARTES Guatemala", intro: "MUSICARTES protects neighboring rights for music performers in Guatemala.", title: "About us | MUSICARTES Guatemala", description: "Learn about MUSICARTES, neighboring rights and collective management in Guatemala." },
  member: { h1: "Become a member", intro: "If you are a music performer in Guatemala, MUSICARTES can help identify and protect your repertoire.", title: "Become a member | MUSICARTES", description: "Membership information for musicians and performers in Guatemala." },
  legal: { h1: "Legal resources", intro: "National legislation and international treaties provide the legal framework for protecting performers and their recordings.", title: "Legal resources | MUSICARTES", description: "Legal framework, authorizations and international treaties related to MUSICARTES." },
  financial: { h1: "Financial statements", intro: "Institutional transparency space for financial documents and public reports.", title: "Financial statements | MUSICARTES", description: "Financial transparency documents published by MUSICARTES." },
  reports: { h1: "Annual reports", intro: "Annual reports and supporting materials presented to the General Assembly.", title: "Annual reports | MUSICARTES", description: "Annual reports and institutional activity summaries." },
  workshops: { h1: "Workshops", intro: "Training resources for musicians in production, promotion, hearing care and artistic development.", title: "Workshops | MUSICARTES", description: "Educational workshops and resources for musicians." },
  faq: { h1: "FAQ", intro: "Quick answers about membership, neighboring rights, licenses and contact channels.", title: "FAQ | MUSICARTES", description: "Frequently asked questions about MUSICARTES." },
  contact: { h1: "Contact", intro: "Contact MUSICARTES Guatemala for institutional inquiries, membership and support.", title: "Contact | MUSICARTES", description: "Address, phone and office hours for MUSICARTES Guatemala." },
  news: { h1: "News", intro: "Institutional updates and relevant news for members and musicians.", title: "News | MUSICARTES", description: "News and institutional updates from MUSICARTES." },
  events: { h1: "Events", intro: "Agenda for workshops, assemblies and institutional activities.", title: "Events | MUSICARTES", description: "Events and activities from MUSICARTES." },
  statutes: { h1: "Statutes", intro: "Institutional page for current statutes and governance documents.", title: "Statutes | MUSICARTES", description: "Statutes and institutional documents." },
  honorary: { h1: "Honorary members", intro: "Recognition for notable performers and musical personalities.", title: "Honorary members | MUSICARTES", description: "Honorary members recognized by MUSICARTES." },
  active: { h1: "Active members", intro: "Public information space for active members according to institutional criteria.", title: "Active members | MUSICARTES", description: "Information about active members." },
  agreements: { h1: "International agreements", intro: "International reciprocity and representation for Guatemalan performers.", title: "International agreements | MUSICARTES", description: "International agreements and reciprocal representation." },
  distribution: { h1: "Distribution regulations", intro: "Rules and documents that guide the distribution of neighboring-rights royalties.", title: "Distribution regulations | MUSICARTES", description: "Distribution regulations and royalty documents." },
  press: { h1: "Press", intro: "Institutional communications and reference resources for media.", title: "Press | MUSICARTES", description: "Press resources and institutional communications." }
};

const englishSections = [
  { title: "Institutional information", body: "This English version preserves the main institutional architecture while the Spanish site remains the canonical source for detailed documents and blog content." },
  { title: "For musicians and partners", body: "Use these pages to understand MUSICARTES, membership, legal resources, transparency, workshops and contact channels." }
];

const enSlugs: Record<string, string> = {
  about: "about-us",
  member: "become-a-member",
  legal: "legal-resources",
  financial: "financial-statements",
  reports: "annual-reports",
  workshops: "workshops",
  faq: "faq",
  contact: "contact",
  news: "news",
  events: "events",
  statutes: "statutes",
  active: "active-members",
  agreements: "international-agreements",
  distribution: "distribution-regulations",
  press: "press"
};

export const pages: Page[] = [
  ...esPages,
  ...esPages.filter((page) => page.translate !== false && (page.id === "home" || enSlugs[page.id])).map((page) => ({
    ...page,
    ...enCopy[page.id],
    lang: "en" as const,
    path: page.id === "home" ? "/en/" : `/en/${enSlugs[page.id]}/`,
    sections: englishSections,
    cta: page.cta ? { label: page.id === "member" ? "Contact MUSICARTES" : "Become a member", href: page.id === "member" ? "/en/contact/" : "/en/become-a-member/" } : undefined
  }))
];

export const pagesByPath = Object.fromEntries(pages.map((page) => [page.path, page]));
