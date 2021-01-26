import C from '../../constants/homeConstants';

export const home = (state = {}, action) => {
  switch (action.type) {
    case C.INIT_HOME_BANNER:
      return {
        ...state,
        // banner: action.banner
        banner: [
          {
            bannerImgPath: './samples/banner1.jpg',
            bannerUrl: '/'
          },
          {
            bannerImgPath: './samples/banner2.jpg',
            bannerUrl: '/'
          },
          {
            bannerImgPath: './samples/banner3.jpg',
            bannerUrl: '/'
          }
        ]
      };
    case C.INIT_HOME_EXHIBITION:
      return {
        ...state,
        // exhibition: action.exhibition
        exhibition: [
          {
            exhibitionId: '0',
            title: '전시제목 1',
            posterImage: './samples/artwork1.jpg'
          },
          {
            exhibitionId: '1',
            title: '전시제목 2',
            posterImage: './samples/artwork2.jpg'
          },
          {
            exhibitionId: '2',
            title: '전시제목 3',
            posterImage: './samples/artwork3.jpg'
          },
          {
            exhibitionId: '3',
            title: '전시제목 4',
            posterImage: './samples/artwork4.jpg'
          },
          {
            exhibitionId: '4',
            title: '전시제목 5',
            posterImage: './samples/artwork5.jpg'
          },
          {
            exhibitionId: '5',
            title: '전시제목 6',
            posterImage: './samples/artwork6.jpg'
          },
          {
            exhibitionId: '6',
            title: '전시제목 7',
            posterImage: './samples/artwork7.jpg'
          },
          {
            exhibitionId: '7',
            title: '전시제목 8',
            posterImage: './samples/artwork8.jpg'
          }
        ]
      };
    case C.INIT_HOME_ARTIST:
      return {
        ...state,
        // artist: action.artist
        artist: [
          {
            artistId: '0',
            name: 'AAA',
            nickname: 'A',
            profileImage: './samples/artist1.jpg',
            introduction: 'A 입니다.',
            note: '안녕하세요'
          },
          {
            artistId: '1',
            name: 'BBB',
            nickname: 'B',
            profileImage: './samples/artist2.jpg',
            introduction: 'B 입니다.',
            note: '안녕하세요'
          },
          {
            artistId: '2',
            name: 'CCC',
            nickname: 'C',
            profileImage: './samples/artist3.jpg',
            introduction: 'C 입니다.',
            note: '안녕하세요'
          },
          {
            artistId: '3',
            name: 'DDD',
            nickname: 'D',
            profileImage: './samples/artist4.jpg',
            introduction: 'D 입니다.',
            note: '안녕하세요'
          },
          {
            artistId: '4',
            name: 'EEE',
            nickname: 'E',
            profileImage: './samples/artist5.jpg',
            introduction: 'E 입니다.',
            note: '안녕하세요'
          },
          {
            artistId: '5',
            name: 'FFF',
            nickname: 'F',
            profileImage: './samples/artist6.jpg',
            introduction: 'F 입니다.',
            note: '안녕하세요'
          },
          {
            artistId: '60',
            name: 'GGG',
            nickname: 'G',
            profileImage: './samples/artist7.jpg',
            introduction: 'G 입니다.',
            note: '안녕하세요'
          },
          {
            artistId: '7',
            name: 'HHH',
            nickname: 'H',
            profileImage: './samples/artist8.jpg',
            introduction: 'H 입니다.',
            note: '안녕하세요'
          }
        ]
      };
    case C.CHANGE_HOME_BANNER_IDX:
      return {
        ...state,
        bannerIdx: action.bannerIdx
      };
    case C.CHANGE_HOME_EXHIBITION_CARD_IDX:
      return {
        ...state,
        exhibitionCardIdx: action.exhibitionCardIdx
      };
    case C.CHANGE_HOME_ARTIST_CARD_IDX:
      return {
        ...state,
        artistCardIdx: action.artistCardIdx
      };
    default:
      return state;
  }
};
