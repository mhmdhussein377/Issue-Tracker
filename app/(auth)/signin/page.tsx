"use client"
import InputField from '@/components/UI/InputField';
import {signinInputFields} from "@/constants/index"
import Link from 'next/link';

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
                <div className="flex justify-end">
                    <button className="p-1.5 px-3 border rounded-md bg-white/20 text-white">Signup</button>
                </div>
            </form>
        </section>
    )
}

export default page