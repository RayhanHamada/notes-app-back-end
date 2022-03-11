// @ts-check

const {
  addNoteHandler,
  getAllNotesHandler,
  getNoteByIdHandler,
  editNoteByIdHandler,
  deleteNoteByIdHandler,
} = require('./handler');

/**
 * @type {import('@hapi/hapi').ServerRoute[]} ServerRoutes
 */
const routes = [
  {
    method: 'GET',
    path: '/notes',
    handler: getAllNotesHandler,
    options: {
      cors: {
        origin: ['*'],
      },
    },
  },
  {
    method: 'POST',
    path: '/notes',
    handler: addNoteHandler,
    options: {
      cors: {
        origin: ['*'],
      },
    },
  },
  {
    method: 'GET',
    path: '/notes/{id}',
    handler: getNoteByIdHandler,
    options: {
      cors: {
        origin: ['*'],
      },
    },
  },
  {
    method: 'PUT',
    path: '/notes/{id}',
    handler: editNoteByIdHandler,
    options: {
      cors: {
        origin: ['*'],
      },
    },
  },
  {
    method: 'DELETE',
    path: '/notes/{id}',
    handler: deleteNoteByIdHandler,
    options: {
      cors: {
        origin: ['*'],
      },
    },
  },
];

module.exports = routes;
