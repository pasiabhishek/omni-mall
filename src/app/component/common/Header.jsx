import React from "react";
import ActionButton from "./ActionButton";

const Header = () => {
    return (
        <>
            {/* Header */}
            <header className="absolute top-0 left-0 z-10 flex w-full items-center justify-around px-3 py-4 text-white sm:px-5 sm:py-5 md:px-8">

                <div className="brand flex shrink-0 items-center justify-center">
                    <img
                        src="/images/brand-logo.png"
                        alt=""
                        className="w-[20vw] max-w-[120px] min-w-[65px] px-2 scale-110 sm:w-[15vw] sm:px-4 sm:scale-125 md:w-[12vw] md:px-5 md:scale-[1.6]"
                    />
                </div>

                <div className="flex w-[70vw] min-w-0 flex-1 justify-center px-2 sm:px-3 md:w-[70vw] md:flex-none">

                    <form className="flex w-full min-w-0 items-center rounded-2xl border border-white/20 bg-white/10 p-1 py-1 backdrop-blur-md sm:p-2 sm:py-1">

                        <button type="button" className="shrink-0 p-1 py-0 sm:p-1">
                            <i className="fa-solid fa-magnifying-glass p-2 text-[12px]" />
                        </button>

                        <input
                            type="text"
                            placeholder="search"
                            className="w-full min-w-0 border-0 bg-transparent px-2 text-sm font-bold capitalize text-amber-100 outline-0 sm:px-4"
                        />

                    </form>
                </div>

                <div className="nav-actions flex shrink-0 items-center gap-1 sm:gap-2 md:gap-4">

                    <ActionButton
                        name="search"
                        icon="fa-regular fa-circle-user"
                    />

                    <ActionButton
                        name="like"
                        icon="fa-regular fa-heart"
                    />

                    <ActionButton
                        name="notifications"
                        icon="fa-regular fa-bell"
                    />
                </div>
            </header>
        </>
    );
};

export default Header;
