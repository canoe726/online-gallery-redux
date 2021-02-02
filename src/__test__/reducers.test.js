import C from '../constants/homeConstants';
import { home } from '../store/reducers/homeReducer';

describe('home_reducers', () => {
  it('111', () => {
    const state = {};
    const action = {
      type: C.INIT_HOME_BANNER,
      banner: [
        {
          bannerImgPath: '/samples/banner1.jpg',
          bannerUrl: '/'
        },
        {
          bannerImgPath: '/samples/banner2.jpg',
          bannerUrl: '/'
        },
        {
          bannerImgPath: '/samples/banner3.jpg',
          bannerUrl: '/'
        }
      ]
    };

    const results = home(state, action);
    expect(results)
      .toEqual({
        home: {
          banner: [
            {
              bannerImgPath: '/samples/banner1.jpg',
              bannerUrl: '/'
            },
            {
              bannerImgPath: '/samples/banner2.jpg',
              bannerUrl: '/'
            },
            {
              bannerImgPath: '/samples/banner3.jpg',
              bannerUrl: '/'
            }
          ]
        }
      });
  });
});
