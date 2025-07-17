import { HttpInterceptorFn } from "@angular/common/http";
import { environment } from "../../environments/environment";

export const tmdbApiInterceptor: HttpInterceptorFn = (req, next) => {
    if (req.url.includes('api.themoviedb.org')) {
        const tmdbReq = req.clone({
            setHeaders: {
                'Authorization': `Bearer ${environment.tmdbApiToken}`,
                'accept': 'application/json'
            }
        });
        return next(tmdbReq);
    }

    return next(req);
};