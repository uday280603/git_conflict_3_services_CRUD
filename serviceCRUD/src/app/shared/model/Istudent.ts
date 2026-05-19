export interface Istudent {
  stdId: number;
  fname: string;
  lname: string;
  email: string;
  contact: number;
  isActive: boolean;
}


export interface IresStd{
    msg : string,
    data : Istudent
}