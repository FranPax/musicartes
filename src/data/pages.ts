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
    intro: "MUSICARTES es la Sociedad de Gestión Colectiva de Guatemala que vela por los derechos conexos de los intérpretes y ejecutantes de la música. Porque crear música es un trabajo y, como todo trabajo, merece una retribución.",
    sections: [
      { title: "¿Qué es una Sociedad de Gestión Colectiva?", body: "Una sociedad de gestión colectiva es una organización sin fines de lucro que administra y defiende derechos de propiedad intelectual en nombre de un grupo de artistas o creadores. Su razón de existir es práctica: un músico, por sí solo, no puede monitorear todos los lugares donde su interpretación es utilizada, desde una radio o un bar hasta una plataforma digital o un restaurante." },
      { title: "Lo que permite la gestión colectiva", body: "A través de la gestión colectiva, los artistas afiliados pueden autorizar colectivamente el uso público de sus fonogramas, recibir regalías cuando esos fonogramas son utilizados comercialmente, contar con respaldo legal ante vulneraciones y acceder a acuerdos con sociedades similares en otros países.", items: ["Autorización colectiva del uso público de fonogramas.", "Recaudación de regalías por comunicación pública.", "Distribución a artistas conforme a criterios internos y estatutos.", "Respaldo legal para defender derechos conexos.", "Protección internacional mediante acuerdos de reciprocidad."] },
      { title: "¿Qué son los derechos conexos?", body: "Los derechos conexos, también llamados derechos afines o relacionados, no son lo mismo que el derecho de autor. El derecho de autor protege a quien crea la obra: el compositor, letrista o autor de la música. Los derechos conexos protegen a quienes dan vida a esa obra mediante una interpretación o ejecución." },
      { title: "A quiénes protegen", body: "Los derechos conexos amparan a intérpretes y ejecutantes, productores de fonogramas y organismos de radiodifusión. En el caso de MUSICARTES, el foco está en proteger a los artistas intérpretes y ejecutantes de la música.", items: ["Cantantes e intérpretes vocales.", "Músicos instrumentistas.", "Músicos de estudio y sesionistas.", "Integrantes de bandas, orquestas y agrupaciones.", "Artistas de música folclórica, tradicional y popular."] },
      { title: "Control sobre la interpretación", body: "Estos derechos permiten reconocer la fijación de una interpretación, la reproducción de esa grabación, la comunicación pública de la interpretación y la distribución de copias físicas o digitales del trabajo artístico." },
      { title: "Qué roles cumple MUSICARTES", body: "MUSICARTES actúa como intermediario de confianza entre los artistas y quienes utilizan fonogramas en forma pública. Sus funciones sostienen parte esencial del ecosistema musical guatemalteco.", items: ["Recaudación por uso público a través del convenio interinstitucional con AGINPRO.", "Distribución justa de lo recaudado entre artistas afiliados.", "Representación legal ante usos no autorizados.", "Acuerdos internacionales de reciprocidad.", "Educación y conciencia de derechos para músicos."] },
      { title: "Por qué importa en Guatemala", body: "El mercado musical guatemalteco enfrenta un desafío histórico: la música se usa constantemente en radios, comercios, eventos y espacios digitales, pero los artistas no siempre reciben compensación justa por ese uso. MUSICARTES busca cambiar esa realidad mediante una relación legal y equilibrada entre usuarios de música y artistas." },
      { title: "Junta Directiva 2022-2026", body: "El sitio actual identifica a la Junta Directiva de MUSICARTES para el período 2022-2026.", items: ["Pedro Meléndez, Presidente.", "Francisco Páez, Vicepresidente.", "Keneth Marroquín, Secretario.", "José Juárez, Tesorero.", "Víctor Vásquez, Vocal."] },
      { title: "Comité de Vigilancia y equipo operativo", body: "La estructura institucional incluye Comité de Vigilancia y equipo operativo.", items: ["Rodolfo \"Fito\" Méndez, Presidente del Comité de Vigilancia.", "Mstro. Fernando Pérez, Secretario del Comité de Vigilancia.", "Jaqueline Rocío Reyes Sosa, Directora General.", "Yethel García, Gerente de Operaciones."] }
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
      { title: "Antes de postularte", body: "Musicartes representa derechos conexos de intérpretes y ejecutantes. Para iniciar el proceso conviene tener claridad sobre tu participación en grabaciones fonográficas, contar con información verificable de tu repertorio y reunir evidencia de tus interpretaciones o ejecuciones." },
      { title: "Paso 1: archivo de registro", body: "Descarga el archivo Excel requerido para el registro de tu primera canción o fonograma. Completa la información solicitada con el mayor detalle posible; esta información estará sujeta a revisión antes de incorporarse al proceso interno." },
      { title: "Qué información preparar", body: "Aunque el formulario puede solicitar campos específicos, es recomendable tener a mano datos de identificación, nombre artístico, información de contacto, títulos de canciones, artista principal, códigos ISRC cuando existan, enlaces de referencia y documentos que acrediten tu participación." },
      { title: "Paso 2: formulario de afiliación", body: "Completa el formulario de postulación con tus datos personales, información artística y documentos requeridos. Si el formulario se administra en una herramienta externa, esta página servirá como entrada pública hacia ese sistema." },
      { title: "Después de enviar la solicitud", body: "La información presentada pasa por revisión institucional. Musicartes puede solicitar aclaraciones, correcciones o documentos adicionales antes de completar la afiliación o registrar repertorio." },
      { title: "Dudas y asistencia", body: "Si tienes alguna duda, puedes escribir a los correos de contacto de Musicartes. Incluye tu nombre, teléfono y una descripción breve de tu consulta para agilizar la respuesta.", links: [{ label: "Escribir a info@musicartes.org", href: "mailto:info@musicartes.org" }, { label: "Escribir a asistencia@musicartes.org", href: "mailto:asistencia@musicartes.org" }] },
      { title: "También puede interesarte", body: "Antes de postularte, revisa las preguntas frecuentes y la explicación de derechos conexos para comprender mejor qué gestiona MUSICARTES.", links: [{ label: "Preguntas frecuentes", href: "/preguntas-frecuentes-faq/" }, { label: "Nosotros", href: "/nosotros/" }] }
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
    id: "financial-2017",
    lang: "es",
    path: "/estados-financieros/estados-financieros-2017/",
    title: "Estados financieros 2017 | MUSICARTES",
    description: "Página de consulta para estados financieros 2017 de MUSICARTES.",
    h1: "Estados financieros 2017",
    intro: "Página de continuidad para la consulta pública de los estados financieros 2017 de MUSICARTES.",
    sections: [
      { title: "Documento de transparencia", body: "Esta URL se conserva por continuidad institucional y SEO. El documento final debe enlazarse desde el repositorio externo de activos que defina MUSICARTES, como Google Drive, Cloudinary u otro gestor documental." },
      { title: "Siguiente paso", body: "Cuando el PDF definitivo esté alojado, esta página debe incluir el enlace directo, fecha de aprobación y cualquier nota de Asamblea General que corresponda.", links: [{ label: "Estados financieros", href: "/estados-financieros/" }, { label: "Memoria de labores", href: "/memoria-de-labores/" }] }
    ],
    translate: false
  },
  {
    id: "financial-2018",
    lang: "es",
    path: "/estados-financieros/estados-financieros-2018/",
    title: "Estados financieros 2018 | MUSICARTES",
    description: "Página de consulta para estados financieros 2018 de MUSICARTES.",
    h1: "Estados financieros 2018",
    intro: "Página de continuidad para la consulta pública de los estados financieros 2018 de MUSICARTES.",
    sections: [
      { title: "Documento de transparencia", body: "Esta página mantiene una URL previamente indexada y debe funcionar como destino estable para el documento financiero del año 2018." },
      { title: "Activo externo", body: "El PDF puede alojarse fuera del repositorio Astro, pero el sitio principal debe conservar una página legible de contexto, enlace y respaldo institucional.", links: [{ label: "Estados financieros", href: "/estados-financieros/" }] }
    ],
    translate: false
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
    id: "president",
    lang: "es",
    path: "/presidente/",
    title: "Presidente | MUSICARTES",
    description: "Perfil institucional del presidente de MUSICARTES.",
    h1: "Presidente",
    intro: "Perfil institucional para la Presidencia de MUSICARTES y su función dentro de la Junta Directiva.",
    sections: [
      { title: "Rol institucional", body: "La Presidencia representa a la entidad conforme a los estatutos y participa en la conducción de la política institucional, la relación con socios y el seguimiento de acuerdos de Asamblea General." },
      { title: "Contenido pendiente de validación", body: "Antes de publicar una biografía definitiva debe validarse el nombre, periodo, fotografía, trayectoria y enlaces oficiales. Esta página conserva la URL y deja preparada la estructura de contenido." },
      { title: "Relación con la Junta Directiva", body: "La información ampliada de Junta Directiva se centraliza en la página Nosotros.", links: [{ label: "Nosotros", href: "/nosotros/" }] }
    ],
    translate: false
  },
  {
    id: "secretary",
    lang: "es",
    path: "/secretario/",
    title: "Secretario | MUSICARTES",
    description: "Perfil institucional del secretario de MUSICARTES.",
    h1: "Secretario",
    intro: "Perfil institucional para la Secretaría de MUSICARTES y su función dentro de la Junta Directiva.",
    sections: [
      { title: "Rol institucional", body: "La Secretaría participa en la documentación de acuerdos, comunicación formal y seguimiento de procesos internos de la entidad conforme a estatutos y decisiones de Asamblea." },
      { title: "Contenido pendiente de validación", body: "Antes de publicar una biografía definitiva debe validarse el nombre, periodo, fotografía, trayectoria y enlaces oficiales. Esta página conserva la URL y evita pérdida de continuidad." },
      { title: "Relación con la Junta Directiva", body: "La información ampliada de Junta Directiva se centraliza en la página Nosotros.", links: [{ label: "Nosotros", href: "/nosotros/" }] }
    ],
    translate: false
  },
  {
    id: "elections-2026",
    lang: "es",
    path: "/elecciones-2026/",
    title: "Elecciones 2026 | MUSICARTES",
    description: "Información institucional sobre el proceso electoral 2026 de MUSICARTES.",
    h1: "Elecciones 2026",
    intro: "Página informativa para socios sobre el proceso electoral 2026 de MUSICARTES.",
    sections: [
      { title: "Información para socios", body: "Esta URL tiene relevancia coyuntural para socios. Debe concentrar calendario, requisitos, convocatoria, bases, documentos y comunicaciones oficiales relacionadas con el proceso electoral." },
      { title: "Documentos relacionados", body: "La información puede conectarse con páginas específicas de convocatoria, calendario y bases para mantener cada documento en una URL limpia.", links: [{ label: "Convocatoria", href: "/convocatoria/" }, { label: "Calendario y bases", href: "/calendario-y-bases/" }] },
      { title: "Criterio editorial", body: "Por tratarse de un proceso institucional, toda fecha, requisito y documento debe validarse antes de publicarse como definitivo." }
    ],
    translate: false
  },
  {
    id: "convocation",
    lang: "es",
    path: "/convocatoria/",
    title: "Convocatoria | MUSICARTES",
    description: "Convocatorias institucionales de MUSICARTES.",
    h1: "Convocatoria",
    intro: "Página para publicar convocatorias oficiales de MUSICARTES, incluyendo procesos electorales y comunicaciones a socios.",
    sections: [
      { title: "Uso de la página", body: "Esta URL debe conservarse como destino estable para convocatorias formales. Puede enlazar documentos externos, formularios o comunicados aprobados por la institución." },
      { title: "Proceso electoral", body: "Para 2026, esta página debe vincularse con la información general de elecciones, calendario y bases.", links: [{ label: "Elecciones 2026", href: "/elecciones-2026/" }, { label: "Calendario y bases", href: "/calendario-y-bases/" }] }
    ],
    translate: false
  },
  {
    id: "calendar-rules",
    lang: "es",
    path: "/calendario-y-bases/",
    title: "Calendario y bases | MUSICARTES",
    description: "Calendario, bases y documentos institucionales para procesos de MUSICARTES.",
    h1: "Calendario y bases",
    intro: "Página para organizar calendario, bases y documentos de procesos institucionales.",
    sections: [
      { title: "Documentos del proceso", body: "Esta página debe reunir fechas clave, bases de participación, requisitos y enlaces a documentos oficiales cuando el proceso esté activo." },
      { title: "Relación con elecciones", body: "Para el periodo electoral 2026, funciona como página complementaria de la convocatoria y la página general de elecciones.", links: [{ label: "Elecciones 2026", href: "/elecciones-2026/" }, { label: "Convocatoria", href: "/convocatoria/" }] }
    ],
    translate: false
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
      { title: "¿Qué es MUSICARTES?", body: "MUSICARTES, Sociedad de Artistas de la Música y Obras Audiovisuales, es la sociedad de gestión colectiva que administra y protege los derechos conexos de intérpretes y ejecutantes musicales en Guatemala. Su función principal es garantizar que los artistas reciban las regalías que les corresponden por el uso público de sus interpretaciones." },
      { title: "¿Qué son los derechos conexos?", body: "Los derechos conexos, también llamados derechos afines o vecinos, protegen a los artistas intérpretes y ejecutantes aunque no sean los autores originales de las obras. Mientras el derecho de autor ampara a compositores y letristas, el derecho conexo protege a quienes dan vida a esas composiciones mediante su interpretación o ejecución." },
      { title: "¿Cuál es la diferencia entre derecho de autor y derecho conexo?", body: "El derecho de autor protege la creación intelectual: melodía, armonía y letra de una canción. Pertenece al compositor y al letrista. El derecho conexo protege la interpretación o ejecución específica de esa obra cuando queda fijada en una grabación o fonograma." },
      { title: "¿Cuál es la diferencia entre intérprete y ejecutante musical?", body: "Los intérpretes suelen tener un rol protagónico en la grabación: miembros principales de la banda, artistas destacados o voces principales. Los ejecutantes participan en la grabación sin necesariamente liderar el proyecto; pueden ser músicos de sesión, músicos de estudio o invitados cuyo trabajo es esencial para el resultado final." },
      { title: "¿Cómo me afilio a MUSICARTES?", body: "Para afiliarte necesitas ser intérprete o ejecutante de música en Guatemala y contar con grabaciones fonográficas publicadas con código ISRC cuando exista. El proceso incluye formulario de inscripción, identificación oficial, evidencia de interpretaciones y declaración de obras en las que has participado.", links: [{ label: "Iniciar proceso en Hazte socio", href: "/hazte-socio/" }] },
      { title: "¿Cuánto cuesta afiliarse a MUSICARTES?", body: "El sitio actual indica que la afiliación tiene un costo único de inscripción de Q.1,000, establecido en la Asamblea General de 2024. Este pago cubre gastos administrativos del proceso y representa una inversión para proteger tus derechos y recibir regalías por el uso de tu música." },
      { title: "¿De dónde provienen las regalías que distribuye MUSICARTES?", body: "Las regalías provienen del uso público y comercial de grabaciones musicales en emisoras de radio y televisión, establecimientos comerciales, eventos públicos y privados, y otros espacios donde se reproducen fonogramas con fines comerciales o ante una audiencia." },
      { title: "¿Qué es el uso público de la música?", body: "El uso público ocurre cuando una grabación se reproduce en un espacio accesible al público o con fines comerciales, incluso si no hay cobro de entrada. El uso privado es escuchar música en casa, en el auto o con audífonos para disfrute personal. Solo el uso público genera obligación de pagar regalías a través de la gestión correspondiente." },
      { title: "¿Cada cuánto se distribuyen las regalías?", body: "MUSICARTES realiza distribuciones periódicas según el calendario establecido por la Junta Directiva y comunicado a los socios. La frecuencia puede variar según períodos de recaudación, procesamiento de datos de uso y procesos administrativos. Es importante mantener actualizados datos bancarios y de contacto." },
      { title: "¿MUSICARTES cobra regalías de Spotify o YouTube?", body: "No. MUSICARTES gestiona exclusivamente regalías por uso público en territorio guatemalteco, como radio, televisión, establecimientos comerciales y eventos. Las plataformas de streaming pagan a sellos, distribuidores o titulares según sus propios modelos y contratos." },
      { title: "¿Puedo ser miembro si también soy compositor?", body: "Sí. Muchos artistas son compositores e intérpretes al mismo tiempo. En ese caso, los derechos son independientes y complementarios: MUSICARTES gestiona derechos conexos como intérprete o ejecutante, mientras que una sociedad de autores gestiona derechos de autor como compositor." },
      { title: "¿Necesito declarar todas mis grabaciones?", body: "Sí. Declarar todas las grabaciones en las que has participado ayuda a MUSICARTES a identificar interpretaciones cuando se usan públicamente y a distribuir correctamente las regalías. Tu repertorio puede actualizarse conforme publiques nuevas grabaciones.", links: [{ label: "Zona de socios", href: "/zona-de-socios/" }] },
      { title: "Si un músico invitado recibió pago al grabar, ¿aún tiene derecho a regalías?", body: "Sí. El pago recibido por una sesión o grabación compensa el servicio prestado, pero no implica una renuncia automática a derechos de interpretación. La excepción sería un contrato escrito válido en el que se renuncie expresamente a esos derechos." },
      { title: "¿Qué documentos debo conservar?", body: "Conviene conservar contratos de grabación, créditos completos, carátulas, evidencias de participación, facturas o comprobantes de pago y registro fotográfico o audiovisual de sesiones. Esa documentación protege derechos y facilita la declaración ante MUSICARTES." },
      { title: "¿Qué hago si escucho mi música en un lugar comercial?", body: "Puedes reportarlo a MUSICARTES. Tu reporte ayuda a identificar usos, mejorar la distribución y verificar si el establecimiento cuenta con la licencia correspondiente.", links: [{ label: "Contactar a MUSICARTES", href: "/contacto/" }] },
      { title: "¿Qué pasa si un establecimiento usa música sin licencia?", body: "Cuando un establecimiento reproduce música públicamente sin licencia, puede estar infringiendo derechos conexos. MUSICARTES tiene facultad legal para fiscalizar y exigir el pago correspondiente, incluyendo regalías retroactivas y sanciones cuando aplique." },
      { title: "¿Las regalías se heredan?", body: "Sí. Los derechos conexos son heredables y se extienden durante la vida del artista y 70 años después de su fallecimiento, según la legislación guatemalteca. Se recomienda mantener actualizada la información de beneficiarios." },
      { title: "¿Puedo afiliarme si vivo fuera de Guatemala?", body: "Sí, siempre que seas guatemalteco o tengas grabaciones utilizadas en Guatemala. Gracias a acuerdos de reciprocidad, MUSICARTES puede gestionar regalías generadas en otros países para sus socios." },
      { title: "¿Qué pasa si grabo música en el extranjero?", body: "Tus derechos como intérprete o ejecutante están protegidos independientemente del país donde se haya grabado. Si eres socio y tu música se usa públicamente en Guatemala o en territorios con acuerdos de reciprocidad, puede existir derecho a regalías." },
      { title: "¿Los productores musicales reciben regalías a través de MUSICARTES?", body: "No. Los productores musicales y disqueras tienen su propia sociedad de gestión colectiva. En Guatemala, AGINPRO es socio estratégico de MUSICARTES para el cobro directo a usuarios por uso de música." },
      { title: "¿Cómo se elige la Junta Directiva?", body: "La Junta Directiva se elige democráticamente por los socios en Asamblea General cada cuatro años. Los socios activos tienen derecho a votar y postularse según requisitos establecidos en estatutos y convocatorias vigentes." },
      { title: "¿Qué repertorio representa MUSICARTES?", body: "MUSICARTES representa el repertorio de sus socios afiliados. Su alcance se extiende mediante contratos de reciprocidad con sociedades de gestión colectiva de otros países, y se fortalece por su participación en redes internacionales como FILAIE y SCAPR.", links: [{ label: "Acuerdos internacionales", href: "/acuerdos-internacionales/" }] }
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
    id: "login",
    lang: "es",
    path: "/login/",
    title: "Login | MUSICARTES",
    description: "Acceso para socios y sistemas relacionados con MUSICARTES.",
    h1: "Login",
    intro: "Acceso a herramientas digitales relacionadas con socios de MUSICARTES.",
    sections: [
      { title: "Portal de socios", body: "Si eres socio, utiliza el portal correspondiente para gestionar información de repertorio y procesos internos habilitados por MUSICARTES.", links: [{ label: "Entrar al portal de socios", href: "https://website.sociosmusicartes.org" }] },
      { title: "Soporte de acceso", body: "Si tienes problemas para ingresar, contacta a MUSICARTES indicando tu nombre, correo, teléfono y una breve descripción del problema.", links: [{ label: "Contacto", href: "/contacto/" }] }
    ],
    translate: false
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
      { title: "Plazo de resguardo", body: "Las interpretaciones y ejecuciones de fonogramas pendientes de declarar de artistas representados por MUSICARTES se guardan por un periodo de cinco años. Después de ese plazo los montos prescriben y no pueden reclamarse." },
      { title: "Qué contiene el listado", body: "El listado actual identifica año, tema, código ISRC cuando existe y artista relacionado. En WordPress esta información aparece como un bloque muy extenso; en Astro debe migrarse como una tabla o archivo de datos para que sea filtrable, legible y mantenible." },
      { title: "Ejemplos del listado actual", body: "La página vigente incluye fonogramas de varios años y artistas como Rony Hernández, The Killer Tomato, Perrozompopo, Carlos Peña, Armando Pineda, Daniela Carpio, El Gordo, Giovanni Passarelli, Soapbox, Fidel Funes, Kontra y otros. Esta muestra confirma que la migración debe tratarse como base de datos, no como texto editorial simple." },
      { title: "Cómo proceder si reconoces una participación", body: "Si reconoces una participación pendiente, comunícate con MUSICARTES o utiliza el proceso indicado en la zona de socios para completar la declaración correspondiente. Incluye nombre, teléfono, tema, artista, año y cualquier evidencia disponible.", links: [{ label: "Ir a zona de socios", href: "/zona-de-socios/" }, { label: "Contactar a Musicartes", href: "/contacto/" }] },
      { title: "Siguiente paso técnico", body: "Antes de publicar el listado completo en Astro, conviene extraerlo a CSV o JSON, normalizar duplicados, validar códigos ISRC y crear una interfaz de búsqueda por año, tema y artista." }
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
      { title: "Acceso al portal", body: "Musicartes está migrando a un sistema digital de gestión de repertorios. El portal de socios funciona como entrada para completar o actualizar información relacionada con canciones grabadas y repertorio declarado.", links: [{ label: "Portal de socios", href: "https://website.sociosmusicartes.org" }] },
      { title: "Declaración de canciones grabadas", body: "El socio debe revisar las reglas de distribución, descargar el archivo Excel de declaración de canciones grabadas y completar una hoja por canción. Luego puede subir el archivo XLS mediante el formulario indicado o enviarlo a MUSICARTES con nombre y teléfono por si se requieren datos adicionales." },
      { title: "Finalidad de las reglas internas", body: "MUSICARTES busca transparencia al realizar su rol principal: distribuir derechos provenientes de comunicación pública de fonogramas a los titulares correspondientes. Las reglas dan claridad sobre las opciones disponibles al declarar participación de fonogramas." },
      { title: "Opción 1: reglas generales", body: "La opción genérica aprobada por la entidad consiste en llenar el formato de Declaración de Tema Individual. En este formato se declara la participación, el nombre del artista y la designación como intérprete o ejecutante.", items: ["Los derechos se distribuyen 60% entre intérpretes en partes iguales.", "El 40% se distribuye entre ejecutantes en partes iguales.", "Si hay menos de seis ejecutantes, el porcentaje de ejecutantes se divide en seis partes y el restante se redistribuye entre intérpretes.", "Si hay más de seis ejecutantes, el 40% se distribuye en partes iguales entre quienes fueron declarados.", "Para efectos de distribución, generan derechos los asociados de MUSICARTES según las reglas aplicables."] },
      { title: "Opción 2: contrato privado", body: "Cuando un artista desea establecer porcentajes específicos de titularidad por derechos de intérpretes, MUSICARTES puede permitir contratos privados siempre que no sean contrarios a leyes nacionales e internacionales aplicables. La disposición de derechos conexos debe realizarse por escrito; los contratos verbales no son válidos para esta materia." },
      { title: "Principios básicos de contratación", body: "Solo puede disponerse del derecho propio, no del derecho de terceros. Si se asignan porcentajes específicos de titularidad, deben comparecer las personas a quienes se asignan esos porcentajes. MUSICARTES puede proveer un modelo de contrato como referencia." },
      { title: "Consideraciones finales", body: "Se considera intérprete a quien tiene un rol principal en la canción y forma parte de su ecuación mercadológica. Se considera ejecutante a quien tiene un rol secundario, como músicos de estudio o participantes de grabación que no forman parte del eje comercial del proyecto." },
      { title: "Pago por grabación y derechos conexos", body: "El derecho de intérprete o ejecutante surge desde la fijación de la grabación. Haber recibido pago por grabar no se interpreta como renuncia, cesión o transmisión de derechos, salvo que exista estipulación escrita válida." },
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
    id: "carlos-duarte",
    lang: "es",
    path: "/carlos-duarte/",
    title: "Carlos Duarte | Socios honorarios MUSICARTES",
    description: "Perfil del maestro Carlos Duarte, socio honorario de MUSICARTES.",
    h1: "Carlos Duarte",
    intro: "Perfil del maestro Carlos Duarte, integrante del archivo de socios honorarios de MUSICARTES.",
    sections: [
      { title: "Biografía por completar", body: "Esta página conserva una URL con señal de búsqueda y debe completarse con una biografía verificada, fotografía, trayectoria, reconocimientos y aportes a la música guatemalteca." },
      { title: "Criterio editorial", body: "La biografía definitiva debe trabajarse con fuentes confiables y revisión institucional para honrar correctamente su trayectoria." },
      { title: "Socios honorarios", body: "Este perfil forma parte del archivo de memoria cultural de MUSICARTES.", links: [{ label: "Volver a socios honorarios", href: "/socios-honorarios/" }] }
    ],
    translate: false
  },
  {
    id: "byron-sosa",
    lang: "es",
    path: "/byron-sosa/",
    title: "Byron Sosa | Socios honorarios MUSICARTES",
    description: "Perfil del maestro Byron Sosa, socio honorario de MUSICARTES.",
    h1: "Byron Sosa",
    intro: "Perfil del maestro Byron Sosa, integrante del archivo de socios honorarios de MUSICARTES.",
    sections: [
      { title: "Biografía por completar", body: "Esta página conserva una URL con señal de búsqueda y debe completarse con una biografía verificada, fotografía, trayectoria, reconocimientos y aportes a la música guatemalteca." },
      { title: "Criterio editorial", body: "La biografía definitiva debe trabajarse con fuentes confiables y revisión institucional para honrar correctamente su trayectoria." },
      { title: "Socios honorarios", body: "Este perfil forma parte del archivo de memoria cultural de MUSICARTES.", links: [{ label: "Volver a socios honorarios", href: "/socios-honorarios/" }] }
    ],
    translate: false
  },
  {
    id: "german-giordano",
    lang: "es",
    path: "/german-giordano/",
    title: "German Giordano | Socios honorarios MUSICARTES",
    description: "Perfil del maestro German Giordano, socio honorario de MUSICARTES.",
    h1: "German Giordano",
    intro: "Perfil del maestro German Giordano, integrante del archivo de socios honorarios de MUSICARTES.",
    sections: [
      { title: "URL limpia", body: "El análisis detectó que el sitio anterior usaba una URL con sufijo duplicado. Esta página conserva la versión limpia `/german-giordano/` y debe recibir la redirección desde la URL antigua." },
      { title: "Biografía por completar", body: "La biografía definitiva debe completarse con datos verificados, fotografía, trayectoria, reconocimientos y aportes a la música guatemalteca." },
      { title: "Socios honorarios", body: "Este perfil forma parte del archivo de memoria cultural de MUSICARTES.", links: [{ label: "Volver a socios honorarios", href: "/socios-honorarios/" }] }
    ],
    translate: false
  },
  {
    id: "fernando-perez-classes",
    lang: "es",
    path: "/clases-con-fernando-perez/",
    title: "Clases con Fernando Pérez | MUSICARTES",
    description: "Página informativa sobre clases y formación con el maestro Fernando Pérez.",
    h1: "Clases con Fernando Pérez",
    intro: "Página de continuidad para información sobre clases, talleres o formación vinculada al maestro Fernando Pérez.",
    sections: [
      { title: "Página vinculada al perfil", body: "El análisis de Search Console muestra que esta URL tiene buena eficiencia. Debe mantenerse y enlazarse desde el perfil del maestro Fernando Pérez." },
      { title: "Contenido pendiente", body: "Antes de publicarla como definitiva, conviene confirmar modalidad, disponibilidad, temario, fechas, costos y mecanismo de inscripción." },
      { title: "Perfil relacionado", body: "Consulta también el perfil institucional del maestro Fernando Pérez.", links: [{ label: "Fernando Pérez", href: "/fernando-perez/" }, { label: "Talleres", href: "/talleres/" }] }
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
