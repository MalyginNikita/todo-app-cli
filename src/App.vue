<template>
    <div id="app">
        <Header :add-task="addTask"></Header>
        <router-view
            :do-check="doCheck"
            :remove-mask="removeMask"
            :need-do-list="needDoList"
            :complete-list="completeList"
        ></router-view>
    </div>
</template>

<script>
import ToDoList from './components/ToDoList.vue';
import Header from './components/Header.vue';

export default {
    name: 'App',
    components: {
        ToDoList,
        Header,
    },
    data() {
        return {
            needDoList: [],
            completeList: [],
        };
    },
    methods: {
        doCheck(index, type) {
            if (type === 'need') {
                const completeMask = this.needDoList.splice(index, 1);
                this.completeList.push(...completeMask);
            } else {
                const noCompleteMask = this.completeList.splice(index, 1);
                this.needDoList.push(...noCompleteMask);
            }
        },
        removeMask(index, type) {
            const toDoList =
                type === 'need' ? this.needDoList : this.completeList;
            toDoList.splice(index, 1);
        },
        addTask(value) {
            if (value === '') {
                return;
            }
            this.needDoList.push({
                title: value,
                id: Date.now().toString(),
            });
            //this.value = '';
        },
    },
};
</script>
