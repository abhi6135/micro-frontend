import React, { useContext, useState } from 'react'
import { RadioGroup } from '@headlessui/react'
import { ArrowLeftIcon, StarIcon } from '@heroicons/react/20/solid'
import { useNavigate } from 'react-router-dom'
import classNames from 'classnames'
import Cart from '@ecommerce/components/Cart'
import { AppContext } from '@ecommerce/AppProvider'
import product from '@ecommerce/mockData/productDetail'

const ProductDetail = () => {
	const navigate = useNavigate()

	const [selectedColor, setSelectedColor] = useState(product.colors[0])
	const [selectedSize, setSelectedSize] = useState(product.sizes[2])
	const { addItemToCart } = useContext(AppContext)
	return (
		<div className='bg-white'>
			<div className='mx-auto max-w-2xl px-4 py-8 sm:px-6 sm:py-12 lg:max-w-7xl lg:px-8'>
				<Cart />

				<button
					type='button'
					className='font-medium text-indigo-600 hover:text-indigo-500 flex flex-row gap-2 flex-nowrap items-center pb-8'
					onClick={() => {
						navigate(-1)
					}}>
					<ArrowLeftIcon className='h-5 w-5' aria-hidden='true' />
					Back
				</button>
				<div className='grid w-full grid-cols-1 items-start gap-x-6 gap-y-8 sm:grid-cols-12 lg:gap-x-8'>
					<div className='aspect-h-3 aspect-w-2 overflow-hidden rounded-lg bg-gray-100 sm:col-span-4 lg:col-span-5'>
						<img
							src={product.imageSrc}
							alt={product.imageAlt}
							className='object-cover object-center'
						/>
					</div>
					<div className='sm:col-span-8 lg:col-span-7'>
						<h2 className='text-2xl font-bold text-gray-900 sm:pr-12'>
							{product.name}
						</h2>

						<section aria-labelledby='information-heading' className='mt-2'>
							<h3 id='information-heading' className='sr-only'>
								Product information
							</h3>

							<p className='text-2xl text-gray-900'>{product.price}</p>

							{/* Reviews */}
							<div className='mt-6'>
								<h4 className='sr-only'>Reviews</h4>
								<div className='flex items-center'>
									<div className='flex items-center'>
										{[0, 1, 2, 3, 4].map((rating) => (
											<StarIcon
												key={rating}
												className={classNames(
													product.rating > rating
														? 'text-gray-900'
														: 'text-gray-200',
													'h-5 w-5 flex-shrink-0'
												)}
												aria-hidden='true'
											/>
										))}
									</div>
									<p className='sr-only'>{product.rating} out of 5 stars</p>
									<a
										href='#'
										className='ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500'>
										{product.reviewCount} reviews
									</a>
								</div>
							</div>
						</section>

						<section aria-labelledby='options-heading' className='mt-10'>
							<h3 id='options-heading' className='sr-only'>
								Product options
							</h3>

							<form>
								{/* Colors */}
								<div>
									<h4 className='text-sm font-medium text-gray-900'>Color</h4>

									<RadioGroup
										value={selectedColor}
										onChange={setSelectedColor}
										className='mt-4'>
										<RadioGroup.Label className='sr-only'>
											Choose a color
										</RadioGroup.Label>
										<span className='flex items-center space-x-3'>
											{product.colors.map((color) => (
												<RadioGroup.Option
													key={color.name}
													value={color}
													className={({ active, checked }) =>
														classNames(
															color.selectedClass,
															active && checked ? 'ring ring-offset-1' : '',
															!active && checked ? 'ring-2' : '',
															'relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none'
														)
													}>
													<RadioGroup.Label as='span' className='sr-only'>
														{color.name}
													</RadioGroup.Label>
													<span
														aria-hidden='true'
														className={classNames(
															color.class,
															'h-8 w-8 rounded-full border border-black border-opacity-10'
														)}
													/>
												</RadioGroup.Option>
											))}
										</span>
									</RadioGroup>
								</div>

								{/* Sizes */}
								<div className='mt-10'>
									<div className='flex items-center justify-between'>
										<h4 className='text-sm font-medium text-gray-900'>Size</h4>
										<a
											href='#'
											className='text-sm font-medium text-indigo-600 hover:text-indigo-500'>
											Size guide
										</a>
									</div>

									<RadioGroup
										value={selectedSize}
										onChange={setSelectedSize}
										className='mt-4'>
										<RadioGroup.Label className='sr-only'>
											Choose a size
										</RadioGroup.Label>
										<div className='grid grid-cols-4 gap-4'>
											{product.sizes.map((size) => (
												<RadioGroup.Option
													key={size.name}
													value={size}
													disabled={!size.inStock}
													className={({ active }) =>
														classNames(
															size.inStock
																? 'cursor-pointer bg-white text-gray-900 shadow-sm'
																: 'cursor-not-allowed bg-gray-50 text-gray-200',
															active ? 'ring-2 ring-indigo-500' : '',
															'group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1'
														)
													}>
													{({ active, checked }) => (
														<>
															<RadioGroup.Label as='span'>
																{size.name}
															</RadioGroup.Label>
															{size.inStock ? (
																<span
																	className={classNames(
																		active ? 'border' : 'border-2',
																		checked
																			? 'border-indigo-500'
																			: 'border-transparent',
																		'pointer-events-none absolute -inset-px rounded-md'
																	)}
																	aria-hidden='true'
																/>
															) : (
																<span
																	aria-hidden='true'
																	className='pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200'>
																	<svg
																		className='absolute inset-0 h-full w-full stroke-2 text-gray-200'
																		viewBox='0 0 100 100'
																		preserveAspectRatio='none'
																		stroke='currentColor'>
																		<line
																			x1={0}
																			y1={100}
																			x2={100}
																			y2={0}
																			vectorEffect='non-scaling-stroke'
																		/>
																	</svg>
																</span>
															)}
														</>
													)}
												</RadioGroup.Option>
											))}
										</div>
									</RadioGroup>
								</div>

								<button
									type='button'
									className='mt-6 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
									onClick={() => addItemToCart()}>
									Add to bag
								</button>
							</form>
						</section>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ProductDetail
