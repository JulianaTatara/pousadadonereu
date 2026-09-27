let SITE = {
  phone: '5547999753651',
  phoneDisplay: '(47) 99975-3651',
  nereuPhone: '5547999846109',
  nereuPhoneDisplay: '(47) 99984-6109',
  address: 'R. Camboriú, 219 - Palmital, Garuva - SC, 89248-000, Brasil',
  instagram: 'https://www.instagram.com/pousadadonereu',
  facebook: 'https://www.facebook.com/PousadaDoNereu/',
  placeId: 'ChIJd9WSHnED3JQRbtISFsy_nnI',
  maps: 'https://www.google.com/maps/dir/?api=1&destination=Pousada%20do%20Nereu%2C%20Garuva%20SC&destination_place_id=ChIJd9WSHnED3JQRbtISFsy_nnI',
  reviews: 'https://www.google.com/search?q=Pousada+do+Nereu+Garuva+avalia%C3%A7%C3%B5es',
  tides: 'https://tabuademares.com/br/santa-catarina/joinville'
};
async function loadCmsSiteConfig(){
  try{
    const response=await fetch('content/site.json',{cache:'no-store'});
    if(!response.ok)return;
    const data=await response.json();
    SITE={...SITE,...data};
  }catch(error){
    console.warn('CMS site settings unavailable; using built-in defaults.',error);
  }
}
const NAV = [
  {href:'index.html',pt:'Início',en:'Home',es:'Inicio'},
  {href:'a-pousada.html',pt:'A Pousada',en:'The Lodge',es:'La Posada',children:[
    {href:'sobre.html',pt:'Sobre a Pousada',en:'About the Lodge',es:'Sobre la Posada'},
    {href:'sobre-nos.html',pt:'Sobre Nós',en:'About Us',es:'Sobre Nosotros'},
    {href:'galeria.html',pt:'Galeria',en:'Gallery',es:'Galería'},
    {href:'fauna.html',pt:'Fauna',en:'Fauna',es:'Fauna'}
  ]},
  {href:'acomodacoes.html',pt:'Acomodações',en:'Rooms',es:'Alojamientos'},
  {href:'valores.html',pt:'Valores',en:'Rates',es:'Tarifas'},
  {href:'marina.html',pt:'Marina',en:'Marina',es:'Marina'},
  {href:'como-chegar.html',pt:'Como Chegar',en:'Directions',es:'Cómo llegar'},
  {href:'contato.html',pt:'Contato',en:'Contact',es:'Contacto'}
];
const I18N={
  pt:{contact:'Entre em contato',fishingConditions:'Condições de pesca',addressTitle:'Endereço',quick:'Menu rápido',social:'Redes sociais',rights:'Todos os direitos reservados.',reach:'Como chegar',footerBlurb:'Rústico, aconchegante e familiar. Natureza, pescaria e boas histórias às margens do Rio Palmital.',generalMessage:'Olá! Encontrei vocês pelo site da Pousada do Nereu e gostaria de mais informações.',nereuMessage:'Olá Nereu! Encontrei a pousada pelo site e gostaria de mais informações.'},
  en:{contact:'Contact us',fishingConditions:'Fishing conditions',addressTitle:'Address',quick:'Quick menu',social:'Social media',rights:'All rights reserved.',reach:'Directions',footerBlurb:'Rustic, welcoming and family-run. Nature, fishing and good stories along the Palmital River.',generalMessage:'Hello! I found Pousada do Nereu through the website and would like more information.',nereuMessage:'Hello Nereu! I found the lodge through the website and would like more information.'},
  es:{contact:'Contáctanos',fishingConditions:'Condiciones de pesca',addressTitle:'Dirección',quick:'Menú rápido',social:'Redes sociales',rights:'Todos los derechos reservados.',reach:'Cómo llegar',footerBlurb:'Rústico, acogedor y familiar. Naturaleza, pesca y buenas historias a orillas del río Palmital.',generalMessage:'¡Hola! Encontré Pousada do Nereu a través del sitio web y me gustaría recibir más información.',nereuMessage:'¡Hola Nereu! Encontré la posada a través del sitio web y me gustaría recibir más información.'}
};
const LANG_META={pt:{label:'PT',flag:'assets/flag-br.svg',alt:'Brasil'},en:{label:'EN',flag:'assets/flag-us.svg',alt:'English'},es:{label:'ES',flag:'assets/flag-es.svg',alt:'España'}};

