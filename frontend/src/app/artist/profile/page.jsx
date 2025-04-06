"use client";
import React, { useState } from "react";

export default function ProfileForm() {
    const [profile, setProfile] = useState({
        name: "",
        email: "",
        bio: "",
        twitter: "",
        linkedin: "",
        profileImage: null,
    });

    const [previewImage, setPreviewImage] = useState(null);

    // Handle input change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setProfile({ ...profile, [name]: value });
    };

    // Handle profile picture upload
    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            setProfile({ ...profile, profileImage: file });
            setPreviewImage(URL.createObjectURL(file));
        }
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Profile Updated:", profile);
        alert("Profile Updated Successfully!");
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white p-6">
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-2xl font-bold text-center mb-4">Edit Profile</h2>

                {/* Profile Picture Upload */}
                <div className="flex flex-col items-center mb-4">
                    <label htmlFor="profileImage" className="cursor-pointer">
                        <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-gray-500">
                            {previewImage ? (
                                <img src={previewImage} alt="Profile" className="w-full h-full object-cover" />
                            ) : (
                                <div className="w-full h-full flex items-center justify-center text-gray-400">
                                    Upload
                                </div>
                            )}
                        </div>
                    </label>
                    <input type="file" id="profileImage" className="hidden" onChange={handleImageUpload} />
                </div>

                {/* Form Fields */}
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium">Full Name</label>
                        <input
                            type="text"
                            name="name"
                            value={profile.name}
                            onChange={handleChange}
                            className="w-full mt-1 p-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:border-blue-500"
                            placeholder="Your Name"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={profile.email}
                            onChange={handleChange}
                            className="w-full mt-1 p-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:border-blue-500"
                            placeholder="Your Email"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium">Bio</label>
                        <textarea
                            name="bio"
                            value={profile.bio}
                            onChange={handleChange}
                            className="w-full mt-1 p-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:border-blue-500"
                            placeholder="Tell us about yourself"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium">Twitter</label>
                        <input
                            type="text"
                            name="twitter"
                            value={profile.twitter}
                            onChange={handleChange}
                            className="w-full mt-1 p-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:border-blue-500"
                            placeholder="Twitter Profile URL"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium">LinkedIn</label>
                        <input
                            type="text"
                            name="linkedin"
                            value={profile.linkedin}
                            onChange={handleChange}
                            className="w-full mt-1 p-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:border-blue-500"
                            placeholder="LinkedIn Profile URL"
                        />
                    </div>

                    {/* Buttons */}
                    <div className="flex justify-between mt-4">
                        <button type="submit" className="px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded text-white">
                            Save
                        </button>
                        <button type="button" className="px-4 py-2 bg-gray-600 hover:bg-gray-500 rounded text-white">
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
