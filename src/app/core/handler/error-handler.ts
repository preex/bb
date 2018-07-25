import { HttpErrorResponse } from "@angular/common/http";
import { Injectable, Injector } from "@angular/core";
import { Router } from "@angular/router";
import { NotificationService } from "../../service/notification/notification.service";

@Injectable()
class ErrorHandler implements ErrorHandler {

    // constructor(private injector: Injector) { }

    // handleError(error: Error | HttpErrorResponse) {

    //     const notificationService = this.injector.get(NotificationService);
    //     const router = this.injector.get(Router);

    //     if (error instanceof HttpErrorResponse) {
        
    //         // Server or connection error happened
    //         if (!navigator.onLine) {w
        
    //             // Handle offline error
    //             return notificationService.notify('No Internet Connection');
    //         } else {
        
    //             // Handle Http Error (error.status === 403, 404...)
    //             return notificationService.notify(`${error.status} - ${error.message}`);
    //         }
    //     } else {
        
    //         // Handle Client Error (Angular Error, ReferenceError...)
    //         router.navigate(['/error'], { queryParams: { error: error } });
    //     }
        
    //     // Log the error anyway
    //     console.error('It happens: ', error);
    // }
}