export class InMemoryDataService {
  // tslint:disable-next-line:typedef
  createDb() {
    const birds = [
      {
        id: 1,
        name: 'Ruby-Throated Hummingbird',
        description: 'The Ruby-throated Hummingbird is a small hummingbird with a slender, slightly downcurved bill and fairly short wings that don’t reach all the way to the tail when the bird is sitting.',
        image: 'assets/Hummingbird.jpg',
        imageAlt: 'Hummingbird',
      },
      {
        id: 2,
        name: 'Red-Headed Woodpecker',
        description: 'The Red-Headed Woodpecker has an all-red head, throat, and nape of neck, with black upperparts and a white patch on the trailing edge of each wing, a white rump, and all-white underparts. The voice is a loud, descending “kweeer.”',
        image: 'assets/Woodpecker.jpg',
        imageAlt: 'Red-Headed Woodpecker',
      },
      {
        id: 3,
        name: 'Indigo Bunting',
        description: 'The Indigo Bunting is a sparrowlike bird with a conical bill. Adult male upperparts are turquoise blue when seen in sunlight. Adult females are pale brown with faint wing bars and streaking on breast. The song is a series of whistled couplets, with each couplet usually slightly lower in pitch: sweet-sweet, tew-tew, chew-chew.',
        image: 'assets/Bunting.jpg',
        imageAlt: 'Indigo Bunting',
      },
      {
        id: 4,
        name: 'Northern Cardinal',
        description: 'The Northern Cardinal male upperparts are bright red with darker wings and tail. The head is crested. The area around the bill is black, and the large conical bill is red. Females are buffy tan below and grayish brown above. Otherwise, they are similar to males, with reddish tinges in wings, tail, and crest. The different songs have been described as "what cheer, what cheer, what cheer, wheet, wheet, wheet!" and "purdy-purdy-purdy-purdy," along with several more variations. The call is a sharp “chip.”',
        image: 'assets/Cardinal.jpg',
        imageAlt: 'Northern Cardinal',
      },
      {
        id: 5,
        name: 'Pileated Woodpecker',
        description: 'The Pileated Woodpecker is a crow-sized woodpecker that is primarily black, with white highlights and a red crest. Males have an entirely red crown and a red moustachial streak. Both sexes have horizontal black and white stripes on the face and a white stripe that extends down the neck. The loud, resonant drumming sounds something like a banging hammer.',
        image: 'assets/Frank.jpg',
        imageAlt: 'Pileated Woodpecker',
      },
      {
        id: 6,
        name: 'Leghorn Chicken',
        description: 'The Leghorn Chicken is just one of several chickens we raise here on our farm in Rich Hill, MO.',
        image: 'assets/chickens.jpg',
        imageAlt: 'Chicken',
      },
      {
        id: 7,
        name: 'American Goldfinch',
        description: 'The American Goldfinch males are bright yellow, with black wings, tail, and forehead, and 2 white wing bars and tail spots. The underparts are bright yellow. The famale upperparts are greenish yellow, with dark wings and tail; the underparts are pale yellowish. The song is a long jumble of warbles, whistles, and twitters. Calls include “per-chick-o-ree” and “sueweeet.”',
        image: 'assets/Goldfinch.jpg',
        imageAlt: 'American Goldfinch',
      },
      {
        id: 8,
        name: 'Great Egret',
        description: 'The Great Egret is a large white heron with a large yellow bill and black legs and feet. They may be present at floodplain pools or appear singly at a lake or farm pond.',
        image: 'assets/Heron.jpg',
        imageAlt: 'Great Egret',
      },
      {
        id: 9,
        name: 'Baltimore Oriole',
        description: 'The Baltimore Oriole male emits a loud, flutelike whistle and are black, with orange shoulders, lower back, rump, and part of the outer tail feathers. Underparts are bright orange, with a black throat and upper breast. Upperparts of female are olive brown above, with dark streaks and bars on the head and back. Underparts are dull orange yellow with some dark mottling on the throat.',
        image: 'assets/Oriole.jpg',
        imageAlt: 'Baltimore Oriole',
      },
    ];
    return { birds };
  }
}
