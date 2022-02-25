import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-excel-mapping',
  templateUrl: './excel-mapping.component.html',
  styleUrls: ['./excel-mapping.component.scss']
})
export class ExcelMappingComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<ExcelMappingComponent>) { }

  ngOnInit(): void {
  }

}
