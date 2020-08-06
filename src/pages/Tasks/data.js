import uuid from 'uuid/v1';

export default [
    {
        id: uuid(),
        title: 'Dropbox',
        sprint: 'this is sprint',
        estimate: '10',
        status: 'in process',
        assignee: 'Mohsen',
    },
    {
        id: uuid(),
        title: 'Login Page',
        sprint: 'Sprint#1',
        estimate: '34',
        status: 'done',
        assignee: 'Mohsen',
    },
];
