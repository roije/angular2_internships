import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
/**
 * Created by roije on 16/11/2016.
 */

@Injectable()
export class InternshipsService{
  private internships: any[];
  private url: string = "http://localhost:3000/api/internships";

  constructor(private http: Http){

  }

  public getAllLocalInternships(): any[] {
    return this.internships;
  }

  public getAllRemoteInternships() : Observable<any[]>{
    return this.http.get(this.url)
      .map((res: Response) => {
        let data = res.json();
        console.log(data);
        this.internships = data;
        return data || {};
      })
      .catch(this.handleError)
  }

  public

  private handleError(error: Response | any) {
    return Observable.throw("some error message");
  }
}
