/* eslint-disable import/prefer-default-export */
import { firestore } from './firebase';

const workCollection = firestore.collection('gallery');
const latestWork = workCollection.orderBy('updatedAt', 'desc');

const workDatabaseToList = (list) => {
  const items = [];
  list.forEach((doc) => {
    items.push({
      id: doc.id,
      ...doc.data(),
    });
  });
  return items;
};
const getWorkList = async (maxWorkCount) => {
  const workDatabase = await (
    maxWorkCount ? latestWork.limit(maxWorkCount).get() : latestWork.get()
  );
  return workDatabaseToList(workDatabase);
};

const updateWork = (id, workInfo) => workCollection.doc(id).update(workInfo);

const addWork = (workInfo) => workCollection.doc().set(workInfo);
export {
  getWorkList,
  updateWork,
  addWork,
};
