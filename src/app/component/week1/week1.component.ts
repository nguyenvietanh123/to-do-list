import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-week1',
  templateUrl: './week1.component.html',
  styleUrls: ['./week1.component.css']
})
export class Week1Component implements OnInit {

  constructor() {}
  week1 = [
    {
      day : "Thứ 2",
      morning : "Sáng: Đọc sách",
      afternoon : "Chiều: Tập thể dục",
      evening : "Tối: Code"
    },
    {
      day : "Thứ 3",
      morning : "Sáng: Đạp xe",
      afternoon : "Chiều: Đi học",
      evening : "Tối: Code tiếp"
    },
    {
      day : "Thứ 4",
      morning : "Đạp xe",
      afternoon : "Đi học",
      evening : "Code tiếp"
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
