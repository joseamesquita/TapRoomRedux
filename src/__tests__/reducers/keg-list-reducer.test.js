import kegListReducer from '../../reducers/keg-list-reducer';

describe('kegListReducer', () => {

  const currentState = {
    1: {
      name: "Root Beer",
      brand: "A&W's",
      price: "$32",
      flavor: "Rocky Road",
      quantity: "64",
      id: 1
    },
    2: {
      name: "Heineken",
      brand: "Heineken International",
      price: "$64",
      flavor: "Lager",
      quantity: "64",
      id: 2
    }
  }
  test('Should successfully delete a keg', () => {
    action = {
      type: 'DELETE_TICKET',
      id: 1
    };
    expect(kegListReducer(currentState, state)).toEqual({
      2: {
        name: "Heineken",
        brand: "Heineken International",
        price: "$64",
        flavor: "Lager",
        quantity: "64",
        id: 2
      }
    })
  })

  let action;
  const kegData = {
    name: "Root Beer",
    brand: "A&W's",
    price: "$32",
    flavor: "Rocky Road",
    quantity: "64",
    id: 1
  };

  test('Should return default state if there is no action type passed into the reducer', () => {
    expect(kegListReducer({}, { type: null })).toEqual({});
  });

  test('Should successfully add new keg data to masterKegList', () => {
    const { name, brand, price, flavor, quantity, id } = kegData;
    action = {
      type: 'ADD_KEG',
      name: name,
      brand: brand,
      price: price,
      flavor: flavor,
      quantity: quantity,
      id: id
    };

    expect(kegListReducer({}, action)).toEqual({
      [id]: {
        name: name,
        brand: brand,
        price: price,
        flavor: flavor,
        quantity: quantity,
        id: id
      }
    });
  });
});