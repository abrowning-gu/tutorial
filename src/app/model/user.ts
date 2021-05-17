export class User {
    username:string;
    password:string;
    gravatar:string;
    image:string;
    signupdate:Date;
   
    constructor(username:string,password:string=null,gravatar:string=null,image:string=null,signupdate:Date=null){
        this.username = username;
        this.password = password;
        this.gravatar = gravatar;
        this.image = image;
        this.signupdate = signupdate;
       
    }
}
