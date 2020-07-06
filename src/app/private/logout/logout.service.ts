import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HTTPService } from 'src/app/core/http/http.service';
@Injectable({ providedIn: 'root' })
export class LogoutService extends HTTPService {
  constructor(http: HttpClient) {
    super(http, 'logout');
  }

  }

