"use client"
import { z } from "zod";
import { SubmitHandler } from "react-hook-form";
import { useForm } from 'react-hook-form';
import { zodResolver } from "@hookform/resolvers/zod";

export default function Contact() {
type Inputs = {
    name: string;
    email: string;
    num: string;
    message: string;
   };

   const InputForm = z.object({
    name: z.string(),
    email: z.string(),
    num: z.string().min(10),
    message: z.string(),
  });

 const { register, handleSubmit } = useForm<Inputs>({resolver: zodResolver(InputForm)});
 const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

 return (
    <form className="d-flex" onSubmit={handleSubmit(onSubmit)}>
      <div>
      <label htmlFor="name">
        name:
      </label>
      <input {...register("name")} type="text" />
      </div>
      <div>
      <label htmlFor="email">
        email:
      </label>
      <input {...register("email")} type="email" />
      </div>
      <div>
      <label htmlFor="num">
        num:
      </label>
      <input {...register("num")} type="text" />
      </div>
      <div>
      <label htmlFor="message">message</label>
      <input {...register("message")} type="text" />
      </div>
      <button type="submit">Submit</button>
    </form>
 );
}