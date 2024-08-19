// {
//     'id': INT,
//     'type': 'daily_broadcast_series', //This will use underscores as this is Drupal defined
//     'title': 'Title of the Series',
//     'body': 'Body, Possibly Containing HTML Markup.'
//     'air-dates': {
//       'start': 'UTC Timestamp',
//       'stop': 'UTC Timestamp'
//     },
    
//     'downloads': [ // Notes are weekly, not by video, this will be notes downloads for the week
//       0: {
//         'type': 'downloadable_asset' //This will use underscores as this is Drupal defined
//         'title': 'Title of Download',
//         'body': 'Description, if provided.'
//         'url': 'URL of Downloadable Asset'
//         'authors': [
//           0: {
//             'id': INT,
//             'name': 'Speaker Name',
//             'body': 'Description if provided',
//             'image': 'Image location of speaker if provided',
//             'weight': INT, //For when determining order, Drupal can provide this
//             'taxonomy': 'speaker_author' //This will use underscores as this is Drupal defined
//           }
//         ]
//       }
//     ],

//     'items': [
//       0: {
//         'id': INT,
//         'type': 'daily_broadcast', //This will use underscores as this is Drupal defined
//         'title': 'Title of video',
//         'body': 'Body, Possibly Containing HTML Markup.',
//         'summary': 'Short Description, Possibly Containing HTML Markup',
//         'air-date': 'UTC Timestamp',
//         'video': {
//           'vimeo': 'Vimeo Embed URL',
//           'youtube': 'YouTube Embed URL',
//           'video-preview': 'Image Location of Video Preview'
//         },
//         'speakers': [
//           0: {
//             'id': INT,
//             'name': 'Speaker Name',
//             'body': 'Description if provided',
//             'image': 'Image location of speaker if provided',
//             'weight': INT, //For when determining order, Drupal can provide this
//             'taxonomy': 'speaker_author' //This will use underscores as this is Drupal defined
//           }
//         ],
//         'downloads': { // This is just links to audio and video downloads of the recording, no notes
//           'audio': 'URL to Audio Download',
//           'video': 'URL to Video Download'
//         },
//         'tags': [
//           0: {
//             'id': INT,
//             'name': 'Tag Title',
//             'taxonomy': 'tags_bonus_content' //This will use underscores as this is Drupal defined
//           }
//         ]
//       }
//     ]
//   }