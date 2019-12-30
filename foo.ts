interface User {
  isStoreOwner: boolean
}

export const isStoreOwner = (user: User) => user?.isStoreOwner;

for (const element in ['foo', 'bar']) {
  /* istanbul ignore if */
  if (element === 'foo') {
    console.warn(element);
  }
}
