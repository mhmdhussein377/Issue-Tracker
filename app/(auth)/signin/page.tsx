import React from 'react'

const page = () => {
    return (
        <section
            className="flex items-center justify-center min-h-screen bg-[#111113] w-full p-4">
            <div
                className="min-w-[400px] rounded-md p-4 flex flex-col gap-4 bg-[#18191b] border text-[#edeef0]">
                <h2 className="text-2xl">Signin</h2>
                <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-gray-100">Email</label><input
                        type="email"
                        name="email"
                        placeholder="PedroDuarte@gmail.com"
                        className="bg-[#111113] border p-1.5 rounded-md w-full"/></div>
                <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-gray-100">Password</label>
                <input
                    type="password"
                    name="password"
                    placeholder="ped123ro"
                    minLength={8}
                    className="bg-[#111113] border p-1.5 rounded-md w-full"/></div>
                <div className="flex justify-end">
                    <button className="p-1.5 px-3 border rounded-md bg-white/20 text-white">Signup</button>
                </div>
            </div>
        </section>
    )
}

export default page