const STATIC_TRANSLATIONS={
  en:{
    'Conheça a Pousada do Nereu':'Discover Pousada do Nereu',
    'A Pousada':'The Lodge',
    'História, pessoas, paisagens e a biodiversidade que fazem parte de um lugar marcado pela pesca do robalo e pela hospitalidade familiar.':'History, people, landscapes and biodiversity come together in a place shaped by snook fishing and family hospitality.',
    'Sobre a Pousada':'About the Lodge',
    'Conheça a história, a estrutura e os números da Pousada do Nereu.':'Discover the history, facilities and key facts about Pousada do Nereu.',
    'Conhecer →':'Discover →',
    'Sobre Nós':'About Us',
    'Conheça um pouco mais sobre os proprietários.':'Learn a little more about the owners.',
    'Galeria':'Gallery',
    'Veja áreas, rio, marina e momentos de pesca.':'See the lodge areas, river, marina and fishing moments.',
    'Explorar →':'Explore →',
    'Fauna':'Wildlife',
    'Descubra os peixes e a biodiversidade ligados ao Ecossistema Babitonga.':'Discover the fish and biodiversity connected to the Babitonga ecosystem.',

    'Nossa história':'Our story',
    'Uma pousada clássica da região, conhecida pela pesca do robalo e pelo jeito simples, acolhedor e familiar de receber.':'A classic lodge in the region, known for snook fishing and its simple, warm, family-style hospitality.',
    'Lotação máxima':'Maximum capacity',
    'Quartos':'Rooms',
    'Barcos':'Boats',
    'Atendemos o ano todo':'Open year-round',
    'Desde 1998':'Since 1998',
    'Uma pousada que nasceu da pesca':'A lodge born from fishing',
    'Às margens do Rio Palmital, a Pousada do Nereu foi inaugurada em novembro de 1998 para receber apaixonados pela pesca do robalo. Com o tempo, tornou-se ponto conhecido por pescadores de diferentes partes do Brasil e países vizinhos.':'On the banks of the Palmital River, Pousada do Nereu opened in November 1998 to welcome people passionate about snook fishing. Over time, it became a well-known destination for anglers from different parts of Brazil and neighboring countries.',
    'A proposta permanece simples: hospedagem acolhedora, comida caseira, apoio à pescaria e contato direto com a natureza da região da Baía da Babitonga.':'The idea remains simple: welcoming accommodation, home-style food, fishing support and direct contact with the nature of the Babitonga Bay region.',

    'Quem recebe você':'Meet your hosts',
    'Uma pousada familiar é feita de pessoas. Conheça um pouco de quem faz parte da história e do dia a dia da Pousada do Nereu.':'A family-run lodge is made by people. Meet some of those who are part of the history and daily life of Pousada do Nereu.',
    'De pescador':'From angler',
    'para pescador':'to angler',
    'Proprietário':'Owner',
    'Nereu é um dos proprietários da pousada e uma referência da casa na pesca do robalo. A relação com o rio, a pescaria e os hóspedes faz parte da identidade construída pela pousada ao longo dos anos.':'Nereu is one of the lodge owners and a key reference for snook fishing. His connection with the river, fishing and guests is part of the identity the lodge has built over the years.',
    'Proprietária':'Owner',
    'Foto de Marcia':'Photo of Marcia',
    'Marcia também é proprietária da Pousada do Nereu e faz parte da história e da rotina da casa. Este espaço está preparado para receber sua foto e um texto mais completo sobre sua trajetória na pousada.':'Marcia is also an owner of Pousada do Nereu and is part of the lodge’s history and daily routine. This space is ready for her photo and a fuller text about her journey at the lodge.',

    'À beira do Rio Palmital':'On the banks of the Palmital River',
    'Estrutura para quem chega com embarcação ou quer deixar o barco próximo do ponto de partida da pescaria.':'Facilities for guests arriving with their own boat or who want to keep it close to the fishing departure point.',
    'Acesso direto ao rio':'Direct river access',
    'Seu barco perto da água':'Your boat close to the water',
    'Seu ponto de partida no rio.':'Your starting point on the river.',
    'A marina dá apoio a quem chega com embarcação e quer manter o barco próximo do acesso ao Rio Palmital. Consulte disponibilidade, período e condições diretamente com a pousada.':'The marina supports guests arriving with their own boat who want to keep it close to the Palmital River access. Check availability, dates and conditions directly with the lodge.',
    'Quero deixar meu barco com vocês':'I want to keep my boat with you',
    'clique aqui':'click here',
    'Rampa':'Boat ramp',
    'Mais praticidade para embarque e desembarque.':'Easier launching and retrieval.',
    'Acesso ao rio':'River access',
    'Saída próxima para começar a pescaria.':'A nearby departure point to start fishing.',
    'Vagas sob consulta':'Spaces by request',
    'Consulte período e condições diretamente com a pousada.':'Check dates and conditions directly with the lodge.',

    'Como Chegar':'Directions',
    'Abrir no Google Maps / Traçar rota →':'Open in Google Maps / Get directions →',
    'Distâncias aproximadas de carro':'Approximate driving distances',
    'Destino':'Destination',
    'Distância':'Distance',
    'Tempo':'Time',
    'Aeroporto de Joinville (JOI)':'Joinville Airport (JOI)',
    'Aeroporto Afonso Pena (CWB)':'Afonso Pena Airport (CWB)',
    'Mapa da Pousada do Nereu':'Map of Pousada do Nereu',

    'Fale com a gente':'Talk to us',
    'Contato':'Contact',
    'Para disponibilidade, valores ou dúvidas rápidas, fale conosco pelo WhatsApp ou envie uma mensagem pelo formulário.':'For availability, rates or quick questions, contact us on WhatsApp or send a message using the form.',
    'Fale diretamente conosco':'Contact us directly',
    'Clique abaixo para entrar em contato conosco':'Click below to contact us',
    'Endereço':'Address',
    'Mensagem':'Message',
    'Envie uma mensagem':'Send a message',
    'Nome *':'Name *',
    'E-mail *':'Email *',
    'Telefone *':'Phone *',
    'Mensagem *':'Message *',
    'Enviar mensagem →':'Send message →',

    'Tempo, lua e maré':'Weather, moon and tides',
    'Conheça as condições climáticas e ambientais para sua pescaria':'Learn about the weather and environmental conditions for your fishing trip',
    'Previsão da semana':'Weekly forecast',
    'Planeje sua pescaria com o clima em mente':'Plan your fishing trip with the weather in mind',
    'Veja a previsão da semana. Mesmo com chuva, pode sair peixe — então consulte a pousada para entender as condições do rio nos dias em que você pretende pescar.':'Check the week’s forecast. Fish can still bite in the rain, so contact the lodge to understand river conditions for the days you plan to fish.',
    'Carregando previsão...':'Loading forecast...',
    'Carregando previsão da semana...':'Loading weekly forecast...',
    'Previsão automática para Garuva/SC.':'Automatic forecast for Garuva, SC.',
    'Fases da lua':'Moon phases',
    'Veja como a lua pode influenciar':'See how the moon can influence fishing',
    'Essas referências seguem o conhecimento e a experiência de anos do Nereu, acompanhando a pescaria na região.':'These references are based on Nereu’s years of local fishing knowledge and experience.',
    'Experiência local':'Local experience',
    'Legenda das luas':'Moon phase guide',
    'Legenda das fases da lua':'Moon phase guide',
    'Lua nova':'New moon',
    'Condição intermediária':'Intermediate conditions',
    'Maiores chances de pegar peixe':'Higher chance of catching fish',
    'Lua crescente':'Waxing moon',
    'Costuma ser favorável':'Usually favorable',
    'Lua cheia':'Full moon',
    'Costuma ser menos favorável':'Usually less favorable',
    'Lua minguante':'Waning moon',
    'Conhecimento de quem pesca aqui há anos.':'Knowledge from years of fishing here.',
    'Estas referências são baseadas no conhecimento e na experiência de muitos anos de Nereu, proprietário da pousada, acompanhando a pesca no Rio Palmital e na região.':'These references are based on many years of knowledge and experience from Nereu, owner of the lodge, following fishing conditions on the Palmital River and in the region.',
    'As condições reais também podem variar com maré, chuva, vento, horário e outros fatores do dia.':'Actual conditions can also vary with tides, rain, wind, time of day and other daily factors.',
    'Calendário lunar':'Lunar calendar',
    'Role para baixo ↓':'Scroll down ↓',
    'Dê zoom no mês que você tem interesse em ir pescar':'Zoom in on the month you are interested in fishing',
    'Além da lua':'Beyond the moon',
    'Marés':'Tides',
    'A maré também pode influenciar a pescaria, alterando o nível da água, a força da corrente e a movimentação dos peixes no estuário. O melhor momento depende da combinação das condições do dia e do ponto de pesca.':'Tides can also influence fishing by changing water level, current strength and fish movement in the estuary. The best time depends on the combination of daily conditions and the fishing spot.',
    'Clique aqui para conversar com o Nereu e entender as condições para sua pescaria →':'Click here to talk to Nereu and understand the conditions for your fishing trip →',

    'Conheça antes de chegar':'Take a look before you arrive',
    'Explore momentos, sabores e cantinhos da pousada. Você poderá trocar a foto de fundo depois e ajustar o desfoque como preferir.':'Explore moments, flavors and corners of the lodge.',
    'Áreas e experiências':'Areas and experiences',
    'Tudo':'All',
    'Janta':'Dinner',
    'Café da manhã':'Breakfast',
    'Churrasqueira':'Barbecue area',
    'Sinuca':'Pool table',
    'Beira do rio':'Riverside',
    'Refeitório':'Dining room',
    'Varanda':'Veranda',
    'Estacionamento':'Parking',
    'Lago':'Lake',
    'Miniaturas por localização · role a barra para o lado':'Thumbnails by area · scroll sideways',
    'Legenda editável: vista do Rio Palmital ao entardecer.':'View of the Palmital River at sunset.',
    'Clique para ampliar · use as setas para navegar':'Click to enlarge · use the arrows to navigate',
    'Foto anterior':'Previous photo',
    'Próxima foto':'Next photo',
    'Abrir foto em tela cheia':'Open photo full screen',
    'Foto ampliada da galeria':'Enlarged gallery photo',
    'Acompanhe a pousada':'Follow the lodge',
    'Você já conferiu nosso Instagram?':'Have you checked out our Instagram?',
    'Nos siga na nossa página única e oficial e acompanhe nossos posts e stories mais recentes.':'Follow our one and only official page and keep up with our latest posts and stories.',
    'Ver no Instagram ↗':'View on Instagram ↗',
    'Carregando Instagram da Pousada do Nereu…':'Loading Pousada do Nereu on Instagram…',

    'Ecossistema Babitonga':'Babitonga ecosystem',
    'Biodiversidade, manguezal e pesca no Rio Palmital e na Baía da Babitonga.':'Biodiversity, mangroves and fishing on the Palmital River and in Babitonga Bay.',
    'Água, manguezal e biodiversidade':'Water, mangroves and biodiversity',
    'Um estuário cheio de vida':'An estuary full of life',
    'O Ecossistema Babitonga reúne ambientes estuarinos e marinhos diversos e funciona como área de alimentação, abrigo e crescimento para muitas espécies de peixes.':'The Babitonga ecosystem brings together diverse estuarine and marine environments and provides feeding, shelter and nursery areas for many fish species.',
    'Estuário':'Estuary',
    'Manguezal':'Mangroves',
    'Abrigo e alimentação':'Shelter and feeding',
    'Tamanhos e pesos abaixo são referências máximas publicadas para cada espécie e não representam necessariamente exemplares encontrados no Rio Palmital.':'The sizes and weights below are published maximum references for each species and do not necessarily represent specimens found in the Palmital River.',
    'Pesca local':'Local fishing',
    'Robalo no centro da identidade':'Snook at the heart of our identity',
    'Entre as capturas relatadas com mais frequência pela pousada estão robalo-peva, robalo-flecha e pescada-amarela, além de peixe-espada, corvina e linguado.':'Among the catches most frequently reported by the lodge are fat snook, common snook and acoupa weakfish, as well as largehead hairtail, whitemouth croaker and flounder.',
    'Robalo-peva':'Fat snook',
    'Robalo-flecha':'Common snook',
    'Pescada-amarela':'Acoupa weakfish',
    'Espécies':'Species',
    'Peixes da região':'Fish of the region',
    'Conheça algumas das espécies relacionadas à pesca local.':'Discover some of the species associated with local fishing.',
    'Espécie estuarina associada a águas costeiras, manguezais e trechos de baixa salinidade.':'An estuarine species associated with coastal waters, mangroves and low-salinity areas.',
    'O maior dos robalos da página, encontrado em ambientes costeiros, estuários, lagoas e manguezais.':'The largest snook listed here, found in coastal environments, estuaries, lagoons and mangroves.',
    'Peixe estuarino-marinho que se alimenta principalmente de peixes e crustáceos.':'An estuarine-marine fish that feeds mainly on fish and crustaceans.',
    'Corvina':'Whitemouth croaker',
    'Espécie costeira e estuarina bastante associada a fundos arenosos e lodosos.':'A coastal and estuarine species strongly associated with sandy and muddy bottoms.',
    'Peixe-espada':'Largehead hairtail',
    'Espécie costeira de corpo extremamente alongado, encontrada também em águas salobras.':'A coastal species with an extremely elongated body, also found in brackish waters.',
    'Linguado':'Flounder',
    'Paralichthys brasiliensis — referência':'Paralichthys brasiliensis — reference',
    'Peixe de fundo encontrado em áreas costeiras, baías e estuários. A espécie capturada localmente deve ser confirmada.':'A bottom-dwelling fish found in coastal areas, bays and estuaries. The species caught locally should be confirmed.',
    'Tamanho máximo':'Maximum size',
    'Peso máximo':'Maximum weight',
    'Mínimo legal de captura/desembarque':'Legal minimum catch/landing size',
    'Referências técnicas: IN MMA nº 53/2005 para tamanhos mínimos dos robalos; FishBase e literatura pesqueira para tamanhos/pesos máximos. Consulte sempre a legislação vigente antes da pesca.':'Technical references: MMA Normative Instruction No. 53/2005 for minimum snook sizes; FishBase and fisheries literature for maximum sizes/weights. Always check current regulations before fishing.'
  },
  es:{
    'Conheça a Pousada do Nereu':'Conoce Pousada do Nereu',
    'A Pousada':'La Posada',
    'História, pessoas, paisagens e a biodiversidade que fazem parte de um lugar marcado pela pesca do robalo e pela hospitalidade familiar.':'Historia, personas, paisajes y biodiversidad forman parte de un lugar marcado por la pesca del róbalo y la hospitalidad familiar.',
    'Sobre a Pousada':'Sobre la Posada',
    'Conheça a história, a estrutura e os números da Pousada do Nereu.':'Conoce la historia, la estructura y los datos principales de Pousada do Nereu.',
    'Conhecer →':'Conocer →',
    'Sobre Nós':'Sobre Nosotros',
    'Conheça um pouco mais sobre os proprietários.':'Conoce un poco más a los propietarios.',
    'Galeria':'Galería',
    'Veja áreas, rio, marina e momentos de pesca.':'Descubre las áreas, el río, la marina y momentos de pesca.',
    'Explorar →':'Explorar →',
    'Fauna':'Fauna',
    'Descubra os peixes e a biodiversidade ligados ao Ecossistema Babitonga.':'Descubre los peces y la biodiversidad vinculados al ecosistema Babitonga.',

    'Nossa história':'Nuestra historia',
    'Uma pousada clássica da região, conhecida pela pesca do robalo e pelo jeito simples, acolhedor e familiar de receber.':'Una posada clásica de la región, conocida por la pesca del róbalo y por su forma sencilla, acogedora y familiar de recibir.',
    'Lotação máxima':'Capacidad máxima',
    'Quartos':'Habitaciones',
    'Barcos':'Barcos',
    'Atendemos o ano todo':'Abierto todo el año',
    'Desde 1998':'Desde 1998',
    'Uma pousada que nasceu da pesca':'Una posada que nació de la pesca',
    'Às margens do Rio Palmital, a Pousada do Nereu foi inaugurada em novembro de 1998 para receber apaixonados pela pesca do robalo. Com o tempo, tornou-se ponto conhecido por pescadores de diferentes partes do Brasil e países vizinhos.':'A orillas del río Palmital, Pousada do Nereu abrió en noviembre de 1998 para recibir a apasionados por la pesca del róbalo. Con el tiempo, se convirtió en un destino conocido por pescadores de distintas partes de Brasil y de países vecinos.',
    'A proposta permanece simples: hospedagem acolhedora, comida caseira, apoio à pescaria e contato direto com a natureza da região da Baía da Babitonga.':'La propuesta sigue siendo sencilla: hospedaje acogedor, comida casera, apoyo para la pesca y contacto directo con la naturaleza de la región de la Bahía de Babitonga.',

    'Quem recebe você':'Quién te recibe',
    'Uma pousada familiar é feita de pessoas. Conheça um pouco de quem faz parte da história e do dia a dia da Pousada do Nereu.':'Una posada familiar está hecha de personas. Conoce a quienes forman parte de la historia y del día a día de Pousada do Nereu.',
    'De pescador':'De pescador',
    'para pescador':'para pescador',
    'Proprietário':'Propietario',
    'Nereu é um dos proprietários da pousada e uma referência da casa na pesca do robalo. A relação com o rio, a pescaria e os hóspedes faz parte da identidade construída pela pousada ao longo dos anos.':'Nereu es uno de los propietarios de la posada y una referencia de la casa en la pesca del róbalo. Su relación con el río, la pesca y los huéspedes forma parte de la identidad construida por la posada a lo largo de los años.',
    'Proprietária':'Propietaria',
    'Foto de Marcia':'Foto de Marcia',
    'Marcia também é proprietária da Pousada do Nereu e faz parte da história e da rotina da casa. Este espaço está preparado para receber sua foto e um texto mais completo sobre sua trajetória na pousada.':'Marcia también es propietaria de Pousada do Nereu y forma parte de la historia y de la rutina de la casa. Este espacio está preparado para recibir su foto y un texto más completo sobre su trayectoria en la posada.',

    'À beira do Rio Palmital':'A orillas del río Palmital',
    'Estrutura para quem chega com embarcação ou quer deixar o barco próximo do ponto de partida da pescaria.':'Estructura para quienes llegan con embarcación propia o quieren dejar el barco cerca del punto de salida para pescar.',
    'Acesso direto ao rio':'Acceso directo al río',
    'Seu barco perto da água':'Tu barco cerca del agua',
    'Seu ponto de partida no rio.':'Tu punto de partida en el río.',
    'A marina dá apoio a quem chega com embarcação e quer manter o barco próximo do acesso ao Rio Palmital. Consulte disponibilidade, período e condições diretamente com a pousada.':'La marina brinda apoyo a quienes llegan con embarcación y quieren mantener el barco cerca del acceso al río Palmital. Consulta disponibilidad, período y condiciones directamente con la posada.',
    'Quero deixar meu barco com vocês':'Quiero dejar mi barco con ustedes',
    'clique aqui':'haz clic aquí',
    'Rampa':'Rampa',
    'Mais praticidade para embarque e desembarque.':'Más practicidad para botar y retirar la embarcación.',
    'Acesso ao rio':'Acceso al río',
    'Saída próxima para começar a pescaria.':'Salida cercana para comenzar la pesca.',
    'Vagas sob consulta':'Plazas bajo consulta',
    'Consulte período e condições diretamente com a pousada.':'Consulta período y condiciones directamente con la posada.',

    'Como Chegar':'Cómo llegar',
    'Abrir no Google Maps / Traçar rota →':'Abrir en Google Maps / Trazar ruta →',
    'Distâncias aproximadas de carro':'Distancias aproximadas en coche',
    'Destino':'Destino',
    'Distância':'Distancia',
    'Tempo':'Tiempo',
    'Aeroporto de Joinville (JOI)':'Aeropuerto de Joinville (JOI)',
    'Aeroporto Afonso Pena (CWB)':'Aeropuerto Afonso Pena (CWB)',
    'Mapa da Pousada do Nereu':'Mapa de Pousada do Nereu',

    'Fale com a gente':'Habla con nosotros',
    'Contato':'Contacto',
    'Para disponibilidade, valores ou dúvidas rápidas, fale conosco pelo WhatsApp ou envie uma mensagem pelo formulário.':'Para disponibilidad, precios o preguntas rápidas, contáctanos por WhatsApp o envía un mensaje mediante el formulario.',
    'Fale diretamente conosco':'Habla directamente con nosotros',
    'Clique abaixo para entrar em contato conosco':'Haz clic abajo para ponerte en contacto con nosotros',
    'Endereço':'Dirección',
    'Mensagem':'Mensaje',
    'Envie uma mensagem':'Envía un mensaje',
    'Nome *':'Nombre *',
    'E-mail *':'Correo electrónico *',
    'Telefone *':'Teléfono *',
    'Mensagem *':'Mensaje *',
    'Enviar mensagem →':'Enviar mensaje →',

    'Tempo, lua e maré':'Tiempo, luna y mareas',
    'Conheça as condições climáticas e ambientais para sua pescaria':'Conoce las condiciones climáticas y ambientales para tu jornada de pesca',
    'Previsão da semana':'Pronóstico semanal',
    'Planeje sua pescaria com o clima em mente':'Planifica tu pesca teniendo en cuenta el clima',
    'Veja a previsão da semana. Mesmo com chuva, pode sair peixe — então consulte a pousada para entender as condições do rio nos dias em que você pretende pescar.':'Consulta el pronóstico de la semana. Incluso con lluvia puede haber buena pesca, así que consulta con la posada para conocer las condiciones del río en los días que planeas pescar.',
    'Carregando previsão...':'Cargando pronóstico...',
    'Carregando previsão da semana...':'Cargando pronóstico semanal...',
    'Previsão automática para Garuva/SC.':'Pronóstico automático para Garuva, SC.',
    'Fases da lua':'Fases de la luna',
    'Veja como a lua pode influenciar':'Descubre cómo puede influir la luna',
    'Essas referências seguem o conhecimento e a experiência de anos do Nereu, acompanhando a pescaria na região.':'Estas referencias se basan en los años de conocimiento y experiencia local de Nereu.',
    'Experiência local':'Experiencia local',
    'Legenda das luas':'Guía de las fases lunares',
    'Legenda das fases da lua':'Guía de las fases lunares',
    'Lua nova':'Luna nueva',
    'Condição intermediária':'Condiciones intermedias',
    'Maiores chances de pegar peixe':'Mayores posibilidades de pescar',
    'Lua crescente':'Luna creciente',
    'Costuma ser favorável':'Suele ser favorable',
    'Lua cheia':'Luna llena',
    'Costuma ser menos favorável':'Suele ser menos favorable',
    'Lua minguante':'Luna menguante',
    'Conhecimento de quem pesca aqui há anos.':'Conocimiento de quien pesca aquí desde hace años.',
    'Estas referências são baseadas no conhecimento e na experiência de muitos anos de Nereu, proprietário da pousada, acompanhando a pesca no Rio Palmital e na região.':'Estas referencias se basan en muchos años de conocimiento y experiencia de Nereu, propietario de la posada, siguiendo las condiciones de pesca en el río Palmital y en la región.',
    'As condições reais também podem variar com maré, chuva, vento, horário e outros fatores do dia.':'Las condiciones reales también pueden variar según la marea, la lluvia, el viento, la hora y otros factores del día.',
    'Calendário lunar':'Calendario lunar',
    'Role para baixo ↓':'Desplázate hacia abajo ↓',
    'Dê zoom no mês que você tem interesse em ir pescar':'Amplía el mes en el que te interesa ir a pescar',
    'Além da lua':'Además de la luna',
    'Marés':'Mareas',
    'A maré também pode influenciar a pescaria, alterando o nível da água, a força da corrente e a movimentação dos peixes no estuário. O melhor momento depende da combinação das condições do dia e do ponto de pesca.':'La marea también puede influir en la pesca, modificando el nivel del agua, la fuerza de la corriente y el movimiento de los peces en el estuario. El mejor momento depende de la combinación de las condiciones del día y del punto de pesca.',
    'Clique aqui para conversar com o Nereu e entender as condições para sua pescaria →':'Haz clic aquí para hablar con Nereu y conocer las condiciones para tu jornada de pesca →',

    'Conheça antes de chegar':'Conoce el lugar antes de llegar',
    'Explore momentos, sabores e cantinhos da pousada. Você poderá trocar a foto de fundo depois e ajustar o desfoque como preferir.':'Explora momentos, sabores y rincones de la posada.',
    'Áreas e experiências':'Áreas y experiencias',
    'Tudo':'Todo',
    'Janta':'Cena',
    'Café da manhã':'Desayuno',
    'Churrasqueira':'Parrilla',
    'Sinuca':'Billar',
    'Beira do rio':'Orilla del río',
    'Refeitório':'Comedor',
    'Varanda':'Terraza',
    'Estacionamento':'Estacionamiento',
    'Lago':'Lago',
    'Miniaturas por localização · role a barra para o lado':'Miniaturas por área · desliza hacia un lado',
    'Legenda editável: vista do Rio Palmital ao entardecer.':'Vista del río Palmital al atardecer.',
    'Clique para ampliar · use as setas para navegar':'Haz clic para ampliar · usa las flechas para navegar',
    'Foto anterior':'Foto anterior',
    'Próxima foto':'Foto siguiente',
    'Abrir foto em tela cheia':'Abrir foto en pantalla completa',
    'Foto ampliada da galeria':'Foto ampliada de la galería',
    'Acompanhe a pousada':'Sigue la posada',
    'Você já conferiu nosso Instagram?':'¿Ya viste nuestro Instagram?',
    'Nos siga na nossa página única e oficial e acompanhe nossos posts e stories mais recentes.':'Síguenos en nuestra única página oficial y acompaña nuestras publicaciones e historias más recientes.',
    'Ver no Instagram ↗':'Ver en Instagram ↗',
    'Carregando Instagram da Pousada do Nereu…':'Cargando Instagram de Pousada do Nereu…',

    'Ecossistema Babitonga':'Ecosistema Babitonga',
    'Biodiversidade, manguezal e pesca no Rio Palmital e na Baía da Babitonga.':'Biodiversidad, manglar y pesca en el río Palmital y la Bahía de Babitonga.',
    'Água, manguezal e biodiversidade':'Agua, manglar y biodiversidad',
    'Um estuário cheio de vida':'Un estuario lleno de vida',
    'O Ecossistema Babitonga reúne ambientes estuarinos e marinhos diversos e funciona como área de alimentação, abrigo e crescimento para muitas espécies de peixes.':'El ecosistema Babitonga reúne diversos ambientes estuarinos y marinos y funciona como zona de alimentación, refugio y crecimiento para muchas especies de peces.',
    'Estuário':'Estuario',
    'Manguezal':'Manglar',
    'Abrigo e alimentação':'Refugio y alimentación',
    'Tamanhos e pesos abaixo são referências máximas publicadas para cada espécie e não representam necessariamente exemplares encontrados no Rio Palmital.':'Los tamaños y pesos indicados son referencias máximas publicadas para cada especie y no representan necesariamente ejemplares encontrados en el río Palmital.',
    'Pesca local':'Pesca local',
    'Robalo no centro da identidade':'El róbalo en el centro de nuestra identidad',
    'Entre as capturas relatadas com mais frequência pela pousada estão robalo-peva, robalo-flecha e pescada-amarela, além de peixe-espada, corvina e linguado.':'Entre las capturas más frecuentes informadas por la posada están el róbalo peva, el róbalo común y la pescada amarilla, además del pez sable, la corvina y el lenguado.',
    'Robalo-peva':'Róbalo peva',
    'Robalo-flecha':'Róbalo común',
    'Pescada-amarela':'Pescada amarilla',
    'Espécies':'Especies',
    'Peixes da região':'Peces de la región',
    'Conheça algumas das espécies relacionadas à pesca local.':'Conoce algunas de las especies relacionadas con la pesca local.',
    'Espécie estuarina associada a águas costeiras, manguezais e trechos de baixa salinidade.':'Especie estuarina asociada a aguas costeras, manglares y zonas de baja salinidad.',
    'O maior dos robalos da página, encontrado em ambientes costeiros, estuários, lagoas e manguezais.':'El mayor de los róbalos de esta página, presente en ambientes costeros, estuarios, lagunas y manglares.',
    'Peixe estuarino-marinho que se alimenta principalmente de peixes e crustáceos.':'Pez estuarino-marino que se alimenta principalmente de peces y crustáceos.',
    'Corvina':'Corvina',
    'Espécie costeira e estuarina bastante associada a fundos arenosos e lodosos.':'Especie costera y estuarina muy asociada a fondos arenosos y fangosos.',
    'Peixe-espada':'Pez sable',
    'Espécie costeira de corpo extremamente alongado, encontrada também em águas salobras.':'Especie costera de cuerpo extremadamente alargado, que también se encuentra en aguas salobres.',
    'Linguado':'Lenguado',
    'Paralichthys brasiliensis — referência':'Paralichthys brasiliensis — referencia',
    'Peixe de fundo encontrado em áreas costeiras, baías e estuários. A espécie capturada localmente deve ser confirmada.':'Pez de fondo presente en zonas costeras, bahías y estuarios. La especie capturada localmente debe confirmarse.',
    'Tamanho máximo':'Tamaño máximo',
    'Peso máximo':'Peso máximo',
    'Mínimo legal de captura/desembarque':'Tamaño mínimo legal de captura/desembarque',
    'Referências técnicas: IN MMA nº 53/2005 para tamanhos mínimos dos robalos; FishBase e literatura pesqueira para tamanhos/pesos máximos. Consulte sempre a legislação vigente antes da pesca.':'Referencias técnicas: IN MMA n.º 53/2005 para tamaños mínimos de los róbalos; FishBase y literatura pesquera para tamaños/pesos máximos. Consulta siempre la normativa vigente antes de pescar.'
  }
};

