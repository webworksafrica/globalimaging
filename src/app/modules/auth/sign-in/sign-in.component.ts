import { HttpClient, HttpHeaders,HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { fuseAnimations } from '@gi/animations';
import { FuseAlertType } from '@gi/components/alert';
import { environment } from 'environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressBar } from '@angular/material/progress-bar';

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
        message: 'Logged In'
    };
    signInForm: FormGroup;
    showAlert: boolean = false;

    email: string;
    password: string;

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
            email     : ['', [Validators.required, Validators.email]],
            password  : ['password', Validators.required],
            rememberMe: ['']
        });

        window.localStorage.clear(); //clear all localstorage
    }


    signIn(): void
    {
        this.url = environment.loginUrl +
        // eslint-disable-next-line max-len
        'client_id=3MVG9snqYUvtJB1PKIJxVBRpflb24Qv0Keu0bAiYtWOx9MkDQN8yCHYarmKIvsipHOUaRoHDA2leKdeH9cXWe&client_secret=003675C146BAADE2C75B4FA60B81C5AD6499A36ECDADC22A64C438A452902A4F&grant_type=password&username=customerportalgiusa@giusa.com&password=Nash2305';
        // Return if the form is invalid
        if (this.signInForm.invalid) {
            return;
        }

        // Disable the form
        this.signInForm.disable();

        // Hide the alert
        this.showAlert = false;
        const headers = new HttpHeaders({
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': 'https://webworksafrica.github.io',
            'X-Frame-Options':'*',
            'Access-Control-Request-Methods':'GET,POST,DELETE,OPTIONS',



        });




console.log(headers);

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

                this._router.navigate(['/dashboards/project'])
                .then(() => {
                    window.location.reload();
                  });


            },
            (response) => {
                if (response.status === 400) {
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
