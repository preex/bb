import { Component } from '@angular/core';
import { 
  Router,
  Event as RouterEvent,
  NavigationStart,
  NavigationEnd,
  NavigationCancel,
  NavigationError
} from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-sfe',
  templateUrl: './sfe.component.html',
  styleUrls: ['./sfe.component.css']
})
export class SfeComponent {
  
  loading: boolean = false;

  constructor(router: Router){

    let previousRoute = router.routerState.snapshot.url;

    // router.events
    //   .pipe(filter(event => event instanceof NavigationEnd))
    //   .subscribe((data: NavigationEnd) => {
    //     // We want to reset the scroll position on navigation except when navigating within
    //     // the documentation for a single component.
    //     if (!isNavigationWithinComponentView(previousRoute, data.urlAfterRedirects)) {
    //       resetScrollPosition();
    //     }

    //     previousRoute = data.urlAfterRedirects;
    //   })
    //   ;

    router.events.subscribe(e => {
        if (e instanceof NavigationEnd) {
          if (!isNavigationWithinComponentView(previousRoute, e.urlAfterRedirects)) {
            resetScrollPosition();
          }
        }

        this.updateLoadingBar(e);
    });
  }


  private updateLoadingBar(event: RouterEvent): void {
  if (event instanceof NavigationStart) {
    this.loading = true;
  }
  else if (event instanceof NavigationEnd
    || event instanceof NavigationCancel
    || event instanceof NavigationError) {
    this.loading = false;
  }
}

}

function isNavigationWithinComponentView(oldUrl: string, newUrl: string) {
  const componentViewExpression = /components\/(\w+)/;
  return oldUrl && newUrl
      && componentViewExpression.test(oldUrl)
      && componentViewExpression.test(newUrl)
      && oldUrl.match(componentViewExpression)[1] === newUrl.match(componentViewExpression)[1];
}

function resetScrollPosition() {
  if (typeof document === 'object' && document) {
    const sidenavContent = document.querySelector('.mat-drawer-content');
    if (sidenavContent) {
      sidenavContent.scrollTop = 0;
    }
  }
}
