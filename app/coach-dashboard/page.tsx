export default function CoachDashboard() {
  return (
    <>
      <div className="flex min-h-screen">
        <aside className="flex flex-col w-64 bg-card-light dark:bg-card-dark border-r border-border-light dark:border-border-dark p-4 shrink-0">
          <div className="flex items-center gap-3 px-2 mb-6">
            <span className="material-symbols-outlined text-primary text-3xl">
              chess
            </span>
            <h1 className="font-bold text-xl text-text-primary-light dark:text-text-primary-dark">
              ChessCoach
            </h1>
          </div>
          <nav className="flex-1 flex flex-col gap-1">
            <a className="flex items-center gap-3 px-3 py-2 rounded-lg bg-primary/10 text-primary" href="#">
              <span className="material-symbols-outlined">dashboard</span>
              <p className="text-sm font-medium">Overview</p>
            </a>
            <a className="flex items-center gap-3 px-3 py-2 rounded-lg text-text-secondary-light dark:text-text-secondary-dark hover:bg-gray-100 dark:hover:bg-white/5 transition-colors" href="#">
              <span className="material-symbols-outlined">inbox</span>
              <p className="text-sm font-medium">Requests</p>
            </a>
            <a className="flex items-center gap-3 px-3 py-2 rounded-lg text-text-secondary-light dark:text-text-secondary-dark hover:bg-gray-100 dark:hover:bg-white/5 transition-colors" href="#">
              <span className="material-symbols-outlined">groups</span>
              <p className="text-sm font-medium">Students</p>
            </a>
            <a className="flex items-center gap-3 px-3 py-2 rounded-lg text-text-secondary-light dark:text-text-secondary-dark hover:bg-gray-100 dark:hover:bg-white/5 transition-colors" href="#">
              <span className="material-symbols-outlined">edit_square</span>
              <p className="text-sm font-medium">Lesson Builder</p>
            </a>
            <a className="flex items-center gap-3 px-3 py-2 rounded-lg text-text-secondary-light dark:text-text-secondary-dark hover:bg-gray-100 dark:hover:bg-white/5 transition-colors" href="#">
              <span className="material-symbols-outlined">calendar_today</span>
              <p className="text-sm font-medium">Schedule</p>
            </a>
            <a className="flex items-center gap-3 px-3 py-2 rounded-lg text-text-secondary-light dark:text-text-secondary-dark hover:bg-gray-100 dark:hover:bg-white/5 transition-colors" href="#">
              <span className="material-symbols-outlined">payments</span>
              <p className="text-sm font-medium">Earnings</p>
            </a>
            <a className="flex items-center gap-3 px-3 py-2 rounded-lg text-text-secondary-light dark:text-text-secondary-dark hover:bg-gray-100 dark:hover:bg-white/5 transition-colors" href="#">
              <span className="material-symbols-outlined">account_circle</span>
              <p className="text-sm font-medium">Profile</p>
            </a>
            <a className="flex items-center gap-3 px-3 py-2 rounded-lg text-text-secondary-light dark:text-text-secondary-dark hover:bg-gray-100 dark:hover:bg-white/5 transition-colors" href="#">
              <span className="material-symbols-outlined">settings</span>
              <p className="text-sm font-medium">Settings</p>
            </a>
          </nav>
          <div className="mt-auto">
            <div className="border-t border-border-light dark:border-border-dark my-2"></div>
            <div className="flex items-center gap-3 p-2">
              <div
                className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
                data-alt="User profile picture of Magnus C."
                style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCxbESDKJEQG8zSEE4O-6gw1zjYt2iYi7Dz5LtSCJfriz4sk6alC7WF1p-iP9KIY7QnfO_p50BUAyilyo9eZ_xN47I-mejmQYiE7BJR0h7nzRB9F8jNjsLleDJJCyKgy988BbDUxhlfQ-D6PFmzLNEDEJef214OXB7KsacftMbh42sD6NYryYssIyRvErKxDO3-Y50Yr3W75aYgZcYziUyV8joKRnJKqHJc1_MYkDppBLuHJ5Dj5RuLnvpIDXLhuz102Vj9KMlBv6px")' }}
              ></div>
              <div className="flex flex-col">
                <h1 className="font-semibold text-sm text-text-primary-light dark:text-text-primary-dark">
                  Magnus C.
                </h1>
                <p className="font-normal text-xs text-text-secondary-light dark:text-text-secondary-dark">
                  Grandmaster
                </p>
              </div>
            </div>
          </div>
        </aside>
        <main className="flex-1 p-6">
          <div className="w-full max-w-7xl mx-auto flex flex-col gap-6">
            <div className="flex flex-wrap justify-between gap-3">
              <h1 className="text-3xl font-bold leading-tight tracking-tight">
                Overview
              </h1>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-3 flex flex-col p-5 bg-card-light dark:bg-card-dark rounded-xl shadow-sm border border-border-light/50 dark:border-border-dark/50">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div className="flex flex-col">
                    <h2 className="text-lg font-semibold">Earnings Snapshot</h2>
                    <div className="flex items-center gap-1 p-1 rounded-lg bg-background-light dark:bg-background-dark mt-3">
                      <button className="px-4 py-1.5 text-sm font-medium text-text-secondary-light dark:text-text-secondary-dark rounded-md hover:bg-white/60 dark:hover:bg-card-dark/60 transition-colors">
                        This week
                      </button>
                      <button className="px-4 py-1.5 text-sm font-medium text-text-secondary-light dark:text-text-secondary-dark rounded-md hover:bg-white/60 dark:hover:bg-card-dark/60 transition-colors">
                        Last month
                      </button>
                      <button className="px-4 py-1.5 text-sm font-medium text-white bg-primary rounded-md shadow-sm">
                        This month
                      </button>
                    </div>
                  </div>
                  <div className="flex flex-col items-end">
                    <p className="text-xs text-text-secondary-light dark:text-text-secondary-dark">
                      Monthly Earnings
                    </p>
                    <p className="text-3xl font-semibold tracking-tight">
                      $1,450
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-end mt-auto pt-4">
                  <a className="text-sm font-medium text-primary hover:underline" href="#">
                    View full earnings →
                  </a>
                </div>
              </div>
              <div className="flex flex-col p-6 bg-card-light dark:bg-card-dark rounded-xl shadow-sm border border-border-light/50 dark:border-border-dark/50">
                <div className="flex flex-col">
                  <h2 className="text-lg font-semibold">Students Overview</h2>
                  <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark mt-1">
                    12 total students
                  </p>
                </div>
                <div className="grid grid-cols-3 gap-x-4 gap-y-6 mt-4 flex-1">
                  <div className="flex flex-col items-center text-center">
                    <div className="relative">
                      <img
                        alt="Anna K."
                        className="rounded-full size-10 border-2 border-primary"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuByZlJMpusUqxpRT5spBURA09tt7OFj-jNHo1PswdsJSYJXLUxkfi62YTHWoOs2p3Wl95tHqsVz74UZTZNly-1OP40LmcyMZh_d19r8fXlWetTaVeHKDxk7sWkzgAjWKDcXEM-Pu9_1FTAz-GX7lSBEHlR-d-0np_XYdqhXyrnusd3QN_GDqcN0qDvTFevsQCIHRwbOWf4oEjow8D-v3ANG1iCiyxqVurPyDw_2OUnRrmCtY2gzi2CYp1iyD9ugyEQTqJy0PtiAjPi7"
                      />
                      <span className="absolute bottom-0 right-0 block size-3 bg-green-500 rounded-full border-2 border-card-light dark:border-card-dark"></span>
                    </div>
                    <p className="text-sm font-medium mt-2 truncate">Anna K.</p>
                    <p className="text-xs text-text-secondary-light dark:text-text-secondary-dark">
                      Active now
                    </p>
                  </div>
                  <div className="flex flex-col items-center text-center">
                    <div className="relative">
                      <img
                        alt="Mark L."
                        className="rounded-full size-10 border-2 border-primary"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCZJRglW0U4USLgOzVg1F_gaOs7uIK7dpzLM-8soh4ENA4dkk6G8h-MWr4-xiNKV7hm6eEN2RvIaZchFA14ZciqWzohKJBk7BZYh3J2PvKMx7z4GYQbxN8YH2O7aXNp8kHcyPVsrXNzGEzzQLIT0r8tWBDQn-7CdLzNqKuRZdoV5Zz4hwBis8ZFrqaD7lenid_ms1QPYOio8907TJsbWt0UptPcfe7ZgMbB8bZbw0CeklfQWBLO1rKbMqSeGKXwT5wEJ4wfUFJnT24l"
                      />
                      <span className="absolute bottom-0 right-0 block size-3 bg-green-500 rounded-full border-2 border-card-light dark:border-card-dark"></span>
                    </div>
                    <p className="text-sm font-medium mt-2 truncate">Mark L.</p>
                    <p className="text-xs text-text-secondary-light dark:text-text-secondary-dark">
                      Active 2h ago
                    </p>
                  </div>
                  <div className="flex flex-col items-center text-center">
                    <div className="relative">
                      <img
                        alt="Ivan P."
                        className="rounded-full size-10 border-2 border-primary"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDyrx7SwGTYJVHet-xeycqBk1-9XH1-RRXQR-0-3ZnYLqoxRT2O2EUwFvvp6rHbM7JG8bmkzR066D_VhEd6DbRO67Rp3S7VmQySjF4Ph1ceNcaNVP5QOgHf3B1-g2pcIxwTFEzgGEKUL_Ljc2C_NlvvMIXgWlo7UYc33atIkMsR-7rLAL30zszKvdcnFlwtA1cpNlng8eTqCsL-8givVXzJ4Z4Pt5gtNwI8wbLrgT9JB9PnnYLP4-pLnOkVj28afFb8wQOYW0Ydlc_O"
                      />
                      <span className="absolute bottom-0 right-0 block size-3 bg-green-500 rounded-full border-2 border-card-light dark:border-card-dark"></span>
                    </div>
                    <p className="text-sm font-medium mt-2 truncate">Ivan P.</p>
                    <p className="text-xs text-text-secondary-light dark:text-text-secondary-dark">
                      Active 8h ago
                    </p>
                  </div>
                  <div className="flex flex-col items-center text-center">
                    <div className="relative">
                      <div className="flex items-center justify-center rounded-full size-10 border-2 border-gray-300 dark:border-gray-600 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 font-bold">
                        <span>S</span>
                      </div>
                      <span className="absolute bottom-0 right-0 block size-3 bg-gray-400 rounded-full border-2 border-card-light dark:border-card-dark"></span>
                    </div>
                    <p className="text-sm font-medium mt-2 truncate">Sarah J.</p>
                    <p className="text-xs text-text-secondary-light dark:text-text-secondary-dark">
                      Inactive
                    </p>
                  </div>
                  <div className="flex flex-col items-center text-center">
                    <div className="relative">
                      <img
                        alt="David C."
                        className="rounded-full size-10 border-2 border-primary"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBLXa-lrjF1qAcx08POzjBA6oaZIn35qtw8BEBvIWVl7VjF2d2RL9LQ7mYqddqbm-EEVE8b9sFMVCSXGTt1h7vFP4nfVJaOW8eh211JEH6NJjyrKUg6HleCp7xUxF7LNRGHnNeYCiMSIJD68QOeIAUn3bvWsNb1lCymjBKB10NY0VLttuZ6t6a15YKcyDABDXLVyvEFz5ssqwuOBzUzhcnX1qea7aEni61980pxLR2qkwuHdWKbDbTNHMv_jGLjCUcjYo7t3bScjK-w"
                      />
                      <span className="absolute bottom-0 right-0 block size-3 bg-green-500 rounded-full border-2 border-card-light dark:border-card-dark"></span>
                    </div>
                    <p className="text-sm font-medium mt-2 truncate">David C.</p>
                    <p className="text-xs text-text-secondary-light dark:text-text-secondary-dark">
                      Active 1d ago
                    </p>
                  </div>
                  <div className="flex flex-col items-center text-center">
                    <div className="relative">
                      <div className="flex items-center justify-center rounded-full size-10 border-2 border-gray-300 dark:border-gray-600 bg-pink-100 dark:bg-pink-900 text-pink-600 dark:text-pink-300 font-bold">
                        <span>M</span>
                      </div>
                      <span className="absolute bottom-0 right-0 block size-3 bg-gray-400 rounded-full border-2 border-card-light dark:border-card-dark"></span>
                    </div>
                    <p className="text-sm font-medium mt-2 truncate">Maria G.</p>
                    <p className="text-xs text-text-secondary-light dark:text-text-secondary-dark">
                      Inactive
                    </p>
                  </div>
                </div>
                <div className="mt-auto pt-4 text-center">
                  <a className="text-sm font-medium text-primary hover:underline" href="#">
                    View all students →
                  </a>
                </div>
              </div>
              <div className="lg:col-span-2 flex flex-col p-6 bg-card-light dark:bg-card-dark rounded-xl shadow-sm border border-border-light/50 dark:border-border-dark/50">
                <div className="flex items-center gap-2 mb-4">
                  <span className="material-symbols-outlined text-text-secondary-light dark:text-text-secondary-dark">
                    calendar_add_on
                  </span>
                  <h2 className="text-lg font-semibold">Recent Bookings</h2>
                </div>
                <div className="flex flex-col flex-1">
                  <div className="flex items-center justify-between py-3 border-b border-border-light/50 dark:border-border-dark/50">
                    <div className="flex flex-col">
                      <p className="font-semibold text-sm">Anna K.</p>
                      <p className="text-xs text-text-secondary-light dark:text-text-secondary-dark">
                        Booked 'Opening Theory'
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium text-green-600 dark:text-green-400">
                        +$60.00
                      </p>
                      <p className="text-xs text-text-secondary-light dark:text-text-secondary-dark">
                        2 hrs ago
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between py-3 border-b border-border-light/50 dark:border-border-dark/50">
                    <div className="flex flex-col">
                      <p className="font-semibold text-sm">Mark L.</p>
                      <p className="text-xs text-text-secondary-light dark:text-text-secondary-dark">
                        Booked 'Endgame Strategy'
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium text-green-600 dark:text-green-400">
                        +$45.00
                      </p>
                      <p className="text-xs text-text-secondary-light dark:text-text-secondary-dark">
                        Yesterday
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between py-3">
                    <div className="flex flex-col">
                      <p className="font-semibold text-sm">Ivan P.</p>
                      <p className="text-xs text-text-secondary-light dark:text-text-secondary-dark">
                        Booked 'Game Review'
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium text-green-600 dark:text-green-400">
                        +$60.00
                      </p>
                      <p className="text-xs text-text-secondary-light dark:text-text-secondary-dark">
                        2 days ago
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-auto pt-2">
                  <a className="text-sm font-medium text-primary hover:underline" href="#">
                    View all bookings →
                  </a>
                </div>
              </div>
              <div className="lg:col-span-3 flex flex-col bg-card-light dark:bg-card-dark rounded-xl shadow-sm p-6 border border-border-light/50 dark:border-border-dark/50">
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-text-secondary-light dark:text-text-secondary-dark">
                      schedule
                    </span>
                    <h2 className="text-lg font-semibold">Upcoming Lessons</h2>
                  </div>
                  <a className="text-sm font-medium text-primary hover:underline" href="#">
                    See full schedule →
                  </a>
                </div>
                <div className="flex flex-col">
                  <div className="group flex items-center py-4 border-b border-border-light/50 dark:border-border-dark/50">
                    <div className="flex-1 pr-4">
                      <p className="font-semibold text-sm text-text-primary-light dark:text-text-primary-dark">
                        Opening Theory Deep Dive
                      </p>
                      <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark">
                        with Anna K.
                      </p>
                      <p className="text-xs text-text-secondary-light/80 dark:text-text-secondary-dark/80 mt-1">
                        Today at 3:00 PM
                      </p>
                    </div>
                    <span className="text-xs font-medium bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-200 px-2 py-1 rounded-full whitespace-nowrap">
                      60 min
                    </span>
                  </div>
                  <div className="group flex items-center py-4 border-b border-border-light/50 dark:border-border-dark/50">
                    <div className="flex-1 pr-4">
                      <p className="font-semibold text-sm text-text-primary-light dark:text-text-primary-dark">
                        Endgame Strategy Session
                      </p>
                      <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark">
                        with Mark L.
                      </p>
                      <p className="text-xs text-text-secondary-light/80 dark:text-text-secondary-dark/80 mt-1">
                        Tomorrow at 11:00 AM
                      </p>
                    </div>
                    <span className="text-xs font-medium bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-200 px-2 py-1 rounded-full whitespace-nowrap">
                      45 min
                    </span>
                  </div>
                  <div className="group flex items-center py-4">
                    <div className="flex-1 pr-4">
                      <p className="font-semibold text-sm text-text-primary-light dark:text-text-primary-dark">
                        Game Review
                      </p>
                      <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark">
                        with Ivan P.
                      </p>
                      <p className="text-xs text-text-secondary-light/80 dark:text-text-secondary-dark/80 mt-1">
                        Fri, 24 Nov at 5:00 PM
                      </p>
                    </div>
                    <span className="text-xs font-medium bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-200 px-2 py-1 rounded-full whitespace-nowrap">
                      60 min
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
