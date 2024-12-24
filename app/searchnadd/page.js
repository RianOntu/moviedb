'use client'
import React, { useState } from "react";
import Navbar from "../components/Navbar";

function Page() {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div class="bg-black text-white min-h-screen">
      <Navbar />

      <main class="container mx-auto px-4 pt-24 pb-8">
        <div class="flex justify-between items-center mb-8">
          <h1 class="text-3xl font-bold">Compare Movies</h1>
          <button class="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700 transition-colors">
            Add Movie +
          </button>
        </div>

        <div class="grid gap-6 md:grid-cols-2">
          <div class="bg-zinc-900 rounded-lg p-4 flex flex-col">
            <div class="flex justify-end mb-4">
              <button class="text-gray-400 hover:text-white">✕</button>
            </div>
            <div class="grid grid-cols-5 gap-8">
              <div class="col-span-2 h-full">
                <img
                  src="https://image.tmdb.org/t/p/original/yfK7zxNL63VWfluFuoUaJj5PdNw.jpg"
                  alt="Snowden"
                  class="w-full rounded-lg mb-4 object-contain max-h-full"
                />
                <h2 class="text-xl font-bold mb-2 text-center">Snowden</h2>
              </div>
              <div class="w-full space-y-4 col-span-3">
                <div class="bg-zinc-800 p-3 rounded">
                  <span class="text-gray-400">Rating:</span>
                  <span class="float-right">7.1/10</span>
                </div>
                <div class="bg-zinc-800 p-3 rounded">
                  <span class="text-gray-400">Release Year:</span>
                  <span class="float-right">2016</span>
                </div>
                <div class="bg-zinc-800 p-3 rounded">
                  <span class="text-gray-400">Runtime:</span>
                  <span class="float-right">134 min</span>
                </div>
                <div class="bg-zinc-800 p-3 rounded">
                  <span class="text-gray-400">Budget:</span>
                  <span class="float-right">$40.0M</span>
                </div>
                <div class="bg-zinc-800 p-3 rounded">
                  <span class="text-gray-400">Revenue:</span>
                  <span class="float-right">$37.4M</span>
                </div>
                <div class="bg-zinc-800 p-3 rounded">
                  <span class="text-gray-400">Genres:</span>
                  <div class="mt-2 flex flex-wrap gap-2">
                    <span class="bg-zinc-700 px-2 py-1 rounded-full text-sm">
                      Drama{" "}
                    </span>
                    <span class="bg-zinc-700 px-2 py-1 rounded-full text-sm">
                      History{" "}
                    </span>
                    <span class="bg-zinc-700 px-2 py-1 rounded-full text-sm">
                      Crime{" "}
                    </span>
                    <span class="bg-zinc-700 px-2 py-1 rounded-full text-sm">
                      Thriller
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="bg-zinc-900 rounded-lg p-4 flex flex-col min-h-[400px]">
            <div class="flex justify-end mb-4">
              <button class="text-gray-400 hover:text-white">✕</button>
            </div>
            <div class="flex-grow flex flex-col items-center justify-center">
              <a
                href="/searchnadd"
                class="bg-zinc-800 text-white px-6 py-3 rounded hover:bg-zinc-700 transition-colors cursor-pointer"
              >
                Select Movie
              </a>
            </div>
          </div>

        
        </div>
      </main>
      

      {isOpen && (
        <div class="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
          <div class="bg-zinc-900 p-6 rounded-lg w-full max-w-2xl">
            <div class="flex justify-between items-center mb-4">
              <h2 class="text-xl font-bold">Search Movie</h2>
              <button
                onClick={isOpen=>setIsOpen(!isOpen)}
                class="text-gray-400 hover:text-white"
              >
                ✕
              </button>
            </div>
            <input
              type="text"
              placeholder="Type movie name..."
              class="w-full bg-zinc-800 text-white px-4 py-2 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-red-600"
            />
            <div class="max-h-96 overflow-y-auto">
              <div class="flex items-center gap-4 p-2 hover:bg-zinc-800 cursor-pointer rounded">
                <img
                  src="https://image.tmdb.org/t/p/original/n0ybibhJtQ5icDqTp8eRytcIHJx.jpg"
                  alt="The Social Network"
                  class="w-16 h-24 object-cover rounded"
                />
                <div>
                  <h3 class="font-bold">The Social Network</h3>
                  <p class="text-sm text-gray-400">2010</p>
                </div>
              </div>

              <div class="flex items-center gap-4 p-2 hover:bg-zinc-800 cursor-pointer rounded">
                <img
                  src="https://image.tmdb.org/t/p/original/hpmbpZqgJosOCvGaKy3uohHxgsw.jpg"
                  alt="7 Days Without Social Networks"
                  class="w-16 h-24 object-cover rounded"
                />
                <div>
                  <h3 class="font-bold">7 Days Without Social Networks</h3>
                  <p class="text-sm text-gray-400">2021</p>
                </div>
              </div>

              <div class="flex items-center gap-4 p-2 hover:bg-zinc-800 cursor-pointer rounded">
                <img
                  src="https://image.tmdb.org/t/p/original/3SZDJa4F8jag4cBu376zXqrKblC.jpg"
                  alt="City of Desire No. 4 Outrageous and Dirty Social Network Money"
                  class="w-16 h-24 object-cover rounded"
                />
                <div>
                  <h3 class="font-bold">
                    City of Desire No. 4 Outrageous and Dirty Social Network
                    Money
                  </h3>
                  <p class="text-sm text-gray-400">2023</p>
                </div>
              </div>

              <div class="flex items-center gap-4 p-2 hover:bg-zinc-800 cursor-pointer rounded">
                <img
                  src="https://image.tmdb.org/t/p/original/hUvruxIU05hhR66ELhhgJSe5Ces.jpg"
                  alt="Inside Facebook: Secrets of the Social Network"
                  class="w-16 h-24 object-cover rounded"
                />
                <div>
                  <h3 class="font-bold">
                    Inside Facebook: Secrets of the Social Network
                  </h3>
                  <p class="text-sm text-gray-400">2018</p>
                </div>
              </div>

              <div class="flex items-center gap-4 p-2 hover:bg-zinc-800 cursor-pointer rounded">
                <img
                  src="https://image.tmdb.org/t/p/original/wsqXtsLIwoXwgFbqRhz4WHBkpTn.jpg"
                  alt="Murder on the Social Network"
                  class="w-16 h-24 object-cover rounded"
                />
                <div>
                  <h3 class="font-bold">Murder on the Social Network</h3>
                  <p class="text-sm text-gray-400">N/A</p>
                </div>
              </div>

              <div class="flex items-center gap-4 p-2 hover:bg-zinc-800 cursor-pointer rounded">
                <img
                  src="https://image.tmdb.org/t/p/original/sFLwrAvQyozusvbULldhShTqsnN.jpg"
                  alt="Inside the Social Network: Facebook's Difficult Year"
                  class="w-16 h-24 object-cover rounded"
                />
                <div>
                  <h3 class="font-bold">
                    Inside the Social Network: Facebook's Difficult Year
                  </h3>
                  <p class="text-sm text-gray-400">2019</p>
                </div>
              </div>

              <div class="flex items-center gap-4 p-2 hover:bg-zinc-800 cursor-pointer rounded">
                <img
                  src="/placeholder.jpg"
                  alt="The Social Network 2"
                  class="w-16 h-24 object-cover rounded"
                />
                <div>
                  <h3 class="font-bold">The Social Network 2</h3>
                  <p class="text-sm text-gray-400">N/A</p>
                </div>
              </div>

              <div class="flex items-center gap-4 p-2 hover:bg-zinc-800 cursor-pointer rounded">
                <img
                  src="https://image.tmdb.org/t/p/original/ijHJ1CCpa56wrB7BdB6lNg7r8vN.jpg"
                  alt="Chatroom"
                  class="w-16 h-24 object-cover rounded"
                />
                <div>
                  <h3 class="font-bold">Chatroom</h3>
                  <p class="text-sm text-gray-400">2010</p>
                </div>
              </div>

              <div class="flex items-center gap-4 p-2 hover:bg-zinc-800 cursor-pointer rounded">
                <img
                  src="/placeholder.jpg"
                  alt="#chicagoGirl"
                  class="w-16 h-24 object-cover rounded"
                />
                <div>
                  <h3 class="font-bold">#chicagoGirl</h3>
                  <p class="text-sm text-gray-400">2013</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Page;