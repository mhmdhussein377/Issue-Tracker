import InputField from "@/components/UI/InputField"
import {signupInputFields} from "@/constants"
import Link from "next/link"
import Button from "../(components)/Button"

const page = () => {
    return (
        <section
            className="flex items-center justify-center min-h-screen bg-[#111113] w-full p-4">
            <div
                className="min-w-[400px] rounded-md p-4 flex flex-col gap-4 bg-[#18191b] border text-[#edeef0]">
                <h2 className="text-2xl">Signup</h2>
                {signupInputFields.map(({label, type, name, placeholder, minLength}, index) => (<InputField
                    key={index}
                    label={label}
                    type={type}
                    name={name}
                    placeholder={placeholder}
                    minLength={minLength}/>))}
                <p className="text-white text-sm">Already have an account? <Link href={"/signin"} className="text-[17px] ml-2">Sign In</Link></p>
                <Button label={"Signup"} />
            </div>
        </section>
    )
}

export default page