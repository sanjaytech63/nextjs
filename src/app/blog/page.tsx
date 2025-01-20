
"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { blogSection } from '@/data';

const Blog = () => {


    return (
        <div className="min-h-screen py-16 container mx-auto ">
            <div className="relative bg-gray-50 px-6 pt-16 pb-20 lg:px-8 lg:pt-24 lg:pb-28">
                <div className="absolute inset-0">
                    <div className="h-1/3 bg-white sm:h-2/3"></div>
                </div>
                <div className="relative mx-auto max-w-7xl">
                    <div className="text-center">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Column me neatly.</h2>
                        <p className="mx-auto mt-3 max-w-2xl text-xl text-gray-500 sm:mt-4">
                            This is your life and it's ending one minute @ a time...
                        </p>
                    </div>
                    <div className="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">
                        {
                            blogSection?.map((section, index) => {
                                return (
                                    <div key={index} className="flex flex-col overflow-hidden rounded-lg shadow-lg">
                                        <div className="flex-shrink-0">
                                            {/* Wrap Image with Link to navigate */}
                                            <Link href={`/blog/${index}`}>
                                                <Image
                                                    width={500}
                                                    height={500}
                                                    className="h-48 w-full object-cover cursor-pointer"
                                                    src={section.image}
                                                    alt={section.title}
                                                />
                                            </Link>
                                        </div>
                                        <div className="flex flex-1 flex-col justify-between bg-white p-6">
                                            <div className="flex-1">
                                                <p className="text-sm font-medium text-indigo-600">
                                                    <a href="#" className="hover:underline">{section.author.name}</a>
                                                </p>
                                                <Link href={`/blog/${index}`} className="mt-2 block">
                                                    <p className="text-xl font-semibold text-gray-900">{section.title}</p>
                                                    <p className="mt-3 text-base text-gray-500">{section.description}</p>
                                                </Link>
                                            </div>
                                            <div className="mt-6 flex items-center">
                                                <div className="flex-shrink-0">
                                                    <a href="#">
                                                        <span className="sr-only">{section.author.name}</span>
                                                        <Image
                                                            width={500}
                                                            height={500}
                                                            className="h-10 w-10 rounded-full"
                                                            src={section.author.image}
                                                            alt={section.author.name}
                                                        />
                                                    </a>
                                                </div>
                                                <div className="ml-3">
                                                    <p className="text-sm font-medium text-gray-900">
                                                        <a href="#" className="hover:underline">Roel Aufderehar</a>
                                                    </p>
                                                    <div className="flex space-x-1 text-sm text-gray-500">
                                                        <time>{section.date}</time>
                                                        <span aria-hidden="true">·</span>
                                                        <span>{section.readTime}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blog;
