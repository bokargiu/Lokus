import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class SignupCustomerService {
  private apiUrl = "https://localhost:7101/api/Customer/Signup";

  constructor(private http: HttpClient) {}

  signUp(customer: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/SignUp`, customer);
  }
}
