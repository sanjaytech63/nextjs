"use client";
import React from 'react';
import { blogDetails } from '@/data';

const BlogDetails = ({ params }: { params: { id: string } }) => {

    const blog = blogDetails.find((blog) => blog.id === params.id);
    console.log('====================================');
    console.log(blog);
    console.log('====================================');
    if (!blog) {
        return (
            <div className="min-h-screen py-24 container mx-auto">
                <h1 className="text-3xl font-bold">Blog not found</h1>
            </div>
        );
    }

    return (
        <div className="min-h-screen py-24 container mx-auto">
            <h1 className="text-3xl font-bold">{blog.title}</h1>
            <p className="text-gray-600">{blog.date} • {blog.readTime}</p>
            <div className="mt-4">
                <img src={blog.image} alt={blog.title} className="w-full rounded-lg" />
            </div>
            <div className="mt-6">
                <h2 className="text-xl font-semibold">Description</h2>
                <p>{blog.description}</p>
            </div>
            <div className="mt-6">
                <h2 className="text-xl font-semibold">Content</h2>
                <p>{blog.content}</p>
            </div>
            <div className="mt-6">
                <h3 className="text-lg font-semibold">Author: {blog.author.name}</h3>
                <img src={blog.author.image} alt={blog.author.name} className="w-16 h-16 rounded-full" />
            </div>
        </div>
    );
};

export default BlogDetails;
