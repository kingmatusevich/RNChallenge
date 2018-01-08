import {Creators, Types} from './src/store/actions';
import apiReducer, {INITIAL_STATE} from './src/store/reducers/apis';

describe('apiReducer', () => {

  it ('should change APIs and handle favorites accordingly', () => {
    expect(apiReducer(undefined, {})).toEqual(INITIAL_STATE)
    expect(apiReducer({
      ...INITIAL_STATE, 
      chosenAPI: 'dogs',
      allFavorites: [
        {itemId: 123, chosenAPI: 'dogs'}, 
        {itemId: 456, chosenAPI: 'something'}
      ],
      currentFavorites: [
        {itemId: 123, chosenAPI: 'dogs'}
      ]
    }, Creators.selectApi('something'))).toEqual({
      ...INITIAL_STATE,
      chosenAPI: 'something',
      loading: true,
      allFavorites: [
        {itemId: 123, chosenAPI: 'dogs'}, 
        {itemId: 456, chosenAPI: 'something'}
      ],
      currentFavorites: [
        {itemId: 456, chosenAPI: 'something'}
      ]
    })
  })

  it ('should reset everything on logout', () => {
      expect(apiReducer({
        ...INITIAL_STATE, 
        chosenAPI: 'dogs',
        allFavorites: [
          {itemId: 'akita', chosenAPI: 'dogs'}, 
          {itemId: 123, chosenAPI: 'something'}
        ],
        currentFavorites: [
          {itemId: 'akita', chosenAPI: 'dogs'}
        ]
      }, Creators.logout())).toEqual({
        ...INITIAL_STATE
      })
    });

    it ('should add favorites', () => {
      expect(apiReducer({
        ...INITIAL_STATE, 
        chosenAPI: 'dogs',
        allFavorites: [
          {itemId: 'akita', chosenAPI: 'dogs'}, 
          {itemId: 456, chosenAPI: 'something'}
        ],
        currentFavorites: [
          {itemId: 'akita', chosenAPI: 'dogs'}
        ]
      }, Creators.favoriteAdd('poodle'))).toEqual({
        ...INITIAL_STATE,
        chosenAPI: 'dogs',
        allFavorites: [
          {itemId: 'akita', chosenAPI: 'dogs'}, 
          {itemId: 456, chosenAPI: 'something'},
          {itemId: 'poodle', chosenAPI: 'dogs'}
        ],
        currentFavorites: [
          {itemId: 'akita', chosenAPI: 'dogs'},
          {itemId: 'poodle', chosenAPI: 'dogs'} 
        ]
      })
    });

    it ('should remove favorites', () => {
      expect(apiReducer({
        ...INITIAL_STATE, 
        chosenAPI: 'dogs',
        allFavorites: [
          {itemId: 'akita', chosenAPI: 'dogs'}, 
          {itemId: 456, chosenAPI: 'something'}
        ],
        currentFavorites: [
          {itemId: 'akita', chosenAPI: 'dogs'}
        ]
      }, Creators.favoriteRemove('akita'))).toEqual({
        ...INITIAL_STATE,
        chosenAPI: 'dogs',
        allFavorites: [
          {itemId: 456, chosenAPI: 'something'}
        ],
        currentFavorites: [
        ]
      })
    });

    it ('should keep favorites while fetching', () => {
      expect(apiReducer({
        ...INITIAL_STATE, 
        chosenAPI: 'dogs',
        allFavorites: [
          {itemId: 'akita', chosenAPI: 'dogs'}, 
          {itemId: 456, chosenAPI: 'something'}
        ],
        currentFavorites: [
          {itemId: 'akita', chosenAPI: 'dogs'}
        ]
      }, Creators.fetchItems())).toEqual({
        ...INITIAL_STATE,
        chosenAPI: 'dogs',
        allFavorites: [
          {itemId: 'akita', chosenAPI: 'dogs'}, 
          {itemId: 456, chosenAPI: 'something'}
        ],
        currentFavorites: [
          {itemId: 'akita', chosenAPI: 'dogs'}
        ],
        loading: true
      })
    });

    it ('should fetch an item and keep favorites while fetching', () => {
      expect(apiReducer({
        ...INITIAL_STATE, 
        chosenAPI: 'dogs',
        allFavorites: [
          {itemId: 'akita', chosenAPI: 'dogs'}, 
          {itemId: 456, chosenAPI: 'something'}
        ],
        items: ['akita', 'poodle'],
        currentFavorites: [
          {itemId: 'akita', chosenAPI: 'dogs'}
        ]
      }, Creators.fetchSpecificItem('akita'))).toEqual({
        ...INITIAL_STATE,
        chosenAPI: 'dogs',
        items: ['akita', 'poodle'],
        allFavorites: [
          {itemId: 'akita', chosenAPI: 'dogs'}, 
          {itemId: 456, chosenAPI: 'something'}
        ],
        currentFavorites: [
          {itemId: 'akita', chosenAPI: 'dogs'}
        ],
        currentItemId: 'akita',
        loading: true
      })
    });

    it ('should keep everything permanent but reset state on an error', () => {
      expect(apiReducer({
        ...INITIAL_STATE, 
        chosenAPI: 'dogs',
        items: ['akita', 'poodle'],
        allFavorites: [
          {itemId: 'akita', chosenAPI: 'dogs'}, 
          {itemId: 456, chosenAPI: 'something'}
        ],
        currentItemId: 'akita',
        currentFavorites: [
          {itemId: 'akita', chosenAPI: 'dogs'}
        ]
      }, Creators.fetchError(new Error("Oops")))).toEqual({
        ...INITIAL_STATE,
        chosenAPI: 'dogs',
        allFavorites: [
          {itemId: 'akita', chosenAPI: 'dogs'}, 
          {itemId: 456, chosenAPI: 'something'}
        ],
        currentFavorites: [
          {itemId: 'akita', chosenAPI: 'dogs'}
        ],
        currentItemId: 'akita',
        loading: false,
        error: new Error("Oops")
      })
    });

    it ('should update items state and hold favorites on success', () => {
      expect(apiReducer({
        ...INITIAL_STATE, 
        chosenAPI: 'dogs',
        allFavorites: [
          {itemId: 'akita', chosenAPI: 'dogs'}, 
          {itemId: 456, chosenAPI: 'something'}
        ],
        items: [],
        currentItemId: 'akita',
        currentFavorites: [
          {itemId: 'akita', chosenAPI: 'dogs'}
        ]
      }, Creators.fetchSuccess(['akita', 'poodle', 'shitsu']))).toEqual({
        ...INITIAL_STATE,
        chosenAPI: 'dogs',
        items: ['akita', 'poodle', 'shitsu'],
        allFavorites: [
          {itemId: 'akita', chosenAPI: 'dogs'}, 
          {itemId: 456, chosenAPI: 'something'}
        ],
        currentFavorites: [
          {itemId: 'akita', chosenAPI: 'dogs'}
        ],
        currentItemId: 'akita',
        loading: false,
        error: null
      })
    });

    it ('should update the current item state and hold favorites on success', () => {
      expect(apiReducer({
        ...INITIAL_STATE, 
        chosenAPI: 'dogs',
        allFavorites: [
          {itemId: 'akita', chosenAPI: 'dogs'}, 
          {itemId: 456, chosenAPI: 'something'}
        ],
        items: ['akita', 'poodle', 'shitsu'],
        currentItemId: 'poodle',
        currentItem: null,
        currentFavorites: [
          {itemId: 'akita', chosenAPI: 'dogs'}
        ]
      }, Creators.currentFetchSuccess(['http://poodle1','http://poodle2']))).toEqual({
        ...INITIAL_STATE,
        chosenAPI: 'dogs',
        items: ['akita', 'poodle', 'shitsu'],
        allFavorites: [
          {itemId: 'akita', chosenAPI: 'dogs'}, 
          {itemId: 456, chosenAPI: 'something'}
        ],
        currentFavorites: [
          {itemId: 'akita', chosenAPI: 'dogs'}
        ],
        currentItemId: 'poodle',
        currentItem: ['http://poodle1','http://poodle2'],
        loading: false,
        error: null
      })
    });

    it ('should override loading and error states on a rehydrate', () => {
      expect(apiReducer({
        ...INITIAL_STATE, 
        loading: false,
        error: new Error()
      }, {type: "persist/REHYDRATE"})).toEqual({
        ...INITIAL_STATE,
        loading: true,
        error: null
      })
  });
});