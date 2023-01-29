// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@nuxtjs/tailwindcss',
        'nuxt-icon'
    ],
    app: {
        head: {
            title: "RustySquare - PvP Rust Servers",
            meta: [
                { name: "description", content: "RustySquare PVP Server is a high-performance, action-packed Rust server that offers players a thrilling PVP experience. With a dedicated team of experienced administrators and a variety of custom plugins, RustySquare ensures that players have a fair and enjoyable experience. Our server is optimized for low-latency gameplay and features a variety of custom maps and events to keep things interesting. Whether you're a seasoned veteran or a newcomer to the game, RustySquare is the perfect destination for your Rust PVP needs." }
            ],
            link: [
                {
                    rel: "shortcut icon", href: "/_nuxt/assets/images/rs_logo.png"
                }
            ]
        }
    }
})
