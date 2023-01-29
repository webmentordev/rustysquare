<template>
    <nav class="fixed top-0 left-0 w-full py-2 px-4 z-50">
        <div class="max-w-4xl m-auto py-2 px-3 flex items-center justify-between bg-black bg-opacity-30 backdrop-blur-md rounded-md">
            <NuxtLink to="/">
                <img src="https://files.facepunch.com/lewis/1b2911b1/rust-marque.svg" alt="Rust Logo" />
            </NuxtLink>
            <ul class="flex items-center text-white 530px:hidden">
                <li class="link inline-block mx-4"><NuxtLink to="/">Home</NuxtLink></li>
                <li class="link inline-block mx-4"><NuxtLink to="#">About</NuxtLink></li>
                <li class="link inline-block mx-4"><NuxtLink to="/#rules">Rules</NuxtLink></li>
                <li class="link inline-block mx-4"><NuxtLink to="https://app.gpay.io/store/rustysquare" target="_blank">Donation</NuxtLink></li>
                <li class="link inline-block ml-4 px-5 py-2 bg-main text-white"><NuxtLink to="https://discord.gg/e9kbXcHBjN" target="_blank" rel="nofollow">Discord</NuxtLink></li>
            </ul>
            <ul class="hidden 530px:block" @click="showNavbar = !showNavbar">
                <li class="h-[2px] w-[60px] my-2 bg-light-gray"></li>
                <li class="h-[2px] w-[60px] my-2 bg-light-gray"></li>
                <li class="h-[2px] w-[60px] my-2 bg-light-gray"></li>
            </ul>
        </div>
        <div class="fixed w-full top-0 left-0 h-screen bg-opacity-70 bg-black backdrop-blur-md z-40" @click="showNavbar = !showNavbar" v-if="showNavbar">
            <div class="h-full w-full text-center flex justify-center items-center">
                <ul class="flex flex-col text-white">
                    <li class="text-2xl mb-3 link inline-block"><NuxtLink to="/">Home</NuxtLink></li>
                    <li class="text-2xl mb-3 link inline-block"><NuxtLink to="#">About</NuxtLink></li>
                    <li class="text-2xl mb-3 link inline-block"><NuxtLink to="/#rules">Rules</NuxtLink></li>
                    <li class="text-2xl mb-3 link inline-block"><NuxtLink to="https://app.gpay.io/store/rustysquare" target="_blank">Donation</NuxtLink></li>
                    <li class="link inline-block px-5 py-2 bg-main text-white"><NuxtLink to="https://discord.gg/e9kbXcHBjN" target="_blank" rel="nofollow">Discord</NuxtLink></li>
                </ul>
            </div>
        </div>
    </nav>
    
</template>

<script>
    export default{
        data(){
            return {
                showNavbar: false
            }
        }
    }
</script>