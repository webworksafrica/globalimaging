import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { fuseAnimations } from '@gc/animations';
import { FuseAlertType } from '@gc/components/alert';
import { environment } from 'environments/environment';

@Component({
    selector     : 'auth-sign-in',
    templateUrl  : './sign-in.component.html',
    encapsulation: ViewEncapsulation.None,
    animations   : fuseAnimations
})
export class AuthSignInComponent implements OnInit
{
    @ViewChild('signInNgForm') signInNgForm: NgForm;

    alert: { type: FuseAlertType; message: string } = {
        type   : 'success',
        message: ''
    };
    signInForm: FormGroup;
    showAlert: boolean = false;

    email: String;
    password: String;

    private url: string;

    constructor(
        private _httpClient: HttpClient,
        private _formBuilder: FormBuilder,
        private _router: Router
    )
    {
    }


    ngOnInit(): void
    {
        // Create the form
        this.signInForm = this._formBuilder.group({
            email     : ['hughes.brian@company.com', [Validators.required, Validators.email]],
            password  : ['admin', Validators.required],
            rememberMe: ['']
        });
    }


    signIn(): void
    {

        // ${this.signInForm.value.email}
        // this.signInForm.value.password
        this.url = environment.loginUrl +
            `client_id=3MVG9QBLg8QGkFeqdO.M5Ni0uwM23U0qz6bjdHb8fFhtRFrfa_1GMoyCXkBceIRFeVQcq8QVC6x4Y0ikSCGo7&client_secret=6B0B7CCF088E3D89A6ED1EC73298D6FFED2A1FED51A30CB4633D70D0D6C2469C&grant_type=password&username=tinashe@webworks.co.zw.wadeamgdev&password=Nash2305`;
        // Return if the form is invalid
        if (this.signInForm.invalid) {
            return;
        }

        // Disable the form
        this.signInForm.disable();

        // Hide the alert
        this.showAlert = false;

        this._httpClient.post(this.url, {}).subscribe(
            (x: any) => {

                localStorage.setItem(
                    'currentUser',
                    JSON.stringify({
                        access_token: x.access_token,
                        id: x.id,
                        instance_url: x.instance_url,
                        issued_at: x.issued_at,
                        signature: x.signature,
                        token_type: x.token_type,
                        username: this.signInForm.value.email,
                    })
                );

                console.log(JSON.parse(localStorage.getItem('currentUser')));
                this._router.navigate(['/dashboards/project']);

            },
            (response) => {
                if (response.status == 400) {
                    // Re-enable the form
                    this.signInForm.enable();

                    // Reset the form
                    this.signInNgForm.resetForm();

                    // Set the alert
                    this.alert = {
                        type: 'error',
                        message: 'Wrong email or password',
                    };

                    // Show the alert
                    this.showAlert = true;
                }
                console.log(response.status);
            }
        );
    }
}