const GALLERY_DESCRIPTIONS={
  en:{
    'vista do Rio Palmital e da margem da pousada.':'view of the Palmital River and the lodge riverbank.',
    'estrutura da marina e ponto de saída para a pescaria.':'marina facilities and fishing departure point.',
    'área de varanda e convivência da pousada.':'veranda and common area of the lodge.',
    'detalhes do café da manhã servido na pousada.':'details of the breakfast served at the lodge.',
    'refeições caseiras e momentos à mesa.':'home-style meals and moments around the table.',
    'ambiente do refeitório da pousada.':'the lodge dining room.',
    'área da churrasqueira e encontros em grupo.':'barbecue area and group gatherings.',
    'espaço de convivência com mesa de sinuca.':'common area with a pool table.',
    'área de estacionamento da pousada.':'the lodge parking area.',
    'lago e área externa da pousada.':'the lake and outdoor area of the lodge.'
  },
  es:{
    'vista do Rio Palmital e da margem da pousada.':'vista del río Palmital y de la orilla de la posada.',
    'estrutura da marina e ponto de saída para a pescaria.':'estructura de la marina y punto de salida para pescar.',
    'área de varanda e convivência da pousada.':'terraza y área de convivencia de la posada.',
    'detalhes do café da manhã servido na pousada.':'detalles del desayuno servido en la posada.',
    'refeições caseiras e momentos à mesa.':'comidas caseras y momentos alrededor de la mesa.',
    'ambiente do refeitório da pousada.':'el comedor de la posada.',
    'área da churrasqueira e encontros em grupo.':'zona de parrilla y reuniones en grupo.',
    'espaço de convivência com mesa de sinuca.':'área de convivencia con mesa de billar.',
    'área de estacionamento da pousada.':'el estacionamiento de la posada.',
    'lago e área externa da pousada.':'el lago y la zona exterior de la posada.'
  }
};

