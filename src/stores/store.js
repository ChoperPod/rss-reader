import { defineStore } from "pinia";

export const useFeedStore = defineStore({
    id: 'feedStore',
    state: () => {
        return {
            // informacion de los RSS
            sources: [
                {
                    id: crypto.randomUUID(),
                    name: 'Mozila Hacks',
                    url: "http://hacks.mozila.org/feed"
                }
            ],

            // el feed actual
            current: {
                source: null,
                items: null,
            }
        }
    },
    //acciones
    actions: {
        async loadSource(source) {
            const response = await fetch(source.url);
            let text = await response.text();
            text = text.replace(/content:encoded/g, 'content');
        },
        async registerNewSource(url) {

        }
    }
})