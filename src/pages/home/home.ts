import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  test = 0;

  items = [
    {
      'head':'ฟุตบอลจตุรมิตร สุดเข้มข้น ใส่กันเต็มที่ภายใต้ความสามัคคี',
      'content':'สำหรับการแข่งขันฟุตบอลประเพณีจตุรมิตรสามัคคี ครั้งที่ 28 ที่ประกอบไปด้วย โรงเรียนกรุงเทพคริสเตียนวิทยาลัย, โรงเรียนเทพศิรินทร์, โรงเรียนสวนกุหลาบวิทยา',
      'image': 'https://www.thairath.co.th/media/CiHZjUdJ5HPNXJ92GP6qTl7asr1NMThlxy.jpg'
    },
    {
      'head':'มงคลเดชเล็ก เคซ่ายิม" ปะทะ "นวพล ลูกพระคริสต์" ศึกชิงแชมป์ซุปเปอร์เฟเธอร์เวท เวทีลุมพินี',
      'content':'วทีลุมพินี วันอังคารที่ 14 พ.ย. (วันนี้) เป็นรายการมวย ศึก พี.เค.แสนชัย จัดโดยโปรโมเตอร์ “เสี่ยแขก” สมชาย เทศรุ่งเรือง คู่มวยคู่คี่ เก็บค่าดู 480-960',
      'image': 'https://www.thairath.co.th/media/CiHZjUdJ5HPNXJ92GP6qTze0XhqCrPgvJM.jpg'
    },
    {
      'head':'หมากรุก–สวิส” ทำได้',
      'content': 'เป็นอันว่าถึงตอนนี้ได้ทีมผ่านเข้าไปเล่นศึกฟุตบอลโลก 2018 รอบสุดท้าย ที่ประเทศรัสเซีย กลางปีหน้าแล้ว 28 ทีมด้วยกัน โดย “ตาหมากรุก” โครเอเชีย',
      'image': 'https://www.thairath.co.th/media/CiHZjUdJ5HPNXJ92GP6qMhVaqM18e5RQfo.jpg'
    },
    {
      'head':'The football club that\'s also a \'country\'',
      'content':'In a plot that even Swedish writer Henning Mankell might have thought too far fetched, a small football club based in the county of Dalarna -- a three-hour drive northwest of Stockholm -- has become a "national team" for millions of Kurdish people around the world.',
      'image': ''
    },
    {
      'head':'How the English Premier League embraced the world',
      'content':'Now, on the 25th anniversary of its inception, CNN Sport analyzes how the world\'s richest football league has changed the game forever, becoming the favorite destination for many of the globe\'s best players.',
      'image': ''
    }
  ];

  constructor(public navCtrl: NavController) {

  }

}