const PAGE_TITLES={
  en:{'a-pousada.html':'The Lodge | Pousada do Nereu','sobre.html':'About the Lodge | Pousada do Nereu','sobre-nos.html':'About Us | Pousada do Nereu','galeria.html':'Gallery | Pousada do Nereu','fauna.html':'Wildlife | Pousada do Nereu','acomodacoes.html':'Accommodations | Pousada do Nereu','valores.html':'Rates | Pousada do Nereu','marina.html':'Marina | Pousada do Nereu','como-chegar.html':'Directions | Pousada do Nereu','condicoes.html':'Fishing Conditions | Pousada do Nereu','contato.html':'Contact | Pousada do Nereu'},
  es:{'a-pousada.html':'La Posada | Pousada do Nereu','sobre.html':'Sobre la Posada | Pousada do Nereu','sobre-nos.html':'Sobre Nosotros | Pousada do Nereu','galeria.html':'Galería | Pousada do Nereu','fauna.html':'Fauna | Pousada do Nereu','acomodacoes.html':'Alojamientos | Pousada do Nereu','valores.html':'Tarifas | Pousada do Nereu','marina.html':'Marina | Pousada do Nereu','como-chegar.html':'Cómo llegar | Pousada do Nereu','condicoes.html':'Condiciones de pesca | Pousada do Nereu','contato.html':'Contacto | Pousada do Nereu'}
};

function translatedValue(value){
  if(lang==='pt'||!value)return value;
  const map=STATIC_TRANSLATIONS[lang]||{};
  const trimmed=value.trim();
  if(map[trimmed])return value.replace(trimmed,map[trimmed]);
  if(/^até\s+/i.test(trimmed))return value.replace(trimmed,(lang==='en'?'up to ':'hasta ')+trimmed.replace(/^até\s+/i,''));
  const photoAlt=trimmed.match(/^(.+)\s—\sfoto\s(\d+)$/i);
  if(photoAlt){
    const cat=map[photoAlt[1]]||photoAlt[1];
    return value.replace(trimmed,cat+' — '+(lang==='en'?'photo ':'foto ')+photoAlt[2]);
  }
  const caption=trimmed.match(/^(.+)\s·\sfoto\s(\d+)\.\sLegenda editável:\s(.+)$/i);
  if(caption){
    const cat=map[caption[1]]||caption[1];
    const desc=(GALLERY_DESCRIPTIONS[lang]||{})[caption[3]]||caption[3];
    return value.replace(trimmed,cat+' · '+(lang==='en'?'photo ':'foto ')+caption[2]+'. '+(lang==='en'?'Editable caption: ':'Leyenda editable: ')+desc);
  }
  return value;
}

function applySiteTranslations(){
  if(lang==='pt'){document.documentElement.lang='pt-BR';return}
  document.documentElement.lang=lang==='en'?'en':'es';
  let page=(location.pathname.split('/').pop()||'index.html');
  if(page&&!page.includes('.'))page+='.html';
  if(PAGE_TITLES[lang]?.[page])document.title=PAGE_TITLES[lang][page];

  const walker=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT,{
    acceptNode(node){
      const parent=node.parentElement;
      if(!parent||['SCRIPT','STYLE','NOSCRIPT'].includes(parent.tagName))return NodeFilter.FILTER_REJECT;
      return node.nodeValue.trim()?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT;
    }
  });
  const nodes=[];
  while(walker.nextNode())nodes.push(walker.currentNode);
  nodes.forEach(node=>{node.nodeValue=translatedValue(node.nodeValue)});

  document.querySelectorAll('[alt],[aria-label],[title],[placeholder],[data-title],[data-caption]').forEach(el=>{
    ['alt','aria-label','title','placeholder','data-title','data-caption'].forEach(attr=>{
      if(el.hasAttribute(attr))el.setAttribute(attr,translatedValue(el.getAttribute(attr)));
    });
  });

  if(page==='contato.html'){
    const links=[...document.querySelectorAll('.whatsapp-action-v22')];
    if(links[0])links[0].href=wa(lang==='en'?'Hello Marcia! I found your contact through the lodge website and would like more information.':'¡Hola Marcia! Encontré tu contacto a través del sitio web de la posada y me gustaría recibir más información.');
    if(links[1])links[1].href=wa(lang==='en'?'Hello Nereu! I found your contact through the lodge website and would like more information.':'¡Hola Nereu! Encontré tu contacto a través del sitio web de la posada y me gustaría recibir más información.',SITE.nereuPhone);
  }
  if(page==='marina.html'){
    const cta=document.querySelector('.marina-cta');
    if(cta)cta.href=wa(lang==='en'?'Hello! I saw the marina on the Pousada do Nereu website and would like to check availability and rates to keep my boat with you. My boat is approximately ___ meters long and I would need a space for the following period: _______.':'¡Hola! Vi la marina en el sitio web de Pousada do Nereu y me gustaría consultar disponibilidad y precios para dejar mi barco con ustedes. Mi barco mide aproximadamente ___ metros y necesitaría el espacio durante el siguiente período: _______.');
  }
  if(page==='condicoes.html'){
    const cta=document.querySelector('.moon-nereu-cta');
    if(cta)cta.href=wa(lang==='en'?'Hello Nereu! I found your contact through the lodge website and would like to better understand the weather, tides and moon conditions for my next fishing trip.':'¡Hola Nereu! Encontré tu contacto a través del sitio web de la posada y me gustaría entender mejor el clima, las mareas y la luna para mi próxima jornada de pesca.',SITE.nereuPhone);
  }
}

