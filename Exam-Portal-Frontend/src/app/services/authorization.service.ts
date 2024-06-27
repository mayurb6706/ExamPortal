import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService implements HttpInterceptor {

  constructor(private authService:AuthService ) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
		
		const token=this.authService.getSavedToken();
		
		if(token!=null)
		{
			request=request.clone({
				setHeaders:{Authorization: `Bearer ${token}`}
			})
		}
		return next.handle(request);
	}
}
