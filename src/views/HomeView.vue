<template>
    <div class="p-5 mt-5">
        <p class="text-5xl text-center uppercase font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-red-400 to-yellow-600"> My Todo App</p>

            <section class="flex justify-center items-center gap-5 mx-auto w-2/4">
            <input 
                type="text"
                v-model="entry"
                class="my-10 p-3 outline-none rounded-lg w-full focus:bg-slate-200"
                placeholder="I need to ..."
                @keydown.enter="submitEntry"
            >
            <button 
                class="bg-red-400 uppercase text-white p-3 rounded-2xl text-lg font-extrabold active:transition-all active:translate-y-1 duration-500 hover:bg-red-300"
                @click="submitEntry"
                >Add</button>
            </section>

            <div class="mx-auto mt-5 p-5 bg-slate-100 w-2/3 rounded-lg">
            <ListEntries />
            </div>
    </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import { defineAsyncComponent } from '@vue/runtime-core';
import useEntry from '@/composable/useEntriy';

export default {
    components: { 
        ListEntries : defineAsyncComponent( () => import('../components/ListEntries.vue'))
     },

    setup() {
        const entry = ref(null);

        const { addEntry } = useEntry()

        const submitEntry = () => {
            addEntry(entry.value)
            entry.value = null
        }

        return {
            entry,

            submitEntry
        };
    },
}
</script>
