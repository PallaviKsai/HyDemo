import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Http,Response,Headers } from '@angular/http';
import 'rxjs/Rx';
import {Observable} from "rxjs";
import { GraphService } from "./dashboard.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'Devops DashBoard';
    repoName = 'rigcode'
    book: any
    data: any
    private _Url = 'https://gitlab.com/api/v4/projects/keerthiii%2F'+this.repoName+'/repository/commits?private_token=xTR-iGW4Ns7AzuR5bSoc&since=2018-3-12';
    constructor (private _graphService: GraphService, private _http: Http) { }

    public lineChartData:Array<any> = [
         {data: [], label: 'Count'}
            
    ];
    public lineChartLabels:Array<any> = [];
    public lineChartOptions:any = {
         responsive: true
    };

    public lineChartLegend:boolean = true;
    public lineChartType:string = 'line';
      
    public chartHovered(e:any):void {
          console.log(e);
    } 

    ngOnInit() {
            // this.getData().subscribe(data => {
            //     this.data = data;
            //     console.log("JSON Data",this.data);
            //     this.dataArr = [{
            //         dateCom: this.data[0].committed_date,
            //         name: this.data[0].author_name,
            //         mssg: this.data[0].message
            //     }]
            //     console.log(this.dataArr)
            //     this._graphService.storeData(this.dataArr);
            //     console.log("Retruned from Post()")
            //     this.getGraph();
            // })
    // console.log("**",this.data);
        // console.log(this.dataArr)
        //this.getGraph();
           let res = []
           this._graphService.fetchData().subscribe((book:any)=>{
                res = book;
                this.book = book;
                this.lineChartData[0].data.push(this.book[0].today.length);
                this.lineChartLabels.push("Today")
                this.lineChartData[0].data.push(this.book[1].last7Days.length);
                this.lineChartLabels.push("Last7Days")
                this.lineChartData[0].data.push(this.book[2].last14days.length);
                this.lineChartLabels.push("last14Days")
                console.log("Book",this.book);
           }, err=>console.log(err));
                console.log("Tanuja",this.book);
      }


    some() {
        console.log("IN")
         this.getData().subscribe(data => {
            this.data = data;
             let  dataArr = [];
            console.log("JSON Data",this.data);
            this.data.map((item,index)=>{
                dataArr.push({
                    committedDate: item.committed_date,
                    authorName: item.author_name,
                    commitMessage: item.message
                })
            })
          
            console.log("DateArr",dataArr)
            // this._graphService.storeData(dataArr);

        this._graphService.storeData(dataArr).subscribe((result:Response) => {
                //console.log("Throwing result",result)
        })
            //console.log("Retruned from Post()")
           // this.getGraph();
        })
        // let data = {
        //     "name":"alkjdkajd"
        // }

        // this._graphService.storeData(dataArr).subscribe((result:Response) => {
        //         console.log("***********************************",result)
        // })
    }
   getData() {
        return this._http.get(this._Url).map(res => {
          console.log(res);
          return res.json();
        });
    }

}