let lang=localStorage.getItem('pousada-lang')||'pt';
function wa(text,phone=SITE.phone){return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`}
function label(item){return item[lang]||item.pt}
function conditionsButtonLines(){if(lang==='en')return ['Fishing','conditions'];if(lang==='es')return ['Condiciones','de pesca'];return ['Condições','de pesca']}
function activeFor(item,page){if(item.href===page)return true;return item.children?.some(c=>c.href===page)}
const instagramIcon=`<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm5 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm6-1.2a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4Z"/></svg>`;
const facebookIcon=`<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 8h3V4.4c-.5-.1-2.1-.2-4-.2-3.9 0-6.6 2.4-6.6 6.8v3.8H2v4h4.4V24h5.4v-5.2h4.5l.7-4h-5.2v-3.4C11.8 10.2 12.1 8 14 8Z"/></svg>`;
const conditionsIcons=`<span class="conditions-icons" aria-hidden="true">
  <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="3.2"/><path d="M12 2.5v2.2M12 19.3v2.2M2.5 12h2.2M19.3 12h2.2M5.3 5.3l1.6 1.6M17.1 17.1l1.6 1.6M18.7 5.3l-1.6 1.6M6.9 17.1l-1.6 1.6"/></svg>
  <svg viewBox="0 0 24 24"><path d="M6.5 15.2h10.1a3.4 3.4 0 0 0 .1-6.8 5.1 5.1 0 0 0-9.7 1.3A2.8 2.8 0 0 0 6.5 15.2Z"/><path d="M8 18.3l-.7 1.5M12 18.3l-.7 1.5M16 18.3l-.7 1.5"/></svg>
  <svg viewBox="0 0 24 24"><path d="M18.5 15.8A7.8 7.8 0 0 1 8.2 5.5a7.8 7.8 0 1 0 10.3 10.3Z"/></svg>
  <svg viewBox="0 0 24 24"><path d="M6 17h11a3.5 3.5 0 0 0 .2-7 5.5 5.5 0 0 0-10.5 1.6A2.8 2.8 0 0 0 6 17Z"/></svg>
</span>`;

function renderDesktopNav(page){return NAV.map(item=>{if(item.children){const act=activeFor(item,page)?'active':'';return `<div class="nav-parent ${act}"><a href="${item.href}">${label(item)} <span class="nav-chevron">⌄</span></a><div class="dropdown">${item.children.map(c=>`<a href="${c.href}" class="${c.href===page?'active':''}">${label(c)}</a>`).join('')}</div></div>`}return `<a class="nav-link ${item.href===page?'active':''}" ${item.external?'target="_blank" rel="noopener"':''} href="${item.href}">${label(item)}</a>`}).join('')}
function renderMobileNav(){return NAV.map((item,i)=>{if(item.children)return `<div class="mobile-parent"><button class="mobile-sub-toggle" data-mobile-sub="${i}"><span>${label(item)}</span><span>＋</span></button><div class="mobile-sub" id="mobile-sub-${i}">${item.children.map(c=>`<a href="${c.href}">${label(c)}</a>`).join('')}</div></div>`;return `<a ${item.external?'target="_blank" rel="noopener"':''} href="${item.href}">${label(item)}</a>`}).join('')+`<a class="mobile-conditions-link" href="condicoes.html">${I18N[lang].fishingConditions}</a><div class="mobile-lang-switch" aria-label="Idioma">${Object.entries(LANG_META).map(([code,m])=>`<button type="button" data-lang="${code}" class="${code===lang?'active':''}" title="${m.alt}"><img src="${m.flag}" alt=""><span>${m.label}</span></button>`).join('')}</div>`}
function renderShell(){
  const page=(location.pathname.split('/').pop()||'index.html');
  const header=document.querySelector('[data-shell="header"]');
  if(header){header.innerHTML=`<header class="site-header"><div class="header-inner"><a class="brand" href="index.html"><img src="assets/logo.png" alt="Pousada do Nereu"></a><nav class="main-nav">${renderDesktopNav(page)}</nav><div class="header-actions"><a class="btn btn-conditions ${['luas.html','condicoes.html'].includes(page)?'active':''}" href="condicoes.html">${conditionsIcons}<span class="conditions-label"><span>${conditionsButtonLines()[0]}</span><span>${conditionsButtonLines()[1]}</span></span></a><a class="btn btn-contact" href="contato.html">${I18N[lang].contact}</a><div class="lang-switch lang-switch-vertical" aria-label="Idioma">${Object.entries(LANG_META).map(([code,m])=>`<button data-lang="${code}" title="${m.alt}"><img src="${m.flag}" alt=""><span>${m.label}</span></button>`).join('')}</div><button class="mobile-toggle" aria-label="Abrir menu">Menu</button></div></div><div class="header-wave" aria-hidden="true"><svg viewBox="0 0 1440 72" preserveAspectRatio="none"><path d="M0 0H1440V18 C1250 34 1085 17 900 25 C690 34 535 13 350 31 C235 43 120 52 0 41 Z" fill="#fffdf8"/><path d="M0 42 C135 53 245 44 355 32 C535 13 690 35 900 26 C1087 18 1252 35 1440 19" fill="none" stroke="#dbeef9" stroke-width="3" opacity=".95"/></svg></div><div class="mobile-nav">${renderMobileNav()}</div></header>`}
  const footer=document.querySelector('[data-shell="footer"]');
  if(footer){footer.innerHTML=`<footer class="site-footer"><div class="container"><div class="footer-grid"><div><img class="footer-logo" src="assets/logo.png" alt="Pousada do Nereu"><p style="color:rgba(255,255,255,.74);max-width:340px">${I18N[lang].footerBlurb}</p></div><div><div class="footer-title">${I18N[lang].addressTitle}</div><div class="footer-links"><span>${SITE.address}</span><a href="${SITE.maps}" target="_blank">→ ${I18N[lang].reach}</a><a href="${wa(I18N[lang].generalMessage)}" target="_blank">Marcia · ${SITE.phoneDisplay}</a><a href="${wa(I18N[lang].nereuMessage,SITE.nereuPhone)}" target="_blank">Nereu · ${SITE.nereuPhoneDisplay}</a></div></div><div><div class="footer-title">${I18N[lang].quick}</div><div class="footer-links"><a href="index.html">${label(NAV.find(x=>x.href==='index.html'))}</a><a href="a-pousada.html">${label(NAV.find(x=>x.href==='a-pousada.html'))}</a><a href="acomodacoes.html">${label(NAV.find(x=>x.href==='acomodacoes.html'))}</a><a href="valores.html">${label(NAV.find(x=>x.href==='valores.html'))}</a><a href="marina.html">Marina</a><a href="como-chegar.html">${I18N[lang].reach}</a><a href="contato.html">${label(NAV.find(x=>x.href==='contato.html'))}</a></div></div><div><div class="footer-title">${I18N[lang].social}</div><div class="social-row"><a class="social-chip instagram" href="${SITE.instagram}" target="_blank">${instagramIcon}<span>Instagram</span></a><a class="social-chip facebook" href="${SITE.facebook}" target="_blank">${facebookIcon}<span>Facebook</span></a></div></div></div><div class="footer-bottom"><span>© ${new Date().getFullYear()} Pousada do Nereu. ${I18N[lang].rights}</span><span>PT / EN / ES</span></div></div></footer>`}
  document.body.insertAdjacentHTML('beforeend',`<a class="floating-whatsapp" target="_blank" aria-label="WhatsApp" href="${wa(I18N[lang].generalMessage)}">✆</a><div class="lightbox" id="lightbox"><div class="lightbox-toolbar"><button class="lightbox-tool" data-lightbox-action="zoom-out" aria-label="Reduzir zoom">−</button><button class="lightbox-tool" data-lightbox-action="zoom-in" aria-label="Aumentar zoom">+</button></div><button class="lightbox-nav prev" data-lightbox-nav="prev" aria-label="Imagem anterior">‹</button><button class="lightbox-nav next" data-lightbox-nav="next" aria-label="Próxima imagem">›</button><div class="lightbox-count" aria-live="polite"></div><button aria-label="Fechar">×</button><div class="lightbox-media-wrap"><img alt="Imagem ampliada"></div></div>`);
  applyInlineTranslations();applySiteTranslations();bindUI();bindLanguage();bindLightbox();bindGalleryFilters();initInteractiveGallery();initRoomFilters();animateStats();initConditionsWeather();initMoonCalendarZoom();
}
function bindUI(){document.querySelector('.mobile-toggle')?.addEventListener('click',()=>document.body.classList.toggle('menu-open'));document.querySelectorAll('.mobile-sub-toggle').forEach(b=>b.addEventListener('click',()=>{const box=document.getElementById('mobile-sub-'+b.dataset.mobileSub);box.classList.toggle('open');b.lastElementChild.textContent=box.classList.contains('open')?'−':'＋'}));document.querySelectorAll('.nav-parent').forEach(p=>{p.querySelector(':scope > a')?.addEventListener('click',e=>{if(matchMedia('(hover: none)').matches&&!p.classList.contains('open')){e.preventDefault();document.querySelectorAll('.nav-parent.open').forEach(x=>x!==p&&x.classList.remove('open'));p.classList.add('open')}})});document.addEventListener('click',e=>{if(!e.target.closest('.nav-parent'))document.querySelectorAll('.nav-parent.open').forEach(x=>x.classList.remove('open'))})}
function bindLanguage(){document.querySelectorAll('[data-lang]').forEach(b=>{b.classList.toggle('active',b.dataset.lang===lang);b.addEventListener('click',()=>{localStorage.setItem('pousada-lang',b.dataset.lang);location.reload()})})}
function applyInlineTranslations(){document.querySelectorAll('[data-pt]').forEach(el=>{const value=el.dataset[lang]||el.dataset.pt;if(el.tagName==='INPUT'||el.tagName==='TEXTAREA')el.placeholder=value;else el.innerHTML=value})}

function initMoonCalendarZoom(){
  document.querySelectorAll('.moon-calendar-card').forEach(card=>{
    const scroll = card.querySelector('.moon-calendar-scroll');
    const img = scroll?.querySelector('img');
    if(!scroll || !img) return;
    const controls = [...card.querySelectorAll('[data-calendar-zoom]')];
    let scale = 1;
    const minScale = 1;
    const maxScale = 3;
    let pinchStartDistance = 0;
    let pinchStartScale = 1;
    let lastTap = 0;
    let dragLastX = 0;
    let dragLastY = 0;
    let dragMoved = false;

    const distance = touches => Math.hypot(
      touches[0].clientX - touches[1].clientX,
      touches[0].clientY - touches[1].clientY
    );

    const updateControls = ()=>{
      const resetBtn = card.querySelector('[data-calendar-zoom="reset"]');
      if(resetBtn) resetBtn.textContent = `${Math.round(scale * 100)}%`;
      controls.forEach(btn=>{
        if(btn.dataset.calendarZoom === 'out') btn.disabled = scale <= minScale + 0.001;
        if(btn.dataset.calendarZoom === 'in') btn.disabled = scale >= maxScale - 0.001;
      });
    };

    const applyScale = (nextScale, preserveCenter = true)=>{
      nextScale = Math.max(minScale, Math.min(maxScale, nextScale));
      const prevWidth = img.offsetWidth || scroll.clientWidth;
      const centerXRatio = (scroll.scrollLeft + scroll.clientWidth / 2) / Math.max(prevWidth, 1);
      const centerYRatio = (scroll.scrollTop + scroll.clientHeight / 2) / Math.max(img.offsetHeight || scroll.clientHeight, 1);
      scale = nextScale;
      img.style.width = `${scale * 100}%`;
      requestAnimationFrame(()=>{
        updateControls();
        if(preserveCenter){
          scroll.scrollLeft = Math.max(0, (img.offsetWidth * centerXRatio) - scroll.clientWidth / 2);
          scroll.scrollTop = Math.max(0, (img.offsetHeight * centerYRatio) - scroll.clientHeight / 2);
        }
      });
    };

    controls.forEach(btn=>btn.addEventListener('click',()=>{
      const action = btn.dataset.calendarZoom;
      if(action === 'in') applyScale(scale + 0.25);
      if(action === 'out') applyScale(scale - 0.25);
      if(action === 'reset') applyScale(1);
    }));

    img.addEventListener('dblclick', e=>{
      e.preventDefault();
      applyScale(scale > 1 ? 1 : 2);
    });

    img.addEventListener('touchend', e=>{
      if(dragMoved){
        dragMoved = false;
        lastTap = 0;
        return;
      }
      const now = Date.now();
      if(now - lastTap < 300){
        e.preventDefault();
        applyScale(scale > 1 ? 1 : 2);
        lastTap = 0;
      }else{
        lastTap = now;
      }
    }, {passive:false});

    scroll.addEventListener('wheel', e=>{
      if(!e.ctrlKey) return;
      e.preventDefault();
      applyScale(scale + (e.deltaY < 0 ? 0.12 : -0.12));
    }, {passive:false});

    scroll.addEventListener('touchstart', e=>{
      dragMoved = false;
      if(e.touches.length === 2){
        pinchStartDistance = distance(e.touches);
        pinchStartScale = scale;
      }else if(e.touches.length === 1 && scale > 1){
        dragLastX = e.touches[0].clientX;
        dragLastY = e.touches[0].clientY;
      }
    }, {passive:false});

    scroll.addEventListener('touchmove', e=>{
      if(e.touches.length === 2 && pinchStartDistance){
        e.preventDefault();
        dragMoved = true;
        const nextDistance = distance(e.touches);
        applyScale(pinchStartScale * (nextDistance / pinchStartDistance), false);
        return;
      }
      if(e.touches.length === 1 && scale > 1){
        e.preventDefault();
        const x = e.touches[0].clientX;
        const y = e.touches[0].clientY;
        const dx = x - dragLastX;
        const dy = y - dragLastY;
        if(Math.abs(dx) > 1 || Math.abs(dy) > 1) dragMoved = true;
        scroll.scrollLeft -= dx;
        scroll.scrollTop -= dy;
        dragLastX = x;
        dragLastY = y;
      }
    }, {passive:false});

    scroll.addEventListener('touchend', e=>{
      if(e.touches.length < 2) pinchStartDistance = 0;
      if(e.touches.length === 1){
        dragLastX = e.touches[0].clientX;
        dragLastY = e.touches[0].clientY;
      }
    }, {passive:false});

    applyScale(1, false);
  });
}

function initConditionsWeather(){
  const list=document.getElementById('weatherWeekList');
  const loading=document.getElementById('weatherLoadingState');
  const currentTemp=document.getElementById('weatherCurrentTemp');
  const currentIcon=document.getElementById('weatherCurrentIcon');
  const currentDetails=document.getElementById('weatherCurrentDetails');
  if(!list||!loading)return;
  const lat='-26.1157',lon='-48.8358';
  const url=`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m,precipitation,weather_code,wind_speed_10m&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max&timezone=America%2FSao_Paulo&forecast_days=7`;
  const labels={
    pt:{weather:{0:'Céu limpo',1:'Sol entre nuvens',2:'Parcialmente nublado',3:'Nublado',45:'Neblina',48:'Neblina',51:'Garoa fraca',53:'Garoa',55:'Garoa intensa',56:'Garoa gelada',57:'Garoa gelada',61:'Chuva fraca',63:'Chuva',65:'Chuva forte',66:'Chuva gelada',67:'Chuva gelada',71:'Neve fraca',73:'Neve',75:'Neve forte',77:'Granizo leve',80:'Pancadas isoladas',81:'Pancadas de chuva',82:'Pancadas fortes',85:'Aguaceiros de neve',86:'Aguaceiros de neve',95:'Trovoadas',96:'Trovoadas com granizo',99:'Trovoadas fortes'},week:['dom','seg','ter','qua','qui','sex','sáb'],rain:'Chuva',humidity:'Umidade',wind:'Vento',varied:'Tempo variado',error:'Não foi possível carregar a previsão agora. Consulte a pousada para verificar as condições do rio e do clima.'},
    en:{weather:{0:'Clear sky',1:'Mostly sunny',2:'Partly cloudy',3:'Cloudy',45:'Fog',48:'Fog',51:'Light drizzle',53:'Drizzle',55:'Heavy drizzle',56:'Freezing drizzle',57:'Freezing drizzle',61:'Light rain',63:'Rain',65:'Heavy rain',66:'Freezing rain',67:'Freezing rain',71:'Light snow',73:'Snow',75:'Heavy snow',77:'Snow grains',80:'Light showers',81:'Rain showers',82:'Heavy showers',85:'Snow showers',86:'Snow showers',95:'Thunderstorms',96:'Thunderstorms with hail',99:'Severe thunderstorms'},week:['Sun','Mon','Tue','Wed','Thu','Fri','Sat'],rain:'Rain',humidity:'Humidity',wind:'Wind',varied:'Variable weather',error:'The forecast could not be loaded right now. Contact the lodge to check river and weather conditions.'},
    es:{weather:{0:'Cielo despejado',1:'Mayormente soleado',2:'Parcialmente nublado',3:'Nublado',45:'Niebla',48:'Niebla',51:'Llovizna débil',53:'Llovizna',55:'Llovizna intensa',56:'Llovizna helada',57:'Llovizna helada',61:'Lluvia débil',63:'Lluvia',65:'Lluvia fuerte',66:'Lluvia helada',67:'Lluvia helada',71:'Nieve débil',73:'Nieve',75:'Nieve fuerte',77:'Granos de nieve',80:'Chubascos aislados',81:'Chubascos',82:'Chubascos fuertes',85:'Chubascos de nieve',86:'Chubascos de nieve',95:'Tormentas',96:'Tormentas con granizo',99:'Tormentas fuertes'},week:['dom','lun','mar','mié','jue','vie','sáb'],rain:'Lluvia',humidity:'Humedad',wind:'Viento',varied:'Tiempo variable',error:'No fue posible cargar el pronóstico ahora. Consulta con la posada para verificar las condiciones del río y del clima.'}
  };
  const L=labels[lang]||labels.pt;
  const emojiMap={0:'☀️',1:'🌤️',2:'⛅',3:'☁️',45:'🌫️',48:'🌫️',51:'🌦️',53:'🌦️',55:'🌦️',56:'🌧️',57:'🌧️',61:'🌦️',63:'🌧️',65:'🌧️',66:'🌧️',67:'🌧️',71:'❄️',73:'❄️',75:'❄️',77:'❄️',80:'🌦️',81:'🌧️',82:'⛈️',85:'❄️',86:'❄️',95:'⛈️',96:'⛈️',99:'⛈️'};
  fetch(url)
    .then(r=>{if(!r.ok)throw new Error('weather');return r.json()})
    .then(data=>{
      const current=data.current||{};
      const curEmoji=emojiMap[current.weather_code]||'🌤️';
      const curLabel=L.weather[current.weather_code]||L.varied;
      if(currentTemp)currentTemp.textContent=`${Math.round(current.temperature_2m ?? 0)}°`;
      if(currentIcon)currentIcon.textContent=curEmoji;
      if(currentDetails)currentDetails.innerHTML=`<span>${curLabel}</span><span>${L.rain}: ${Math.round(current.precipitation ?? 0)} mm</span><span>${L.humidity}: ${Math.round(current.relative_humidity_2m ?? 0)}%</span><span>${L.wind}: ${Math.round(current.wind_speed_10m ?? 0)} km/h</span>`;
      const d=data.daily||{};
      const times=d.time||[];
      list.innerHTML=times.map((time,i)=>{
        const dt=new Date(time+'T12:00:00');
        const emoji=emojiMap[d.weather_code?.[i]]||'🌤️';
        const max=Math.round(d.temperature_2m_max?.[i] ?? 0);
        const min=Math.round(d.temperature_2m_min?.[i] ?? 0);
        const rain=Math.round(d.precipitation_probability_max?.[i] ?? 0);
        return `<div class="weather-day-mini ${i===0?'today':''}"><strong>${L.week[dt.getDay()]}</strong><span class="weather-mini-icon" aria-hidden="true">${emoji}</span><span class="weather-mini-temp">${max}° / ${min}°</span><span class="weather-mini-rain">💧 ${rain}%</span></div>`;
      }).join('');
      loading.style.display='none';
    })
    .catch(()=>{
      loading.className='weather-error-state';
      loading.textContent=L.error;
      if(currentDetails)currentDetails.innerHTML='';
    });
}

async function loadCmsPageContent(){
  let page=(location.pathname.split('/').pop()||'index.html');
  if(page && !page.includes('.')) page += '.html';
  try{
    if(page==='index.html'){
      const response=await fetch('content/home.json',{cache:'no-store'});
      if(!response.ok)return;
      const data=await response.json();
      const media=data.heroMedia||{};
      const copy=data[lang]||data.pt||{};
      const hero=copy.hero||{};

      const heroMedia=document.querySelector('.hero-media');
      const heroImg=heroMedia?.querySelector('img');
      if(heroImg){
        if(media.image)heroImg.src=media.image;
        if(hero.alt)heroImg.alt=hero.alt;
      }
      if(heroMedia){
        let heroVideo=heroMedia.querySelector('video[data-cms-hero-video]');
        if(media.video){
          if(!heroVideo){
            heroVideo=document.createElement('video');
            heroVideo.setAttribute('data-cms-hero-video','');
            heroVideo.setAttribute('autoplay','');
            heroVideo.setAttribute('muted','');
            heroVideo.setAttribute('loop','');
            heroVideo.setAttribute('playsinline','');
            heroVideo.setAttribute('webkit-playsinline','');
            heroVideo.setAttribute('aria-hidden','true');
            heroVideo.autoplay=true;
            heroVideo.muted=true;
            heroVideo.defaultMuted=true;
            heroVideo.loop=true;
            heroVideo.playsInline=true;
            heroVideo.preload='auto';
            heroMedia.insertBefore(heroVideo,heroMedia.firstChild);
          }
          heroVideo.src=media.video;
          if(media.image)heroVideo.poster=media.image;
          heroVideo.style.display='';
          if(heroImg)heroImg.style.display='';

          const tryHeroPlay=()=>{
            heroVideo.muted=true;
            heroVideo.defaultMuted=true;
            const p=heroVideo.play();
            if(p&&typeof p.catch==='function')p.catch(()=>{});
          };

          heroVideo.addEventListener('loadeddata',tryHeroPlay,{once:true});
          heroVideo.addEventListener('canplay',tryHeroPlay,{once:true});
          window.addEventListener('pageshow',tryHeroPlay,{once:true});
          document.addEventListener('visibilitychange',()=>{
            if(!document.hidden)tryHeroPlay();
          });
          document.addEventListener('touchstart',tryHeroPlay,{once:true,passive:true});
          tryHeroPlay();
        }else{
          if(heroVideo){
            heroVideo.pause();
            heroVideo.removeAttribute('src');
            heroVideo.load();
            heroVideo.style.display='none';
          }
          if(heroImg)heroImg.style.display='';
        }
      }

      const kickerMain=document.querySelector('.hero-kicker-main');
      const kickerSub=document.querySelector('.hero-kicker-sub');
      const title=document.querySelector('.hero h1');
      const desc=document.querySelector('.hero-content > p');
      if(kickerMain&&hero.kickerMain)kickerMain.textContent=hero.kickerMain;
      if(kickerSub&&hero.kickerSub)kickerSub.textContent=hero.kickerSub;
      if(title&&hero.title)title.textContent=hero.title;
      if(desc&&hero.description)desc.textContent=hero.description;

      const heroButtons=document.querySelectorAll('.hero-buttons .btn');
      if(heroButtons[0]&&hero.accommodationButton)heroButtons[0].textContent=hero.accommodationButton;
      if(heroButtons[1]){
        if(hero.availabilityButton)heroButtons[1].textContent=hero.availabilityButton;
        if(hero.availabilityMessage)heroButtons[1].href=wa(hero.availabilityMessage);
      }

      const features=[...document.querySelectorAll('.feature')];
      (copy.features||[]).slice(0,features.length).forEach((item,i)=>{
        const strong=features[i].querySelector('strong');
        const span=features[i].querySelector('span');
        if(strong&&item.title)strong.textContent=item.title;
        if(span&&item.subtitle)span.textContent=item.subtitle;
      });

      const reviews=copy.reviews||{};
      const reviewSection=[...document.querySelectorAll('section')].find(sec=>sec.querySelector('.reviews-grid'));
      if(reviewSection){
        const eyebrow=reviewSection.querySelector('.section-heading .eyebrow');
        const heading=reviewSection.querySelector('.section-heading h2');
        const score=reviewSection.querySelector('.google-score');
        const summary=reviewSection.querySelector('.google-summary span:last-child');
        const more=reviewSection.querySelector('.section-heading .btn');
        if(eyebrow&&reviews.eyebrow)eyebrow.textContent=reviews.eyebrow;
        if(heading&&reviews.title)heading.textContent=reviews.title;
        if(score&&reviews.score)score.textContent=reviews.score;
        if(summary&&reviews.count)summary.innerHTML='<span class="stars">★★★★★</span><br>'+reviews.count;
        if(more){
          if(reviews.button)more.textContent=reviews.button;
          more.href=SITE.reviews;
        }
        const cards=[...reviewSection.querySelectorAll('.review-card')];
        (reviews.items||[]).slice(0,cards.length).forEach((item,i)=>{
          const quote=cards[i].querySelector('blockquote');
          const name=cards[i].querySelector('.review-name');
          if(quote&&item.text)quote.textContent='“'+item.text+'”';
          if(name&&item.name)name.textContent=item.name;
        });
      }
      return;
    }

    if(page==='a-pousada.html'){
      const response=await fetch('content/a-pousada.json',{cache:'no-store'});
      if(!response.ok)return;
      const data=await response.json();
      const copy=data[lang]||data.pt||{};
      const hero=copy.hero||{};
      const heroBox=document.querySelector('.page-hero');
      if(heroBox){
        const eyebrow=heroBox.querySelector('.eyebrow');
        const title=heroBox.querySelector('h1');
        const desc=heroBox.querySelector('p');
        if(eyebrow&&hero.eyebrow)eyebrow.textContent=hero.eyebrow;
        if(title&&hero.title)title.textContent=hero.title;
        if(desc&&hero.description)desc.textContent=hero.description;
      }
      const cards=[...document.querySelectorAll('.hub-card')];
      const images=[data.media?.aboutImage,data.media?.ownersImage,data.media?.galleryImage,data.media?.faunaImage];
      (copy.cards||[]).slice(0,cards.length).forEach((card,i)=>{
        const h=cards[i].querySelector('h2');
        const p=cards[i].querySelector('p');
        const b=cards[i].querySelector('strong');
        const img=cards[i].querySelector('img');
        if(h&&card.title)h.textContent=card.title;
        if(p&&card.description)p.textContent=card.description;
        if(b&&card.button)b.textContent=card.button;
        if(img&&images[i])img.src=images[i];
      });
      return;
    }

    if(page==='sobre.html'){
      const response=await fetch('content/sobre.json',{cache:'no-store'});
      if(!response.ok)return;
      const data=await response.json();
      const copy=data[lang]||data.pt||{};
      const hero=copy.hero||{};
      const heroBox=document.querySelector('.page-hero');
      if(heroBox){
        const eyebrow=heroBox.querySelector('.eyebrow');
        const title=heroBox.querySelector('h1');
        const desc=heroBox.querySelector('p');
        if(eyebrow&&hero.eyebrow)eyebrow.textContent=hero.eyebrow;
        if(title&&hero.title)title.textContent=hero.title;
        if(desc&&hero.description)desc.textContent=hero.description;
      }
      const values=[data.stats?.capacity,data.stats?.rooms,data.stats?.boats,data.stats?.days];
      const statEls=[...document.querySelectorAll('.stat')];
      statEls.forEach((el,i)=>{
        const n=el.querySelector('[data-count]');
        const labelEl=el.querySelector('.stat-label');
        if(n&&values[i]!=null)n.dataset.count=String(values[i]);
        if(labelEl&&copy.statLabels?.[i])labelEl.textContent=copy.statLabels[i];
      });
      const story=copy.story||{};
      const storyBox=document.querySelector('.story-section');
      if(storyBox){
        const img=storyBox.querySelector('.story-photo img');
        const eyebrow=storyBox.querySelector('.eyebrow');
        const title=storyBox.querySelector('h2');
        const prose=storyBox.querySelector('.prose');
        if(img&&data.media?.storyImage)img.src=data.media.storyImage;
        if(eyebrow&&story.eyebrow)eyebrow.textContent=story.eyebrow;
        if(title&&story.title)title.textContent=story.title;
        const ps=[...prose?.querySelectorAll('p')||[]];
        (story.paragraphs||[]).slice(0,ps.length).forEach((p,i)=>ps[i].textContent=p);
      }
      return;
    }

    if(page==='sobre-nos.html'){
      const response=await fetch('content/sobre-nos.json',{cache:'no-store'});
      if(!response.ok)return;
      const data=await response.json();
      const copy=data[lang]||data.pt||{};
      const hero=copy.hero||{};
      const heroBox=document.querySelector('.page-hero');
      if(heroBox){
        const eyebrow=heroBox.querySelector('.eyebrow');
        const title=heroBox.querySelector('h1');
        const desc=heroBox.querySelector('p');
        if(eyebrow&&hero.eyebrow)eyebrow.textContent=hero.eyebrow;
        if(title&&hero.title)title.textContent=hero.title;
        if(desc&&hero.description)desc.textContent=hero.description;
      }
      const cards=[...document.querySelectorAll('.about-person-card')];
      if(cards[0]){
        const c=copy.nereu||{};
        const img=cards[0].querySelector('img');
        const badge=cards[0].querySelector('.owner-badge');
        const h=cards[0].querySelector('h2');
        const p=cards[0].querySelector('.about-person-body p');
        const noteStrong=cards[0].querySelector('.fisher-note strong');
        const noteSpan=cards[0].querySelector('.fisher-note span');
        if(img&&data.media?.nereuImage)img.src=data.media.nereuImage;
        if(badge&&c.badge)badge.textContent=c.badge;
        if(h&&c.name)h.textContent=c.name;
        if(p&&c.text)p.textContent=c.text;
        if(noteStrong&&c.noteTop)noteStrong.textContent=c.noteTop;
        if(noteSpan&&c.noteBottom)noteSpan.textContent=c.noteBottom;
      }
      if(cards[1]){
        const c=copy.marcia||{};
        const badge=cards[1].querySelector('.owner-badge');
        const h=cards[1].querySelector('h2');
        const p=cards[1].querySelector('.about-person-body p');
        const placeholder=cards[1].querySelector('.about-person-photo.placeholder');
        const labelEl=cards[1].querySelector('.placeholder-label');
        if(badge&&c.badge)badge.textContent=c.badge;
        if(h&&c.name)h.textContent=c.name;
        if(p&&c.text)p.textContent=c.text;
        if(labelEl&&c.photoLabel)labelEl.textContent=c.photoLabel;
        if(data.media?.marciaImage&&placeholder){
          placeholder.classList.remove('placeholder');
          placeholder.innerHTML='<img src="'+data.media.marciaImage+'" alt="'+(c.photoLabel||c.name||'Marcia')+'">';
        }
      }
      return;
    }

    if(page==='galeria.html'){
      const response=await fetch('content/galeria.json',{cache:'no-store'});
      if(!response.ok)return;
      const data=await response.json();
      const copy=data[lang]||data.pt||{};
      const hero=copy.hero||{};
      const galleryCopy=copy.gallery||{};
      const insta=copy.instagram||{};

      const heroBox=document.querySelector('.gallery-hero');
      if(heroBox){
        if(data.media?.heroImage)heroBox.style.setProperty('--gallery-hero-image',`url('${data.media.heroImage}')`);
        if(data.media?.heroBlur!=null)heroBox.style.setProperty('--gallery-hero-blur',String(data.media.heroBlur)+'px');
        const eyebrow=heroBox.querySelector('.eyebrow');
        const title=heroBox.querySelector('h1');
        const desc=heroBox.querySelector('p');
        if(eyebrow&&hero.eyebrow)eyebrow.textContent=hero.eyebrow;
        if(title&&hero.title)title.textContent=hero.title;
        if(desc&&hero.description)desc.textContent=hero.description;
      }

      const lead=document.querySelector('.gallery-lead .eyebrow');
      if(lead&&galleryCopy.eyebrow)lead.textContent=galleryCopy.eyebrow;

      const categories=(data.categories||[]).filter(cat=>(cat.photos||[]).length);
      const filterBox=document.querySelector('.gallery-filter');
      if(filterBox){
        filterBox.innerHTML='';
        const allBtn=document.createElement('button');
        allBtn.className='active';
        allBtn.dataset.galleryFilter='all';
        allBtn.textContent=galleryCopy.all||'Tudo';
        filterBox.appendChild(allBtn);
        categories.forEach(cat=>{
          const c=cat[lang]||cat.pt||{};
          const btn=document.createElement('button');
          btn.dataset.galleryFilter=cat.slug;
          btn.textContent=c.name||cat.slug;
          filterBox.appendChild(btn);
        });
      }

      const thumbsNote=document.querySelector('.gallery-thumbs-note');
      if(thumbsNote&&galleryCopy.thumbsNote)thumbsNote.textContent=galleryCopy.thumbsNote;

      const thumbs=document.getElementById('galleryThumbs');
      let first=null;
      if(thumbs){
        thumbs.innerHTML='';
        let slide=0;
        categories.forEach(cat=>{
          const catCopy=cat[lang]||cat.pt||{};
          (cat.photos||[]).forEach((photo,index)=>{
            if(!photo.image)return;
            const photoCopy=photo[lang]||photo.pt||{};
            const btn=document.createElement('button');
            btn.type='button';
            btn.className='gallery-thumb'+(slide===0?' active':'');
            btn.dataset.gallerySlide=String(slide);
            btn.dataset.galleryCategory=cat.slug||'';
            btn.dataset.full=photo.image;
            btn.dataset.title=catCopy.name||cat.slug||'Galeria';
            btn.dataset.caption=photoCopy.caption||'';
            btn.innerHTML='<img src="'+photo.image+'" alt="'+(catCopy.name||'Galeria')+' — '+(index+1)+'"><span></span>';
            btn.querySelector('span').textContent=catCopy.name||cat.slug||'Galeria';
            thumbs.appendChild(btn);
            if(!first)first={photo,photoCopy,catCopy};
            slide++;
          });
        });
      }

      const main=document.getElementById('galleryMainImage');
      const currentCategory=document.getElementById('galleryCurrentCategory');
      const currentTitle=document.getElementById('galleryCurrentTitle');
      const currentCaption=document.getElementById('galleryCurrentCaption');
      if(first){
        if(main){main.src=first.photo.image;main.alt=first.catCopy.name||'Galeria'}
        if(currentCategory)currentCategory.textContent=(first.catCopy.name||'Galeria').toUpperCase();
        if(currentTitle)currentTitle.textContent=first.catCopy.name||'Galeria';
        if(currentCaption)currentCaption.textContent=first.photoCopy.caption||'';
      }
      const hint=document.querySelector('.gallery-stage-hint');
      if(hint&&galleryCopy.hint)hint.textContent=galleryCopy.hint;

      const instaBox=document.querySelector('.instagram-copy-card');
      if(instaBox){
        const eyebrow=instaBox.querySelector('.eyebrow');
        const title=instaBox.querySelector('h2');
        const textEl=instaBox.querySelector('p');
        const handle=instaBox.querySelector('.instagram-handle');
        const button=instaBox.querySelector('.instagram-cta');
        if(eyebrow&&insta.eyebrow)eyebrow.textContent=insta.eyebrow;
        if(title&&insta.title)title.textContent=insta.title;
        if(textEl&&insta.text)textEl.textContent=insta.text;
        if(handle&&insta.handle)handle.textContent=insta.handle;
        if(button){
          if(insta.button)button.textContent=insta.button;
          button.href=SITE.instagram;
        }
      }

      bindGalleryFilters();
      initInteractiveGallery();
      return;
    }


    if(page==='fauna.html'){
      const response=await fetch('content/fauna-page.json',{cache:'no-store'});
      if(!response.ok)return;
      const data=await response.json();
      const copy=data[lang]||data.pt||{};
      const hero=copy.hero||{};
      const heroBox=document.querySelector('.fauna-hero');
      if(heroBox){
        if(data.media?.heroImage)heroBox.style.backgroundImage='url("'+data.media.heroImage+'")';
        const eyebrow=heroBox.querySelector('.eyebrow');
        const title=heroBox.querySelector('h1');
        const desc=heroBox.querySelector('p');
        if(eyebrow&&hero.eyebrow)eyebrow.textContent=hero.eyebrow;
        if(title&&hero.title)title.textContent=hero.title;
        if(desc&&hero.description)desc.textContent=hero.description;
      }

      const quickCards=[...document.querySelectorAll('.fauna-quick-card')];
      const quickData=[copy.overviewLeft||{},copy.overviewRight||{}];
      quickCards.forEach((card,i)=>{
        const c=quickData[i]||{};
        const eyebrow=card.querySelector('.eyebrow');
        const title=card.querySelector('h2');
        const textEl=card.querySelector('.fauna-quick-copy>p:not(.fauna-fineprint)');
        const tags=card.querySelector('.fauna-tags');
        const fine=card.querySelector('.fauna-fineprint');
        if(eyebrow&&c.eyebrow)eyebrow.textContent=c.eyebrow;
        if(title&&c.title)title.textContent=c.title;
        if(textEl&&c.text)textEl.textContent=c.text;
        if(tags&&Array.isArray(c.tags)){
          tags.innerHTML='';
          c.tags.forEach(t=>{const s=document.createElement('span');s.textContent=t;tags.appendChild(s)});
        }
        if(fine&&c.fineprint)fine.textContent=c.fineprint;
      });

      const heading=copy.speciesHeading||{};
      const headingBox=document.querySelector('.fauna-fish-heading');
      if(headingBox){
        const eyebrow=headingBox.querySelector('.eyebrow');
        const title=headingBox.querySelector('h2');
        const note=headingBox.querySelector('.right-note');
        if(eyebrow&&heading.eyebrow)eyebrow.textContent=heading.eyebrow;
        if(title&&heading.title)title.textContent=heading.title;
        if(note&&heading.note)note.textContent=heading.note;
      }

      const fishCards=[...document.querySelectorAll('.fish-card')];
      (data.species||[]).slice(0,fishCards.length).forEach((sp,i)=>{
        const local=sp[lang]||sp.pt||{};
        const card=fishCards[i];
        const imgBox=card.querySelector('.fish-image');
        const title=card.querySelector('h3');
        const latin=card.querySelector('.latin');
        const desc=card.querySelector('.fish-body>p');
        const strongs=[...card.querySelectorAll('.fish-metric strong')];
        const legal=card.querySelector('.legal-metric');
        if(sp.image&&imgBox)imgBox.innerHTML='<img src="'+sp.image+'" alt="'+(local.name||sp.scientificName||'Peixe')+'">';
        if(title&&local.name)title.textContent=local.name;
        if(latin&&sp.scientificName)latin.textContent=sp.scientificName;
        if(desc&&local.description)desc.textContent=local.description;
        if(strongs[0]&&sp.maxSize)strongs[0].textContent=sp.maxSize;
        if(strongs[1]&&sp.maxWeight)strongs[1].textContent=sp.maxWeight;
        if(legal){
          const legalStrong=legal.querySelector('strong');
          if(sp.legalMinimum){
            legal.style.display='';
            if(legalStrong)legalStrong.textContent=sp.legalMinimum;
          }else{
            legal.style.display='none';
          }
        }
      });
      return;
    }

    if(page==='marina.html'){
      const response=await fetch('content/marina-page.json',{cache:'no-store'});
      if(!response.ok)return;
      const data=await response.json();
      const copy=data[lang]||data.pt||{};
      const hero=copy.hero||{};
      const stage=copy.stage||{};
      const heroBox=document.querySelector('.page-hero');
      if(heroBox){
        const eyebrow=heroBox.querySelector('.eyebrow');
        const title=heroBox.querySelector('h1');
        const desc=heroBox.querySelector('p');
        if(eyebrow&&hero.eyebrow)eyebrow.textContent=hero.eyebrow;
        if(title&&hero.title)title.textContent=hero.title;
        if(desc&&hero.description)desc.textContent=hero.description;
      }
      const stageBox=document.querySelector('.marina-stage');
      if(stageBox){
        const img=stageBox.querySelector('.marina-photo img');
        const note=stageBox.querySelector('.marina-photo-note');
        const eyebrow=stageBox.querySelector('.marina-copy .eyebrow');
        const title=stageBox.querySelector('.marina-copy h2');
        const textEl=stageBox.querySelector('.marina-copy>p');
        const button=stageBox.querySelector('.marina-cta');
        if(img&&data.media?.stageImage)img.src=data.media.stageImage;
        if(img&&data.media?.stageImageAlt)img.alt=data.media.stageImageAlt;
        if(note&&stage.note)note.textContent=stage.note;
        if(eyebrow&&stage.eyebrow)eyebrow.textContent=stage.eyebrow;
        if(title&&stage.title)title.textContent=stage.title;
        if(textEl&&stage.text)textEl.textContent=stage.text;
        if(button&&stage.button){
          const tail=button.querySelector('.marina-cta-mobile-tail');
          button.childNodes[0].nodeValue=stage.button+' ';
          if(tail)button.appendChild(tail);
        }
        const cards=[...stageBox.querySelectorAll('.marina-mini-card')];
        (copy.cards||[]).slice(0,cards.length).forEach((item,i)=>{
          const strong=cards[i].querySelector('strong');
          const span=cards[i].querySelector('span');
          if(strong&&item.title)strong.textContent=item.title;
          if(span&&item.text)span.textContent=item.text;
        });
      }
      return;
    }

    if(page==='valores.html'){
      const response=await fetch('content/valores.json',{cache:'no-store'});
      if(!response.ok)return;
      const data=await response.json();
      const copy=data[lang]||data.pt||{};
      const hero=copy.hero||{};
      const heroBox=document.querySelector('.values-hero');
      if(heroBox){
        if(data.heroImage)heroBox.style.setProperty('--values-hero-image',`url('${data.heroImage}')`);
        const eyebrow=heroBox.querySelector('.eyebrow');
        const title=heroBox.querySelector('h1');
        const desc=heroBox.querySelector('p');
        if(eyebrow&&hero.eyebrow)eyebrow.textContent=hero.eyebrow;
        if(title&&hero.title)title.textContent=hero.title;
        if(desc&&hero.description)desc.textContent=hero.description;
      }
      const groups=[...document.querySelectorAll('.price-group')];
      (copy.groups||[]).slice(0,groups.length).forEach((group,i)=>{
        const el=groups[i];
        const heading=el.querySelector('.price-group-title');
        if(heading&&group.title)heading.textContent=group.title;
        const cards=[...el.querySelectorAll('.price-card')];
        (group.cards||[]).slice(0,cards.length).forEach((card,j)=>{
          const h=cards[j].querySelector('h3');
          const p=cards[j].querySelector('p');
          const price=cards[j].querySelector('.price');
          if(h&&card.title)h.textContent=card.title;
          if(p&&card.description)p.textContent=card.description;
          if(price&&card.price)price.textContent=card.price;
        });
      });
      const fine=document.querySelector('.fineprint');
      if(fine&&copy.fineprint)fine.textContent=copy.fineprint;
      const cta=copy.cta||{};
      const ctaBox=document.querySelector('.cta-band');
      if(ctaBox){
        const h=ctaBox.querySelector('h3');
        const p=ctaBox.querySelector('p');
        const b=ctaBox.querySelector('.btn');
        if(h&&cta.title)h.textContent=cta.title;
        if(p&&cta.text)p.textContent=cta.text;
        if(b){
          if(cta.button)b.textContent=cta.button;
          if(cta.whatsappMessage)b.href=wa(cta.whatsappMessage);
        }
      }
      return;
    }

    if(page==='acomodacoes.html'){
      const response=await fetch('content/acomodacoes.json',{cache:'no-store'});
      if(!response.ok)return;
      const data=await response.json();
      const copy=data[lang]||data.pt||{};
      const hero=copy.hero||{};
      const heroBox=document.querySelector('.accommodations-hero');
      if(heroBox){
        const eyebrow=heroBox.querySelector('.eyebrow');
        const title=heroBox.querySelector('h1');
        const desc=heroBox.querySelector('p');
        const cta=heroBox.querySelector('.accommodation-top-cta .btn');
        const note=heroBox.querySelector('.accommodation-top-cta .note');
        if(eyebrow&&hero.eyebrow)eyebrow.textContent=hero.eyebrow;
        if(title&&hero.title)title.textContent=hero.title;
        if(desc&&hero.description)desc.textContent=hero.description;
        if(cta){
          if(hero.ctaText)cta.textContent=hero.ctaText;
          if(hero.whatsappMessage)cta.href=wa(hero.whatsappMessage);
        }
        if(note&&hero.ctaNote)note.textContent=hero.ctaNote;
      }

      const filters=copy.filters||{};
      const filterLabel=document.querySelector('.room-filter-label');
      if(filterLabel&&filters.label)filterLabel.textContent=filters.label;
      document.querySelectorAll('[data-room-filter]').forEach(btn=>{
        const filter=btn.dataset.roomFilter;
        if(filter==='all'&&filters.all)btn.textContent=filters.all;
        else if(filter==='double-bed'&&filters.doubleBed)btn.textContent=filters.doubleBed;
        else if(filter&&filter.startsWith('capacity-')&&filters.capacity){
          btn.textContent=filters.capacity+' '+filter.replace('capacity-','');
        }
      });
      const empty=document.getElementById('roomsEmptyState');
      if(empty&&filters.empty)empty.textContent=filters.empty;

      const cards=[...document.querySelectorAll('[data-room-card]')];
      (data.rooms||[]).slice(0,cards.length).forEach((room,i)=>{
        const card=cards[i];
        const roomCopy=room[lang]||room.pt||{};
        card.dataset.capacity=String(room.capacity||'');
        card.dataset.double=room.doubleBed?'true':'false';
        const name=card.querySelector('h2');
        const desc=card.querySelector('.room-v20-head p');
        const capChip=card.querySelector('.room-capacity-chip');
        const bedChip=card.querySelector('.room-bed-chip');
        if(name&&roomCopy.name)name.textContent=roomCopy.name;
        if(desc&&roomCopy.description)desc.textContent=roomCopy.description;
        if(capChip)capChip.textContent=(filters.maxChip||'Máx.')+' '+room.capacity;
        if(bedChip&&filters.doubleBedChip)bedChip.textContent=filters.doubleBedChip;
        const imgs=[...card.querySelectorAll('.room-scroll img')];
        (room.images||[]).slice(0,imgs.length).forEach((src,j)=>{
          imgs[j].src=src;
          imgs[j].alt=roomCopy.name||('Quarto '+(i+1));
        });
      });

      const pet=copy.petNote||{};
      const petBox=document.querySelector('.accommodations-pet-bottom');
      if(petBox){
        const strong=petBox.querySelector('strong');
        const follow=petBox.querySelector('.pet-followup');
        if(strong&&pet.title)strong.textContent=pet.title;
        if(follow&&pet.text)follow.textContent=pet.text;
      }

      const final=copy.finalCta||{};
      const finalBox=document.querySelector('.accommodations-final-cta');
      if(finalBox){
        const title=finalBox.querySelector('h3');
        const textEl=finalBox.querySelector('p');
        const button=finalBox.querySelector('.btn');
        if(title&&final.title)title.textContent=final.title;
        if(textEl&&final.text)textEl.textContent=final.text;
        if(button){
          if(final.button)button.textContent=final.button;
          if(hero.whatsappMessage)button.href=wa(hero.whatsappMessage);
        }
      }
      return;
    }
  }catch(error){
    console.warn('CMS page content unavailable; using built-in page content.',error);
  }
}

function bindLightbox(){const box=document.getElementById('lightbox');if(!box)return;const img=box.querySelector('.lightbox-media-wrap img');const count=box.querySelector('.lightbox-count');const prev=box.querySelector('[data-lightbox-nav="prev"]');const next=box.querySelector('[data-lightbox-nav="next"]');let scale=1,groupItems=[],groupIndex=-1;const setScale=value=>{scale=Math.max(1,Math.min(4,value));img.style.transform=`scale(${scale})`};const updateCount=()=>{if(count)count.textContent=groupItems.length?`${groupIndex+1} / ${groupItems.length}`:''};const showItem=index=>{if(!groupItems.length)return;groupIndex=(index+groupItems.length)%groupItems.length;const el=groupItems[groupIndex];img.src=el.dataset.lightbox||el.currentSrc||el.src;img.alt=el.alt||'Imagem ampliada';setScale(1);updateCount()};const openLightbox=(src,alt='Imagem ampliada',sourceEl=null)=>{const group=sourceEl?.dataset.lightboxGroup;if(group){groupItems=[...document.querySelectorAll(`[data-lightbox-group="${CSS.escape(group)}"]`)];groupIndex=Math.max(0,groupItems.indexOf(sourceEl));box.classList.toggle('has-group',groupItems.length>1);showItem(groupIndex)}else{groupItems=[];groupIndex=-1;box.classList.remove('has-group');img.src=src;img.alt=alt;setScale(1);updateCount()}box.classList.add('open')};window.openSiteLightbox=(src,alt='Imagem ampliada')=>openLightbox(src,alt,null);document.querySelectorAll('[data-lightbox]').forEach(el=>el.addEventListener('click',()=>openLightbox(el.dataset.lightbox||el.currentSrc||el.src,el.alt||'Imagem ampliada',el)));prev?.addEventListener('click',e=>{e.stopPropagation();showItem(groupIndex-1)});next?.addEventListener('click',e=>{e.stopPropagation();showItem(groupIndex+1)});box.querySelector('[data-lightbox-action="zoom-in"]')?.addEventListener('click',e=>{e.stopPropagation();setScale(scale+.35)});box.querySelector('[data-lightbox-action="zoom-out"]')?.addEventListener('click',e=>{e.stopPropagation();setScale(scale-.35)});box.addEventListener('click',e=>{if(e.target===box||e.target.matches('button[aria-label="Fechar"]'))box.classList.remove('open')});box.addEventListener('wheel',e=>{if(!box.classList.contains('open'))return;e.preventDefault();setScale(scale+(e.deltaY<0?.2:-.2))},{passive:false});document.addEventListener('keydown',e=>{if(!box.classList.contains('open'))return;if(e.key==='Escape')box.classList.remove('open');if(groupItems.length&&e.key==='ArrowLeft')showItem(groupIndex-1);if(groupItems.length&&e.key==='ArrowRight')showItem(groupIndex+1)})}
function bindGalleryFilters(){const buttons=[...document.querySelectorAll('[data-gallery-filter]')];if(!buttons.length)return;buttons.forEach(btn=>btn.addEventListener('click',()=>{buttons.forEach(x=>x.classList.remove('active'));btn.classList.add('active');const filter=btn.dataset.galleryFilter;document.querySelectorAll('[data-gallery-category]').forEach(item=>{item.style.display=(filter==='all'||item.dataset.galleryCategory===filter)?'':'none'});document.dispatchEvent(new CustomEvent('gallery:filterChanged',{detail:{filter}}))}))}
function initInteractiveGallery(){const thumbs=[...document.querySelectorAll('.gallery-thumb')];const main=document.querySelector('[data-gallery-main-image]');if(!thumbs.length||!main)return;const title=document.getElementById('galleryCurrentTitle');const caption=document.getElementById('galleryCurrentCaption');const chip=document.getElementById('galleryCurrentCategory');const prev=document.querySelector('.gallery-nav.prev');const next=document.querySelector('.gallery-nav.next');const open=document.querySelector('.gallery-open');const frame=document.getElementById('galleryStageFrame');const thumbTrack=document.getElementById('galleryThumbs');const visible=()=>thumbs.filter(t=>t.style.display!=='none');const activate=thumb=>{if(!thumb)return;thumbs.forEach(t=>t.classList.toggle('active',t===thumb));main.src=thumb.dataset.full||thumb.querySelector('img')?.src||'';main.alt=thumb.dataset.title||thumb.querySelector('span')?.textContent||'Imagem da galeria';if(title)title.textContent=thumb.dataset.title||main.alt;if(caption)caption.textContent=thumb.dataset.caption||'';if(chip)chip.textContent=(thumb.dataset.title||'Galeria').toUpperCase();thumb.scrollIntoView({behavior:'smooth',inline:'nearest',block:'nearest'});if(thumbTrack){thumbTrack.scrollTop=0}};const currentVisible=()=>visible();const currentIndex=()=>currentVisible().findIndex(t=>t.classList.contains('active'));thumbs.forEach(t=>t.addEventListener('click',()=>activate(t)));prev?.addEventListener('click',e=>{e.stopPropagation();const list=currentVisible();if(!list.length)return;let idx=currentIndex();idx=idx<=0?list.length-1:idx-1;activate(list[idx])});next?.addEventListener('click',e=>{e.stopPropagation();const list=currentVisible();if(!list.length)return;let idx=currentIndex();idx=idx>=list.length-1?0:idx+1;activate(list[idx])});open?.addEventListener('click',e=>{e.stopPropagation();window.openSiteLightbox?.(main.src,main.alt)});frame?.addEventListener('click',e=>{if(e.target.closest('.gallery-nav')||e.target.closest('.gallery-open'))return;window.openSiteLightbox?.(main.src,main.alt)});document.addEventListener('gallery:filterChanged',()=>{const list=currentVisible();if(thumbTrack)thumbTrack.scrollTo({left:0,behavior:'smooth'});if(list.length)activate(list[0])});activate(thumbs.find(t=>t.classList.contains('active'))||thumbs[0])}
function initRoomFilters(){const buttons=[...document.querySelectorAll('[data-room-filter]')];const cards=[...document.querySelectorAll('[data-room-card]')];if(!buttons.length||!cards.length)return;const empty=document.getElementById('roomsEmptyState');const apply=filter=>{let shown=0;cards.forEach(card=>{const cap=card.dataset.capacity;const isDouble=card.dataset.double==='true';const show=filter==='all'||filter===`capacity-${cap}`||(filter==='double-bed'&&isDouble);card.hidden=!show;if(show)shown++});if(empty)empty.hidden=shown!==0};buttons.forEach(btn=>btn.addEventListener('click',()=>{buttons.forEach(b=>b.classList.remove('active'));btn.classList.add('active');apply(btn.dataset.roomFilter)}));apply('all')}
function animateStats(){const els=[...document.querySelectorAll('[data-count]')];if(!els.length)return;const obs=new IntersectionObserver(entries=>entries.forEach(en=>{if(!en.isIntersecting)return;const el=en.target,target=+el.dataset.count;const dur=900,t0=performance.now();function frame(t){const p=Math.min(1,(t-t0)/dur);el.textContent=Math.round(target*(1-Math.pow(1-p,3)))+(el.dataset.suffix||'');if(p<1)requestAnimationFrame(frame)}requestAnimationFrame(frame);obs.unobserve(el)}),{threshold:.45});els.forEach(el=>obs.observe(el))}
document.addEventListener('DOMContentLoaded',async()=>{await loadCmsSiteConfig();renderShell();await loadCmsPageContent();});
