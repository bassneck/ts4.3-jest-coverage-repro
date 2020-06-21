import { isStoreOwner } from './foo';
import { getWelcomeMessage } from './src';

describe('Test optional chaining', () => {
  test(`should work`, () => {
    expect(isStoreOwner({
      isStoreOwner: false,
    })).toEqual(false);
  });

  test(`test export *`, () => {
    expect(getWelcomeMessage('foo')).toEqual('yolo foo');
  })
});
