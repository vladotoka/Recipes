import Category from '../models/category';
import Meal from '../models/meal';

export const CATEGORIES = [
	new Category('c6', 'Българска кухня', '#41d95d'),
	new Category('c12', 'Салати', '#369513'),
	new Category('c1', 'Италианска кухня', '#f5428d'),
	new Category('c14', 'Супи', '#f54242'),
	new Category('c4', 'Немска кухня', '#f5d142'),
	new Category('c3', 'Разядки', '#f5a442'),
	new Category('c10', 'Десерти', '#47fced'),
	new Category('c7', 'Закуска', '#9eecff'),
	new Category('c8', 'Азиатска кухня', '#ff42ff'),
	new Category('c9', 'Френска кухня', '#ffc7ff'),
	new Category('c11', 'Тестени', '#f6df56'),
	new Category('c5', 'Леки храни', '#368dff'),
	new Category('c13', 'Постни', '#368d0f'),
	new Category('c2', 'Бързо и Лесно', '#b9ffb0'),
];

//id,categoryIds,title,affordability,complexity,imageUrl,duration,ingredients,steps,isGlutenFree,isVegan,isVegetarian,isLactoseFree
export const MEALS = [
	new Meal(
		'm1',
		['c1', 'c2'],
		'Spaghetti with Tomato Sauce',
		'affordable',
		'simple',
		'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg/800px-Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg',
		20,
		[
			'4 Tomatoes',
			'1 Tablespoon of Olive Oil',
			'1 Onion',
			'250g Spaghetti',
			'Spices',
			'Cheese (optional)',
		],
		[
			'Cut the tomatoes and the onion into small pieces.',
			'Boil some water - add salt to it once it boils.',
			'Put the spaghetti into the boiling water - they should be done in about 10 to 12 minutes.',
			'In the meantime, heathen up some olive oil and add the cut onion.',
			'After 2 minutes, add the tomato pieces, salt, pepper and your other spices.',
			'The sauce will be done once the spaghetti are.',
			'Feel free to add some cheese on top of the finished dish.',
		],
		false,
		true,
		true,
		true
	),

	new Meal(
		'm2',
		['c2'],
		'Toast Hawaii',
		'affordable',
		'simple',
		'https://cdn.pixabay.com/photo/2018/07/11/21/51/toast-3532016_1280.jpg',
		10,
		[
			'1 Slice White Bread',
			'1 Slice Ham',
			'1 Slice Pineapple',
			'1-2 Slices of Cheese',
			'Butter',
		],
		[
			'Butter one side of the white bread',
			'Layer ham, the pineapple and cheese on the white bread',
			'Bake the toast for round about 10 minutes in the oven at 200°C',
		],
		false,
		false,
		false,
		false
	),

	new Meal(
		'm3',
		['c3'],
		'Хумус',
		'евтино',
		'лесно',
		'https://matekitchen.com/wp-content/uploads/2020/02/recipeimages-1920x1310-9.jpg',
		45,
		[
			'1 1/2 ч.ч. нахут',
			'1 ч.л. сода бикарбонат',
			'1 1/4 ч.л. сусамов тахан',
			'1/4 ч.ч. прясно изстискан лимонов сок',
			'4 скилидки чесън',
			'1/2 ч.ч. зехтин екстра върджин',
			'сол',
		],
		[
			'Ако използваш сух нахут: постави го в голяма стъклена купа, залей с 4 ч.ч. студена вода и остави да престои една нощ. Изцеди водата, изсипи в средно голям съд и поръси със сода. Остави за около 3 минути на висока температура, като от време навреме разбъркваш. Добави 6 ч.ч. вода и изчакай да заври. Намали температурата и остави да се вари още около 30 минути или докато нахутът е мек при набождане с вилица. Изцеди нахута и го облей със студена вода, за да премахнеш люспите. Остави да се отцеди.',
			'Ако използваш нахут от консерва, просто го отцеди и го добави към останалите продукти.',
			'Сложи в блендер или кухненски робот сусама, чесъна, лимоновия сок и кимиона и разбий, като добавяш по малко вода до получаването на кремообразен сос. Добави нахута и разбивай до мека паста. Накрая налей част от зехтина или вода, сол и разбъркай. Прехвърли в чиния, залей с останалата част от зехтина и поръси с щипка червен пипер. За повече свежест, поръси с пресен магданоз.',
			'Може да добавиш копър, магданоз или други свежи зеленини вътре в сместа  при приготвянето.',
		],
		true,
		true,
		true,
		true
	),

	new Meal(
		'm4',
		['c4'],
		'Wiener Schnitzel',
		'luxurious',
		'challenging',
		'https://cdn.pixabay.com/photo/2018/03/31/19/29/schnitzel-3279045_1280.jpg',
		60,
		[
			'8 Veal Cutlets',
			'4 Eggs',
			'200g Bread Crumbs',
			'100g Flour',
			'300ml Butter',
			'100g Vegetable Oil',
			'Salt',
			'Lemon Slices',
		],
		[
			'Tenderize the veal to about 2–4mm, and salt on both sides.',
			'On a flat plate, stir the eggs briefly with a fork.',
			'Lightly coat the cutlets in flour then dip into the egg, and finally, coat in breadcrumbs.',
			'Heat the butter and oil in a large pan (allow the fat to get very hot) and fry the schnitzels until golden brown on both sides.',
			'Make sure to toss the pan regularly so that the schnitzels are surrounded by oil and the crumbing becomes ‘fluffy’.',
			'Remove, and drain on kitchen paper. Fry the parsley in the remaining oil and drain.',
			'Place the schnitzels on a warmed plate and serve garnished with parsley and slices of lemon.',
		],
		false,
		false,
		false,
		false
	),

	new Meal(
		'm5',
		['c2', 'c5', 'c12'],
		'Salad with Smoked Salmon',
		'luxurious',
		'simple',
		'https://cdn.pixabay.com/photo/2016/10/25/13/29/smoked-salmon-salad-1768890_1280.jpg',
		15,
		[
			'Arugula',
			"Lamb's Lettuce",
			'200g Smoked Salmon',
			'Mustard',
			'Balsamic Vinegar',
			'Olive Oil',
			'Salt and Pepper',
		],
		[
			'Wash and cut salad and herbs',
			'Dice the salmon',
			'Process mustard, vinegar and olive oil into a dressing',
			'Prepare the salad',
			'Add salmon cubes and dressing',
		],
		true,
		false,
		true,
		true
	),

	new Meal(
		'm6',
		['c10'],
		'Delicious Orange Mousse',
		'affordable',
		'hard',
		'https://cdn.pixabay.com/photo/2017/05/01/05/18/pastry-2274750_1280.jpg',
		240,
		[
			'4 Sheets of Gelatine',
			'150ml Orange Juice',
			'80g Sugar',
			'300g Yoghurt',
			'200g Cream',
			'Orange Peel',
		],
		[
			'Dissolve gelatine in pot',
			'Add orange juice and sugar',
			'Take pot off the stove',
			'Add 2 tablespoons of yoghurt',
			'Stir gelatin under remaining yoghurt',
			'Cool everything down in the refrigerator',
			'Whip the cream and lift it under die orange mass',
			'Cool down again for at least 4 hours',
			'Serve with orange peel',
		],
		true,
		false,
		true,
		false
	),

	new Meal(
		'm7',
		['c7'],
		'Pancakes',
		'affordable',
		'simple',
		'https://cdn.pixabay.com/photo/2018/07/10/21/23/pancake-3529653_1280.jpg',
		20,
		[
			'1 1/2 Cups all-purpose Flour',
			'3 1/2 Teaspoons Baking Powder',
			'1 Teaspoon Salt',
			'1 Tablespoon White Sugar',
			'1 1/4 cups Milk',
			'1 Egg',
			'3 Tablespoons Butter, melted',
		],
		[
			'In a large bowl, sift together the flour, baking powder, salt and sugar.',
			'Make a well in the center and pour in the milk, egg and melted butter; mix until smooth.',
			'Heat a lightly oiled griddle or frying pan over medium high heat.',
			'Pour or scoop the batter onto the griddle, using approximately 1/4 cup for each pancake. Brown on both sides and serve hot.',
		],
		true,
		false,
		true,
		false
	),

	new Meal(
		'm8',
		['c8'],
		'Creamy Indian Chicken Curry',
		'pricey',
		'challenging',
		'https://cdn.pixabay.com/photo/2018/06/18/16/05/indian-food-3482749_1280.jpg',
		35,
		[
			'4 Chicken Breasts',
			'1 Onion',
			'2 Cloves of Garlic',
			'1 Piece of Ginger',
			'4 Tablespoons Almonds',
			'1 Teaspoon Cayenne Pepper',
			'500ml Coconut Milk',
		],
		[
			'Slice and fry the chicken breast',
			'Process onion, garlic and ginger into paste and sauté everything',
			'Add spices and stir fry',
			'Add chicken breast + 250ml of water and cook everything for 10 minutes',
			'Add coconut milk',
			'Serve with rice',
		],
		true,
		false,
		false,
		true
	),

	new Meal(
		'm9',
		['c9', 'c10'],
		'Chocolate Souffle',
		'affordable',
		'hard',
		'https://cdn.pixabay.com/photo/2014/08/07/21/07/souffle-412785_1280.jpg',
		45,
		[
			'1 Teaspoon melted Butter',
			'2 Tablespoons white Sugar',
			'2 Ounces 70% dark Chocolate, broken into pieces',
			'1 Tablespoon Butter',
			'1 Tablespoon all-purpose Flour',
			'4 1/3 tablespoons cold Milk',
			'1 Pinch Salt',
			'1 Pinch Cayenne Pepper',
			'1 Large Egg Yolk',
			'2 Large Egg Whites',
			'1 Pinch Cream of Tartar',
			'1 Tablespoon white Sugar',
		],
		[
			'Preheat oven to 190°C. Line a rimmed baking sheet with parchment paper.',
			'Brush bottom and sides of 2 ramekins lightly with 1 teaspoon melted butter; cover bottom and sides right up to the rim.',
			'Add 1 tablespoon white sugar to ramekins. Rotate ramekins until sugar coats all surfaces.',
			'Place chocolate pieces in a metal mixing bowl.',
			'Place bowl over a pan of about 3 cups hot water over low heat.',
			'Melt 1 tablespoon butter in a skillet over medium heat. Sprinkle in flour. Whisk until flour is incorporated into butter and mixture thickens.',
			'Whisk in cold milk until mixture becomes smooth and thickens. Transfer mixture to bowl with melted chocolate.',
			'Add salt and cayenne pepper. Mix together thoroughly. Add egg yolk and mix to combine.',
			'Leave bowl above the hot (not simmering) water to keep chocolate warm while you whip the egg whites.',
			'Place 2 egg whites in a mixing bowl; add cream of tartar. Whisk until mixture begins to thicken and a drizzle from the whisk stays on the surface about 1 second before disappearing into the mix.',
			'Add 1/3 of sugar and whisk in. Whisk in a bit more sugar about 15 seconds.',
			'whisk in the rest of the sugar. Continue whisking until mixture is about as thick as shaving cream and holds soft peaks, 3 to 5 minutes.',
			'Transfer a little less than half of egg whites to chocolate.',
			'Mix until egg whites are thoroughly incorporated into the chocolate.',
			'Add the rest of the egg whites; gently fold into the chocolate with a spatula, lifting from the bottom and folding over.',
			'Stop mixing after the egg white disappears. Divide mixture between 2 prepared ramekins. Place ramekins on prepared baking sheet.',
			'Bake in preheated oven until scuffles are puffed and have risen above the top of the rims, 12 to 15 minutes.',
		],
		true,
		false,
		true,
		false
	),

	new Meal(
		'm11',
		['c2', 'c6'],
		'Миш Маш',
		'средна цена',
		'лесно',
		'https://domashnakunyasdani.com/wp-content/uploads/2021/06/195930590_236980731115299_7718235810075646535_n.jpg',
		30,
		[
			'4 яйца 🥚',
			'200г. краве сирене 🧀',
			'1 глава кромид лук 🧅',
			'3-4 домата 🍅',
			'2 червени чушки',
			'2 зелени чушки',
			'пресен магданоз',
			'6-7 с.л. олио',
			'сол 🧂',
		],
		[
			'Нарязваме лука на ситно, запържваме го в загрята мазнина за 2-3 мин. на умерен огън.',
			'Добавяме ивичките чушки.',
			'След като се позапържат леко, прибавяме и едро нарязания домат. Посоляваме, задушаваме под капак на бавен огън, докато зеленчуците омекнат – за 8-10 мин.',
			'Добавяме натрошеното или нарязано на кубчета сирене, разбъркваме.',
			'Счукваме яйцата, поръсваме с пресен магданоз по желание, внимателно размесваме. Отново слагаме капак, изчакваме на бавен огън сместа да стегне и яйцата да се опържат.',
		],
		true,
		false,
		true,
		false
	),

	new Meal(
		'm12',
		['c10'],
		'Брауни',
		'affordable',
		'hard',
		'https://99rubley.com/wp-content/uploads/2020/06/brauni-pp.jpg',
		240,
		[
			'200 гр шоколад',
			'250 гр захар мусковадо',
			'100 гр краве масло',
			'?30 гр какао',
			'100 гр брашно ',
			'4 яйца',
			'1 ч.л бакпулвер (8-10гр)',
		],
		[
			'Извадете яйцата поне 30 мин по-рано от хладилника. Подгответе съда за печене и поставете хартия за печене в него.',
			'Разтопете маслото и шоколада на водна баня до получаване на хомогенна смес и оставете да се охлади до стайна температура',
			'В отделна купа разбийте продължително захарта и яйцата с френска тел или миксер, докато получите лека и пухкава смес.',
			'Пресейте брашното и го смесете с какаото и бакпулвера в друг съд',
			'Добавете постепенно шоколадовата смес към яйчената, като разбърквате нежно със сладкарска шпатула, след което добавете и сместа с брашното.',
			'Изсипете сместа в тавата и печете 25-30 минути, в предварително нагрята фурна на КОЛКО FIXME?С.',
			'Повърхността трябва да се напука, а сърцевината да остане влажна и лепкава.',
			'Изчакайте пълното охлаждане преди да нарежете и сервирате. Може да охладите шоково в хладилник или шоков охладител.',
			'По желание поръсете с ягоди, малини или листа мента и глазирайте  частично с разтопен шоколад.',
		],
		true,
		false,
		true,
		false
	),

	new Meal(
		'm13',
		['c6', 'c11'],
		'Баница',
		'достъпно',
		'лесно',
		'https://www.supichka.com/files/images/1483/fit_1400_933.jpg',
		68,
		[
			'6 яйца 🥚',
			'400-500гр точени кори',
			'250-400г. истинско краве сирене 🧀',
			'50 - 100 мл краве масло или слънчогледово масло',
			'400 гр кисело мляко без палмова мазнина и сухо мляко',
			'1 ч.л сода бикарбонат (8-10гр)',
			'щипка или повече сол 🧂',
		],
		[
			'Извадете продуктите поне 30 мин по-рано от хладилника. Подгответе съда за печене и намажете дъното и стените му с тънък слой мазнина.',
			'Включете фурната на 200С.',
			'С френска тел или вилица в дълбока купа разбийте първо яйцата. Добавете киселото мляко, содата и солта и отново разбъркайте. Добавете и предварително натрошеното с вилица сирене.',
			'Поставете 3-4 листа на дъното на тавата последователно, като леко набръчквате всеки един от тях.',
			'Залейте ги с част от сместа, като използвате любимият ви черпак. Добавете още два листа и повторете ',
			'Редувайте два листа и смес, като си оставите една кафяна чаша или повече от сместа след последните два листа (или един, ако няма втори :).',
			'Разрежете внимателно на парчета.',
			'Разредете останалата смес, с още толкова топла вода и залейте равномерно.',
			'Печете 35-40 минути или до приятен златист загар, в предварително загрятата фурна.',
			'След изваждане, може да обърнете тавата върху друга тава или хартия за печене за да остане по-пухкава.',
			'Сервирайте с айрян.',
		],
		true,
		false,
		true,
		false
	),

	new Meal(
		'm14',
		['c13'],
		'Леща със спанак',
		'достъпно',
		'лесно',
		'https://recepti.gotvach.bg/files/lib/600x350/leshtaspanak-flx.png',
		32,
		[
			'1 ч.ч. леща',
			'400 г спанак',
			'1 глава лук',
			'1 морков',
			'3 скилидки чесън',
			'черен пипер',
			'лют червен пипер',
			'сол',
			'олио',
		],
		[
			'Лукът и морковът се нарязват на красиви и правилни кубчета. Чесънът се наситнява или счуква. Спанакът се измива и нарязва.',
			'В загрято олио се запържват лукът, чесънът и морковът. Добавя се лещата и се налива вода.',
			'Оставете да заври и след това оставете на слаб огън.',
			'През това време се задушава спанакът, след което се прибавя към лещата.',
			'Овкусява се със сол и черен пипер и се оставя да се довари още десетина минути.',
			'',
		],
		true,
		true,
		true,
		true
	),

	new Meal(
		'm15',
		['c14'],
		'Спаначена супичка Вики',
		'достъпно',
		'лесно',
		'https://1.bp.blogspot.com/-l3PDSAFGb6s/VdyqS6DOAfI/AAAAAAAALbA/9_9mUP6Fs7s/s1600/IMG_6446.JPG',
		32,
		[
			'400 г спанак',
			'1-2 моркoвчета',
			'1 глава лук 🧅',
			'фиде',
			'сушени зеленчуци пикантина без глутамат',
			'сминдух',
			'2 яйца 🥚',
			'кисело мляко',
			'олио',
			'сол🧂',
		],
		[
			'Лукът и морковът се нарязват на красиви и правилни кубчета. Спаначето се измива и нарязва.',
			'В загрято олио се запържват лукът и морковът. Добавя се спаначето и се задушава.',
			'Добавя се вода и след завиране се оставя да къкри на слаб огън.',
			'Добавя се фидето и се овкусява със сол, сминдух и сушени зеленчуци. Вари се до готовност на фидето не повече от десетина минути.',
			'След като леко поизстине се приготвя гъста застройка, както я обича.',
			'Сервира се със или без сиренце.',
		],
		true,
		false,
		true,
		true
	),

	new Meal(
		'm16',
		['c14'],
		'Леща',
		'достъпно',
		'лесно',
		'https://i.ytimg.com/vi/364HubiR9FI/maxresdefault.jpg',
		62,
		[
			'леща',
			'1-2 моркoвчета',
			'1 глава лук 🧅',
			'2-3 скилидки чесън',
			'чушка',
			'1 доматче',
			'лют пипер',
			'чубрица и сминдух',
			'олио',
			'сол🧂',
		],
		[
			'Лукът и морковът се нарязват на красиви и правилни кубчета. Лещата се почиства и измива.',
			'В загрято олио се запържват лукът и морковът. Добавя се чесънчето и чушката и се задушава.',
			'Добавя се вода и след завиране овкусяваме с чубрица и сминдух и се оставя да къкри на слаб огън.',
			'След сваряване на лещата се добавя нарязаното доматче, солта и лютия пипер и се оставя да къкри още 5 минути.',
			'Сервира се с шарена сол.',
		],
		true,
		true,
		true,
		true
	),

	new Meal(
		'm17',
		['c12'],
		'Салата зеле с куркума',
		'достъпно',
		'лесно',
		'https://recepti.gotvach.bg/files/lib/600x350/zeleva-salata-kurkuma.JPG',
		12,
		[
			'зеле 1/2 глава',
			'1 ч.л куркума',
			'1/2 ч.л кимион',
			'1/2 ч.л. червен пипер на люспи',
			'сол🧂',
		],
		[
			'Зелето се нарязва на ситно. Поставя се в по-голям съд, за да бъде по-лесно размачкването и разбъркването.',
			'Зелето се посолява и намачква, след което се добавят кимионът, лъжичката куркума и люспите червен пипер.',
			'Добре се разбърква и се разпределя в чинийки за сервиране.',
			'При желание може да украсите с майонеза и магданоз.',
		],
		true,
		true,
		true,
		true
	),

	new Meal(
		'm18',
		['c13'],
		'Картофени кюфтета',
		'достъпно',
		'лесно',
		'https://www.supichka.com/files/images/1412/fit_1400_933.jpg',
		60,
		[
			'1 кг. картофи',
			'2 яйца 🥚',
			'1 глава лук 🧅',
			'магданоз 1/2 връзка',
			'индийско орехче 1/4 ч.л.',
			'сол🧂',
		],
		[
			'Първата стъпка от рецептата за картофени кюфтета е подготовката на картофите. Измивате картофите и ги сварявате. Сварените картофи обелвате докато са топли, след което веднага ги намачквате. Оставяте намачканите картофи да изстинат. Нарязвате лука и магданоза на ситно и ги добавяте към намачканите картофи. Добавяте индийското орехче, солта (около ½ чаена лъжичка) и яйцата и разбърквате много добре.',
			'От готовата картофена смес оформяте (с ръце, или пък със супена лъжица) кюфтета с желаната от вас големина, оваляйте в брашно и пържите в загрято олио първо от едната, а след като придобият златист цвят и от другата страна. Готовите кюфтета сложете в чиния върху домакинска хартия, за да може да се отцедят от ненужната мазнина.'
		],
		true,
		true,
		true,
		true
	),
];
