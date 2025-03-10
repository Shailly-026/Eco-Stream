import { Avatar } from "@/components/Avatar";
import Card from "@/components/Card";

import React from 'react';


export default function profile() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <Card className="max-w-sm w-full bg-white rounded-2xl shadow-lg p-6 text-center">
        <Avatar className="w-24 h-24 mx-auto mb-4 border-4 border-green-500" />
        <h2 className="text-xl font-semibold text-gray-800">Alex Johnson</h2>
        <p className="text-gray-500">Voice Podcast Creator</p>
        <div className="flex justify-center gap-4 mt-4">
          <button className="flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-green-600">
            <Microphone size={18} /> Record
          </button>
          <button className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600">
            <PlayCircle size={18} /> Listen
          </button>
        </div>
      </Card>
    </div>
  );
}
