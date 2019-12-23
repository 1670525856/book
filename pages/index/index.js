//index.js
//获取应用实例
const app = getApp()

Page({
 data:{ 

   sort:[
     {
       name:'科幻',
       img:'../image/paihang1.png',
     },
     {
       name: '生活',
       img: '../image/paihang2.png',
     },
     {
       name: '露营',
       img: '../image/paihang3.png',
     },
     {
       name: '职场',
       img: '../image/paihang4.png',
     },
     {
       name: '科幻',
       img: '../image/paihang1.png',
     },
   ],
   zuozhe:[
     {
       name: '刘慈欣',
       img: '../image/paihang5.png',
     },
     {
       name: '田晓花',
       img: '../image/paihang6.png',
     },
     {
       name: '李廉洁',
       img: '../image/paihang7.png',
     },
     {
       name: '马尔基',
       img: '../image/paihang8.png',
     },
     {
       name: '刘慈欣',
       img: '../image/paihang5.png',
     },
   ],
   xinfabu:[
     {
       bookname:'三体：死神永生',
       name: '刘慈欣',
       img: '../image/paihang9.png',
     },
     {
       bookname: '人类简史',
       name: '尤瓦尔·赫拉利',
       img: '../image/paihang10.png',
     },
     {
       bookname: '许三观卖血记',
       name: '余华',
       img: '../image/paihang11.png',
     },
     {
       bookname: '未来简史',
       name: '李廉洁',
       img: '../image/paihang12.png',
     },
     {
       bookname: '自私的基因',
       name: '理查德·道金斯',
       img: '../image/paihang13.png',
     },
     {
       bookname: '百年孤独',
       name: '道金斯',
       img: '../image/paihang14.png',
     },
   ],
   bq:[
     {
       title:'2019排行榜',
       color:'#f54d82'
     },
     {
       title: '职场热门',
       color:'#4c906d'
     },
     {
       title: '都市言情',
       color: '#ec575e'
       
     },
     {
       title: '哈佛经济大学管理类',
       color: '#9060e8'
     },
     {
       title: '领导才能',
       color: '#ded658'
     },
   ],
   rexiao:[
     {
       img:'../image/paihang15.png',
       bookname:'三体：死神永生',
       name:'刘慈欣',
       jieshao:'刘慈欣创作的系列长篇科幻小说地球往事三部曲的第三部作品...'
     },
     {
       img: '../image/paihang15.png',
       bookname: '三体：死神永生',
       name: '李廉洁',
       jieshao: '李廉洁创作的系列长篇科幻小说地球往事三部曲的第一部作品...'
     }
   ]
 }
})
