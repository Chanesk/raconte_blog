export class Raconte {
  id!:number;
  title!:string;
  content!:string;
  image!:string;
  createdDate!: Date;
  category!:{
    id:number;
    name:string;
  }
  user!:{
    id:number;
    name:string;
    description?:string;
    imgUrl?:string;
    email:string;
    password?:string;
  }
}