export function Footer() {
    return (
        <footer className="relative z-10 w-full bg-black py-12 border-t border-zinc-900 text-center text-zinc-600 font-light text-[10px] font-syncopate tracking-[0.3em] uppercase">
            <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
                <p>© {new Date().getFullYear()} DAKOTA WITHTHEHAT</p>
                <p>THE VOID IS ALWAYS LISTENING</p>
            </div>
        </footer>
    );
}
