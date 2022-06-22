const heros = [ { name: 'Spider-Man' }, { name: 'Thor' }, { name: 'Black Panther' }, { name: 'Captain Marvel' }, { name: 'Silver Surfer' } ];
const arr = heros.map((hero,index) => {
    return { id: index, hero: hero.name }
});
console.log(arr);

// Output

//[
//    { id: 0, hero: 'Spider-Man' },
//    { id: 1, hero: 'Thor' },
//    { id: 2, hero: 'Black Panther' },
//    { id: 3, hero: 'Captain Marvel' },
//    { id: 4, hero: 'Silver Surfer' }
//  ]