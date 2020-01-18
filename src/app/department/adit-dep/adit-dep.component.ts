import { Component, OnInit } from "@angular/core";
import { MatDialogRef } from "@angular/material";
import { DepartmentService } from "src/app/services/department.service";
import { NgForm } from "@angular/forms";

import { MatSnackBar } from "@angular/material";

@Component({
  selector: "app-adit-dep",
  templateUrl: "./adit-dep.component.html",
  styleUrls: ["./adit-dep.component.css"]
})
export class AditDepComponent implements OnInit {
  constructor(
    public dialogbox: MatDialogRef<AditDepComponent>,
    private service: DepartmentService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {}

  onClose() {
    this.dialogbox.close();
    this.service.filter("Register click");
  }

  onSubmit(form: NgForm) {
    this.service.updateDepartment(form.value).subscribe(res => {
      this.snackBar.open(res.toString(), "", {
        duration: 5000,
        verticalPosition: "top"
      });
    });
  }
}
