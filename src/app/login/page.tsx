"use client";
import styles from './style.module.scss'
import { Container } from "@/components/Container";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import Link from 'next/link';
import { signIn } from "next-auth/react"

const schemForma = z.object({
  email: z.string().email("informe um email valido"),
  password: z.string().min(6, "senha invalida")
})

type FormProps = z.infer<typeof schemForma>;
const Page = () => {

  const {
    handleSubmit,
    register,
    watch,
    setValue,
    formState: { errors },
  } = useForm<FormProps>({
    criteriaMode: 'all',
    resolver: zodResolver(schemForma),
    defaultValues: {
      email: "",
      password: ""
    },
  });

  const handleFormSubmit = (e: FormProps) => {

    const data = {
      email: e.email,
      password: e.password
    };

    signIn("credentials", {
      ...data,
      callbackUrl: "/dashboard"
    })

  };

  return (
    <>

      <Container>
        <div className={styles.center}>

          <section className={styles.form}>

            <form onSubmit={handleSubmit(handleFormSubmit)}>
              <h2>T<span>K</span></h2>
              <input  {...register("email")} type="email" required />
              {errors.email?.message &&
                <p>{errors.email?.message}</p>
              }
              <input  {...register("password")} type="password" required />
              {errors.password?.message &&
                <p>{errors.password?.message}</p>
              }
              <div className={styles.cadastro}>
                <Link href={'/cadastro'}>Clique aqui caso não tenha cadastro</Link>
              </div>
              <input type="submit" value={'Logar'} />
            </form>

          </section>
        </div>

      </Container>
    </>
  )
}

export default Page;
