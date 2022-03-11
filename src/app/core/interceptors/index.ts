import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthService } from '@services/auth.service';

import { AuthInterceptor } from './auth-interceptor';

export const interceptors = [
  {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true,
  },
];