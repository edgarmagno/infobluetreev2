import { PlaceToVisit } from '../types';

export const placesToVisit: PlaceToVisit[] = [
  // ==========================================
  // RESTAURANTES & GASTRONOMIA REGIONAL
  // ==========================================
  {
    id: 'restaurante-tambaqui-de-banda',
    name: 'Tambaqui de Banda (Centro)',
    category: 'restaurant',
    categoryLabel: {
      pt: 'Restaurante Típico',
      en: 'Regional Restaurant',
      es: 'Restaurante Típico',
    },
    distanceFromHotel: '4,3 km',
    estimatedDriveTime: '10-12 min',
    address: 'Rua José Clemente, 496 - Centro (em frente ao Teatro Amazonas)',
    tagline: {
      pt: 'Famoso tambaqui na brasa com vista privilegiada para o Teatro Amazonas',
      en: 'Famous grilled tambaqui with a view of Teatro Amazonas',
      es: 'Famoso tambaqui a las brasas con vista al Teatro Amazonas',
    },
    description: {
      pt: 'Um dos restaurantes mais icônicos de Manaus. Sua especialidade é a banda de tambaqui assada na brasa, servida crocante por fora e macia por dentro, acompanhada de baião de dois, farofa uarini e vinagrete. A localização é imbatível, de frente para o Largo de São Sebastião.',
      en: 'One of Manaus most iconic restaurants. Famous for grilled tambaqui ribs served with Amazonian rice and beans, manioc farofa, and vinaigrette, sitting right opposite the historic opera square.',
      es: 'Uno de los restaurantes más emblemáticos de Manaus, famoso por su costillar de tambaqui a la brasa con vista panorámica a la plaza del Teatro.',
    },
    tips: {
      pt: 'Sente nas mesas da calçada ao entardecer para admirar a iluminação do Teatro Amazonas enquanto desfruta do prato.',
      en: 'Sit at the outdoor tables around dusk to see Teatro Amazonas lit up at night.',
      es: 'Siéntese en las mesas de la terraza al atardecer para ver el teatro iluminado.',
    },
    mapsUrl:
      'https://www.google.com/maps/dir/?api=1&origin=Blue+Tree+Premium+Manaus&destination=Tambaqui+de+Banda+Centro+Manaus',
  },
  {
    id: 'restaurante-caxiri',
    name: 'Restaurante Caxiri',
    category: 'restaurant',
    categoryLabel: {
      pt: 'Alta Gastronomia Amazônica',
      en: 'Amazonian Fine Dining',
      es: 'Alta Gastronomía Amazónica',
    },
    distanceFromHotel: '4,3 km',
    estimatedDriveTime: '10-12 min',
    address: 'Rua 10 de Julho, 495 - 1º Andar, Centro (ao lado do Teatro)',
    tagline: {
      pt: 'Culinária autoral amazônica refinada com vista panorâmica do Teatro',
      en: 'Refined Amazonian contemporary cuisine overlooking Teatro Amazonas',
      es: 'Cocina amazónica contemporánea con vistas directas al Teatro Amazonas',
    },
    description: {
      pt: 'Comandado pela premiada chef Débora Shornik, o Caxiri valoriza ingredientes de comunidades ribeirinhas e indígenas em releituras contemporâneas excepcionais. Funciona no casarão histórico no primeiro andar com janelões clássicos emoldurando a cúpula do Teatro Amazonas.',
      en: 'Led by chef Débora Shornik, Caxiri showcases indigenous and riverine ingredients in refined contemporary dishes inside a heritage townhouse with grand window views of the Opera House.',
      es: 'Reconocido restaurante de alta gastronomía amazónica con ingredientes autóctonos y vistas inigualables al Teatro Amazonas.',
    },
    tips: {
      pt: 'Recomendamos reservar com antecedência e pedir uma mesa próxima às janelas coloniais.',
      en: 'Book in advance and request a table by the front colonial windows.',
      es: 'Se recomienda reservar con antelación y solicitar mesa junto a las ventanas.',
    },
    mapsUrl:
      'https://www.google.com/maps/dir/?api=1&origin=Blue+Tree+Premium+Manaus&destination=Restaurante+Caxiri+Manaus',
  },
  {
    id: 'restaurante-choupana',
    name: 'Choupana Cozinha Regional',
    category: 'restaurant',
    categoryLabel: {
      pt: 'Peixes & Comida Caseira',
      en: 'Traditional Regional Dining',
      es: 'Pescados y Comida Regional',
    },
    distanceFromHotel: '1,2 km',
    estimatedDriveTime: '4 min',
    address: 'Av. Mário Ypiranga, 790 - Adrianópolis (bem próximo ao hotel)',
    tagline: {
      pt: 'Tradição manauara em caldeiradas e peixes nobres a minutos do hotel',
      en: 'Manaus tradition in fish stews and grilled river fish minutes from hotel',
      es: 'Gran tradición en pescados amazónicos y caldeirada a minutos del hotel',
    },
    description: {
      pt: 'Referência histórica em Adrianópolis para os amantes dos peixes de água doce. Destaque absoluto para a caldeirada de tambaqui com ovos, o matrinxã recheado na brasa com farofa de banana e pirarucu à casaca. Muito procurado por famílias locais e executivos.',
      en: 'A beloved culinary landmark in Adrianópolis, just a 4-minute ride from the hotel. Known for rich tambaqui stews, stuffed grilled matrinxã, and pirarucu casserole.',
      es: 'Referente gastronómico en Adrianópolis para degustar caldeirada de tambaqui, matrinxã relleno y pirarucu.',
    },
    tips: {
      pt: 'Fica na mesma avenida do hotel, excelente opção para almoço ou jantar rápido e autêntico.',
      en: 'Located on the same avenue as the hotel, ideal for quick and authentic dining.',
      es: 'Ubicado en la misma avenida del hotel, perfecto para un almuerzo típico y cercano.',
    },
    mapsUrl:
      'https://www.google.com/maps/dir/?api=1&origin=Blue+Tree+Premium+Manaus&destination=Choupana+Cozinha+Regional+Manaus',
  },
  {
    id: 'tamba-restobar',
    name: 'Tamba Restobar',
    category: 'restaurant',
    categoryLabel: {
      pt: 'Restobar & Drinks',
      en: 'Restobar & Cocktails',
      es: 'Restobar y Coctelería',
    },
    distanceFromHotel: '1,8 km',
    estimatedDriveTime: '5 min',
    address: 'Conjunto Morada do Sol, Adrianópolis / Aleixo',
    tagline: {
      pt: 'Ambiente descontraído com petiscos amazônicos, chopp e coquetelaria',
      en: 'Trendy vibrant restobar with Amazonian tapas, beers & craft drinks',
      es: 'Ambiente moderno con tapas amazónicas, cervezas artesanales y cócteles',
    },
    description: {
      pt: 'Ambiente moderno e jovem reunindo petiscos criativos com pescados amazônicos (croquetes de pirarucu, costelinhas de tambaqui crocantes), hambúrgueres artesanais, chopp gelado e drinks autorais com frutas nativas como cupuaçu e camu-camu.',
      en: 'A trendy spot for evening drinks and creative regional bites including pirarucu croquettes, crispy tambaqui cuts, and craft cocktails made with native fruits.',
      es: 'Lugar moderno y animado para el atardecer y la noche con tapas de pescados amazónicos y coctelería de autor.',
    },
    tips: {
      pt: 'Excelente pedida para um happy hour descontraído a menos de 5 minutos do Blue Tree.',
      en: 'Great choice for evening happy hour and craft cocktails 5 minutes away.',
      es: 'Excelente opción para el happy hour a pocos minutos del hotel.',
    },
    mapsUrl:
      'https://www.google.com/maps/dir/?api=1&origin=Blue+Tree+Premium+Manaus&destination=Tamba+Restobar+Manaus',
  },

  // ==========================================
  // SHOPPINGS DE MANAUS
  // ==========================================
  {
    id: 'shopping-manauara',
    name: 'Manauara Shopping',
    category: 'shopping',
    categoryLabel: {
      pt: 'Shopping Center',
      en: 'Shopping Mall',
      es: 'Centro Comercial',
    },
    distanceFromHotel: '800 m',
    estimatedDriveTime: '2-3 min (ou 8 min a pé)',
    address: 'Av. Mário Ypiranga, 1300 - Adrianópolis',
    tagline: {
      pt: 'O principal e mais sofisticado shopping de Manaus, vizinho ao hotel',
      en: 'The premier upscale shopping center of Manaus, walking distance from hotel',
      es: 'El principal centro comercial de Manaus, vecino al hotel',
    },
    description: {
      pt: 'Concebido com tema amazônico, o Manauara Shopping possui bosque interno preservado, cascata artificial e claraboias de luz natural. Conta com centenas de lojas nacionais e internacionais, Teatro Manauara, complexo PlayArte de cinema, ampla praça gastronômica e restaurantes conceituados como Toca da Cachaça e Spoleto.',
      en: 'Recognized for its eco-inspired architecture featuring an indoor preserved forest and cascading waterfalls. Offers luxury and international brands, theater, cinemas, and diverse dining options right next to the hotel.',
      es: 'Centro comercial emblemático con bosque interior preservado, salas de cine, teatro y las mejores tiendas de la ciudad a pasos del hotel.',
    },
    tips: {
      pt: 'Pode-se ir caminhando com segurança pela Av. Mário Ypiranga em menos de 10 minutos.',
      en: 'Can be reached on an easy 8-minute walk along the avenue from the hotel.',
      es: 'Se puede llegar caminando tranquilamente en menos de 10 minutos.',
    },
    mapsUrl:
      'https://www.google.com/maps/dir/?api=1&origin=Blue+Tree+Premium+Manaus&destination=Manauara+Shopping+Manaus',
  },
  {
    id: 'shopping-amazonas',
    name: 'Amazonas Shopping',
    category: 'shopping',
    categoryLabel: {
      pt: 'Shopping Center',
      en: 'Shopping Mall',
      es: 'Centro Comercial',
    },
    distanceFromHotel: '2,5 km',
    estimatedDriveTime: '6 min',
    address: 'Av. Djalma Batista, 482 - Parque 10 de Novembro',
    tagline: {
      pt: 'O pioneiro e tradicional shopping de Manaus com mais de 240 operações',
      en: 'The pioneer major shopping center of Manaus with over 240 stores',
      es: 'El primer gran centro comercial de Manaus con más de 240 tiendas',
    },
    description: {
      pt: 'Primeiro grande shopping center construído no Amazonas (1991), situado no coração comercial da Av. Djalma Batista. Abriga grandes magazines (Zara, Renner, Riachuelo), Alameda Gourmet com restaurantes expressivos, farmácias, serviços bancários e cinemas.',
      en: 'The first modern shopping center opened in Manaus, situated in a central hub. Features over 240 retailers, gourmet dining corridor, banking services, and movie theaters.',
      es: 'Primer centro comercial de la ciudad, con gran oferta de marcas internacionales, cine y restaurantes gourmet.',
    },
    tips: {
      pt: 'Acesso muito rápido pela Av. Darcy Vargas a partir de Adrianópolis.',
      en: 'Quick 6-minute drive via Darcy Vargas Avenue.',
      es: 'Fácil acceso en vehículo a solo 6 minutos del hotel.',
    },
    mapsUrl:
      'https://www.google.com/maps/dir/?api=1&origin=Blue+Tree+Premium+Manaus&destination=Amazonas+Shopping+Manaus',
  },
  {
    id: 'shopping-ponta-negra',
    name: 'Shopping Ponta Negra',
    category: 'shopping',
    categoryLabel: {
      pt: 'Shopping Center & Orla',
      en: 'Shopping Mall & Beachside',
      es: 'Centro Comercial y Orla',
    },
    distanceFromHotel: '14,0 km',
    estimatedDriveTime: '20-25 min',
    address: 'Av. Coronel Teixeira, 5705 - Ponta Negra',
    tagline: {
      pt: 'Shopping de alto padrão na orla do Rio Negro com salas VIP de cinema',
      en: 'Upscale mall along the Ponta Negra beachfront with VIP movie theaters',
      es: 'Moderno centro comercial de lujo en la zona costera de Ponta Negra',
    },
    description: {
      pt: 'Localizado no bairro mais nobre da orla de Manaus, reúne marcas de luxo, moda contemporânea, salas de cinema VIP Cinépolis e varandas com vista panorâmica para o pôr do sol sobre a Ponta Negra.',
      en: 'Located in the affluent Ponta Negra district, featuring designer boutiques, VIP cinema lounges, and terrace views over the Rio Negro sunset.',
      es: 'En el barrio de Ponta Negra, con marcas exclusivas, salas VIP de cine y vistas hacia el río.',
    },
    tips: {
      pt: 'Excelente para combinar com um passeio no calçadão da Praia da Ponta Negra no fim da tarde.',
      en: 'Combine your visit with an afternoon stroll along Ponta Negra beach promenade.',
      es: 'Ideal para combinar con un paseo por la playa de Ponta Negra al final de la tarde.',
    },
    mapsUrl:
      'https://www.google.com/maps/dir/?api=1&origin=Blue+Tree+Premium+Manaus&destination=Shopping+Ponta+Negra+Manaus',
  },

  // ==========================================
  // PARQUES, FAUNA & CIÊNCIA DA AMAZÔNIA
  // ==========================================
  {
    id: 'zoologico-cigs',
    name: 'Zoológico do CIGS',
    category: 'nature',
    categoryLabel: {
      pt: 'Fauna & Selva',
      en: 'Wildlife Zoo',
      es: 'Zoológico y Fauna',
    },
    distanceFromHotel: '6,8 km',
    estimatedDriveTime: '14-16 min',
    address: 'Av. São Jorge, 750 - Bairro São Jorge',
    tagline: {
      pt: 'Centro militar de instrução na selva com santuário da fauna amazônica',
      en: 'Jungle warfare center with a dedicated Amazon wildlife sanctuary',
      es: 'Centro de instrucción de selva con santuario de fauna amazónica',
    },
    description: {
      pt: 'Mantido pelo Centro de Instrução de Guerra na Selva (CIGS) do Exército Brasileiro, abriga cerca de 200 animais exclusivamente amazônicos resgatados ou em conservação, como majestosas onças-pintadas e pretas em passarela suspensa, gavião-real (harpia), ariranhas, macacos e aquário amazônico de grandes peixes.',
      en: 'Maintained by the Brazilian Army Jungle Warfare Training Center. Houses over 200 native Amazon animals including jaguars seen from elevated catwalks, harpy eagles, giant otters, and freshwater aquariums.',
      es: 'Administrado por el Centro de Instrucción de Guerra en la Selva del Ejército. Alberga jaguares, águilas arpías, nutrias gigantes y acuarios con grandes peces amazónicos.',
    },
    tips: {
      pt: 'O horário do almoço dos felinos (por volta das 11h ou 14h) é uma das atrações mais impressionantes. Entrada com valor acessível.',
      en: 'Feline feeding times around late morning are spectacular to watch. Inexpensive entry fee.',
      es: 'El horario de alimentación de los felinos es imperdible. Entrada a precio simbólico.',
    },
    mapsUrl:
      'https://www.google.com/maps/dir/?api=1&origin=Blue+Tree+Premium+Manaus&destination=Zoologico+do+CIGS+Manaus',
  },
  {
    id: 'inpa-bosque-da-ciencia',
    name: 'INPA - Bosque da Ciência',
    category: 'nature',
    categoryLabel: {
      pt: 'Ciência & Preservação',
      en: 'Science & Manatee Sanctuary',
      es: 'Ciencia y Bosque Urbano',
    },
    distanceFromHotel: '3,8 km',
    estimatedDriveTime: '9-10 min',
    address: 'Av. Bem-te-vi, s/n - Bairro Petrópolis (próximo à UFAM)',
    tagline: {
      pt: 'Reserva florestal com peixes-bois amazônicos, lontras e trilhas sombreadas',
      en: 'Urban rainforest sanctuary with Amazonian manatees, giant otters & trails',
      es: 'Reserva forestal urbana con manatíes amazónicos, nutrias y senderos',
    },
    description: {
      pt: 'Espaço de divulgação científica de 13 hectares do Instituto Nacional de Pesquisas da Amazônia (INPA). Conta com os famosos tanques de recuperação do peixe-boi da Amazônia, santuário de ariranhas, viveiro de quelônios, Casa da Ciência e trilhas suspensas sob árvores gigantescas centenárias com macacos e preguiças livres.',
      en: 'A 13-hectare environmental science reserve inside the city by INPA. Features the celebrated Amazon manatee rehabilitation tanks, giant otters, turtle ponds, and canopy trails with wild monkeys and sloths.',
      es: 'Espacio de 13 hectáreas del Instituto Nacional de Pesquisas de la Amazonía. Cuenta con manatíes amazónicos, nutrias gigantes, tortugas y senderos bajo árboles centenarios.',
    },
    tips: {
      pt: 'Passeio sombreado muito agradável para manhãs e tardes. Ver os peixes-bois sendo alimentados é inesquecível para crianças e adultos.',
      en: 'Shaded, peaceful walk perfect for mornings. Watching manatees up close is unforgettable.',
      es: 'Paseo sombreado y educativo ideal para la mañana. Cerca del hotel.',
    },
    mapsUrl:
      'https://www.google.com/maps/dir/?api=1&origin=Blue+Tree+Premium+Manaus&destination=Bosque+da+Ciencia+INPA+Manaus',
  },
  {
    id: 'musa-museu-amazonia',
    name: 'MUSA - Museu da Amazônia',
    category: 'nature',
    categoryLabel: {
      pt: 'Selva Viva & Torre 42m',
      en: 'Living Forest & Canopy Tower',
      es: 'Selva Viva y Torre 42m',
    },
    distanceFromHotel: '16,5 km',
    estimatedDriveTime: '28-32 min',
    address: 'Av. Margarita, 6305 - Jorge Teixeira (Reserva Florestal Adolpho Ducke)',
    tagline: {
      pt: 'Torre de observação de 42m acima da copa das árvores e selva primária',
      en: '42m canopy observation tower rising above ancient primary rainforest',
      es: 'Torre de observación de 42 metros sobre el dosel de la selva virgen',
    },
    description: {
      pt: 'Localizado dentro da Reserva Florestal Adolpho Ducke, uma das poucas florestas primárias do mundo dentro de uma área urbana. A atração principal é a torre metálica de 42 metros de altura (242 degraus) que ultrapassa a copa das árvores oferecendo uma vista de 360 graus do mar verde amazônico. Possui ainda lago de vitórias-régias, orquidário e aquário.',
      en: 'Located inside the Adolpho Ducke Forest Reserve. Its main icon is a 42-meter (138-foot) observation tower rising above the jungle canopy for a 360-degree ocean-of-green panorama.',
      es: 'Ubicado en la Reserva Ducke. Su mayor atractivo es la torre de 42 metros que sobrepasa las copas de los árboles amazónicos con vista panorámica de 360 grados.',
    },
    tips: {
      pt: 'Use calçados fechados e confortáveis. Agendar a subida na torre no nascer do sol ou entardecer proporciona fotos deslumbrantes.',
      en: 'Wear comfortable closed sneakers. Booking the tower climb at sunrise or sunset offers magical bird watching.',
      es: 'Lleve calzado cerrado. Subir a la torre al amanecer o atardecer ofrece vistas de ensueño.',
    },
    mapsUrl:
      'https://www.google.com/maps/dir/?api=1&origin=Blue+Tree+Premium+Manaus&destination=MUSA+Museu+da+Amazonia+Manaus',
  },

  // ==========================================
  // ESPORTES & GRANDES EVENTOS
  // ==========================================
  {
    id: 'arena-amadeu-teixeira',
    name: 'Arena Poliesportiva Amadeu Teixeira',
    category: 'sports',
    categoryLabel: {
      pt: 'Ginásio & Esportes',
      en: 'Sports Arena',
      es: 'Arena Polideportiva',
    },
    distanceFromHotel: '4,5 km',
    estimatedDriveTime: '10-12 min',
    address: 'Rua Lóris Cordovil - Flores (ao lado da Arena da Amazônia)',
    tagline: {
      pt: 'Principal arena esportiva coberta de Manaus com capacidade para 11 mil pessoas',
      en: 'Manaus premier indoor sports stadium hosting volleyball, martial arts & shows',
      es: 'El principal estadio cubierto de Manaus para deportes y grandes espectáculos',
    },
    description: {
      pt: 'Batizada em homenagem ao histórico técnico e desportista amazonense Amadeu Teixeira, é o maior ginásio poliesportivo coberto do Estado do Amazonas. Palco oficial de partidas de voleibol da Superliga, competições de jiu-jítsu e artes marciais, além de convenções e shows musicais.',
      en: 'Named after legendary Amazonas coach Amadeu Teixeira, this 11,000-seat multi-sport indoor stadium hosts national volleyball championships, Brazilian jiu-jitsu tournaments, and entertainment events.',
      es: 'El mayor gimnasio cubierto del Amazonas para competencias de voleibol, jiu-jitsu, artes marciales y eventos multitudinarios.',
    },
    tips: {
      pt: 'Localizada no mesmo complexo olímpico da Arena da Amazônia e Sambódromo, com acesso fácil pela Constantino Nery.',
      en: 'Located right next to Arena da Amazônia with wide parking and taxi access.',
      es: 'Ubicada junto a la Arena da Amazônia con excelente acceso en taxi o transporte.',
    },
    mapsUrl:
      'https://www.google.com/maps/dir/?api=1&origin=Blue+Tree+Premium+Manaus&destination=Arena+Amadeu+Teixeira+Manaus',
  },
  {
    id: 'arena-da-amazonia',
    name: 'Arena da Amazônia',
    category: 'sports',
    categoryLabel: {
      pt: 'Estádio de Copa do Mundo',
      en: 'World Cup Stadium',
      es: 'Estadio Mundialista',
    },
    distanceFromHotel: '4,2 km',
    estimatedDriveTime: '10 min',
    address: 'Av. Constantino Nery, 5001 - Flores',
    tagline: {
      pt: 'Estádio da Copa de 2014 com arquitetura inspirada em cesto indígena',
      en: '2014 FIFA World Cup stadium inspired by an indigenous straw basket',
      es: 'Estadio del Mundial 2014 con diseño inspirado en cestería indígena',
    },
    description: {
      pt: 'Construída para a Copa do Mundo FIFA 2014, sua estrutura metálica inovadora evoca os grafismos dos cestos de palha indígenas da Amazônia. É o principal palco do futebol amazonense e dos maiores shows internacionais e nacionais em Manaus.',
      en: 'Architectural gem built for the 2014 FIFA World Cup, designed to mimic traditional indigenous woven straw baskets. Hosts premier soccer matches and megaconcerts.',
      es: 'Obra emblemática de la Copa 2014 que acoge los partidos principales de fútbol y grandes conciertos.',
    },
    tips: {
      pt: 'Visite em dias de jogos ou admire sua arquitetura iluminada à noite da Av. Constantino Nery.',
      en: 'Stunning to photograph illuminated at night along Constantino Nery Avenue.',
      es: 'Impresionante iluminación nocturna visible desde la avenida principal.',
    },
    mapsUrl:
      'https://www.google.com/maps/dir/?api=1&origin=Blue+Tree+Premium+Manaus&destination=Arena+da+Amazonia+Manaus',
  },

  // ==========================================
  // ATRAÇÕES HISTÓRICAS & CARTÕES-POSTAIS
  // ==========================================
  {
    id: 'teatro-amazonas',
    name: 'Teatro Amazonas',
    category: 'attraction',
    categoryLabel: {
      pt: 'Monumento Histórico',
      en: 'Historical Landmark',
      es: 'Monumento Histórico',
    },
    distanceFromHotel: '4,3 km',
    estimatedDriveTime: '10-12 min',
    address: 'Largo de São Sebastião, Centro',
    tagline: {
      pt: 'Ícone da Belle Époque e da borracha com cúpula de 36.000 azulejos (1896)',
      en: 'Icon of the Belle Époque rubber era with 36,000 glazed dome tiles (1896)',
      es: 'Ícono de la Belle Époque con cúpula de 36.000 azulejos vitrificados (1896)',
    },
    description: {
      pt: 'Inaugurado em 1896, o Teatro Amazonas é um dos mais célebres teatros de ópera do mundo. Sua cúpula monumental possui 36.000 peças de cerâmica vitrificada nas cores da bandeira brasileira. No interior: lustres de Murano, pinturas de Domenico de Angelis e o Salão Nobre com piso de marchetaria em madeiras amazônicas.',
      en: 'Inaugurated in 1896, Teatro Amazonas is one of the world most recognized opera houses. Built during the Rubber Boom with European marble, Murano crystal chandeliers, and Amazonian hardwood parquet floors.',
      es: 'Inaugurado en 1896, emblema máximo de la opulencia de la época dorada del caucho con mármoles europeos y lámparas de Murano.',
    },
    tips: {
      pt: 'Visitas guiadas de terça a domingo. Combine com o Largo de São Sebastião ao entardecer.',
      en: 'Guided tours Tuesday to Sunday. Stay for an evening drink on Largo square.',
      es: 'Visitas guiadas de martes a domingo. Combine con la plaza al atardecer.',
    },
    mapsUrl:
      'https://www.google.com/maps/dir/?api=1&origin=Blue+Tree+Premium+Manaus&destination=Teatro+Amazonas+Manaus',
  },
  {
    id: 'mercado-adolpho-lisboa',
    name: 'Mercado Municipal Adolpho Lisboa',
    category: 'attraction',
    categoryLabel: {
      pt: 'Mercado Histórico & Sabores',
      en: 'Historic Market & Flavors',
      es: 'Mercado Histórico',
    },
    distanceFromHotel: '5,2 km',
    estimatedDriveTime: '14-16 min',
    address: 'Rua dos Barés, 46 - Centro (beira do Rio Negro)',
    tagline: {
      pt: 'Estrutura em ferro de 1883 inspirada no Les Halles de Paris',
      en: '1883 wrought-iron structure inspired by Paris Les Halles',
      es: 'Estructura de hierro de 1883 inspirada en Les Halles de París',
    },
    description: {
      pt: 'O charmoso "Mercadão" foi erguido na margem do Rio Negro com peças de ferro fundido importadas da Europa. É o local ideal para conhecer peixes frescos (tambaqui, pirarucu), frutas exóticas (cupuaçu, tucumã, taperebá), farinhas, castanhas e artesanato indígena autêntico.',
      en: 'Built on the banks of the Rio Negro with cast-iron imported from Europe. Best place to discover exotic fruits, fresh river fish, Amazonian nuts, herbal folk medicines, and genuine handicrafts.',
      es: 'Mercado de hierro Art Nouveau frente al río, epicentro de sabores amazónicos y artesanías.',
    },
    tips: {
      pt: 'Visite pela manhã para ver o movimento dos barcos e tomar um café com tapioca recheada com tucumã e queijo coalho.',
      en: 'Visit in the morning for bustling riverboat views and breakfast tapioca with tucumã fruit.',
      es: 'Visite por la mañana para degustar tapioca regional con vistas al río.',
    },
    mapsUrl:
      'https://www.google.com/maps/dir/?api=1&origin=Blue+Tree+Premium+Manaus&destination=Mercado+Municipal+Adolpho+Lisboa+Manaus',
  },
  {
    id: 'mirante-lucia-almeida',
    name: 'Mirante Lúcia Almeida',
    category: 'attraction',
    categoryLabel: {
      pt: 'Mirante & Pôr do Sol',
      en: 'Riverfront Viewpoint',
      es: 'Mirador del Río',
    },
    distanceFromHotel: '5,5 km',
    estimatedDriveTime: '15-18 min',
    address: 'Rua Bernardo Ramos, 44 - Centro Histórico',
    tagline: {
      pt: 'Novo cartão-postal à beira do Rio Negro com gastronomia e vista privilegiada',
      en: 'Manaus newest riverfront landmark with scenic decks and sunset dining',
      es: 'Nuevo mirador sobre el Río Negro con gastronomía y vistas panorámicas',
    },
    description: {
      pt: 'Parte do projeto de revitalização "Nosso Centro", o mirante foi construído sobre uma antiga estrutura portuária e oferece decks panorâmicos suspensos sobre as águas escuras do Rio Negro, espaço gastronômico com quiosques locais e visão deslumbrante da Ponte Rio Negro.',
      en: 'Part of the historic center revitalization project. A modern pier suspended over the Rio Negro, with artisan food kiosks and open-air decks for sunset gazing.',
      es: 'Moderno complejo panorámico sobre el Río Negro con terrazas gastronómicas y vistas de la puesta de sol.',
    },
    tips: {
      pt: 'O pôr do sol entre 17h15 e 18h00 é o momento mais mágico do local.',
      en: 'Sunset between 5:15 PM and 6:00 PM is breathtaking.',
      es: 'La puesta de sol entre las 17:15 y 18:00 es el momento perfecto.',
    },
    mapsUrl:
      'https://www.google.com/maps/dir/?api=1&origin=Blue+Tree+Premium+Manaus&destination=Mirante+Lucia+Almeida+Manaus',
  },
  {
    id: 'encontro-das-aguas',
    name: 'Encontro das Águas (Rio Negro e Solimões)',
    category: 'attraction',
    categoryLabel: {
      pt: 'Fenômeno Natural',
      en: 'Natural Wonder',
      es: 'Fenómeno Natural',
    },
    distanceFromHotel: '9,8 km',
    estimatedDriveTime: '20 min até o Porto Ceasa',
    address: 'Porto do Ceasa / Mirante da Embratel (Colônia Antônio Aleixo)',
    tagline: {
      pt: 'Confluência dos rios Negro e Solimões que correm juntos sem se misturar',
      en: 'Meeting of Rio Negro and Solimões running side-by-side without mixing',
      es: 'Confluencia de los ríos Negro y Solimões corriendo juntos sin mezclarse',
    },
    description: {
      pt: 'Um dos maiores espetáculos da natureza mundial. As águas escuras e ácidas do Rio Negro e as águas barrentas do Rio Solimões correm lado a lado por mais de 6 km sem se misturar, devido às diferenças de temperatura, velocidade e densidade.',
      en: 'One of the worlds most famous natural phenomena. Dark Rio Negro and muddy Solimões waters run side-by-side for over 6 km without mixing due to differing speeds, temperatures, and densities.',
      es: 'Fascinante espectáculo natural donde dos inmensos ríos discurren juntos durante kilómetros con colores contrastantes.',
    },
    tips: {
      pt: 'Lanchas rápidas partem continuamente do Porto do Ceasa para o passeio com duração de 40 minutos a 1 hora.',
      en: 'Speedboats depart regularly from Ceasa Port for 40-minute scenic river tours.',
      es: 'Lanchas rápidas salen del Puerto Ceasa para tours de 40 minutos.',
    },
    mapsUrl:
      'https://www.google.com/maps/dir/?api=1&origin=Blue+Tree+Premium+Manaus&destination=Porto+do+Ceasa+Manaus',
  },
  {
    id: 'praia-da-ponta-negra',
    name: 'Praia e Calçadão da Ponta Negra',
    category: 'attraction',
    categoryLabel: {
      pt: 'Orla & Lazer',
      en: 'Beach Promenade',
      es: 'Playa y Costanera',
    },
    distanceFromHotel: '13,2 km',
    estimatedDriveTime: '20-25 min',
    address: 'Av. Coronel Teixeira, Ponta Negra',
    tagline: {
      pt: 'Calçadão de pedras portuguesas, areia fina do Rio Negro e anfiteatro',
      en: 'River beach with Portuguese mosaic promenade, cafes & amphitheater',
      es: 'Playa fluvial con rambla de mosaicos, cafeterías y anfiteatro',
    },
    description: {
      pt: 'Complexo turístico às margens do Rio Negro. Possui calçadão ondulado de mosaico português (similar a Copacabana), praia perene de areia branca, mirantes, ciclovias, quadras esportivas, quiosques com água de coco e anfiteatro.',
      en: 'Popular coastal recreation area along Rio Negro with a Portuguese pavement promenade, soft river sand beach, coconut water kiosks, and open-air sunset viewing piers.',
      es: 'Rambla turística frente al río con playa de arena, paseos para caminar y vistas al atardecer.',
    },
    tips: {
      pt: 'Movimentado no final de tarde para caminhadas refrescantes e assistir ao pôr do sol.',
      en: 'Great late afternoon spot for walking, fresh coconut water, and sunsets.',
      es: 'Ideal al final de la tarde para caminar y disfrutar el atardecer.',
    },
    mapsUrl:
      'https://www.google.com/maps/dir/?api=1&origin=Blue+Tree+Premium+Manaus&destination=Praia+da+Ponta+Negra+Manaus',
  },
  {
    id: 'palacete-provincial',
    name: 'Palacete Provincial',
    category: 'attraction',
    categoryLabel: {
      pt: 'Complexo de Museus',
      en: 'Museum Complex',
      es: 'Complejo de Museos',
    },
    distanceFromHotel: '4,5 km',
    estimatedDriveTime: '12 min',
    address: 'Praça Heliodoro Balbi, s/n - Centro',
    tagline: {
      pt: 'Edifício histórico de 1874 que reúne 5 importantes museus estaduais',
      en: '1874 historic government palace housing 5 major state museums',
      es: 'Palacio histórico de 1874 con 5 museos públicos de arte y numismática',
    },
    description: {
      pt: 'Antigo quartel-general da Polícia Militar e sede do governo no século XIX, o Palacete Provincial abriga hoje cinco museus simultâneos: Pinacoteca do Estado, Museu de Numismática Bernardo Ramos, Museu da Imagem e do Som (MISAM), Museu de Arqueologia e Museu Tiradentes.',
      en: 'Former military headquarters and government seat dating back to 1874. Today it hosts five museums under one roof: State Art Gallery, Coin & Currency Museum, Sound & Image Museum, and Archaeology Museum.',
      es: 'Histórico palacio del siglo XIX que alberga la Pinacoteca del Estado, el Museo de Numismática y Arqueología.',
    },
    tips: {
      pt: 'Entrada gratuita. Fica em frente à arborizada Praça da Polícia.',
      en: 'Free admission. Located directly facing the tree-lined Police Square.',
      es: 'Entrada gratuita en pleno centro histórico.',
    },
    mapsUrl:
      'https://www.google.com/maps/dir/?api=1&origin=Blue+Tree+Premium+Manaus&destination=Palacete+Provincial+Manaus',
  },
];
