const RightSidePortion = () => {

    return (
        <div className="hidden md:flex w-1/2 bg-[#161950] text-white items-center justify-center relative overflow-hidden rounded-bl-[110px]">
            <div className="flex items-center space-x-4 z-10">
                {/* Logo on the left */}
                <div className="w-16">
                    <img src="src/assets/logo.png" alt="Logo" />
                </div>

                {/* Text on the right */}
                <div>
                    <h1 className="text-3xl font-bold">Megapolis</h1>
                    <p className="text-xl text-gray-300">Advisory</p>
                </div>
            </div>



        </div>
    )

}

export default RightSidePortion;