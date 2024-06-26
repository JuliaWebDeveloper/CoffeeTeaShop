const dataProducts = [
    {
        id: 1,
        name:'Бодрящий травяной чай',
        image:'invigorating-herbal-tea',
        productWeight:'40 гр',
        description:'Лоза лимонника, железница крымская, курильский чай, цветы апельсина, лист бадана, лист малины ферментированный.',
        price:'850',
        category:'Чай'
    },
    {
        id: 2,
        name:'Вкусный чай',
        image:'delicious-tea',
        productWeight:'45 гр',
        description:'Зелёный чай, таволга, ромашка, календула, хризантема, цедра апельсина.',
        price:'850',
        category:'Чай'
    },
    {
        id: 3,
        name:'Травяной чай "Бомба-чай"',
        image:'bomb-tea',
        productWeight:'40 гр',
        description:'Бадан, курильский чай, кукурузные рыльца, лист малины ферментированный и обычная, ромашка.',
        price:'800',
        category:'Чай'
    },
    {
        id: 4,
        name:'Тизан "Поцелуй древних богов"',
        image:'kiss-tea',
        productWeight:'30 гр',
        description:'Чабрец, каркаде, жасмин, лаванда, лист вишни, бадьян.',
        price:'630',
        category:'Чай'
    },
    {
        id: 5,
        name:'"Весна в сердце"',
        image:'spring-in-the-heart-tea',
        productWeight:'40 гр',
        description:'Иван-чай лист ферментированный цветы, крымской розы цветы, лист земляники, цветы акации, смородина сушеная (ягоды), листья кафрского лайма.',
        price:'690',
        category:'Чай'
    },
    {
        id: 6,
        name:'Травяной сбор "Грёзы светлячка"',
        image:'firefly-dreams-tea',
        productWeight:'40 гр',
        description:'Ромашка, душица, цветы липы, лист малины, лист крапивы.',
        price:'540',
        category:'Чай'
    },
    {
        id: 7,
        name:'Тизан "Сады Персефоны"',
        image:'gardens-of-persephone-tea',
        productWeight:'40 гр',
        description:'Лист малины, анчан, боярышник, вербена лимонная, роза, секретный ингредиент.',
        price:'850',
        category:'Чай'
    },
    {
        id: 8,
        name:'Бодрящий травяной сбор',
        image:'dawn-tea',
        productWeight:'40 гр',
        description:'Железница крымская, лоза лимонника, каркадэ, бутоны розы, смородина лист.',
        price:'850',
        category:'Чай'
    },
    {
        id: 9,
        name:'Травяной сбор "Бодрый океан"',
        image:'ocean-tea',
        productWeight:'35 гр',
        description:'Железница, лист смородины, цветы бузины, цветы календулы, василёк.',
        price:'637',
        category:'Чай'
    },
    {
        id: 10,
        name:'Тизан "Эхо Кавказа" травяной чай',
        image:'echo-of-the-caucasus-tea',
        productWeight:'40 гр',
        description:'Мята, шалфей, чабрец, мелисса, бузина, клевер, таволга, зверобой.',
        price:'523',
        category:'Чай'
    },
    {
        id: 11,
        name:'Сбор "Наслаждение тишиной" травяной чай',
        image:'enjoying-the-silence-tea',
        productWeight:'40 гр',
        description:'Мята, бузина, липа, курильский чай, железница, ромашка, шалфей мускатный.',
        price:'531',
        category:'Чай'
    },
    {
        id: 12,
        name:'Травяной чай "Погладь кота"',
        image:'pet-the-cat-tea',
        productWeight:'30 гр',
        description:'Мята, липа, ромашка, таволга, клевер.',
        price:'548',
        category:'Чай'
    },
    {
        id: 13,
        name:'Зерновой Кофе "Миндаль в шоколаде"',
        image:'coffee',
        productWeight:'100 гр',
        description:'Яркий сбалансированный вкус Арабики с выраженной горчинкой дополнен ароматом сладкого миндаля и темного шоколада.',
        price:'479',
        category:'Кофе'
    },
    {
        id: 14,
        name:'Зерновой Кофе "Латте Макиато"',
        image:'coffee',
        productWeight:'100 гр',
        description:'Приятный вкус высокогорной Арабики, лишенный кислинки.',
        price:'479',
        category:'Кофе'
    },
    {
        id: 15,
        name:'Зерновой Кофе "Корица"',
        image:'coffee',
        productWeight:'100 гр',
        description:'Острая и жгучая на вкус корица обогащает классический крепкий кофе, придает ему пряный аромат.',
        price:'479',
        category:'Кофе'
    },
    {
        id: 16,
        name:'Зерновой Кофе "Кокосовый Рай"',
        image:'coffee',
        productWeight:'100 гр',
        description:'Вкус Арабики с выраженной горчинкой дополнен тропической сладостью кокоса с тонкими нотками ванили и шоколада.',
        price:'479',
        category:'Кофе'
    },
    {
        id: 17,
        name:'Зерновой Кофе "Капучино"',
        image:'coffee',
        productWeight:'100 гр',
        description:'Вязкий, плотный кофе со сливочной консистенцией и стойкой пенкой.',
        price:'479',
        category:'Кофе'
    },
    {
        id: 18,
        name:'Зерновой Кофе "Забаглионе"',
        image:'coffee',
        productWeight:'100 гр',
        description:'Аромат этого кофе богат шоколадными и винными нотами.',
        price:'479',
        category:'Кофе'
    },
    {
        id: 19,
        name:'Зерновой Кофе "Вишня в шоколаде"',
        image:'coffee',
        productWeight:'100 гр',
        description:'Вкус вишни и шоколада в сочетании с кофе арабика, будут дарить вам непревзойденное удовольствие.',
        price:'479',
        category:'Кофе'
    },
    {
        id: 20,
        name:'Зерновой Кофе "Вишня в коньяке"',
        image:'coffee',
        productWeight:'100 гр',
        description:'Вкус вишни, с тонким коньячным оттенком, с хорошим балансом легкой горчинки и сладкой ягодной нотки, оставляющим после себя долгое послевкусие.',
        price:'479',
        category:'Кофе'
    },
    {
        id: 21,
        name:'Зерновой Кофе " Банановый шейк"',
        image:'coffee',
        productWeight:'100 гр',
        description:'Непревзойденный вкус Арабики, лишенный кислинки, переплетается с плотной банановой сладостью - яркое запоминающееся сочетание.',
        price:'479',
        category:'Кофе'
    },
    {
        id: 22,
        name:'Зерновой Кофе "Апельсин"',
        image:'coffee',
        productWeight:'100 гр',
        description:'Насыщенный аромат натурального свежеобжаренного кофе дополнен оттенками освежающего апельсинового фреша, оттеняющего цитрусовой прохладой горячий напиток.',
        price:'479',
        category:'Кофе'
    },
    {
        id: 23,
        name:'Зерновой Кофе "Английские сливки"',
        image:'coffee',
        productWeight:'100 гр',
        description:'Обладает терпкостью, оттененной мягким вкусом, смягченной нежностью свежих сливок.',
        price:'479',
        category:'Кофе'
    },
    {
        id: 24,
        name:'Зерновой Кофе "Английская Карамель"',
        image:'coffee',
        productWeight:'100 гр',
        description:'Бодрящий насыщенный терпкий напиток и нежный сладкий аромат десерта.',
        price:'479',
        category:'Кофе'
    },
    {
        id: 25,
        name:'Чайник из жаропрочного стекла',
        image:'kettle-tea',
        productWeight:'900 мл',
        description:'Чайник из жаропрочного стекла.',
        price:'1350',
        category:'Аксессуары для чая'
    },
    {
        id: 26,
        name:'Чайник заварочный с кнопкой Гунфу (типот)',
        image:'kettle-tea-teapot',
        productWeight:'500 мл',
        description:'Чайник из жаропрочного стекла.',
        price:'1350',
        category:'Аксессуары для чая'
    },
    {
        id: 27,
        name:'Ситечко для заваривания чая',
        image:'tea-ball-influser',
        productWeight:'-',
        description:'Ситечко из нержавеющей стали.',
        price:'535',
        category:'Аксессуары для чая'
    },
    {
        id: 28,
        name:'Чайный сервиз из 5 предметов',
        image:'tea-set',
        productWeight:'-',
        description:'Чайный сервиз из жаропрочного стекла.',
        price:'3432',
        category:'Аксессуары для чая'
    },
    {
        id: 29,
        name:'Турка для кофе медная',
        image:'coffee-turk',
        productWeight:'-',
        description:'Турка для кофе из меди.',
        price:'2180',
        category:'Аксессуары для кофе'
    },
    {
        id: 30,
        name:'Мельница для кофе Burr',
        image:'coffee-grinder',
        productWeight:'-',
        description:'Мельница для кофе Burr.',
        price:'1290',
        category:'Аксессуары для кофе'
    },
    {
        id: 31,
        name:'Подарочный набор кружка 200 мл, капучинатор от батареек "Счастье пахнет кофе"',
        image:'coffee-present',
        productWeight:'-',
        description:'Подарочный набор кружка 200 мл, капучинатор от батареек «Счастье пахнет кофе».',
        price:'1450',
        category:'Аксессуары для кофе'
    },
    {
        id: 32,
        name:'Набор Кофе + 4 топовых сиропа Flavor Bay в подарочной коробке',
        image:'coffee-set',
        productWeight:'-',
        description:'Набор Кофе + 4 топовых сиропа Flavor Bay в подарочной коробке 4x500мл.',
        price:'3900',
        category:'Аксессуары для кофе'
    },
    {
        id: 33,
        name:'Подарочный набор чая и кофе на любой праздник «Для тебя»',
        image:'tea-coffee-set',
        productWeight:'350 гр',
        description: 'Долька апельсина - 1 шт., фруктовый чай веселый фрукт (classic) - 50 гр., связка корицы - 1 шт., зеленый чай лимон и мята - 50 гр., декоративная веточка с ягодами - 1 шт., зерновой кофе лесной орех - 100 гр., зерновой кофе латте макиато - 100 гр.',
        price:'2070',
        category:'Подарочный набор чая и кофе'
    },
    {
        id: 34,
        name:'Подарочный набор кофе на любой праздник женщине «Сияй»',
        image:'tea-coffee-set-woman',
        productWeight:'250 гр',
        description:'Связка корицы - 1 шт., зерновой кофе бразилия сантос 19 - 100 гр., зерновой кофе гватемала антигуа - 100 гр., долька апельсин - 2 шт.',
        price:'1780',
        category:'Подарочный набор чая и кофе'
    },
    {
        id: 35,
        name:'Подарочный набор кофе Классические сорта, 12 шт. «Ассорти»',
        image:'tea-coffee-set-big',
        productWeight:'1250 гр',
        description:'Долька апельсина - 2 шт., декоративная веточка с ягодами - 1 шт., зерновой кофе бразилия сантос - 100 гр., зерновой кофе бразилия сантос 19 - 100 гр., зерновой кофе эфиопия мосса sidamo - 100 гр., зерновой кофе никарагуа - 100 гр., зерновой кофе бразилия бурбон - 100 гр., зерновой кофе гватемала антигуа - 100 гр., зерновой кофе мексика - 100 гр., зерновой кофе коста-рика - 100 гр., зерновой кофе перу - 100 гр., зерновой кофе доминикана - 100 гр., зерновой кофе колумбия супремо - 100 гр., зерновой кофе колумбия супремо (итальянская обжарка) - 100 гр.',
        price:'5290',
        category:'Подарочный набор чая и кофе'
    }
]
export default dataProducts;
    