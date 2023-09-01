export class Raconte {
  _id!:number;
  title!:string;
  content!:string;
  image!:string;
  createdDate!: Date;
  category!:{
    name:string;
  }
  user!:{
    name:string;
    description?:string;
    imgUrl?:string;
    email?:string;
    password?:string;
  }
}