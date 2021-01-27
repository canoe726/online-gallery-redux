import { connect } from 'react-redux';

import AppArtist from '../components/ui/artist/AppArtist';

import { initArtistData, addArtistData, toggleIsFetching } from '../actions/artistActions';

export const Artist = connect(
  state => ({
    artistList: state.artist.artistList,
    isFetching: state.artist.isFetching
  }),
  dispatch => ({
    toggleIsFetching (isFetching) {
      dispatch(toggleIsFetching(isFetching));
    },
    async initArtistData () {
      const response = await fetch('https://api.harvardartmuseums.org/exhibition?apikey=954c59e1-2588-4641-adbc-9e90a3b6ebb0&size=10&page=1');
      if (response.ok) {
        // const data = await response.json();
        // console.log(data);
        // dispatch(addArtistData(data));
        dispatch(initArtistData(
          [
            {
              artistId: 2,
              name: 'Lee',
              nickname: 'Lee Nickname',
              profileImage: '/samples/artist2.jpg',
              introduction: 'Introduction of Lee',
              note: 'My name is Lee'
            },
            {
              artistId: 1,
              name: 'Kim',
              nickname: 'Kim Nickname',
              profileImage: '/samples/artist1.jpg',
              introduction: 'Introduction of Kim',
              note: 'My name is Kim'
            },
            {
              artistId: 3,
              name: 'Park',
              nickname: 'Park Nickname',
              profileImage: '/samples/artist3.jpg',
              introduction: 'Introduction of Park',
              note: 'My name is Park'
            },
            {
              artistId: 4,
              name: 'Choi',
              nickname: 'Choi Nickname',
              profileImage: '/samples/artist4.jpg',
              introduction: 'Introduction of Choi',
              note: 'My name is Choi'
            },
            {
              artistId: 5,
              name: 'Andrew',
              nickname: 'Andrew Nickname',
              profileImage: '/samples/artist5.jpg',
              introduction: 'Introduction of Andrew',
              note: 'My name is Andrew'
            },
            {
              artistId: 6,
              name: 'Joe',
              nickname: 'Joe Nickname',
              profileImage: '/samples/artist6.jpg',
              introduction: 'Introduction of Joe',
              note: 'My name is Joe'
            },
            {
              artistId: 7,
              name: 'Mike',
              nickname: 'Mike Nickname',
              profileImage: '/samples/artist7.jpg',
              introduction: 'Introduction of Mike',
              note: 'My name is Mike'
            },
            {
              artistId: 8,
              name: 'Bob',
              nickname: 'Bob Nickname',
              profileImage: '/samples/artist8.jpg',
              introduction: 'Introduction of Bob',
              note: 'My name is Bob'
            }
          ]
        ));
        dispatch(toggleIsFetching(false));
      } else {
        dispatch(toggleIsFetching(true));
      }
    },
    async addArtistData () {
      const response = await fetch('https://api.harvardartmuseums.org/exhibition?apikey=954c59e1-2588-4641-adbc-9e90a3b6ebb0&size=10&page=1');
      if (response.ok) {
        // const data = await response.json();
        // console.log(data);
        // dispatch(addArtistData(data));
        dispatch(addArtistData(
          [
            {
              artistId: 1,
              name: 'Kim',
              nickname: 'Kim Nickname',
              profileImage: '/samples/artist1.jpg',
              introduction: 'Introduction of Kim',
              note: 'My name is Kim'
            },
            {
              artistId: 2,
              name: 'Lee',
              nickname: 'Lee Nickname',
              profileImage: '/samples/artist2.jpg',
              introduction: 'Introduction of Lee',
              note: 'My name is Lee'
            },
            {
              artistId: 3,
              name: 'Park',
              nickname: 'Park Nickname',
              profileImage: '/samples/artist3.jpg',
              introduction: 'Introduction of Park',
              note: 'My name is Park'
            },
            {
              artistId: 4,
              name: 'Choi',
              nickname: 'Choi Nickname',
              profileImage: '/samples/artist4.jpg',
              introduction: 'Introduction of Choi',
              note: 'My name is Choi'
            },
            {
              artistId: 5,
              name: 'Andrew',
              nickname: 'Andrew Nickname',
              profileImage: '/samples/artist5.jpg',
              introduction: 'Introduction of Andrew',
              note: 'My name is Andrew'
            },
            {
              artistId: 6,
              name: 'Joe',
              nickname: 'Joe Nickname',
              profileImage: '/samples/artist6.jpg',
              introduction: 'Introduction of Joe',
              note: 'My name is Joe'
            },
            {
              artistId: 7,
              name: 'Mike',
              nickname: 'Mike Nickname',
              profileImage: '/samples/artist7.jpg',
              introduction: 'Introduction of Mike',
              note: 'My name is Mike'
            },
            {
              artistId: 8,
              name: 'Bob',
              nickname: 'Bob Nickname',
              profileImage: '/samples/artist8.jpg',
              introduction: 'Introduction of Bob',
              note: 'My name is Bob'
            }
          ]
        ));
        dispatch(toggleIsFetching(false));
      } else {
        dispatch(toggleIsFetching(true));
      }
    }
  })
)(AppArtist);
