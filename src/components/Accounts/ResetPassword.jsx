const ResetPassword = () => {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-10 rounded-[17px] shadow-lg w-full max-w-md relative">
                <h2 className="text-3xl font-bold text-center mb-2">Reset Your Password</h2>
                <p className="text-center text-gray-500 text-sm mb-6">
                    Enter your e-mail address and we will send you a link to reset your password
                </p>

                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-1">New Password<span className="text-red-500">*</span></label>
                        <input
                            type="password"
                            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-1">Confirm Password<span className="text-red-500">*</span></label>
                        <input
                            type="password"
                            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                        />
                    </div>

                    <p className="text-xs text-gray-500 mb-4">Min 8 character require</p>

                    <button
                        type="submit"
                        className="w-full bg-[#0b0c45] text-white py-2 rounded hover:bg-[#10126c] transition"
                    >
                        Save Your Password
                    </button>
                </form>

                {/* <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
        >
          ✕
        </button> */}
            </div>
        </div>
    )
}


export default ResetPassword;