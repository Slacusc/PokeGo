import { filtrar, filtrartipos } from '../src/filtros.js';
const test = [
  {"name": "pikachu","type":["electric"]},
  {"name": "bulbasaur", "type": ["grass"]},
  {"name": "squirtle", "type": ["water"]},
  {"name": "ditto", "type": ["normal"]},
  {"name": "togepi", "type": ["fairy"]},
  {"name": "gengar", "type": ["ghost"]}]


describe('filtrar', () => {
  it('is a function', () => { 
    expect(typeof filtrar).toBe('function');
  });

  it('if receive "pikachu", have to return an objectsi recibo el nombre de pikachu me tiene que retornar este objeto', ()=>{
    let name = "pikachu"
    expect(filtrar(name,test)).toBe(test[0]
  )
  })

  it('if receive "BULBASAUR", have to return "bulbasaur" using the function .toLowerCase', ()=>{
    let name = "BULBASAUR"
    expect(filtrar(name,test)).toBe(test[1]
  )
  })

  it('if receive "SqUirTle", have to return "squirtle" using the function .toLowerCase', ()=>{
    let name = "SqUirTle"
    expect(filtrar(name,test)).toBe(test[2]
  )
  })

});

it('if receive "Ditto", have to return "ditto" using the function .toLowerCase', ()=>{
  let name = "Ditto"
  expect(filtrar(name,test)).toBe(test[3]
)
})

describe('filtrartipos', () => {
  it('is a function', () => { 
    expect(typeof filtrartipos).toBe('function');
  })

  it('if, search for "water" as a "type", using the function filtrartipos it returns "water"', ()=>{
    let type = "water"
    expect(filtrartipos(type,test)).toBe(test[2]
  )
  })

  it('If i search for "gengar" type, the result must be "ghost"', ()=>{
    let type = "ghost"
    expect(filtrartipos(type,test)).toBe(test[5]
  )
  })


 });


// describe('anotherExample', () => {
//   it('is a function', () => {
//     expect(typeof anotherExample).toBe('function');
//   });

//   it('returns `anotherExample`', () => {
//     expect(anotherExample()).toBe('OMG');
//   });
// });
