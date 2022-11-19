<template>
    <div class="container">
        <h2>
            <span>To Do</span>
            <span class="mask-num">{{ needDoList.length }}</span>
        </h2>
        <ul class="mask-list">
            <li v-for="(mask, index) in needDoList" :key="mask.id">
                <input type="checkbox" @change="doCheck(index, 'need')" />
                <span @click="$router.push(`/todo/${mask.id}`)">{{
                    mask.title
                }}</span>
                <button class="btn-remove" @click="removeMask(index, 'need')">
                    Remove
                </button>
            </li>
        </ul>
        <h2>
            <span>Done</span>
            <span class="mask-num">{{ completeList.length }}</span>
        </h2>
        <ul class="mask-list complete-list">
            <li v-for="(mask, index) in completeList" :key="mask.id">
                <input
                    type="checkbox"
                    checked
                    @change="doCheck(index, 'complete')"
                />
                <span @click="$router.push(`/todo/${mask.id}`)">{{
                    mask.title
                }}</span>
                <button
                    class="btn-remove"
                    @click="removeMask(index, 'complete')"
                >
                    Remove
                </button>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'ToDoList',
    props: ['doCheck', 'removeMask', 'needDoList', 'completeList'],
};
</script>
