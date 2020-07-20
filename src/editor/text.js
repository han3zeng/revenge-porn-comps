import config from '../config';

const { cdnUrlBase } = config;

const vssData = [
  {
    id: 'vss-01',
    imageUrl: `${cdnUrlBase}/test-cover-01.jpg`,
    text: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. <br /><br />Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. <br /><br />Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. <br /><br />',
  },
  {
    id: 'vss-02',
    imageUrl:`${cdnUrlBase}/test-cover-02.jpeg`,
    text: '測試一二三測試一二三測試一二三，測試一二三測試一二三測試一二三<br />，測試一二三測試一二三測試一二三<br />，測試一二三測試一二三測試一二三，測試一二三測試一二三測試一二三<br />，測試一二三測試一二三測試一二三，測試一二三測試一二三測試一二三<br /><br />測試一二三測試一二三測試一二三，測試一二三測試一二三測試一二三<br />，測試一二三測試一二三測試一二三<br />，測試一二三測試一二三測試一二三，測試一二三測試一二三測試一二三<br />，測試一二三測試一二三測試一二三，測試一二三測試一二三測試一二三<br /><br />測試一二三測試一二三測試一二三，測試一二三測試一二三測試一二三<br />，測試一二三測試一二三測試一二三<br />，測試一二三測試一二三測試一二三，測試一二三測試一二三測試一二三<br />，測試一二三測試一二三測試一二三，測試一二三測試一二三測試一二三<br /><br />測試一二三測試一二三測試一二三，測試一二三測試一二三測試一二三<br />，測試一二三測試一二三測試一二三<br />，測試一二三測試一二三測試一二三，測試一二三測試一二三測試一二三<br />，測試一二三測試一二三測試一二三，測試一二三測試一二三測試一二三<br /><br />測試一二三測試一二三測試一二三，測試一二三測試一二三測試一二三<br />，測試一二三測試一二三測試一二三<br />，測試一二三測試一二三測試一二三，測試一二三測試一二三測試一二三<br />，測試一二三測試一二三測試一二三，測試一二三測試一二三測試一二三<br /><br />',
  }
];

const SectionOne = {
  title: '這是標題這是標題這是標題<br/><br/>這是標題',
  contents: [
    '這是第一段，這是第一段，這是第一段，這是第一段，<br/><br/>這是第一段，這是第一段，這是第一段，這是第一段，這是第一段。',
    '這是第2二2段，這是第2二2段，這是第2二2段，這是第2二2段，這是第2二2段，<br/><br/>這是第2二2段，這是第2二2段，這是第2二2段。',
    '這是第333段，這是第333段，這是第333段，這是第333段，這是第333段，這是第333段，<br/><br/>這是第333段，這是第333段，這是第333段，這是第333段。'
  ],
  imgs: [
    `${cdnUrlBase}/shred-01.jpg`,
    `${cdnUrlBase}/shred-02.jpg`,
    `${cdnUrlBase}/shred-03.jpg`,
    `${cdnUrlBase}/shred-04.jpg`,
    `${cdnUrlBase}/shred-05.jpg`,
    `${cdnUrlBase}/shred-06.jpg`,
  ],
}

export {
  vssData,
  SectionOne,
}
