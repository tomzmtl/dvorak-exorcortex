import A from '../actionTypes';


export const prevItem = name => ({
  type: A.PREV_INGREDIENT,
  name,
});

export const nextItem = name => ({
  type: A.NEXT_INGREDIENT,
  name,
});
