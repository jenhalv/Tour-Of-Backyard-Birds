export class InMemoryDataService {
  // tslint:disable-next-line:typedef
  createDb() {
    const birds = [
      {
        id: 1,
        name: 'Ruby-Throated Hummingbird',
        original: 'Ruby-Throated Hummingbird',
        description: 'The Ruby-Throated Hummingbird is tiny!  It has a slender, slightly downcurved bill that is used to suck out sugary water from my feeders.  Their wings beat around 53 times per second and you can hear them buzzing on our farm from Mid-April through summer.  They head south before it gets too chilly around here and are sorely missed during the winter months.',
        image: 'assets/Hummingbird.jpg',
        art: 'assets/Hummingbird.png',
        imageAlt: 'Hummingbird',
      },
      {
        id: 2,
        name: 'Red-Bellied Woodpecker',
        description: 'The Red-Bellied Woodpecker has an all-red head, but I don\'t understand why this beauitful bird has the name "belly" in  it\'s name - I have never seen RED on the belly!  Some online reources list them as Red-Headed Woodpeckers.',
        image: 'assets/Woodpecker.jpg',
        art: 'assets/Red_BWP.png',
        imageAlt: 'Red-Bellied Woodpecker',
      },
      {
        id: 3,
        name: 'Indigo Bunting',
        description: 'The Indigo Bunting is a brilliant turquoise blue. I was so delighted to catch this guy one afternoon at my bird feeders.  They migrate to our southwestern Missouri area from April - October and this was the first one I had ever seen.',
        image: 'assets/Bunting.jpg',
        art: 'assets/blue.png',
        imageAlt: 'Indigo Bunting',
      },
      {
        id: 4,
        name: 'Northern Cardinal',
        description: 'The Northern Cardinal male is bright red with a crested head. They are a delight to photograph in the winter with the white snow in the background.  These cuties live here all year so I keep them well fed with seed during the cold months.  You can hear them calling out with a sharp “chip” noise.',
        image: 'assets/Cardinal.jpg',
        art: 'assets/Cardinal.png',
        imageAlt: 'Northern Cardinal',
      },
      {
        id: 5,
        name: 'Pileated Woodpecker',
        description: 'The Pileated Woodpecker is primarily black, with white highlights and a brilliant red crest. We have named our front yard resident Frank the Tank.  This guy is so big!  He spends his afternoons going through the small native pecans that were not picked up last season.',
        image: 'assets/Frank.jpg',
        art: 'assets/PWP_CA.png',
        imageAlt: 'Pileated Woodpecker',
      },
      {
        id: 6,
        name: 'Leghorn Chicken',
        description: 'The Leghorn Chicken is just one of several chickens we raise here on our farm in Rich Hill, MO.  We get farm fresh eggs every day for breakfast!',
        image: 'assets/chickens.jpg',
        art: 'assets/chicken.png',
        imageAlt: 'Chicken',
      },
      {
        id: 7,
        name: 'American Goldfinch',
        description: 'The American Goldfinch males are bright yellow and tend to spend the cold winters in states south of our home here in Rich Hill, MO, but some are known to live in our area year round.',
        image: 'assets/Goldfinch.jpg',
        art: 'assets/goldfinch.png',
        imageAlt: 'American Goldfinch',
      },
      {
        id: 8,
        name: 'Great Egret',
        description: 'The Great Egret is a large white heron with a large yellow bill and black legs and feet. This one likes to fly between several ponds in the area.',
        image: 'assets/Heron.jpg',
        art: 'assets/egret.png',
        imageAlt: 'Great Egret',
      },
      {
        id: 9,
        name: 'Baltimore Oriole',
        description: 'The Baltimore Oriole male emits a loud, flutelike whistle and are black with lots of brilliant orange feathers. The female is a browner version and they stay close to the males, who make lots of noise to attract the females.  These birds visit us from mid-April until October and go through many jars of purple jelly and orange slices!',
        image: 'assets/Oriole.jpg',
        art: 'assets/oriole.png',
        imageAlt: 'Baltimore Oriole',
      },
    ];
    return { birds };
  }
}
