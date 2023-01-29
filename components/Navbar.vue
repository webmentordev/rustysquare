<template>
    <nav class="fixed top-0 left-0 w-full py-2 px-4 z-50">
        <div class="max-w-4xl m-auto py-2 px-3 flex items-center justify-between bg-black bg-opacity-30 backdrop-blur-md rounded-md">
            <NuxtLink to="/">
                <img src="https://files.facepunch.com/lewis/1b2911b1/rust-marque.svg" alt="Rust Logo" />
            </NuxtLink>
            <ul class="flex items-center text-white">
                <li class="link inline-block mx-4"><NuxtLink to="/">Home</NuxtLink></li>
                <li class="link inline-block mx-4"><NuxtLink to="#">About</NuxtLink></li>
                <li class="link inline-block mx-4"><NuxtLink to="/#rules">Rules</NuxtLink></li>
                <li class="link inline-block mx-4"><NuxtLink to="https://app.gpay.io/store/rustysquare" target="_blank">Donation</NuxtLink></li>
                <li class="link inline-block ml-4 px-5 py-2 bg-main text-white"><NuxtLink to="https://discord.gg/e9kbXcHBjN" target="_blank" rel="nofollow">Discord</NuxtLink></li>
            </ul>
        </div>
    </nav>
</template>