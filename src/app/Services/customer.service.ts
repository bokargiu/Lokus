import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable ({ providedIn: 'root'})

export class CustomerService{

    constructor(private http: HttpClient){}

    getCustomerIdByUserId(userId:string){
        return this.http.get<string>("http://localhost:5105/api/Customer/GetIdByUser?UserId=" + userId)
    }
}