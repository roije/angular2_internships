import {Injectable} from "@angular/core";
import {Http, Response, Headers, RequestOptions} from "@angular/http";
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

  public createInternship(internship : any) : Observable<any> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });


    return this.http.post(this.url, internship, options)
      .map((res: Response) => {
        let data = res.json();
        return data || {};
      })
      .catch(this.handleError);
  }

  public getInternship(id: number) : Observable<any> {
    return this.http.get(this.url + '/' + id)
      .map((res: Response) => {
        let data = res.json();
        //console.log(data);
        return data || {};
      })
      .catch(this.handleError)
  }

  public updateInternship(id: number, internship: any) : Observable<any> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    console.log(id);
    return this.http.put(this.url + "/" + id, internship, options)
      .map((res: Response) => {
        let data = res.json();
        //console.log(data);
        return data || {};
      })
      .catch(this.handleError);
  }

  private handleError(error: Response | any) {
    return Observable.throw("some error message");
  }
}
