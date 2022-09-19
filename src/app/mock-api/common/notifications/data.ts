/* eslint-disable */
import * as moment from 'moment';

export const notifications = [
    

    {
        id         : 'ef7b95a7-8e8b-4616-9619-130d9533add9',
        image      : 'assets/images/avatars/male-06.jpg',
        description: '<strong>Roger Murray</strong> accepted your friend request',
        time       : moment().subtract(7, 'hours').toISOString(), // 7 hours ago
        read       : true,
        link       : '/dashboards/project',
        useRouter  : true
    },
    {
        id         : 'eb8aa470-635e-461d-88e1-23d9ea2a5665',
        image      : 'assets/images/avatars/female-04.jpg',
        description: '<strong>Sophie Stone</strong> sent you a direct message',
        time       : moment().subtract(9, 'hours').toISOString(), // 9 hours ago
        read       : true,
        link       : '/dashboards/project',
        useRouter  : true
    },
    {
        id         : 'b85c2338-cc98-4140-bbf8-c226ce4e395e',
        icon       : 'heroicons_solid:mail',
        title      : 'Mailbox',
        description: 'You have 3 new mails',
        time       : moment().subtract(1, 'day').toISOString(), // 1 day ago
        read       : true,
        link       : '/dashboards/project',
        useRouter  : true
    },
    {
        id         : '8f8e1bf9-4661-4939-9e43-390957b60f42',
        icon       : 'heroicons_solid:star',
        title      : 'Daily challenges',
        description: 'Your submission has been accepted and you are ready to sign-up for the final assigment which will be ready in 2 days',
        time       : moment().subtract(3, 'days').toISOString(), // 3 days ago
        read       : true,
        link       : '/dashboards/project',
        useRouter  : true
    },
    {
        id         : '30af917b-7a6a-45d1-822f-9e7ad7f8bf69',
        icon       : 'heroicons_solid:refresh',
        title      : 'Cron jobs',
        description: 'Your Vagrant container is ready to download',
        time       : moment().subtract(4, 'day').toISOString(), // 4 days ago
        read       : true,
        link       : '/dashboards/project',
        useRouter  : true
    }
];
