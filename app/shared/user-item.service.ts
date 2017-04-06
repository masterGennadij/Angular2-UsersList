import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class UserItemService {
    private apiUrl: string = 'https://randomuser.me/api/?results=500';
    users: {};
    constructor(private http: Http) {}
    getUsers() {
        return this.http.get(this.apiUrl)
                        .toPromise()
                        .then(res => res.json().results)
                        .then(users => this.users = users)
                        .catch(this.handleError);		
	}
 
	private handleError(error: any) {
		console.error('An error occurred', error);
		return Promise.reject(error.message || error);
	
    }
}

