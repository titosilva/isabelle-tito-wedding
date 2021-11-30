import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GiftDetailedModel, GiftModel } from '../models/gift';
import { environment } from '../../environments/environment';
import { ApiResponse } from '../models/api-response';

const apiRoute = 'gifts';

@Injectable({
  providedIn: 'root'
})
export class GiftsService {

  constructor(
    private http: HttpClient,
  ) { }

  listGifts(offset: number, quantity: number): Observable<ApiResponse<GiftModel[]>> {
    return this.http.get<ApiResponse<GiftModel[]>>(`${environment.api.server}/${apiRoute}`, {
      params: { 'O': offset.toFixed(0), 'Q': quantity.toFixed(0)}
    });
  }

  getGift(id: string): Observable<ApiResponse<GiftDetailedModel>> {
    return this.http.get<ApiResponse<GiftDetailedModel>>(`${environment.api.server}/${apiRoute}/${id}`);
  }
}
