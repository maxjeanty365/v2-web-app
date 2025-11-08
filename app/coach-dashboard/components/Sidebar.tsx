export default function Sidebar() {
  return (
    <aside className="flex flex-col w-64 bg-card-light dark:bg-card-dark border-r border-border-light dark:border-border-dark p-4 shrink-0">
      <div className="flex items-center gap-3 px-2 mb-6">
        <span className="material-symbols-outlined text-primary text-3xl">chess</span>
        <h1 className="font-bold text-xl text-text-primary-light dark:text-text-primary-dark">
          ChessCoach
        </h1>
      </div>

      <nav className="flex-1 flex flex-col gap-1">
        {[
          { icon: "dashboard", label: "Overview" },
          { icon: "inbox", label: "Requests" },
          { icon: "groups", label: "Students" },
          { icon: "edit_square", label: "Lesson Builder" },
          { icon: "calendar_today", label: "Schedule" },
          { icon: "payments", label: "Earnings" },
          { icon: "account_circle", label: "Profile" },
          { icon: "settings", label: "Settings" },
        ].map((item, idx) => (
          <a
            key={idx}
            href="#"
            className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
              idx === 0
                ? "bg-primary/10 text-primary"
                : "text-text-secondary-light dark:text-text-secondary-dark hover:bg-gray-100 dark:hover:bg-white/5"
            }`}
          >
            <span className="material-symbols-outlined">{item.icon}</span>
            {item.label}
          </a>
        ))}
      </nav>

      <div className="mt-auto">
        <div className="border-t border-border-light dark:border-border-dark my-2" />
        <div className="flex items-center gap-3 p-2">
          <div
            className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
            style={{
              backgroundImage:
                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCxbESDKJEQG8zSEE4O-6gw1zjYt2iYi7Dz5LtSCJfriz4sk6alC7WF1p-iP9KIY7QnfO_p50BUAyilyo9eZ_xN47I-mejmQYiE7BJR0h7nzRB9F8jNjsLleDJJCyKgy988BbDUxhlfQ-D6PFmzLNEDEJef214OXB7KsacftMbh42sD6NYryYssIyRvErKxDO3-Y50Yr3W75aYgZcYziUyV8joKRnJKqHJc1_MYkDppBLuHJ5Dj5RuLnvpIDXLhuz102Vj9KMlBv6px')",
            }}
          />
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
  );
}
