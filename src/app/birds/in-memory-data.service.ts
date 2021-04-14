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
        name: 'Woodpecker',
        description: 'The Woodpecker....',
        image: 'assets/Woodpecker.jpg',
        imageAlt: 'Woodpecker',
      },
      {
        id: 3,
        name: 'Blue Bunting',
        description: 'Blue Bunting....',
        image: 'assets/Bunting.jpg',
        imageAlt: 'Blue Bunting',
      },
      {
        id: 4,
        name: 'Cardinal',
        description: 'The Cardinal....',
        image: 'assets/Cardinal.jpg',
        imageAlt: 'Cardinal',
      },
      {
        id: 5,
        name: 'Pileated Woodpecker',
        description: 'The Pileated oodpecker....',
        image: 'assets/Frank.jpg',
        imageAlt: 'Pileated ',
      },
      {
        id: 6,
        name: 'Chicken',
        description: 'The Chicken....',
        image: 'assets/chickens.jpg',
        imageAlt: 'Chicken',
      },
      {
        id: 7,
        name: 'Goldfinch',
        description: 'The Goldfinch....',
        image: 'assets/Goldfinch.jpg',
        imageAlt: 'Goldfinch',
      },
      {
        id: 8,
        name: 'Heron',
        description: 'The Heron....',
        image: 'assets/Heron.jpg',
        imageAlt: 'Heron',
      },
      {
        id: 9,
        name: 'Oriole',
        description: 'The Oriole....',
        image: 'assets/Oriole.jpg',
        imageAlt: 'Oriole',
      },
    ];
    return { birds };
  }
}
