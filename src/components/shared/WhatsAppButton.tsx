"use client";

export function WhatsAppButton() {
  const whatsappUrl =
    "https://wa.me/61426887862?text=Hi%20HaulageOps%20team%2C%20I'd%20like%20to%20learn%20more%20about%20pricing%20and%20platform%20features%20for%20our%20fleet.";

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with HaulageOps on WhatsApp"
      className="fixed bottom-6 left-6 z-40 group flex items-center gap-2.5 bg-[#25D366] hover:bg-[#20ba5a] text-white px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 active:scale-95 select-none"
    >
      <div className="relative flex items-center justify-center">
        <svg
          viewBox="0 0 24 24"
          width="22"
          height="22"
          fill="currentColor"
          className="shrink-0"
        >
          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.698c.99.54 1.787.818 2.796.818 3.179 0 5.766-2.587 5.766-5.767.001-3.18-2.585-5.766-5.766-5.766zm9.969 5.766c0 5.508-4.482 9.99-9.969 9.99-1.748 0-3.381-.453-4.81-1.246l-5.221 1.368 1.396-5.093c-.901-1.493-1.424-3.242-1.424-5.019 0-5.508 4.482-9.99 9.969-9.99 5.487 0 9.969 4.482 9.969 9.99z" />
        </svg>
        <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-white ring-2 ring-[#25D366] animate-pulse" />
      </div>
      <div className="hidden sm:flex flex-col text-left pr-1">
        <span className="text-[10px] font-bold uppercase tracking-wider text-green-100 leading-none">
          Ops Online
        </span>
        <span className="text-xs font-bold text-white leading-tight mt-0.5">
          Chat on WhatsApp
        </span>
      </div>
    </a>
  );
}
