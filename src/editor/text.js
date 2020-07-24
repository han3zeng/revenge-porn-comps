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

const sectionOne = {
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

const ISLRData = [
  {
    id: 'ISLR-01',
    imageUrl: `${cdnUrlBase}/test-cover-01.jpg`,
    text: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. <br /><br />Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. <br /><br />Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. <br /><br />',
  },
  {
    id: 'ISLR-02',
    imageUrl:`${cdnUrlBase}/test-cover-02.jpeg`,
    text: '測試一二三測試一二三測試一二三，測試一二三測試一二三測試一二三<br />，測試一二三測試一二三測試一二三<br />，測試一二三測試一二三測試一二三，測試一二三測試一二三測試一二三<br />，測試一二三測試一二三測試一二三，測試一二三測試一二三測試一二三<br /><br />測試一二三測試一二三測試一二三，測試一二三測試一二三測試一二三<br />，測試一二三測試一二三測試一二三<br />，測試一二三測試一二三測試一二三，測試一二三測試一二三測試一二三<br />，測試一二三測試一二三測試一二三，測試一二三測試一二三測試一二三<br /><br />測試一二三測試一二三測試一二三，測試一二三測試一二三測試一二三<br />，測試一二三測試一二三測試一二三<br />，測試一二三測試一二三測試一二三，測試一二三測試一二三測試一二三<br />，測試一二三測試一二三測試一二三，測試一二三測試一二三測試一二三<br /><br />測試一二三測試一二三測試一二三，測試一二三測試一二三測試一二三<br />，測試一二三測試一二三測試一二三<br />，測試一二三測試一二三測試一二三，測試一二三測試一二三測試一二三<br />，測試一二三測試一二三測試一二三，測試一二三測試一二三測試一二三<br /><br />測試一二三測試一二三測試一二三，測試一二三測試一二三測試一二三<br />，測試一二三測試一二三測試一二三<br />，測試一二三測試一二三測試一二三，測試一二三測試一二三測試一二三<br />，測試一二三測試一二三測試一二三，測試一二三測試一二三測試一二三<br /><br />',
  }
]

// title
// textWithoutAnnotatoin
// textWithAnnotatoin -> { plainText, annotation }

const contentProto = [
  {
    type: 'title',
    text: '這是標題這是標題<br/><br/>這是標題第二行',
    backgroundColor: 'purple',
  },
  {
    type: 'subtitle',
    text: '這是副標題這是副標題<br/><br/>這是副標題第二行',
    backgroundColor: 'purple',
  },
  {
    type: 'textWithoutAnotatoin',
    content: '「製毒村」被消滅之後，逐利的販毒集團逐漸轉往周遭國家力量無法企及的地點，也就是長年遭到地方反抗軍把持的緬甸撣邦山中。「那是一個沒有風險的地方，你愛做多少就做多少，幾百公斤、幾噸的量都出得來⋯⋯等於是有當地政府（地方反抗軍）保護你。現在的狀況比在中國大陸更嚴重，產製等於是無法可管，」單培祥點出了這個關鍵性的改變 ，改變也翻轉了亞太毒品市場。',
    backgroundColor: 'purple',
  },
  {
    type: 'textWithoutAnnotatoin',
    content: '<strong>「製毒村」</strong>被消滅之後，逐利的販毒集團逐漸轉往周遭<a href="http://www.google.com" target="_blank">國家力量</a>無法企及的地點，也就是長年遭到地方反抗軍把持的緬甸撣邦山中。「那是一個沒有風險的地方，你愛做多少就做多少，幾百公斤、幾噸的量都出得來⋯⋯等於是有當地政府（地方反抗軍）保護你。現在的狀況比在中國大陸更嚴重，產製等於是無法可管，」單培祥點出了這個關鍵性的改變 ，改變也翻轉了亞太毒品市場。',
    backgroundColor: 'purple',
  },
  {
    type: 'textWithAnnotation',
    backgroundColor: 'purple',
    content: [
      {
        type: 'plainText',
        text: `<strong>「製毒村」</strong>被消滅之後，逐利的販毒集團逐漸轉往周遭國家力量無法企及的地點<a href="http://www.google.com" target="_blank">國家力量</a>，也就是長年遭到地方反抗軍把持的緬甸撣邦山中。「那是一個沒有風險的地方，你愛做多少就做多少，幾百公斤、幾噸的量都出得來⋯⋯等於是有當地政府（`,
      },
      {
        type: 'annotation',
        text: `地方反抗軍`,
        annotation: '這是annotation拉，這是annotation拉，這是annotation拉，這是annotation拉，這是annotation拉。'
      },
      {
        type: 'plainText',
        text: `）保護你。現在的狀況比在中國大陸更嚴重，產製等於是無法可管，」單培祥點出了這個關鍵性的改變，而這個改變也翻轉了亞太毒品市場。</span>`,
      }
    ],
  },
  {
    type: 'blockquote',
    text: '<strong>「製毒村」</strong>被消滅之後，逐利的販毒集團逐漸轉往周遭<a href="http://www.google.com" target="_blank">國家力量</a>無法企及的地點，也就是長年遭到地方反抗軍把持的緬甸撣邦山中。「那是一個沒有風險的地方，你愛做多少就做多少，幾百公斤、幾噸的量都出得來⋯⋯等於是有當地政府（地方反抗軍）保護你。現在的狀況比在中國大陸更嚴重，產製等於是無法可管，」單培祥點出了這個關鍵性的改變 ，改變也翻轉了亞太毒品市場。',
    backgroundColor: 'purple',
    iconUrl: `${cdnUrlBase}/test-cover-02.jpeg`,
    title: '韓國瑜  首任被罷免直轄市市長'
  },
  {
    type: 'image',
    imgUrl: `${cdnUrlBase}/test-cover-02.jpeg`,
    caption: '這是圖說，圖說喔，這是圖說，圖說喔',
    backgroundColor: 'purple',
  },
];

const navSection = [{
    text: '罷免懶人包',
    disable: false,
    href: 'www.google.com',
  },
  {
    text: '開票結果',
    disable: false,
    href: 'www.google.com',
  },
  {
    text: '延伸閱讀',
    disable: false,
    href: 'www.google.com',
  },
]

export {
  vssData,
  sectionOne,
  ISLRData,
  contentProto,
  navSection,
}
