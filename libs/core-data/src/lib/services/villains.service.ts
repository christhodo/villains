import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Villain } from '@villains/api-interfaces';
import { VillainEnvironment, VILLAIN_ENVIRONMENT } from '@villains/environment';

@Injectable({
  providedIn: 'root',
})
export class VillainsService {
  model = 'villains';

  constructor(
    private httpClient: HttpClient,
    @Inject(VILLAIN_ENVIRONMENT) private environment: VillainEnvironment
  ) {}

  all() {
    return this.httpClient.get<Villain[]>(this.getUrl());
  }

  getOne(villainId: string) {
    return this.httpClient.get<Villain>(this.getUrlById(villainId));
  }

  create(villains: Villain) {
    return this.httpClient.post<Villain>(this.getUrl(), villains);
  }

  update(villains: Villain) {
    return this.httpClient.patch<Villain>(
      this.getUrlById(villains.id),
      villains
    );
  }

  delete({ id }: Villain) {
    return this.httpClient.delete<Villain>(this.getUrlById(id));
  }

  private getUrl() {
    return `${this.environment.apiUrl}${this.model}`;
  }

  private getUrlById(id) {
    return `${this.getUrl()}/${id}`;
  }
}
