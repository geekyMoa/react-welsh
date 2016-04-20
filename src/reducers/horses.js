const initialState = {
  items: [
    {
      name: 'Ågårdens Boss',
      result : {
        jumping : {
          l: 5,
          m: 0,
          s: 0
        },
        dressage: {
          l: 21,
          m: 4,
          s: 0
        },
        driving: {
          l: 0,
          m: 0,
          s: 0,
        },
        eventing: {
          l: 1,
          m: 0,
          s: 0
        }
      },
      offspring: 7,
      offspring_results : {

      }
    },
    {
      name: 'Balnecroft Xander',
      offspring: 1
    },
    {
      name: 'Wärnanäs Peng',
      offspring: 258
    },
    {
      name: 'Master 850',
      offspring: 2876
    }
  ],
  sort: {
    field: 'name',
    direction: 'asc'
  }
}

const SORT_ITEMS = "SORT_ITEMS";

export function setSort(type, field) {
  return (dispatch, getState) => {


    const { horses } = getState();
    const { items } = horses;
    //const { sort } = horses;

    switch (type) {
      case 'desc':
        items.sort((a, b) => a[field] < b[field] );
          console.log('desc', items);
        break;
      case 'asc':
        items.sort((a, b) => a[field] > b[field] );
        console.log('asc', items);
        break;
    }

    dispatch({
      type: SORT_ITEMS,
      direction: type,
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

    default:
      return state;
  }
}
