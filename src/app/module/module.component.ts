import { Component, OnInit, NgModule } from '@angular/core';
import { ModuleService } from './module.service';
import { Module } from './module';
import { Schematable} from './schema-table';
import {Subject} from 'rxjs/Subject';


@Component({
  selector: 'app-module',
  templateUrl: './module.component.html',
  styleUrls: ['./module.component.css'],

})
export class ModuleComponent implements OnInit {
  modules: Module[];
  schematables: Schematable[];
  page:number = 1;
  p:number = 1;
  title:string;
  isShow1:boolean = true;
  isShow2:boolean = false;
  module = new Subject<string>();
  schematable = new Subject<string>();


  constructor(
    private moduleService: ModuleService
  ) { }

  ngOnInit(): void {
    this.getModules();
    this.getSchematables();
    this.getPage(1);
    this.getP(1);
  }
  getModules(): void {
    this.moduleService.getModules().then(modules => this.modules = modules);

  }
  getSchematables(): void {
    this.moduleService.getSchematables().then(schematables => this.schematables = schematables);
  }
  getPage(page: number) {
    this.page = page;
  }
  getP(p: number) {
    this.p = p;
  }
  choose1(isShow:boolean):void {
    this.isShow1= isShow;
    this.isShow1=true;
    this.isShow2=false;
  }
  choose2(isShow:boolean):void {
    this.isShow2= isShow;
    this.isShow2= true;
    this.isShow1=false;
  }
  chooseModal(tit:string){
    if (tit == '新增'){
      this.title='新增模块';
    }else if (tit =='修改'){
      this.title = '修改模块';
    }
  }
  chooseTable(tit:string){
    if (tit == '新增'){
      this.title='新增核心表';
    }else if (tit =='修改'){
      this.title = '修改核心表';
    }
  }


}
