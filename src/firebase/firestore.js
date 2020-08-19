/* eslint-disable import/prefer-default-export */
import { firestore } from './firebase';

const latestWork = firestore.collection('gallery').orderBy('updatedAt', 'asc');
const getWorkList = (maxWorkCount) => (
  maxWorkCount ? latestWork.limit(maxWorkCount).get() : latestWork.get()
);
export {
  getWorkList,
};
