import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../services/studentService.service';
import { Istudent } from '../../model/Istudent';
import { SnackBarService } from '../../services/SnackBar.service';

@Component({
  selector: 'app-student-table',
  templateUrl: './student-table.component.html',
  styleUrls: ['./student-table.component.scss'],
})
export class StudentTableComponent implements OnInit {
  studentData: Istudent[] = [];
  constructor(
    private _studentService: StudentService,
    private _snackBar: SnackBarService,
  ) {}

  ngOnInit(): void {
    this.getAllStudent();
  }
  getAllStudent() {
    this._studentService.fetchAllStudent().subscribe({
      next: (data) => {
        console.log(data);

        this.studentData = data;
      },
      error: (err) => {
        this._snackBar.openSnackBar(err);
      },
    });
  }
}
