import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { provideAuth, getAuth, connectAuthEmulator } from '@angular/fire/auth';

import { FeatureLoginModule } from '@alai/shared/feature-login';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './pages/login/login.component';
import { environment } from '../environments/environment';

@NgModule({
    declarations: [AppComponent, LoginComponent],
    imports: [
        BrowserModule,
        FeatureLoginModule,
        AppRoutingModule,
        provideFirebaseApp(() => initializeApp(environment.fire)),
        provideAuth(() => {
            const auth = getAuth();
            if (environment.useEmulator) {
                connectAuthEmulator(auth, 'http://localhost:9099/');
            }
            return auth;
        }),
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
