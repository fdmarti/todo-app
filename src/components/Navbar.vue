<template>
    <nav class="p-4 flex justify-between bg-stone-300 shadow-lg">
        <div class="flex gap-x-5">
            <router-link 
                :to="{name : 'home'}"
                class="text-xl font-semibold uppercase"
            > Home </router-link>

            <router-link 
                :to="{name : 'about'}"
                class="text-xl font-semibold uppercase"
            > About </router-link>
        </div>
        <div>
            <span class="text-xl font-semibold uppercase">Tudu App</span>
        </div>
    </nav>
</template>

<script>
export default {

}
</script>