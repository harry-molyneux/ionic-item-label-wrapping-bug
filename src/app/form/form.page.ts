import {Component} from '@angular/core';
import {
    IonBadge,
    IonContent,
    IonHeader,
    IonInput,
    IonItem,
    IonLabel,
    IonList,
    IonTitle,
    IonToolbar
} from '@ionic/angular/standalone';
import {FormsModule} from '@angular/forms';

@Component({
    selector: 'app-form',
    templateUrl: 'form.page.html',
    standalone: true,
    imports: [
        IonHeader,
        IonToolbar,
        IonTitle,
        IonContent,
        IonList,
        IonItem,
        IonInput,
        FormsModule,
        IonLabel,
        IonBadge,
    ],
})
export class FormPage {
}
