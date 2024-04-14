import React from 'react'

const MyAccount = () => {
	return (
		<section className=' py-1 bg-slate-50'>
			<div className='w-full lg:w-8/12 px-4 mx-auto mt-6'>
				<div className='relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-slate-100 border-0'>
					<div className='rounded-t bg-white mb-0 px-6 py-6'>
						<div className='text-center flex justify-between'>
							<h6 className='text-slate-700 text-xl font-bold'>My Account</h6>
							<button
								className='bg-indigo-700 text-white active:bg-indigo-900 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150'
								type='button'>
								Settings
							</button>
						</div>
					</div>
					<div className='flex-auto px-4 lg:px-10 py-10 pt-0'>
						<form>
							<h6 className='text-slate-400 text-sm mt-3 mb-6 font-bold uppercase'>
								User Information
							</h6>
							<div className='flex flex-wrap'>
								<div className='w-full lg:w-6/12 px-4'>
									<div className='relative w-full mb-3'>
										<label
											className='block uppercase text-slate-600 text-xs font-bold mb-2'
											htmlFor='grid-password'>
											Username
										</label>
										<input
											type='text'
											className='border-0 px-3 py-3 placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150'
											defaultValue='abhi'
										/>
									</div>
								</div>
								<div className='w-full lg:w-6/12 px-4'>
									<div className='relative w-full mb-3'>
										<label
											className='block uppercase text-slate-600 text-xs font-bold mb-2'
											htmlFor='grid-password'>
											Email address
										</label>
										<input
											type='email'
											className='border-0 px-3 py-3 placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150'
											defaultValue='example@communitybrands.com'
										/>
									</div>
								</div>
								<div className='w-full lg:w-6/12 px-4'>
									<div className='relative w-full mb-3'>
										<label
											className='block uppercase text-slate-600 text-xs font-bold mb-2'
											htmlFor='grid-password'>
											First Name
										</label>
										<input
											type='text'
											className='border-0 px-3 py-3 placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150'
											defaultValue='Abhishekh'
										/>
									</div>
								</div>
								<div className='w-full lg:w-6/12 px-4'>
									<div className='relative w-full mb-3'>
										<label
											className='block uppercase text-slate-600 text-xs font-bold mb-2'
											htmlFor='grid-password'>
											Last Name
										</label>
										<input
											type='text'
											className='border-0 px-3 py-3 placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150'
											defaultValue='Gupta'
										/>
									</div>
								</div>
							</div>
							<hr className='mt-6 border-b-1 border-slate-300' />
							<h6 className='text-slate-400 text-sm mt-3 mb-6 font-bold uppercase'>
								Contact Information
							</h6>
							<div className='flex flex-wrap'>
								<div className='w-full lg:w-12/12 px-4'>
									<div className='relative w-full mb-3'>
										<label
											className='block uppercase text-slate-600 text-xs font-bold mb-2'
											htmlFor='grid-password'>
											Address
										</label>
										<input
											type='text'
											className='border-0 px-3 py-3 placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150'
											defaultValue='Community Brands'
										/>
									</div>
								</div>
								<div className='w-full lg:w-4/12 px-4'>
									<div className='relative w-full mb-3'>
										<label
											className='block uppercase text-slate-600 text-xs font-bold mb-2'
											htmlFor='grid-password'>
											City
										</label>
										<input
											type='email'
											className='border-0 px-3 py-3 placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150'
											defaultValue='Pune'
										/>
									</div>
								</div>
								<div className='w-full lg:w-4/12 px-4'>
									<div className='relative w-full mb-3'>
										<label
											className='block uppercase text-slate-600 text-xs font-bold mb-2'
											htmlFor='grid-password'>
											Country
										</label>
										<input
											type='text'
											className='border-0 px-3 py-3 placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150'
											defaultValue='India'
										/>
									</div>
								</div>
								<div className='w-full lg:w-4/12 px-4'>
									<div className='relative w-full mb-3'>
										<label
											className='block uppercase text-slate-600 text-xs font-bold mb-2'
											htmlFor='grid-password'>
											Postal Code
										</label>
										<input
											type='text'
											className='border-0 px-3 py-3 placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150'
											defaultValue='Postal Code'
										/>
									</div>
								</div>
							</div>
							<hr className='mt-6 border-b-1 border-slate-300' />
							<h6 className='text-slate-400 text-sm mt-3 mb-6 font-bold uppercase'>
								Billing Information
							</h6>
							<div className='flex flex-wrap'>
								<div className='w-full lg:w-12/12 px-4'>
									<div className='relative w-full mb-3'>
										<label
											className='block uppercase text-slate-600 text-xs font-bold mb-2'
											htmlFor='grid-password'>
											Address
										</label>
										<input
											type='text'
											className='border-0 px-3 py-3 placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150'
											defaultValue='Community Brands'
										/>
									</div>
								</div>
								<div className='w-full lg:w-4/12 px-4'>
									<div className='relative w-full mb-3'>
										<label
											className='block uppercase text-slate-600 text-xs font-bold mb-2'
											htmlFor='grid-password'>
											City
										</label>
										<input
											type='email'
											className='border-0 px-3 py-3 placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150'
											defaultValue='Pune'
										/>
									</div>
								</div>
								<div className='w-full lg:w-4/12 px-4'>
									<div className='relative w-full mb-3'>
										<label
											className='block uppercase text-slate-600 text-xs font-bold mb-2'
											htmlFor='grid-password'>
											Country
										</label>
										<input
											type='text'
											className='border-0 px-3 py-3 placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150'
											defaultValue='India'
										/>
									</div>
								</div>
								<div className='w-full lg:w-4/12 px-4'>
									<div className='relative w-full mb-3'>
										<label
											className='block uppercase text-slate-600 text-xs font-bold mb-2'
											htmlFor='grid-password'>
											Postal Code
										</label>
										<input
											type='text'
											className='border-0 px-3 py-3 placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150'
											defaultValue='Postal Code'
										/>
									</div>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</section>
	)
}

export default MyAccount
