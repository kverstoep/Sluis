import { ActivatedRouteSnapshot, CanActivate, Router } from "@angular/router";
import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { GebruikerService } from "./components/gebruiker/gebruiker.service";

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {
    constructor(private service: GebruikerService, private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot): Observable<boolean> {
        return this.service.getCurrentGebruiker().pipe(
            map(gebruiker => {
                const requiredRole = route.data['requiredRole'];

                if (gebruiker?.roles.includes(requiredRole)) {
                    return true;
                } else {
                    this.router.navigate(['/admin']);
                    return false;
                }
            })
        );
    }
}