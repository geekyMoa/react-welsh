const initialState = {
  items: [
    {
      id: 0,
      name: 'Ågårdens Boss',
      offspring: 7,
      competing_offspring: 2,
      color: 'brun',
      height: '143cm',
      born: '2006'
    },
    {
      id: 1,
      name: 'Balnecroft Xander',
      offspring: 1,
      competing_offspring: 0,
      color: 'gulvit',
      height: '150cm',
      born: '2011'
    },
    {
      id: 2,
      name: 'Wärnanäs Peng',
      offspring: 581,
      competing_offspring: 198,
      color: 'skimmel född fux',
      height: '127cm',
      born: '1978'
    },
    {
      id: 3,
      name: 'Master 850',
      offspring: 2876,
      competing_offspring: 101,
      color: 'mörkbrun',
      height: '173cm',
      born: '1989'
    }
  ],
  sort: {
    field: 'name',
    direction: 'asc',
    born: ''
  }
}

const SORT_ITEMS = "SORT_ITEMS";
const FILTER_ITEMS = "FILTER_ITEMS";

export function setSort(order, field) {
  return (dispatch, getState) => {

    const { horses } = getState();
    const { items } = horses;

    switch (order) {
      case 'desc':
        items.sort((a, b) => a[field] < b[field] );
        break;
      case 'asc':
        items.sort((a, b) => a[field] > b[field] );
        break;
    }

    dispatch({
      type: SORT_ITEMS,
      items: items
    });
  }
}

export function filter(newItems, field) {
  console.log(newItems);
  console.log(field);

  return (dispatch, getState) => {
    const { horses: { items } } = getState();

    console.log(items);

    dispatch({
      type: FILTER_ITEMS,
      items: items
    });
  }
}

export default function horses(state = initialState, action) {

  switch(action.type) {
    case SORT_ITEMS:
      return {
        ...state,
        items : action.items,
        sort: {
          field: action.direction
        }
      };
      break;

    case FILTER_ITEMS:
      return {
        ...state,
        items: action.items
      }
    default:
      return state;
  }
}
