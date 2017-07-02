import {Component, Inject, OnInit} from '@angular/core';
// @Component是Angular提供的装饰器函数，用来描述Component的元数据
// 其中selector是指这个组件在HTML模板中的标签是什么
// template是嵌入（inline）的HTML模板，如果使用单独文件可用templateUrl
// styles是嵌入（inline）的CSS样式，如果使用单独文件可用styleUrls
@Component({
  selector: 'app-login',
  template: `
    <div>
      <form #formRef="ngForm" (ngSubmit)="onSubmit(formRef.value)">
        <fieldset ngModelGroup="login">
          <input required minlength="3"
                 [(ngModel)]="username"
                 #usernameRef="ngModel"
                 type="text"
                 placeholder="请输入用户名"
                 name="username">
          <div *ngIf="usernameRef.errors?.required">this is required</div>
          <div *ngIf="usernameRef.errors?.minlength">should be at least 3 charactors</div>
          <br>
          <input required
                 [(ngModel)]="password"
                 #passwordRef="ngModel"
                 type="password"
                 placeholder="请输入密码"
                 name="password">
          <div *ngIf="passwordRef.errors?.required">this is required</div>
          <br>
          <button type="submit">登录</button>
        </fieldset>
      </form>


    </div>
  `,
  styles: [`
    input.ng-invalid {
      border: 3px solid red;
    }

    input.ng-valid {
      border: 3px solid green;
    }
  `]
})
export class LoginComponent implements OnInit {
  username = ''
  password = ''

  constructor(@Inject('auth') private service) {
  }

  onSubmit(formValue) {
    console.log(formValue, this.service.loginWithCredentials(formValue.login.username, formValue.login.password
    ))
  }

  ngOnInit() {
  }

}
