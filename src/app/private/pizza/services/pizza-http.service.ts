import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HTTPService } from 'src/app/core/http/http.service';
@Injectable()
export class PizzaService extends HTTPService {
  constructor(http: HttpClient) {
    super(http, 'pizzas');
  }
  create(model) {
    return this.http.post(this.resolve(), model).toPromise();
  }
  getAll() {
    return this.http.get(this.resolve()).toPromise();
  }
  get(id){
    return this.http.get(this.resolve(id), {
      params: {
        include: ['comments', 'comments.user', 'ingredients'].join(',')
      }
    }).toPromise();
  }
}
