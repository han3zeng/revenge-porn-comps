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

const SidePictures = [
  {
    id: 0,
    type: 'sidePicture',
    imgUrl: `${cdnUrlBase}/shred-01.jpg`,
    sidePictureType: 'left',
    content: {
      name: '小一',
      year: '1911',
      text: [
        '被恐嚇的經驗被恐嚇的經驗被恐嚇的經驗被恐嚇的經驗被恐嚇的經驗被恐嚇的經驗被恐嚇的經驗被恐嚇的經驗被恐嚇的經驗被恐嚇的經驗被恐嚇的經驗被恐嚇的經驗被恐嚇的經驗被恐嚇的經驗 被恐嚇的經驗被恐嚇的經驗被恐嚇的經驗被恐嚇',
        '被恐嚇的經驗被恐嚇的經驗被恐嚇的經驗被恐嚇的經驗被恐嚇的經驗被恐嚇的經驗被恐嚇的經驗被恐嚇的經驗被恐嚇的經驗被恐嚇的經驗被恐嚇的經驗被恐嚇的經驗被恐嚇的經驗被恐嚇的經驗 被恐嚇的經驗被恐嚇的經驗被恐嚇的經驗被恐嚇',
        '被恐嚇的經驗被恐嚇的經驗被恐嚇的經驗被恐嚇的經驗被恐嚇的經驗被恐嚇的經驗被恐嚇的經驗被恐嚇的經驗被恐嚇的經驗被恐嚇的經驗被恐嚇的經驗被恐嚇的經驗被恐嚇的經驗被恐嚇的經驗 被恐嚇的經驗被恐嚇的經驗被恐嚇的經驗被恐嚇',
      ]
    }
  },
  {
    id: 1,
    type: 'sidePicture',
    imgUrl: `${cdnUrlBase}/shred-02.jpg`,
    sidePictureType: 'right',
    content: {
      name: '小二',
      year: '1922',
      text: [
        '被恐嚇的經驗被恐嚇的經驗被恐嚇的經驗被恐嚇的經驗被恐嚇的經驗被恐嚇的經驗被恐嚇的經驗被恐嚇的經驗被恐嚇的經驗被恐嚇的經驗被恐嚇的經驗被恐嚇的經驗被恐嚇的經驗被恐嚇的經驗 被恐嚇的經驗被恐嚇的經驗被恐嚇的經驗被恐嚇',
        '被恐嚇的經驗被恐嚇的經驗被恐嚇的經驗被恐嚇的經驗被恐嚇的經驗被恐嚇的經驗被恐嚇的經驗被恐嚇的經驗被恐嚇的經驗被恐嚇的經驗被恐嚇的經驗被恐嚇的經驗被恐嚇的經驗被恐嚇的經驗 被恐嚇的經驗被恐嚇的經驗被恐嚇的經驗被恐嚇',
        '被恐嚇的經驗被恐嚇的經驗被恐嚇的經驗被恐嚇的經驗被恐嚇的經驗被恐嚇的經驗被恐嚇的經驗被恐嚇的經驗被恐嚇的經驗被恐嚇的經驗被恐嚇的經驗被恐嚇的經驗被恐嚇的經驗被恐嚇的經驗 被恐嚇的經驗被恐嚇的經驗被恐嚇的經驗被恐嚇',
      ]
    }
  },
  {
    id: 2,
    type: 'sidePicture',
    imgUrl: `${cdnUrlBase}/shred-03.jpg`,
    sidePictureType: 'left',
    content: {
      name: '小三',
      year: '1933',
      text: [
        '被恐嚇的經驗被恐嚇的經驗被恐嚇的經驗被恐嚇的經驗被恐嚇的經驗被恐嚇的經驗被恐嚇的經驗被恐嚇的經驗被恐嚇的經驗被恐嚇的經驗被恐嚇的經驗被恐嚇的經驗被恐嚇的經驗被恐嚇的經驗 被恐嚇的經驗被恐嚇的經驗被恐嚇的經驗被恐嚇',
        '被恐嚇的經驗被恐嚇的經驗被恐嚇的經驗被恐嚇的經驗被恐嚇的經驗被恐嚇的經驗被恐嚇的經驗被恐嚇的經驗被恐嚇的經驗被恐嚇的經驗被恐嚇的經驗被恐嚇的經驗被恐嚇的經驗被恐嚇的經驗 被恐嚇的經驗被恐嚇的經驗被恐嚇的經驗被恐嚇',
        '被恐嚇的經驗被恐嚇的經驗被恐嚇的經驗被恐嚇的經驗被恐嚇的經驗被恐嚇的經驗被恐嚇的經驗被恐嚇的經驗被恐嚇的經驗被恐嚇的經驗被恐嚇的經驗被恐嚇的經驗被恐嚇的經驗被恐嚇的經驗 被恐嚇的經驗被恐嚇的經驗被恐嚇的經驗被恐嚇',
      ]
    }
  },
  {
    id: 3,
    type: 'sidePicture',
    imgUrl: `${cdnUrlBase}/shred-04.jpg`,
    sidePictureType: 'right',
    content: {
      name: '小四',
      year: '1944',
      text: [
        '被恐嚇的經驗被恐嚇的經驗被恐嚇的經驗被恐嚇的經驗被恐嚇的經驗被恐嚇的經驗被恐嚇的經驗被恐嚇的經驗被恐嚇的經驗被恐嚇的經驗被恐嚇的經驗被恐嚇的經驗被恐嚇的經驗被恐嚇的經驗 被恐嚇的經驗被恐嚇的經驗被恐嚇的經驗被恐嚇',
        '被恐嚇的經驗被恐嚇的經驗被恐嚇的經驗被恐嚇的經驗被恐嚇的經驗被恐嚇的經驗被恐嚇的經驗被恐嚇的經驗被恐嚇的經驗被恐嚇的經驗被恐嚇的經驗被恐嚇的經驗被恐嚇的經驗被恐嚇的經驗 被恐嚇的經驗被恐嚇的經驗被恐嚇的經驗被恐嚇',
        '被恐嚇的經驗被恐嚇的經驗被恐嚇的經驗被恐嚇的經驗被恐嚇的經驗被恐嚇的經驗被恐嚇的經驗被恐嚇的經驗被恐嚇的經驗被恐嚇的經驗被恐嚇的經驗被恐嚇的經驗被恐嚇的經驗被恐嚇的經驗 被恐嚇的經驗被恐嚇的經驗被恐嚇的經驗被恐嚇',
      ]
    }
  },
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
  {
    type: 'textWithoutAnnotatoin',
    content: '<strong>「製毒村」</strong>被消滅之後，逐利的販毒集團逐漸轉往周遭<a href="http://www.google.com" target="_blank">國家力量</a>無法企及的地點，也就是長年遭到地方反抗軍把持的緬甸撣邦山中。「那是一個沒有風險的地方，你愛做多少就做多少，幾百公斤、幾噸的量都出得來⋯⋯等於是有當地政府（地方反抗軍）保護你。現在的狀況比在中國大陸更嚴重，產製等於是無法可管，」單培祥點出了這個關鍵性的改變 ，改變也翻轉了亞太毒品市場。',
    backgroundColor: 'purple',
  },
  SidePictures[0],
  {
    type: 'textWithoutAnnotatoin',
    content: '<strong>「製毒村」</strong>被消滅之後，逐利的販毒集團逐漸轉往周遭<a href="http://www.google.com" target="_blank">國家力量</a>無法企及的地點，也就是長年遭到地方反抗軍把持的緬甸撣邦山中。「那是一個沒有風險的地方，你愛做多少就做多少，幾百公斤、幾噸的量都出得來⋯⋯等於是有當地政府（地方反抗軍）保護你。現在的狀況比在中國大陸更嚴重，產製等於是無法可管，」單培祥點出了這個關鍵性的改變 ，改變也翻轉了亞太毒品市場。',
    backgroundColor: 'purple',
  },
  SidePictures[1],
  {
    type: 'textWithoutAnnotatoin',
    content: '<strong>「製毒村」</strong>被消滅之後，逐利的販毒集團逐漸轉往周遭<a href="http://www.google.com" target="_blank">國家力量</a>無法企及的地點，也就是長年遭到地方反抗軍把持的緬甸撣邦山中。「那是一個沒有風險的地方，你愛做多少就做多少，幾百公斤、幾噸的量都出得來⋯⋯等於是有當地政府（地方反抗軍）保護你。現在的狀況比在中國大陸更嚴重，產製等於是無法可管，」單培祥點出了這個關鍵性的改變 ，改變也翻轉了亞太毒品市場。',
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

const relatedData = [{
    title: '武漢肺炎專題／戰役實錄',
    date: '2020/02/11',
    category: '疫情通報',
    imgUrl: 'https://news.pts.org.tw/home_images/banner/1.jpg?v=1584439203',
    externalLink: 'https://newmedia.pts.org.tw/chinaoutbreak/',
  },
  {
    title: '武漢封城30天，全中國開城復工待何時？',
    date: '2020/02/21',
    category: '全球公衛',
    imgUrl: 'https://newmedia.pts.org.tw/sub-chinaoutbreak/figure.jpg',
    externalLink: 'https://newmedia.pts.org.tw/sub-chinaoutbreak/',
  },
  {
    title: '報導側記／中國權威發布的疫情數據迷霧',
    date: '2020/03/04',
    category: '疫情通報',
    imgUrl: 'https://server.newslab.pts.org.tw/uploads/News/175/5e61ba1be7d2e.jpg',
    externalLink: 'https://newmedia.pts.org.tw/sub-chinaoutbreak-2-/',
  },
  {
    title: '【P觀點】武漢肺炎疫情下，待回京的台灣中醫師',
    date: '2020/02/27',
    category: '國內防疫',
    imgUrl: 'https://img.youtube.com/vi/3f0t4rxVkuA/hqdefault.jpg',
    externalLink: 'https://newslab.pts.org.tw/video/78',
  },
  {
    title: '【P觀點】病毒專家何美鄉，武漢肺炎大解密',
    date: '2020/02/20',
    category: '國內防疫',
    imgUrl: 'https://img.youtube.com/vi/-2xCFHneIMI/0.jpg',
    externalLink: 'https://newslab.pts.org.tw/video/77',
  },
  {
    title: '【疫與記憶之四】義大利篇：我在佛羅倫斯，經歷世紀之疫',
    date: '2020/03/13',
    category: '全球公衛',
    imgUrl: 'https://server.newslab.pts.org.tw/uploads/News/180/5e6b97bae9e4e.jpg',
    externalLink: 'https://newslab.pts.org.tw/news/180',
  },
];

const people = [
  {
    name: '卓冠齊',
    title: '製作人',
  },
  {
    name: '吳亭霓、卓冠齊',
    title: '企劃',
  },
  {
    name: '簡毅慧、林建勳、吳亭霓、Nagao Kunaw',
    title: '編輯',
  },
  {
    name: '曾芯敏',
    title: '設計',
  },
  {
    name: '曾涵郁、陳柏偉',
    title: '工程',
  },
  {
    name: 'Nagao Kunaw',
    title: '社群',
  }
];


const footerSection = {
  fullPageImageUrl: `${cdnUrlBase}/test-cover-02.jpeg`,
  related: relatedData,
  people,
  dataDescription: '這是資料描述，這是資料描述，這是資料描述，這是資料描述，這是資料描述，這是資料描述。',
}

export {
  vssData,
  sectionOne,
  ISLRData,
  contentProto,
  navSection,
  footerSection,
  relatedData,
  SidePictures,
}
