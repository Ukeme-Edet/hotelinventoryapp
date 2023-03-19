import { Inject, Injectable } from '@angular/core';
import { routeConfigToken } from './routeConfig.service';
import { RouteConfig } from './routeConfig';

@Injectable({
  providedIn: 'any'
})
export class ConfigService {

  constructor(@Inject(routeConfigToken) private configToken: RouteConfig) {
    console.log("ConfigService initialised");
    console.log(this.configToken);
  }
}
