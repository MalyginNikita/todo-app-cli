<template>
    <ToDoList
        :do-check="doCheck"
        :remove-mask="removeMask"
        :need-do-list="needDoList"
        :complete-list="completeList"
    ></ToDoList>
</template>

<script>
import ToDoList from '../components/ToDoList.vue';

export default {
    name: 'Home',
    props: ['doCheck', 'removeMask', 'needDoList', 'completeList'],
    components: { ToDoList },
};
</script>
