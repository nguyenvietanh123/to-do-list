import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-week2',
  templateUrl: './week2.component.html',
  styleUrls: ['./week2.component.css']
})
export class Week2Component implements OnInit {

  constructor() {}
  week2 = [
    {
      day : "Thứ 2",
      morning : "Sáng: Đạp xe",
      afternoon : "Chiều: Đi học",
      evening : "Tối: Code tiếp"
    },
    {
      day : "Thứ 3",
      morning : "Sáng: Chạy bộ",
      afternoon : "Chiều: Code liên tục",
      evening : "Tối: ...................."
    },
    {
      day : "Thứ 4",
      morning : "Đọc sách",
      afternoon : "Tập thể dục",
      evening : "Code"
    },
    {
      day : "Thứ 5",
      morning : "Đạp xe",
      afternoon : "Đi học",
      evening : "Code tiếp"
    },
    {
      day : "Thứ 6",
      morning : "Đạp xe",
      afternoon : "Đi học",
      evening : "Code tiếp"
    },
    {
      day : "Thứ 7",
      morning : "Đạp xe",
      afternoon : "Đi học",
      evening : "Code tiếp"
    },
    {
      day : "Chủ nhật",
      morning : "Đạp xe",
      afternoon : "Đi học",
      evening : "Code tiếp"
    },
  ]

  ngOnInit(): void {
  }

}
