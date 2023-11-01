"use client"
import InputField from '@/components/UI/InputField';
import {signinInputFields} from "@/constants/index"
import Link from 'next/link';
import Button from '../(components)/Button';

const page = () => {

    return (
        <section
            className="flex items-center justify-center min-h-screen bg-[#111113] w-full p-4">
            <form
                className="min-w-[400px] rounded-md p-4 flex flex-col gap-4 bg-[#18191b] border text-[#edeef0]">
                <h2 className="text-2xl">Signin</h2>
                {signinInputFields.map(({label, type, name, placeholder, minLength}, index) => (<InputField
                    key={index}
                    label={label}
                    type={type}
                    name={name}
                    placeholder={placeholder}
                    minLength={minLength}/>))}
                <p className='text-sm'>Don't have an account? <Link href={"/signup"} className='ml-1 text-[17px]'>Signup</Link></p>
                <Button label={"Signin"} />
            </form>
        </section>
    )
}

export default page