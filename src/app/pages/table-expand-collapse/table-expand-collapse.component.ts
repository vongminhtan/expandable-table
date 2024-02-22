import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

const SAMPLE_DATA: any[] = [
  {
    name: "Abductor Virgins",
    region: "Mount Gelmir",
    isExpanded: false,
    level: 0,
    child: [
      {
        name: "level 1 - Alecto, Black Knife Ringleader",
        region: "Liurnia of the Lakes",
        level: 1,
        isExpanded: false,
        child: [
          {
            name: "level 2 - Alecto, Black Knife Ringleader",
            region: "Liurnia of the Lakes",
            level: 2,
            isExpanded: false,
            child: [
              {
                name: "level 3 - Alecto, Black Knife Ringleader",
                region: "Liurnia of the Lakes",
                level: 3,
                isExpanded: false,
                child: [
                  {
                    name: "level 4.1 - Alecto, Black Knife Ringleader",
                    region: "Liurnia of the Lakes",
                    level: 4,
                    isExpanded: false,
                  },
                  {
                    name: "level 4.2 - Alecto, Black Knife Ringleader",
                    region: "Liurnia of the Lakes",
                    level: 4,
                    isExpanded: false,
                  },
                  {
                    name: "level 4.3 - Alecto, Black Knife Ringleader",
                    region: "Liurnia of the Lakes",
                    level: 4,
                    isExpanded: false,
                  },
                  {
                    name: "level 4.4 - Alecto, Black Knife Ringleader",
                    region: "Liurnia of the Lakes",
                    level: 4,
                    isExpanded: false,
                  }
                ]
              }
            ]
          }
        ]
      },
    ]
  },
  {
    name: "Adan, Thief Of Fire",
    region: "Liurnia of the Lakes",
    isExpanded: false,
    level: 0,
    child: [
      {
        name: "Ancient Dragon Lansseax",
        region: "Altus Plateau",
        level: 1,
        isExpanded: false,
      }
    ]
  },
  {
    name: "Ancestor Spirit",
    region: "Limgrave",
    isExpanded: false,
    level: 0,
    child: [
      {
        name: "Ancient Hero Of Zamor",
        region: "Weeping Peninsula",
        level: 1,
        isExpanded: false,
      }
    ]
  }
]

@Component({
  selector: 'app-table-expand-collapse',
  templateUrl: './table-expand-collapse.component.html',
  styleUrls: ['./table-expand-collapse.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})

export class TableExpandCollapseComponent implements OnInit {
  public bossColumns: string[] = ['name', 'region'];
  public bosses: any[] = SAMPLE_DATA;
  JSON = JSON;

  constructor() {
  }

  ngOnInit(): void {
  }

}


