import C from '../../constants/exhibitionConstants';

export const exhibition = (state = {}, action) => {
  switch (action.type) {
    case C.INIT_EXHIBITION_DATA:
      console.log(state);
      return {
        ...state,
        // notice: action.exhibitionList
        exhibitionList: [
          {
            exhibitionId: 1,
            title: '전시회 1',
            posterImage: './samples/artwork1.jpg',
            startAt: '2021.01.21',
            endAt: '2021.01.31',
            participants: '김영배, 이원기'
          },
          {
            exhibitionId: 2,
            title: '전시회 2',
            posterImage: './samples/artwork2.jpg',
            startAt: '2021.01.22',
            endAt: '2021.01.31',
            participants: '김영배, 이원기'
          },
          {
            exhibitionId: 3,
            title: '전시회 3',
            posterImage: './samples/artwork3.jpg',
            startAt: '2021.01.23',
            endAt: '2021.01.31',
            participants: '김영배, 이원기'
          },
          {
            exhibitionId: 4,
            title: '전시회 4',
            posterImage: './samples/artwork4.jpg',
            startAt: '2021.01.24',
            endAt: '2021.01.31',
            participants: '김영배, 이원기'
          },
          {
            exhibitionId: 5,
            title: '전시회 5',
            posterImage: './samples/artwork5.jpg',
            startAt: '2021.01.25',
            endAt: '2021.01.31',
            participants: '김영배, 이원기'
          },
          {
            exhibitionId: 6,
            title: '전시회 6',
            posterImage: './samples/artwork6.jpg',
            startAt: '2021.01.26',
            endAt: '2021.01.31',
            participants: '김영배, 이원기'
          },
          {
            exhibitionId: 7,
            title: '전시회 7',
            posterImage: './samples/artwork7.jpg',
            startAt: '2021.01.27',
            endAt: '2021.01.31',
            participants: '김영배, 이원기'
          },
          {
            exhibitionId: 8,
            title: '전시회 8',
            posterImage: './samples/artwork8.jpg',
            startAt: '2021.01.28',
            endAt: '2021.01.31',
            participants: '김영배, 이원기'
          }
        ]
      };
    default:
      return state;
  }
};
