import { Component, OnInit, ɵɵqueryRefresh } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  myemail: string= '';
  myPassword: string='';
  constructor(
    private loginService: LoginService,
    private router: Router, 
    private formBuilder: FormBuilder,
    private route: ActivatedRoute
    ) { }

  ngOnInit() {
      this.loginForm = this.formBuilder.group({
        username: new FormControl(null, [Validators.required, Validators.email]),
        password: new FormControl(null, [Validators.required, Validators.minLength(6)])
    });
       // get return url from route parameters or default to '/'
       this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/home';
  }

    // convenience getter for easy access to form fields
    get f() { return this.loginForm.controls; }

onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }

        this.loading = true;
        this.loginService.createUserLogin(this.f.username.value, this.f.password.value)
            .subscribe(
                data => {
                  this.myemail = data.useremail;
                  this.router.navigate(['/home']);
                  console.log('my email is ' + this.myemail);
                  sessionStorage.setItem("key",data.useremail);
                 /* if(this.myemail == data.myemail) { 
                    this.router.navigate(['/home']);
                  } else {
                    this.loginForm.reset();
                    this.router.navigate(['']);
                  }
                  */
                },
                error => {
                 //   this.alertService.error(error);
                    this.loading = false;
                });
    }
}


