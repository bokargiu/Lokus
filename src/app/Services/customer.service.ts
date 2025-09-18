import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AuthService } from "./auth.service";

@Injectable ({ providedIn: 'root'})

export class CustomerService{
    private apiUrl = "http://localhost:5105/api/Customer";

    constructor(private http: HttpClient, private authService: AuthService){}

     getCustomerIdByUserId(userId: string) {
    const token = this.authService.getToken(); // pega o token salvo no login

    console.log("🔑 Token usado na requisição:", token); 

    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });

    return this.http.get<string>(`${this.apiUrl}/GetIdByUser?UserId=${userId}`, { headers });
  }
    // getCustomerIdByUserId(userId:string){
    //     return this.http.get<string>("http://localhost:5105/api/Customer/GetIdByUser?UserId=" + userId)
    // }
}

