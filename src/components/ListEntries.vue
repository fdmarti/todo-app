<template>
    <table class="w-full">
        <thead class="bg-orange-300 h-14 shadow uppercase  rounded-full">
            <tr>
                <th>#</th>
                <th class="w-2/3">Name</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody v-if="entries.length > 0">
            <tr v-for="(entrie,index) in entries" :key="entrie.id" class="text-center border-b h-14 ">
                <td>{{index+1}}</td>
                <td :class="taskDone(entrie.state)">{{entrie.name}}</td>
                <td class="flex justify-center gap-3 mt-2">
                    <i class='bx bxs-checkbox-checked bx-md cursor-pointer' @click="changeStateEntry(entrie.id)" v-if="entrie.state" ></i>
                    <i class='bx bx-checkbox bx-md cursor-pointer' @click="changeStateEntry(entrie.id)" v-else ></i>
                    <i class='bx bxs-trash bx-md cursor-pointer text-red-500 hover:text-red-600' @click="confirmDeleteEntry(entrie.id)"></i>
                </td>
            </tr>
        </tbody>
        <tbody v-else>
            <tr class="text-center">
                <td colspan="4" class="p-5">
                    No tasks
                </td>
            </tr>
        </tbody>
    </table>
</template>

<script>import useEntry from "@/composable/useEntriy"
import { computed } from '@vue/runtime-core'
export default {

    setup(){

        const { getEntries, entries, confirmDeleteEntry, changeStateEntry } = useEntry()

        getEntries()

        const taskDone = ( state ) => state ? 'line-through italic' : ''

        return {

            entries : computed( () => entries()),
            confirmDeleteEntry,
            changeStateEntry,
            taskDone
        }

    }
}
</script>